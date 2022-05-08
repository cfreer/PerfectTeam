const mongoose = require('mongoose');

main().catch(err => console.log(err));

let db = {};

async function main() {
    await mongoose.connect('mongodb+srv://nandojfg:PerfectTeam@clusterjuan.khmci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    const playerSchema = new mongoose.Schema({
        Rk: Number,
        name: String,
        age: Number,
        proPic: String,
        WS: String,
        salary: String,
        projSalary: String
        
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
        PTS: Number,
        //image: String, //1.png
    })

    db.Player = mongoose.model('players', playerSchema);
    db.Stats = mongoose.model('stats', statsSchema);
}

module.exports = db;