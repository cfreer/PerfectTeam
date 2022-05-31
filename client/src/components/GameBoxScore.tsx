/*
   THis component will render a table in which the scores of past and present games 
   will be updated every ten minutes. This will show users the score and teams involved
**/


import React, { useEffect ,useState } from 'react';
import { Table } from 'react-bootstrap';
import internal from 'stream';

// Interface for the NBA teams
interface Team {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    name: string
}

// Interface for any given game
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

// This page will present the game scores for the games page and will update on a schedule
function GameBoxScore(props : any) {

    // API used to access team and score information
    const API_URL = 'https://www.balldontlie.io/api/v1/games?seasons[]=2021';

        // This will create the table row with the date, teams and score
        let gamesList = props.data.map((g : Game) => {
            console.log(props.data)
            return (<tr>
                <td>{g.date}</td>
                <td>{g.home_team.full_name} vs. </td>
                <td>{g.visitor_team.full_name}</td>
                <td>{g.home_team_score} - {g.visitor_team_score}</td>
                </tr>)
        }) 

    // Renders game box scores
    return (
        <Table striped bordered hover>
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