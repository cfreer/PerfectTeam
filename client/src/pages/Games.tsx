/**
 * This file renders the games page, adn is intended to 
 * contain the live scores of current games as well as upcoming games
 * based off of the NBA API
 */

import React from 'react';
import { Table } from 'react-bootstrap';
import GameBoxScore from '../components/GameBoxScore'

function Games(props : any) {
  // rendered games page
  return (
      <div className='game-table' data-testid="game-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Games</th>
                <th>Time</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mavericks vs. Suns</td>
                <td>Today 7:00 PM PST</td>
                <td>Pheonix, AZ</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bucks vs. Celtics</td>
                <td>Tomorrow 4:00 PM PST</td>
                <td>Boston, MA</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Warriors vs. Grizzlies</td>
                <td>Tomorrow 6:30 PM PST</td>
                <td>Los Angeles, CA</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Heat vs 76ers</td>
                <td>Thu, May 12 4:00 PM PST</td>
                <td>Miami, FL</td>
              </tr>
            </tbody>
          </Table>
          <GameBoxScore/>

      </div>
  );
}

export default Games;
