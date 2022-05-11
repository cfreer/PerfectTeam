import React from 'react';
import { Table } from 'react-bootstrap';

function Teams(props : any) {

  // renders teams page
  return (
    <div className='teams-container' data-testid="teams-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Team</th>
            <th>Location</th>
            <th>Current Regular Season Record</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Heat</td>
            <td>Miami, FL</td>
            <td>35-17</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Celtics</td>
            <td>Boston, MA</td>
            <td>33-19</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bucks</td>
            <td>Milwaukee, WI</td>
            <td>33-19</td>
          </tr>
          <tr>
            <td>4</td>
            <td>76ers</td>
            <td>Philidelphia,  PN</td>
            <td>32-20</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Raptors</td>
            <td>Toronto, Canada </td>
            <td>30-22</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Bulls</td>
            <td>Chicago, IL</td>
            <td>29-23</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Nets</td>
            <td>Brookkyn, NY</td>
            <td>31-21</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Hawks</td>
            <td>Atlanta, GA</td>
            <td>26-26</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Cavaliers</td>
            <td>Cleveland, OH</td>
            <td>27-25</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Hornets</td>
            <td>Charlotte NC</td>
            <td>27-25</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Knicks</td>
            <td>New York, NY</td>
            <td>22-30</td>
          </tr>
          <tr>
            <td>12</td>
            <td>Wizards</td>
            <td>Washington DC, DC</td>
            <td>24-28</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Pacers</td>
            <td>Indiana, IN</td>
            <td>11-41</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Pistons</td>
            <td>Detroit, MY</td>
            <td>18-34</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Magic</td>
            <td>Orlando, FL</td>
            <td>10-31</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Suns</td>
            <td>Pheonix, AZ</td>
            <td>39-13</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Grizzlies</td>
            <td>Memphis, TN</td>
            <td>36-16</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Golden State Warriors</td>
            <td>Los Angeles, CA</td>
            <td>33-19</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Mavericks</td>
            <td>Dallas, TX</td>
            <td>36-16</td>
          </tr>
          <tr>
            <td>20</td>
            <td>Jazz</td>
            <td>Salt Lake City, UT</td>
            <td>33-19</td>
          </tr>
          <tr>
            <td>21</td>
            <td>Nuggets</td>
            <td>Denver, CO</td>
            <td>29-23</td>
          </tr>
          <tr>
            <td>22</td>
            <td>Timberwolves</td>
            <td>Minneapolis, MN</td>
            <td>32-20</td>
          </tr>
          <tr>
            <td>23</td>
            <td>Pelicans</td>
            <td>New Orleans, LU</td>
            <td>25-27</td>
          </tr>
          <tr>
            <td>24</td>
            <td>Clippers</td>
            <td>Los Angeles, CA</td>
            <td>26-26</td>
          </tr>
          <tr>
            <td>25</td>
            <td>Spurs</td>
            <td>San Antonio, TX</td>
            <td>24-28</td>
          </tr>
          <tr>
            <td>26</td>
            <td>Lakers</td>
            <td>Los Angeles, CA</td>
            <td>18-34</td>
          </tr>
          <tr>
            <td>27</td>
            <td>Kings</td>
            <td>Sacramento, CA</td>
            <td>20-32</td>
          </tr>
          <tr>
            <td>28</td>
            <td>Trail Blazers</td>
            <td>Portland, OR</td>
            <td>33-19</td>
          </tr>
          <tr>
            <td>29</td>
            <td>Thunder</td>
            <td>Oklahoma City, OK</td>
            <td>17-35</td>
          </tr>
          <tr>
            <td>30</td>
            <td>Rockets</td>
            <td>Houston, TX</td>
            <td>11-41</td>
          </tr>
        </tbody>  
      </Table>
    </div>
  );
}

export default Teams;
