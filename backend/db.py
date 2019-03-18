from pymongo import MongoClient

def init_db():
    try:
        client = MongoClient('localhost', 27017)
        odd_jobs_db = client['odd_jobs']

        return odd_jobs_db
    except pymongo.errors.ServerSelectionTimeoutError as err:
        print(err)


