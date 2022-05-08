const mongoose = require('mongoose');

main().catch(err => console.log(err));

let db = {};

async function main() {
    await mongoose.connect('mongodb+srv://nandojfg:PerfectTeam@clusterjuan.khmci.mongodb.net/PerfectTeam?retryWrites=true&w=majority');

    const playerSchema = new mongoose.Schema({
        Rk: Number,
        name: String,
        age: Number,
        proPic: String,
        WS: String,
        salary: String,
        projSalary: String,
        //image: String, //1.png
    });

    // TODO: remove rank and minutes played(?), add BLKA, add playerId
    const statsSchema = new mongoose.Schema({
        Rk: Number,
        MP: Number,
        FT: Number,
        ORB: Number,
        DRB: Number,
        AST: Number,
        STL: Number,
        BLK: Number,
        TOV: Number,
        PF: Number,
        PTS: Number
    })

    const teamSchema = new mongoose.Schema({
        Players: String,
        Score: Number,
        Salary: Number
    })

    db.Player = mongoose.model('players', playerSchema);
    db.Stats = mongoose.model('stats', statsSchema);
    db.Team = mongoose.model('team', teamSchema);
}

module.exports = db;