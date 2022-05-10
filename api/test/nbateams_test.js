// Reference: https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('NBA Teams', () => {
  /*
  * Test the /GET route
  */
  describe('/GET nbateams', () => {
      it('it should GET all the NBA teams', (done) => {
        chai.request(server)
            .get('/nbateams')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(30);
              done();
            });
      });
  });
});