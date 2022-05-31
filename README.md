# PerfectTeam
PerfectTeam is an NBA predictive modeling software that takes any twelve-person lineup for a basketball team and accurately predicts their wins for an 82 game season. It uses algorithms for data analysis to predict their wins and losses. It includes major features like a wins prediction, team customization, salary cap customization, player suggestions, and a quick add team function. PerfectTeam is a web application that users may access easily using a public URL.
> Perfect Team Public URL: [https://perfect-team-75839.web.app](https://perfect-team-75839.web.app)  

# User Documentation
The [user doc](https://github.com/cfreer/PerfectTeam/blob/main/documentation/UserDoc.md) includes:
- High-Level Description
- How to Install the Software
- How to Run the Software
- How to Use the Software
- How to Report a Bug
- Known Bugs

# Developer Documentation
The [developer doc](https://github.com/cfreer/PerfectTeam/blob/main/documentation/DeveloperDoc.md) includes:
- How to Obtain the Source Code
- The Layout of Our Directory Structure
- How to Build the Software
- How to Test the Software
- How to Add New Tests
- How to Build a Release of the Software
- How to Set Up a New Server
  - How to Set Up Firebase Hosting and Include Firebase in the React App
  - How to Set Up Heroku API

# Major Features & Goals:
- Wins Prediction - Clearly present a statistic that represents the potential for the team that the user has selected to win a given game.
- Customizable Teams - Allow the user to create a team of NBA players of their choosing, add and swap players, and get adjusted synergy/win percentage as the outcome.
- Salary Cap Feature - Be able to set a salary cap for a given session of team creation. The user will be limited to choosing players that don’t exceed the cap, else be presented the ‘luxury tax’ they would accrue by going over said amount.
- Web UI - Create a fully functional web page that allows users to accomplish the other mentioned features and be visually appealing in design.
- Quick Add Feature (add any current team roster) - Allow users to quickly analyze current teams for modern fans interested in statistical analysis.
- Suggested Players Feature - Program will suggest to autofill a team if enough players from a current roster is being picked

# Stretch Goals:
- Machine Learning Algorithm - Utilize an ML algorithm in the backend to predict a team’s win/loss chances.
- Trade Strategy - Calculate whether a trade is “worth it” depending on salary and potential contribution to wins.
- Real-Time Data - Data on the webpage will be updated in real-time to give the user the best statistics and predictions.

# Use Cases Operational
Case 1: Check the Win Prediction of a Team

Case 3: Adding Suggested Players

Case 4: Search Game History

Case 5: Customizing a Team

# Use Cases Not Operational
Case 2: Create a Team Within Budget *does not suggest trades
