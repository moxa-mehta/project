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
@app.route("/addaccount",methods=['POST'])
def addaccount():
		_json = request.json
		client_id = _json['client']
		bazar = _json['bazar']
		total = _json['total']
		totalpanu = _json['totalpanu']
		totalakd = _json['totalakd']
		valan = _json['valan']
		final = _json['final']
		commission = _json['commission']
		date = _json['date']
		id = mongo.db.account.insert({'bazar': bazar ,'client_id' : client_id ,'total' : total ,'totalpanu' :totalpanu ,'totalakd' : totalakd ,
		'valan' : valan ,'final' :final , 'date' : date , 'commission' : commission})
		return jsonify({'text':'moxa!'})
@app.route("/adddatelist",methods=['POST'])
def adddatelist():
		_json = request.json
		date = _json['date']
		id = mongo.db.datelist.insert({'date' : date})
		return jsonify({'text':'moxa!'})
@app.route("/addhistory",methods=['POST'])
def addhistory():
		_json = request.json
		client_id = _json['client_id']
		bet =_json['bet']
		bet_total =_json['bet_total']
		code = _json['code']
		number = _json['number']
		bazar = _json['bazar']
		sr_no = _json['sr_no']
		id = mongo.db.history.insert({'client_id' : client_id , 'bet' : bet ,'bet_total' : bet_total , 'code' : code , 'number' : number ,'bazar' : bazar ,'sr_no' : sr_no })
		return jsonify({'text':'moxa!'})
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
		id = mongo.db.clientdata.insert({'name':name,'client_id':client_id,'tp_rate':tp_rate,'sp_rate':sp_rate,'dp_rate':dp_rate,'akd_rate':akd_rate,'pana_com':pana_com,'akd_com':akd_com})
		return jsonify({'text':'moxa!'})
@app.route("/addhist",methods=['POST'])
def addhist():
		_json = request.json
		sr_no = _json['sr_no']
		client_id=_json['client_id']
		bazar_id = _json['bazar_id']
		number = _json['number']
		bet = _json['bet']
		type =_json['type']
		id = mongo.db.individualhist.insert({'sr_no':sr_no,'client_id':client_id,'bazar_id':bazar_id,'number':number,'bet':bet,'type' : type})
		return jsonify({'text':'moxa!'})
@app.route("/addclienthistory",methods=['POST'])
def addclienthistory():
		_json = request.json
		client_id=_json['client_id']
		bazar_id = _json['bazar_id']
		pana_total =_json['panu_total']
		akd_total =_json['akd_total']
		total =_json['total']
		id = mongo.db.clienthistory.insert({'client_id': client_id,'bazar_id':bazar_id,'pana_total':pana_total,'akd_total':akd_total,'total':total})
		return jsonify({'text':'moxa!'})
@app.route("/adddata",methods=['POST'])
def add():
		_json = request.json
		bazar = _json['Bazar']
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
		type = _json['type']
		id = mongo.db.sdashboard.insert({'Bazar' : bazar ,'1': n1,'01':n01,'2': n2,'02':n02,'3': n3,'03':n03,'4': n4,'04':n04,'5': n5,'05':n05,'6': n6,'06':n06,'7': n7,'07':n07,'8':n8,'08':n08,'9': n9,'09':n09,'10': n10,'010':n010,'type' : type})
		return jsonify({'text':'moxa!'})

@app.route("/addmultipledata",methods=['POST'])
def addmulti():
		_json = request.json
		tum = _json['tum']
		id = mongo.db.sdashboard.insert_many(tum)
		return jsonify({'text':'moxa!'})

@app.route("/addmultipleakddata",methods=['POST'])
def addmultiakd():
		_json = request.json
		tum = _json['tum']
		id = mongo.db.akdtable.insert_many(tum)
		return jsonify({'text':'moxa!'})
@app.route("/addakddata",methods=['POST'])
def adddata():
		_json = request.json
		akd = _json['akd']
		data = _json['data']
		id = mongo.db.akdtable.insert({'akd': akd,'data':data})
		
		return jsonify({'text':'moxa!'})
@app.route("/updatebet/<bazar_id>",methods=['PUT'])
def updatebet(bazar_id):
			_json = request.json
			code1 = _json['code1']
			value=_json['number']
			code2 = _json['code2']
			bet = _json['bet']
			id = mongo.db.sdashboard.update({code1:value,"Bazar":bazar_id},{'$set':{code2:bet}})
			resp = jsonify('User updated successfully!')
			return resp

@app.route("/updateakdbet/<bazar_id>",methods=['PUT'])
def updateakdbet(bazar_id):
			_json = request.json
			akd = _json['akd']
			data =_json['data']
			id = mongo.db.akdtable.update({"bazar_id":bazar_id,'akd':akd},{'$set':{'data':data}})
			resp = jsonify('User updated successfully!')
			return resp


			
@app.route("/updatedata",methods=['PUT'])
def update():
			_json = request.json

			code = _json['code']
			value=_json['value']
			id = mongo.db.sdashboard.update({"1":code},{'$set':{'01':value}})
			resp = jsonify('User updated successfully!')
			return resp
