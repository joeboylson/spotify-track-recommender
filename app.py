# BORDERLY

import os
import math
import json
import requests
from flask import Flask, request, redirect, url_for, render_template, send_file, send_from_directory, Blueprint
from dotenv import load_dotenv

app = Flask(__name__, template_folder='./dist')
dist_folder = Blueprint('dist', __name__, static_url_path='', static_folder='./dist')
app.register_blueprint(dist_folder)

# --------------------------------------------------------------------------------
# CONSTANTS / ENV VARIABLES
# --------------------------------------------------------------------------------

DIST_DIRECTORY = "dist"

IS_PRODUCTION = os.environ.get('PYTHON_ENV') == 'PRODUCTION'
DEBUG = True if not IS_PRODUCTION else False
PORT = 5000 if not IS_PRODUCTION else os.environ.get('PORT')

if not IS_PRODUCTION:
  load_dotenv()

CLIENT_ID = os.environ.get('CLIENT_ID')
CLIENT_SECRET = os.environ.get('CLIENT_SECRET')

# --------------------------------------------------------------------------------
# FUNCTIONS
# --------------------------------------------------------------------------------

def set_session_token():
  body_params = {'grant_type' : 'client_credentials'}
  url='https://accounts.spotify.com/api/token'
  response = requests.post(url, data=body_params, auth = (CLIENT_ID, CLIENT_SECRET)) 
  token_raw = json.loads(response.text)
  return token_raw["access_token"]

def set_session_genres():
  try:

    result = requests.get(
        url="https://api.spotify.com/v1/recommendations/available-genre-seeds", 
        headers=headers,
    )

    data = result.json()
    return data['genres']

  except Exception as e:
    return [];

# --------------------------------------------------------------------------------
# ROUTES
# --------------------------------------------------------------------------------


@app.route('/')
def index ():
  ''' GET - returns "index.html" '''

  if (IS_PRODUCTION):
    return render_template('index.html')
  else:
    return "DEVELOPMENT"

@app.route('/api/recommendations')
def get_recommendations():
  try:

    max_popularity = request.args.get('maxPopularity')

    request_data = [
        {
            "tracks": ['5imUTBF35uIoABlV9g9da2'],
            "genres": ['metropopolis'],
            "note": "Phantogram - Falling in Love"
        },
        {
            "tracks": ['0mY5WP4c7eBUfkDy3PIlOA'],
            "genres": [],
            "note": "Tokyo Twilight - Little Things"
        },
        {
            "tracks": ['0aANMVp4NwsIwzgy551294'],
            "genres": [],
            "note": "MOONSTONE"
        },
        {
            "tracks": ['2WfrK7vN1C7ScEauF96AHb', '11P1ofuhfbUdxHCBgTLIiy', '6AYrHFx4DQxdUQeSmAzNYr'],
            "genres": [],
            "note": "TOKiMONSTA"
        },
    ]

    record = request_data[3]

    r = requests.get(
        url="https://api.spotify.com/v1/recommendations", 
        headers=headers,
        params = {
            "seed_tracks": record['tracks'],
            "seed_genres": record['genres'],
            "max_popularity": max_popularity
        }
    )

    data = r.json()
    return json.dumps({'success': True, 'message': 'SUCCESS', 'data': data})

  except Exception as e:
    return json.dumps({'success': False, 'message': str(e), 'data': None})


@app.route('/api/genres')
def get_genres():
  try:
    return json.dumps({'success': True, 'message': 'SUCCESS', 'data': genres})

  except Exception as e:
    return json.dumps({'success': False, 'message': str(e), 'data': None})

# --------------------------------------------------------------------------------
# START THE APP
# --------------------------------------------------------------------------------

token = None
headers = None
genres = []

if __name__ == '__main__':
  print('::: {}'.format(PORT))

  token = set_session_token()
  headers = {"Authorization": "Bearer {}".format(token)}
  genres = set_session_genres()

  app.run(debug=DEBUG, host='0.0.0.0', port=PORT)
