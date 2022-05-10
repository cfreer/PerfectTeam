const mongoose = require('mongoose');

main().catch(err => console.log(err));

let db = {};

async function main() {
    await mongoose.connect('mongodb+srv://nandojfg:PerfectTeam@clusterjuan.khmci.mongodb.net/PerfectTeam?retryWrites=true&w=majority');

    const playerSchema = new mongoose.Schema({
        Rk: Number,
        Player: String,
        age: Number,
        WS: String,
        salary: String,
        projSalary: String,
        playerTeam: String
        //image: String, //1.png
    });

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

    const nbateamSchema = new mongoose.Schema({
        teamId: Number,
        teamName: String,
        Conf: String,
        Div: String,
        W: Number,
        L: Number,
        WL:String,
        MOV: String,
        ORtg: String,
        DRtg: String,
        NRtg: String,
        MOV: String,
        ORtg: String,
        DRtg: String,
        NRtg: String,
    })

    db.Player = mongoose.model('players', playerSchema);
    db.Stats = mongoose.model('stats', statsSchema);
    db.Team = mongoose.model('team', teamSchema);
    db.NbaTeams = mongoose.model('nbaTeams', nbateamSchema);
}

module.exports = db;