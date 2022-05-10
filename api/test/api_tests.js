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
                res.body.Player.should.be.eql('Steven Adams\\adamsst01');
            done();
          });
    });
  });
});

describe('Team', () => {
  /*
  * Test the /GET route
  */
  describe('/GET team', () => {
      it('it should GET the score and luxury tax of the given team', (done) => {
        chai.request(server)
            .get('/team/1,2,35,23,52,500,34,77,99,100,11,12')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('Object');
                  res.body.score.should.be.eql(1.2673193554478226);
                  res.body.luxuryTax.should.be.eql(2583127993.25);
              done();
            });
      });
  });
});