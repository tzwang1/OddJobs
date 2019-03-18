import os
import sys
import pytest

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app import app

@pytest.fixture
def auth_app():
    tester = app.test_client()
    return tester

@pytest.fixture
def user_data():
    user = {'username': 'Tom', 'password': '123', 'email': 'tom.pleb@gmail.com'}
    return user

def test_index(auth_app):
    response = auth_app.get('/')
    assert response.status_code == 200
    assert response.data == b'Hello World!'

def test_create_user(auth_app, user_data):
    response = auth_app.post('/user', data=user_data)
    assert response.status_code == 200
    assert response.data == b'User was created'






