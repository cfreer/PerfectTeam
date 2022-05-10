//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('Players', () => {
/*
  * Test the /GET route
  */
  describe('/GET players', () => {
      it('it should GET all the players', (done) => {
        chai.request(server)
            .get('/players')
            .end((err, res) => {
                  res.should.have.status(200);
                  console.log(res.body);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(605);
              done();
            });
      });
  });

});