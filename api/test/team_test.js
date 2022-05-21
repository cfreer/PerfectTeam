// Reference: https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('Team', () => {
  /*
  * Test the /GET route for a team.
  */
  describe('/GET team', () => {
      it('it should GET the score and luxury tax of the given team with salary cap of 112400000', (done) => {
        chai.request(server)
            .get('/team/1,2,35,23,52,500,34,77,99,100,11,12/112400000')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('Object');
                  res.body.score.should.be.eql(0.7304218039965921);
                  res.body.luxuryTax.should.be.eql(2583127993);
              done();
            });
      });

      it('it should GET the score and luxury tax of the given team with salary cap of 1000000', (done) => {
        chai.request(server)
            .get('/team/1,2,3,4,5,6,7,8,9,10,11,12/1000000')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('Object');
                  res.body.score.should.be.eql(0.8929074719304304);
                  res.body.luxuryTax.should.be.eql(13004950148);
              done();
            });
      });

      it('it should not include salary for 492', (done) => {
        chai.request(server)
            .get('/team/1,2,3,4,5,6,7,8,9,10,11,492/1000000')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('Object');
                  res.body.score.should.be.eql(0.6172919467229012);
                  res.body.luxuryTax.should.be.eql(11232668374);
              done();
            });
      });
  });
});