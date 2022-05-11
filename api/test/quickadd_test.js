// Reference: https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('Quick Add', () => {
  /*
  * Test the /GET route for quick add.
  */
  describe('/GET quick add', () => {
      it('it should GET 12 players from the given team', (done) => {
        chai.request(server)
            .get('/quickadd/Utah Jazz')
            .end((err, res) => {
                  let players = res.body;
                  res.should.have.status(200);
                  players.should.be.a('Array');
                  players.length.should.be.eql(12);
                  for (let i = 0; i < players.length; i++) {
                    let player = players[i];
                    player.playerTeam.should.be.eql("Utah Jazz");
                  }
              done();
            });
      });
  });
});