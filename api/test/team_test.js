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