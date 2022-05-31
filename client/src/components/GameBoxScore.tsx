import React, { useEffect ,useState } from 'react';
import { Table } from 'react-bootstrap';
import internal from 'stream';

interface Team {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
}

interface Game {
    id : number,
    date: string,
    home_team: Team,
    home_team_score: number,
    period: number,
    postseason: boolean,
    season: number,
    status: string,
    time: string,
    visitor_team: Team,
    visitor_team_score: number
}

function GameBoxScore(props : any) {

        let gamesList = props.data.map((g : Game) => {
            console.log(props.data)
            return (<tr>
                <td>{g.date}</td>
                <td>{g.home_team.full_name} vs. </td>
                <td>{g.visitor_team.full_name}</td>
                <td>{g.home_team_score} - {g.visitor_team_score}</td>
                </tr>)
        })

    return (
        <Table striped bordered hover data-testid="game-box">
            <thead>
            <tr>
                <th>date</th>
                <th>Home Team</th>
                <th>Visitng Team</th>
                <th>score</th>
            </tr>
            </thead>
            <tbody>
            {gamesList}
            </tbody>
        </Table>
      );

}
export default GameBoxScore;
