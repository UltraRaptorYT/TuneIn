1. Clone project
2. Run Docker Build Command

```bash
docker build -t tunein .
```

3. Run Docker Run Command

```bash
docker run -it -d -p 5000:5000 tunein
```

# Run Locally

1. Make .env File

```

```

2. Get Pipenv File

```bash
pip install pipenv
```

3. Install Pipenv install dependencies

```bash
pipenv install
```

4. Run app.py

```bash
pipenv run python app.py
```

5. Endpoint Example (URL: http://127.0.0.1:5000/generateMusic)

Request Body

```json
{
  "musicType": "Pop",
  "promptTopic": "Evolution"
}
```

Output

```json
{
  "musicURL": "https://cdn.discordapp.com/attachments/1201012351206432782/1215013720502181898/chirp.mp4?ex=65fb34b4&is=65e8bfb4&hm=90e37ff10951342099c2a35d3501cef40c1aa98005fe8c99595f9cf0725862a9&"
}
```
