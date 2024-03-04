import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from dotenv import load_dotenv
import os
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import random

load_dotenv()


app = Flask(__name__)
CORS(app)


@app.route("/")
@cross_origin()
def index():
    return {"message": "Server is working"}


@app.route("/generateMusic", methods=["GET", "POST"])
@cross_origin()
def generateMusic():
    if request.method == 'POST':
        data = request.json
        musicType = data.get('musicType')
        promptTopic = data.get('promptTopic')
        emailEnv = os.environ['DISCORD_EMAIL']
        emailEnvArr = emailEnv.split(",")
        for idx, email in enumerate(emailEnvArr):
            if not musicType:
                return {"message": "Music Type cannot be empty"}
            if not promptTopic:
                return {"message": "Prompt Topic cannot be empty"}
            prompt = f"Create a song about \"{promptTopic}\", make it memorable and educational!"

            chrome_options = Options()
            chrome_options.add_argument("--no-sandbox")
            chrome_options.add_argument("--headless")
            chrome_options.add_argument("--disable-dev-shm-usage")

            driver = webdriver.Chrome(service=Service((ChromeDriverManager().install())), options=chrome_options)

            url = 'https://discordapp.com/login'

            driver.get(url)
            print("GET WEBPAGE")
            # Enter Email
            time.sleep(1)
            emailInput = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, 'email')))
            emailInput.send_keys(email)

            # Enter Password
            time.sleep(1)
            passwordInput = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, 'password')))
            passwordInput.send_keys(os.environ['DISCORD_PASSWORD'])
            passwordInput.send_keys(Keys.ENTER)

            # Enter TuneIn Channel
            try:
                time.sleep(1)
                tuneIn_channel = (
                    WebDriverWait(driver, 10)
                    .until(EC.presence_of_element_located((By.CSS_SELECTOR, '[data-dnd-name="TuneIn"]')))
                    .click()
                )
                print("LOGGED IN")
            except:
                print(f"Account {email} failed to login")
                if idx + 1 < len(emailEnvArr):
                    driver.quit()
                    continue
                else:
                    driver.quit()
                    return {"message": "No more accounts or Account failed to login"}

            # Send Message
            time.sleep(1)
            messageBox = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '[data-slate-node="value"]'))
            )

            # Type Chirp
            messageBox.send_keys("/chirp")

            print("/chirp")
            
            time.sleep(2)
            messageBox.send_keys(Keys.TAB)
            time.sleep(1)
            messageBox.send_keys(Keys.ENTER)

            def getLastMessage():
                chatContainer = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, '[data-list-id="chat-messages"]'))
                )
                time.sleep(1)
                lastMessage = chatContainer.find_element(By.XPATH, './*[last()-1]')
                return lastMessage

            def wait_for_text_to_change(driver, element, target_text):
                def condition(driver):
                    current_text = element.text
                    return target_text in current_text

                wait = WebDriverWait(driver, 7200)
                wait.until(condition)

            # Prompt Chirp for Music Type
            time.sleep(1)
            print("MUSIC PROMPT")
            try:
                musicTypeBox = WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.NAME, 'Describe the type of music'))
                )
            except:
                print("Error - Not Enough Credits")
                if idx + 1 < len(emailEnvArr):
                    driver.quit()
                    continue
                else:
                    driver.quit()
                    return {"message": "Error - Not Enough Credits"}
            time.sleep(1)
            action_chains = ActionChains(driver)
            action_chains.key_down(Keys.CONTROL).send_keys("a").key_up(Keys.CONTROL).perform()
            musicTypeBox.send_keys(musicType)

            # Prompt Chirp to generate GPT Lyrics
            time.sleep(1)
            GPTBox = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.NAME, '...or have ChatGPT make lyrics about:'))
            )
            time.sleep(1)
            GPTBox.send_keys(prompt)
            GPTBox.send_keys(Keys.ENTER)

            print("Wait for Finish")
            lastMessage = getLastMessage()
            contain_target_text = "Finished"
            wait_for_text_to_change(driver, lastMessage, contain_target_text)

            # Get generate videos
            time.sleep(1)
            generated = getLastMessage()
            videoGeneratedArr = generated.find_elements(By.TAG_NAME, "video")
            print("Choosing file")

            finalVideo = random.choice(videoGeneratedArr)
            finalVideoSrc = finalVideo.get_attribute("src")

            time.sleep(1)

            driver.quit()
            return {"musicURL": finalVideoSrc}
    else:
        return {"message": "Server is working"}


if __name__ == "__main__":
    app.run()
