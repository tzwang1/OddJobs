from flask import Flask, request, abort, jsonify
import db

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'Hello World!'

@app.route('/user/<email>', methods=['GET'])
def get_user(email):
    odd_jobs_db = db.get_db()
    user = odd_jobs_db['users'].find_one({'email': email})
    return 'User has id: '.format(email)

@app.route('/user', methods=['POST'])
def post_user():
    request_json = request.get_json()
    if not request_json or 'username' not in request_json or 'password' not in request_json or 'email' not in request_json:
        abort(400)
    
    user_data = {
        'username': request.get_json().get('username'), 
        'password': request.get_json().get('password'), 
        'email': request.get_json('email')
    }

    odd_jobs_db = db.get_db()
    try:
        odd_jobs_db['users'].insert_one(user_data)
    except pymongo.errors.OperationFailure as e:
        abort(400, e.message)
    
    return 'User was created.'
        
if __name__=="__main__":
    app.run(debug=True, host='0.0.0.0', port=80)