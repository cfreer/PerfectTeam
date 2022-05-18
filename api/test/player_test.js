// Reference: https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
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
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(605);
              done();
            });
      });
  });

  /*
  * Test the /GET route with given name.
  */
  describe('/GET players', () => {
    it('it should GET the player with the given name', (done) => {
      chai.request(server)
          .get('/players?name=Steven Adams')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('Object');
                res.body.Player.should.be.eql('Steven Adams');
            done();
          });
    });
  });
});