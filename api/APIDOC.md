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
**Request Format:** /team/get/team/:players

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns the synergy score and luxury tax of the given set of players using our algorithm.

**Example Request:** /team/get/team/1,2,3,4,5,6,7,8,9,10,11,12

**Example Response:**
```json
{
  "score": 3680.0441030811808,
  "luxuryTax": 9122626936
}
```

**Error Handling:**
- Returns a JSON with an error status and descriptive error message.