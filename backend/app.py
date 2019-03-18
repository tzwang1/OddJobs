from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return 'Hello World!'

@app.route('/user/<id>', methods=['GET'])
def get_user(id):
    return 'User has id: '.format(id)

@app.route('/user', methods=['POST'])
def post_user():
    print(request.form)
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']

    return 'User was created'

if __name__=="__main__":
    app.run(debug=True, host='0.0.0.0', port=80)