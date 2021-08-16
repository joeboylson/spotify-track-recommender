# BORDERLY

import os
import json
import requests

from flask import Flask, request, render_template, Blueprint, redirect
from dotenv import load_dotenv
from urllib.request import urlretrieve
from urllib.parse import urlencode

app = Flask(__name__, template_folder='./dist')
dist_folder = Blueprint(
    'dist', __name__, static_url_path='', static_folder='./dist')
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
    try:
        body_params = {'grant_type': 'client_credentials'}
        url = 'https://accounts.spotify.com/api/token'
        response = requests.post(url, data=body_params,
                                 auth=(CLIENT_ID, CLIENT_SECRET))
        token_raw = json.loads(response.text)
        return token_raw["access_token"]
    except:
        return None


def set_session_genres():
    try:

        result = requests.get(
            url="https://api.spotify.com/v1/recommendations/available-genre-seeds",
            headers=headers,
        )

        data = result.json()
        return data['genres']

    except Exception as e:
        return []


def set_session_markets():
    try:
        result = requests.get(
            url="https://api.spotify.com/v1/markets",
            headers=headers,
        )

        data = result.json()
        return data['markets']

    except Exception as e:
        return []


def search_item(q, type):
    try:
        result = requests.get(
            url="https://api.spotify.com/v1/search",
            headers=headers,
            params={
                "q": q,
                "type": type
            }
        )

        return result.json()

    except Exception as e:
        return []


# --------------------------------------------------------------------------------
# ROUTES
# --------------------------------------------------------------------------------


@app.route('/')
def index():
    ''' GET - returns "index.html" '''

    if (IS_PRODUCTION):
        return render_template('index.html')
    else:
        return "DEVELOPMENT"


@app.route('/api/recommendations')
def get_recommendations():
    try:
        r = requests.get(
            url="https://api.spotify.com/v1/recommendations",
            headers=headers,
            params=request.args
        )

        data = r.json()

        return json.dumps({'success': True, 'message': 'SUCCESS', 'data': data})

    except Exception as e:
        return json.dumps({'success': False, 'message': str(e), 'data': None})


@ app.route('/api/genres')
def get_genres():
    try:
        return json.dumps({'success': True, 'message': 'SUCCESS', 'data': genres})

    except Exception as e:
        return json.dumps({'success': False, 'message': str(e), 'data': None})


@ app.route('/api/markets')
def get_markets():
    try:
        return json.dumps({'success': True, 'message': 'SUCCESS', 'data': markets})

    except Exception as e:
        return json.dumps({'success': False, 'message': str(e), 'data': None})


@ app.route('/api/track')
def search_track():
    query_string = request.args.get('queryString')
    data = search_item(query_string, 'track')

    print(data)

    try:
        return json.dumps({'success': True, 'message': 'SUCCESS', 'data': data["tracks"]})

    except Exception as e:
        return json.dumps({'success': False, 'message': str(e), 'data': None})


@ app.route('/api/artist')
def search_artist():
    query_string = request.args.get('queryString')
    data = search_item(query_string, 'artist')

    try:
        return json.dumps({'success': True, 'message': 'SUCCESS', 'data': data["artists"]})

    except Exception as e:
        return json.dumps({'success': False, 'message': str(e), 'data': None})

@ app.route('/api/client_id')
def get_client_id():
    return json.dumps({'success': True, 'message': 'SUCCESS', 'data': CLIENT_ID})

@ app.route('/create_playlist')
def spotify_auth_callback():
    if IS_PRODUCTION:
        return redirect("/")
    else:
        return redirect("http://localhost:3000/create_playlist")

# --------------------------------------------------------------------------------
# START THE APP
# --------------------------------------------------------------------------------


token = None
headers = None
genres = []
markets = []

if __name__ == '__main__':
    print('::: {}'.format(PORT))

    token = set_session_token()
    headers = {"Authorization": "Bearer {}".format(token)}
    genres = set_session_genres()
    markets = set_session_markets()

    app.run(debug=DEBUG, host='0.0.0.0', port=PORT)
