import os
import sys
import pytest
import json

from pymongo import MongoClient

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from app import app

@pytest.fixture
def test_db():
    test_db = MongoClient('localhost', 27017)
    return test_db['test_db']

@pytest.fixture
def odd_jobs_app():
    tester = app.test_client()
    return tester

@pytest.fixture
def user_data():
    user = {'username': 'Tom', 'password': '123', 'email': 'tom.pleb@gmail.com'}
    return user

def test_db_connection(test_db):
    assert test_db != None

def test_index(odd_jobs_app):
    response = odd_jobs_app.get('/')
    assert response.status_code == 200
    assert response.data == b'Hello World!'

def test_create_user(odd_jobs_app, user_data):
    response = odd_jobs_app.post('/user', json=user_data)
    assert response.status_code == 200
    assert response.data == b'User was created.'









