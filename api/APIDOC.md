# Perfect Team API Documentation
The Perfect Team API lets the user get various information about NBA players and utilizes our algorithm to produce a synergy score.
Base URL: https://perfect-team-api.onrender.com


## Get all players or players matching a given name.
**Request Format:** /players

**Query Parameters:** name (optional)

**Request Type:** GET

**Returned Data Format**: JSON

**Description 1:** If the search parameter is not included in the request, returns the rank, name, age, win shares, salary, projected salary, and team of all players in order by rank.

**Example Request 1:** /players

**Example Response 1:** (abbreviated)
```json
[
  {
    "_id": "62850368cd0631716c143ba9",
    "Rk": 1,
    "Player": "Precious Achiuwa",
    "age": 22,
    "WS": "2.5",
    "salary": "45780966.00",
    "projSalary": "48070014.00",
    "playerTeam": "Toronto Raptors"
  },
  {
    "_id": "62850368cd0631716c143baa",
    "Rk": 2,
    "Player": "Steven Adams",
    "age": 28,
    "WS": "6.8",
    "salary": "44310840.00",
    "projSalary": "47366760.00",
    "playerTeam": "Memphis Grizzlies"
  },
  ...
]
```

**Description 2:** If the name parameter is included in the request, returns the rank, name, age, profile photo url, win shares, salary, projected salary, and team of the player with the given name.

**Example Request 2:** /players?name=Steven Adams

**Example Response 2:**
```json
{
  "_id": "62850368cd0631716c143baa",
  "Rk": 2,
  "Player": "Steven Adams",
  "age": 28,
  "WS": "6.8",
  "salary": "44310840.00",
  "projSalary": "47366760.00",
  "playerTeam": "Memphis Grizzlies"
}
```

**Error Handling:**
- Returns a JSON with an error status and descriptive error message.


## Get synergy score and luxury tax for a given set of players.
**Request Format:** /team/:players/:salaryCap

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns the synergy score and luxury tax of the given set of players and salary cap using our algorithm.

**Example Request:** /team/1,2,3,4,5,6,7,8,9,10,11,12/112400000

**Example Response:**
```json
{
  "score": 0.8929074719304304,
  "luxuryTax": 7938889004
}
```
**Error Handling:**
- Returns a JSON with an error status and descriptive error message.


## Get all NBA teams.
**Request Format:** /nbateams

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns data for all teams in the NBA.

**Example Request:** /nbateams

**Example Response:** (abbreviated)
```json
[
  {
    "_id": "6279f9c6af95564d91af9c07",
    "teamId": 1,
    "teamName": "Boston Celtics",
    "Conf": "E",
    "Div": "A",
    "W": 51,
    "L": 31,
    "WL": ".622",
    "MOV": "7.02",
    "ORtg": "115.05",
    "DRtg": "107.65",
    "NRtg": "7.39"
  },
  {
    "_id": "6279f9c6af95564d91af9c08",
    "teamId": 2,
    "teamName": "Phoenix Suns",
    "Conf": "W",
    "Div": "P",
    "W": 64,
    "L": 18,
    "WL": ".780",
    "MOV": "6.94",
    "ORtg": "115.41",
    "DRtg": "108.50",
    "NRtg": "6.91"
  },
  ...
]
```


## Get top 12 minutes played players from the given team.
**Request Format:** /quickadd/:playerTeam

**Request Type:** GET

**Returned Data Format**: JSON

**Description 1:** Returns a complete team of 12 players on the same NBA team.

**Example Request 1:** /quickadd/Utah Jazz

**Example Response 1:** (abbreviated)
```json
[
  {
    "_id": "62850368cd0631716c143bbf",
    "Rk": 23,
    "Player": "Udoka Azubuike",
    "age": 22,
    "WS": "0.6",
    "salary": "31590000.00",
    "projSalary": "33930000.00",
    "playerTeam": "Utah Jazz"
  },
  {
    "_id": "62850368cd0631716c143bdf",
    "Rk": 55,
    "Player": "Bojan Bogdanović",
    "age": 32,
    "WS": "5.2",
    "salary": "20000000.00",
    "projSalary": "20000000.00",
    "playerTeam": "Utah Jazz"
  },
  ...
]
```

**Description 2:** If the players parameter is included in the request, returns a complete team of 12 players on the same NBA team, starting with the 3 players given.

**Example Request 2:** /quickadd/Los Angeles Lakers?players=14,18,39

**Example Response 2:**
```json (abbreviated)
[
  {
    "_id": "62850368cd0631716c143bb6",
    "Rk": 14,
    "Player": "Carmelo Anthony",
    "age": 37,
    "WS": "3.6",
    "salary": "35500000.00",
    "projSalary": "37948276.00",
    "playerTeam": "Los Angeles Lakers"
  },
  {
    "_id": "62850368cd0631716c143bba",
    "Rk": 18,
    "Player": "Trevor Ariza",
    "age": 36,
    "WS": "0.2",
    "salary": "34502130.00",
    "projSalary": "37262300.00",
    "playerTeam": "Los Angeles Lakers"
  },
  {
    "_id": "62850368cd0631716c143bcf",
    "Rk": 39,
    "Player": "Kent Bazemore",
    "age": 32,
    "WS": "0.1",
    "salary": "28103550.00",
    "projSalary": "30351834.00",
    "playerTeam": "Los Angeles Lakers"
  },
  ...
]
```

**Error Handling:**
- Returns a JSON with an error status and descriptive error message.


## Get stats for a given player.
**Request Format:** /stats/:name

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns the stats of the given player.

**Example Request:** /stats/OG Anunoby

**Example Response:**
```json
{
  "_id": "6282c979855797bbdb2d3735",
  "Rk": 16,
  "MP": 36,
  "FT": 1.9,
  "ORB": 1.5,
  "DRB": 4,
  "AST": 2.6,
  "STL": 1.5,
  "BLK": 0.5,
  "TOV": 1.7,
  "PF": 2.7,
  "PTS": 17.1
}
```
**Error Handling:**
- Returns a JSON with an error status and descriptive error message.