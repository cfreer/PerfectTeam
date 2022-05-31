/**
 * This file contains the function that renders the teams page.
 * This page features the current teams in the NBA and their regular season record.
 * This page is meant to present simple information to the user as a table
 */

import { Table } from 'react-bootstrap';

// Interface for an NBA team
interface Team {
  id: string,
  teamId: number,
  teamName: string,
  Conf: string,
  Div: string,
  W: number,
  L: number,
  WL: string,
  MOV: string,
  ORtg: string,
  DRtg: string,
  NRtg: string
}

// This is the page that presents the teams and their current information
function Teams(props : any) {
  let teams : Team[] = props.data;
  let load = props.loading;

  // Creates a table row for each NBA team including team name, conference, division, wins, and losses
  let teamData = teams.map((t : Team) => {
    // Determines team conference
    let conf = t.Conf === 'E' ? 'Eastern' : 'Western';

    // Determines team division
    let div = '---';
    switch (t.Div) {
      case 'A':
        div = 'Atlantic';
        break;
      case 'C':
        div = 'Central';
        break;
      case 'SE':
        div = 'Southeast';
        break;
      case 'NW':
        div = 'Northwest';
        break;
      case 'P':
        div = 'Pacific';
        break;
      case 'SW':
        div = 'Southwest';
        break;
      default:
        break;
    }

    // Returns the render for an NBA team
    return (
      <tr>
        <td>{t.teamName}</td>
        <td>{conf}</td>
        <td>{div}</td>
        <td>{t.W}</td>
        <td>{t.L}</td>
      </tr>
    )
  })

  // Renders teams page
  return (
    <div className='teams-container' data-testid='teams-container'>
      <Table data-testid='teams-table' striped bordered hover hidden={load}>
        <thead>
          <tr>
            <th>Team</th>
            <th>Conference</th>
            <th>Division</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>
        <tbody>
          {teamData}
        </tbody>
      </Table>
    </div>
  );
}

export default Teams;
