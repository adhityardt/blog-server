
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp);
const app = require('../app.js')

describe('/REGISTER', function () {
	let userId
	this.timeout(5000);
	it('should have some properties', function (done) {
		chai.request(app)
			.post('/users/register')
			.send({
				'fullname': 'Adhitya Rahman',
				'username': 'rama@gmail.com',
				'password': '123456a'
			})
			.end(function (err, res) {
				// console.log(res.body)
				userId = res.body.result._id
				// expect(res.body).to.have.property('message').to.be.a('string').to.equal('username has been taken!')
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body.result).to.ownProperty('fullname')
				expect(res.body.result).to.ownProperty('username')
				expect(res.body.result).to.ownProperty('password')
				expect(res.body.result.fullname).to.be.a('string')
				expect(res.body.result.username).to.be.a('string')
				expect(res.body.result.password).to.be.a('string')
				done()
			})
	});
	
	afterEach(() => {
		chai.request(app)
			.delete('/users/' + userId)
			.end((err, res)  => {
				done()
			})
	});
});