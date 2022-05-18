// Reference: https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('Stats', () => {
  /*
  * Test the /GET route for given player.
  */
  describe('/GET stats', () => {
      it('it should GET the stats of Cole Anthony', (done) => {
        chai.request(server)
            .get('/stats/Cole Anthony')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('Object');
                  res.body.Rk.should.be.eql(15);
              done();
            });
      });
  });
});