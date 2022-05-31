/**
 * This component will render a table in which the scores of past and present games
 * will be updated every ten minutes. This will show users the score and teams involved
 */

import { useState } from 'react';
import { Form, InputGroup, Table } from 'react-bootstrap';

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

  // Sort games data by date
  const [games, setGames] = useState<Game[]>(props.data.slice().sort((a : Game, b : Game) => {
    return a.date.localeCompare(b.date);
  }));

  // This will create the table row with the date, teams and score
  let gamesList = games.map((g : Game) => {
    return (
      <tr>
        <td>{g.date.substring(0, 10)}</td>
        <td>{g.home_team.full_name}</td>
        <td>{g.visitor_team.full_name}</td>
        <td>{g.home_team_score} - {g.visitor_team_score}</td>
      </tr>
    )
  });

  // Sorts the games data based on the selected value
  const handleSorting = (sortBy : string) => {
    let sorted = props.data.slice();
    if (sortBy === 'Home Team') {    // Sort by home team name
      sorted = sorted.sort((a : Game, b : Game) => {
        return a.home_team.full_name.localeCompare(b.home_team.full_name);
      });
    } else if (sortBy === 'Visiting Team') {    // Sort by visitor team name
      sorted = sorted.sort((a : Game, b : Game) => {
        return a.visitor_team.full_name.localeCompare(b.visitor_team.full_name);
      });
    } else if (sortBy === 'Score') {    // Sort by game score
      sorted = sorted.sort((a : Game, b : Game) => {
        let homeScore = a.home_team_score - b.home_team_score;
        if (homeScore !== 0) {
          return homeScore;
        }
        return a.visitor_team_score - b.visitor_team_score;
      });
    } else {
      sorted = sorted.sort((a : Game, b : Game) => {
        return a.date.localeCompare(b.date);
      });
    }
    setGames(sorted);
  }

  // Renders game box scores
  return (
    <div>
      <Form>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Sort Games By:</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as='select' id='sort-by' onChange={(e) => handleSorting(e.target.value)}>
            <option value='Date'>Date</option>
            <option value='Home Team'>Home Team</option>
            <option value='Visiting Team'>Visiting Team</option>
            <option value='Score'>Score</option>
          </Form.Control>
        </InputGroup>
      </Form>
      <Table striped bordered hover data-testid='game-box'>
        <thead>
          <tr>
            <th>date</th>
            <th>Home Team</th>
            <th>Visiting Team</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>
          {gamesList}
        </tbody>
      </Table>
    </div>
  );
}

export default GameBoxScore;
