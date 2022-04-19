GitHub Page: https://cfreer.github.io/PerfectTeam/

# PerfectTeam
PerfectTeam is an NBA predictive modeling software that takes any twelve-person lineup for a basketball team and accurately predicts their wins for an 82 game season. It uses algorithms and potentially machine learning for data analysis to predict their wins and losses. It includes major features like a wins prediction, team customization, salary cap, and a quick add team function. PerfectTeam will be a web application with a public URL for users to access easily.

## Major Features & Goals:
- Wins Prediction - Clearly present a statistic that represents the potential for the team that the user has selected to win a given game.
- Customizable Teams - Allow the user to create a team of NBA players of their choosing, add and swap players, and get adjusted synergy/win percentage as the outcome.
- Salary Cap Feature - Be able to set a salary cap for a given session of team creation. The user will be limited to choosing players that don’t exceed the cap, else be presented the ‘luxury tax’ they would accrue by going over said amount.
- Web UI - Create a fully functional web page that allows users to accomplish the other mentioned features and be visually appealing in design.
- Quick Add Feature (add any current team roster) - Allow users to quickly analyze current teams for modern fans interested in statistical analysis.
- Suggested Players Feature - Program will suggest to autofill a team if enough players from a current roster is being picked

## Stretch Goals:
- Machine Learning Algorithm - Utilize an ML algorithm in the backend to predict a team’s win/loss chances.
- Trade Strategy - Calculate whether a trade is “worth it” depending on salary and potential contribution to wins.
- Real-Time Data - Data on the webpage will be updated in real-time to give the user the best statistics and predictions.

# Repo Layout
**classes**
- Stores all of the .java classes for the backend server.

**data**
- Stores all of the basketball data used for the application.

**public**
- Stores the index.html file that hosts the application.

**src**
- Stores all the files needed to create the frontend server.

# How to Run
```bash
git clone https://github.com/cfreer/PerfectTeam.git
npm install
npm start
```