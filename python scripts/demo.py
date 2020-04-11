from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import request
from base64 import b64decode

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/project"
mongo = PyMongo(app)
CORS(app)


@app.route("/")
def hello():
		
		return jsonify({'text':'User ssfully'})
	
@app.route("/employees",methods=['POST'])
def demo():
		_json = request.json
		_name = _json['name']
		
		id = mongo.db.user.insert({'name': _name})
		return jsonify({'text':'Hello!'})
@app.route("/addclient",methods=['POST'])
def addclient():
		_json = request.json
		name=_json['name']
		client_id=_json['clientid']
		tp_rate =_json['tp_rate']
		sp_rate=_json['sp_rate']
		dp_rate=_json['dp_rate']
		akd_rate=_json['akd_rate']
		pana_com=_json['pana_com']
		akd_com=_json['akd_com']
		print(name,client_id,tp_rate,sp_rate,dp_rate,akd_rate,pana_com,akd_com)
		id = mongo.db.clientdata.insert({'name':name,'client_id':client_id,'tp_rate':tp_rate,'sp_rate':sp_rate,'dp_rate':dp_rate,'akd_rate':akd_rate,'pana_com':pana_com,'akd_com':akd_com})
		return jsonify({'text':'moxa!'})
@app.route("/adddata",methods=['POST'])
def add():
		_json = request.json
		n1 =_json['1']
		n01 = _json['01']
		n2 =_json['2']
		n02 = _json['02']
		n3 =_json['3']
		n03 = _json['03']
		n4 =_json['4']
		n04 = _json['04']
		n5 =_json['5']
		n05 = _json['05']
		n6 =_json['6']
		n06 = _json['06']                                                                                                         
		n7 =_json['7']                                 
		n07 = _json['07']
		n8 =_json['8']
		n08 = _json['08']
		n9 =_json['9']
		n09 = _json['09']
		n10 =_json['10']
		n010 = _json['010']
		id = mongo.db.sdashboard.insert({'1': n1,'01':n01,'2': n2,'02':n02,'3': n3,'03':n03,'4': n4,'04':n04,'5': n5,'05':n05,'6': n6,'06':n06,'7': n7,'07':n07,'8':n8,'08':n08,'9': n9,'09':n09,'10': n10,'010':n010})
		return jsonify({'text':'moxa!'})
@app.route("/updatedata",methods=['PUT'])
def update():
			_json = request.json
			code = _json['code']
			value=_json['value']
			id = mongo.db.sdashboard.update({"1":code},{'$set':{'01':value}})
			resp = jsonify('User updated successfully!')
			return resp
@app.route("/updateclient",methods=['PUT'])
def updateclient():
			_json = request.json
			objid = _json['id']
			name=_json['name']
			client_id=_json['clientid']
			tp_rate =_json['tp_rate']
			sp_rate=_json['sp_rate']
			dp_rate=_json['dp_rate']
			akd_rate=_json['akd_rate']
			pana_com=_json['pana_com']
			akd_com=_json['akd_com']
			id = mongo.db.clientdata.update({"_id":ObjectId(objid)},{'$set':{'name':name,'client_id':client_id,'tp_rate':tp_rate,'sp_rate':sp_rate,'dp_rate':dp_rate,
			'akd_rate':akd_rate,'akd_com':akd_com,'pana_com':pana_com}})
			resp = jsonify('User updated successfully!')
			return resp
@app.route('/dashboard',methods=['GET'])
def dashboard():
		users = mongo.db.sdashboard.find({})
		
		resp = dumps(users)
		return resp
@app.route('/akdtable',methods=['GET'])
def akdtable():
		users = mongo.db.akdtable.find({})
		
		resp = dumps(users)
		return resp
@app.route('/clients',methods=['GET'])
def clients():
		users = mongo.db.clientdata.find({})
		
		resp = dumps(users)
		return resp
@app.route('/deleteclient/<id>', methods=['DELETE'])
def deleteclient(id):
		
		mongo.db.clientdata.delete_one({'_id': ObjectId(id)})
		resp = jsonify('User deleted successfully!')
		resp.status_code = 200
		return resp
@app.route('/getclient/<id>',methods=['GET'])
def getclient(id):
		user=mongo.db.clientdata.find({'_id':ObjectId(id)})
		resp = dumps(user)
		print(resp)
		return resp






if __name__ == '__main__':
     app.run(port=5002)