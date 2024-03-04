FROM python:3.8

WORKDIR /app

COPY . /app


RUN apt-get update && apt-get install -y wget unzip && \
  wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
  apt install -y ./google-chrome-stable_current_amd64.deb && \
  rm google-chrome-stable_current_amd64.deb && \
  apt-get clean

RUN pip install --trusted-host pypi.python.org -r requirements.txt

EXPOSE 5000

CMD gunicorn --bind 0.0.0.0:5000 app:app -t 0
