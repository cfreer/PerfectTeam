import React, { useEffect ,useState } from 'react';
import { Table } from 'react-bootstrap';
import internal from 'stream';

 interface Game{
    hTeam: Object,
    vTeam: Object,
    hTeamScore: string,
    vTeamScore: string,
    period: Object,

 }


function GameBoxScore(props : any) {

    const API_URL = 'http://data.nba.net/10s/prod/v1/20170218/scoreboard.json';

    const [games, setGames] = useState<Game[]>([]);



    async function statusCheck(res : Response) {
        if (!res.ok) {
          throw new Error(await res.json());
        }
        return res;
      }
    useEffect(() => { 
        function addHandler() {
            fetch(API_URL)
            .then(statusCheck)
            .then(res => res.json())
            .then(updateCurrentScore)
            .catch(console.error);
        }

        
        function updateCurrentScore(res : any) {
            //let teams : string[] = [];
            //let score : number[] = [];
        
            //props.parentTeamNamesSetter(teams);
            //props.parentTeamRksSetter(score);
            setGames(res.games);
            console.log(games)
            console.log(res)
        }
        addHandler();
    }, []);

    let teamList = games.map((game, i) => {
        return (<tr>
            <td>{i}</td>
            <td>{game.hTeam} vs. {game.vTeam}</td>
            <td>{game.period}</td>
            <td>{game.hTeamScore} - {game.vTeamScore}</td>
        </tr>)
      });

      return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Home Team</th>
                <th>Score</th>
                <th>Away Team</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mavericks vs. Suns</td>
                <td>Today 7:00 PM PST</td>
                <td>Pheonix, AZ</td>
            </tr>
            </tbody>
        </Table>
      );

}
export default GameBoxScore;