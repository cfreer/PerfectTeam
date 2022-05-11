# Perfect Team API Documentation
The Perfect Team API lets the user get various information about NBA players and utilizes our algorithm to produce a synergy score.
Base URL: https://perfect-team-api.herokuapp.com


## Get all players or players matching a given name.
**Request Format:** /players

**Query Parameters:** name (optional)

**Request Type:** GET

**Returned Data Format**: JSON

**Description 1:** If the search parameter is not included in the request, returns the rank, name (& twitter handle), age, win shares, salary, and projected salary of all players in order by rank.

**Example Request 1:** /players

**Example Response 1:** (abbreviated)
```json
[
  {
    "_id": "6274db2d67b2ba8ad69487dd",
    "Rk": 1,
    "name": "Precious Achiuwa\\achiupr01",
    "age": 22,
    "WS": "2.5",
    "salary": "$45780966",
    "projSalary": "$48070014"
  },
  {
    "_id": "6274db2d67b2ba8ad69487de",
    "Rk": 2,
    "name": "Steven Adams\\adamsst01",
    "age": 28,
    "WS": "6.8",
    "salary": "$44310840",
    "projSalary": "$47366760"
  },
  ...
]
```

**Description 2:** If the search parameter is included in the request, returns the rank, name (& twitter handle), age, win shares, salary, and projected salary of the player with the given name.

**Example Request 2:** /players?name=Steven Adams

**Example Response 2:**
```json
{
  "_id": "6274db2d67b2ba8ad69487de",
  "Rk": 2,
  "name": "Steven Adams\\adamsst01",
  "age": 28,
  "WS": "6.8",
  "salary": "$44310840",
  "projSalary": "$47366760"
}
```

**Error Handling:**
- Returns a JSON with an error status and descriptive error message.


## Get synergy score and luxury tax for a given set of players.
**Request Format:** /team/:players

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns the synergy score and luxury tax of the given set of players using our algorithm.

**Example Request:** /team/1,2,3,4,5,6,7,8,9,10,11,12

**Example Response:**
```json
{
  "score": 3680.0441030811808,
  "luxuryTax": 9122626936
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


## Get 12 players from the given team.
**Request Format:** /quickadd/:playerTeam

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns a complete team of 12 players on the same NBA team.

**Example Request:** /quickadd/Utah Jazz

**Example Response:** (abbreviated)
```json
[
  {
    "_id": "627a039daf95564d91af9c49",
    "Rk": "23",
    "Player": "Udoka Azubuike\\azubuud01",
    "age": 22,
    "WS": "0.6",
    "salary": "$31590000.00",
    "projSalary": "$33930000.00",
    "playerTeam": "Utah Jazz"
  },
  {
    "_id": "627a039daf95564d91af9c69",
    "Rk": "55",
    "Player": "Bojan Bogdanović\\bogdabo02",
    "age": 32,
    "WS": "5.2",
    "salary": "$20000000.00",
    "projSalary": "$20000000.00",
    "playerTeam": "Utah Jazz"
  },
  ...
]
```

**Error Handling:**
- Returns a JSON with an error status and descriptive error message.