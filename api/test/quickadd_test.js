// Reference: https://www.digitalocean.com/community/tutorials/test-a-node-restful-api-with-mocha-and-chai
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();
chai.use(chaiHttp);

describe('Quick Add', () => {
  // Test the /GET route for quick add.
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

    // Test the /GET route for quick add, making sure it's top 12 by minutes played.
    it('it should GET top 12 minutes played players from the given team', (done) => {
      chai.request(server)
        .get('/quickadd/Los Angeles Lakers')
        .end((err, res) => {
          let top12 = [
            274, 127, 576, 385,
            14, 251, 468, 288,
            63, 18, 161, 253
          ];
          let players = res.body;
          res.should.have.status(200);
          players.should.be.a('Array');
          players.length.should.be.eql(12);
          for (let i = 0; i < players.length; i++) {
            let player = players[i];
            player.playerTeam.should.be.eql("Los Angeles Lakers");
            top12.should.include(player.Rk);
          }
          done();
        });
    });

    // Test the /GET route for quick add with given ranks.
    it('it should GET 12 players from the given team including the players given', (done) => {
      chai.request(server)
        .get('/quickadd/Los Angeles Lakers?players=14,18,39')
        .end((err, res) => {
          let players = res.body;
          res.should.have.status(200);
          players.should.be.a('Array');
          players.length.should.be.eql(12);
          const ranks = [14, 18, 39];
          for (let i = 0; i < ranks.length; i++) {
            let player = players[i];
            player.Rk.should.be.eql(ranks[i]);
          }
          for (let i = 3; i < players.length; i++) {
            let player = players[i];
            player.playerTeam.should.be.eql("Los Angeles Lakers");
            player.Rk.should.not.be.oneOf(ranks);
          }

          done();
        });
    });
  });
});