@app.route("/updateclienthistory/<client_id>/<bazar_id>",methods=['PUT'])
def updateclienthistory(client_id,bazar_id):
			_json = request.json
			total = _json['total']
			pana_total = _json['pana_total']
			akd_total=_json['akd_total']
			id = mongo.db.clienthistory.update({'client_id':client_id,'bazar_id':bazar_id},{'$set':{'pana_total':pana_total,'akd_total':akd_total,'total':total}})
			resp = jsonify('User updated successfully!')
			return resp



@app.route('/dashboard/<bazar_id>',methods=['GET'])
def dashboard(bazar_id):
		user=mongo.db.sdashboard.find({'Bazar':bazar_id})
		resp = dumps(user)
		return resp
@app.route('/getbazardetails/<bazar_id>',methods=['GET'])
def getbazardata(bazar_id):
		user=mongo.db.bazar.find({'bazar_id':bazar_id})
		resp = dumps(user)
		print(resp)
		return resp
@app.route('/akdtable/<bazar_id>',methods=['GET'])
def akdtable(bazar_id):
		users = mongo.db.akdtable.find({'bazar_id':bazar_id})
		
		resp = dumps(users)
		return resp
@app.route('/clients',methods=['GET'])
def clients():
		users = mongo.db.clientdata.find({})
		
		resp = dumps(users)
		return resp
@app.route('/history/<bazar_id>',methods=['GET'])
def history(bazar_id):
		users = mongo.db.history.find({'bazar':bazar_id})
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
		return resp
@app.route('/getclientdata/<client_id>',methods=['GET'])
def getclientdata(client_id):
		user=mongo.db.clientdata.find({'client_id':client_id})
		resp = dumps(user)
		return resp
@app.route('/gethist/<client_id>',methods=['GET'])
def gethist(client_id):
		user=mongo.db.individualhist.find({'client_id':client_id})
		resp = dumps(user)
		return resp
@app.route('/gethistdel/<sr_no>',methods=['GET'])
def gethistdel(sr_no):
		sr = int(sr_no)
		user=mongo.db.individualhist.find({'sr_no':sr})
		resp = dumps(user)
		return resp
@app.route('/getdatelist',methods=['GET'])
def getdatelist():
		user=mongo.db.datelist.distinct('date')
		resp = dumps(user)
		return resp

@app.route('/getaccount',methods=['GET'])
def getaccouunt():
		users = mongo.db.account.find({})
		resp = dumps(users)
		return resp
@app.route('/getclientaccount/<client_id>/<date>',methods=['GET'])
def getclientaccount(client_id,date):
		user=mongo.db.account.find({"$and":[{'client_id':client_id},{'date':date}]})
		resp = dumps(user)
		return resp
@app.route('/getbazaraccount/<bazar_id>/<date>',methods=['GET'])
def getbazaraccount(bazar_id,date):
		user=mongo.db.account.find({"$and":[{'bazar':bazar_id},{'date':date}]})
		resp = dumps(user)
		return resp
@app.route('/getclienthistory/<client_id>/<bazar_id>',methods=['GET'])
def getclienthistory(client_id,bazar_id):
		user=mongo.db.clienthistory.find({"$and":[{'client_id':client_id},{'bazar_id':bazar_id}]})
		resp = dumps(user)
		return resp
@app.route('/clienthistory/<bazar_id>',methods=['GET'])
def clienthistory(bazar_id):
		user=mongo.db.clienthistory.find({'bazar_id':bazar_id})
		resp = dumps(user)
		return resp
@app.route('/getclientday/<date>',methods=['GET'])
def getclientday(date):
		user=mongo.db.account.find({'date':date})
		resp = dumps(user)
		return resp

@app.route('/getclientoverall/<client_id>',methods=['GET'])
def getclientoverall(client_id):
		user=mongo.db.account.find({'client_id':client_id})
		resp = dumps(user)
		return resp

@app.route("/deletedashboard",methods=['DELETE'])
def deletedashboard():
		id = mongo.db.sdashboard.delete_many({})
		return jsonify({'text':'moxa!'})
@app.route("/deletehistory",methods=['DELETE'])
def deletehistory():
		id = mongo.db.history.delete_many({})
		return jsonify({'text':'moxa!'})

@app.route("/deleteakdtable",methods=['DELETE'])
def deleteakdtable():
		id = mongo.db.akdtable.delete_many({})
		return jsonify({'text':'moxa!'})
@app.route("/deletetable",methods=['DELETE'])
def deletetable():
		id = mongo.db.clienthistory.delete_many({})
		return jsonify({'text':'moxa!'})
@app.route("/deleteindividualhist",methods=['DELETE'])
def deleteindividualhist():
		id = mongo.db.individualhist.delete_many({})
		return jsonify({'text':'moxa!'})
@app.route("/deleteaccount",methods=['DELETE'])
def deleteaccount():
		id = mongo.db.account.delete_many({})
		return jsonify({'text':'moxa!'})
@app.route("/deletedatelist",methods=['DELETE'])
def deletedatelist():
		id = mongo.db.datelist.delete_many({})
		return jsonify({'text':'moxa!'})





if __name__ == '__main__':
     app.run(port=5002)