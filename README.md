# PerfectTeam
PerfectTeam is an NBA predictive modeling software that takes any twelve-person lineup for a basketball team and accurately predicts their wins for an 82 game season. It uses algorithms and potentially machine learning for data analysis to predict their wins and losses. It includes major features like a wins prediction, team customization, salary cap, and a quick add team function. PerfectTeam is a web application that users may access easily using a public URL ([https://perfect-team-75839.web.app](https://perfect-team-75839.web.app)).

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

# Git Repo
## Layout
**data**
- Stores all of the basketball data used for the application.

**lib**
- Stores the .jar files needed for JUnit.

**gradle/wrapper**
- Store the Gradle wrapper files so GitHub Actions can use Gradle.

**public**
- Stores the index.html file that hosts the application.

**src/Components**
- Stores all the components needed to create the frontend server.

**src/Pages**
- Stores all the pages needed to create the frontend server.

**src/main/java**
- Stores all of the .java classes for the backend server.

**src/test/java**
- Stores all of the JUnit tests for the backend server.

## Policies
Branches will be in the format "name/feature_name" for each new feature and will be merged through a pull request that must be approved by another team member.

# How to Run
Clone this repo using the following command:
```
git clone https://github.com/cfreer/PerfectTeam.git
```

Install the latest version of Node from [Nodejs.org](https://nodejs.org/en/). Once Node is installed, run the following command in the root directory:
```
npm install
```

To create a development build, run the following command:
```
npm start
```

To create a production build and deploy it to Firebase, run the following command:
```
npm run build
firebase deploy
```

Firebase hosting URL: [https://perfect-team-75839.web.app](https://perfect-team-75839.web.app)

# How to Set Up Firebase Hosting and Include Firebase in the React App
1. Go to [https://firebase.google.com/](https://firebase.google.com/), click the "Get started" button, and sign in using a Google account.
2. Click the "Add project" button and enter a project name.
3. Unselect "Enable Google Analytics for this project" and create the project.
4. Click on the "</>" button under the project name to add Firebase to a web app.
5. Enter an app nickname and select "Also set up Firebase Hosting for this app." to register the app. Click the "Next" button until you reach the Install Firebase CLI section.
6. Run the npm command (`npm install -g firebase-tools`) in the root directory of the project. Click the "Next" button to continue to the Deploy to Firebase Hosting section.
7. Run the command `firebase login` in the root directory. It will prompt you to log in with the Google account that you used to sign up for Firebase.
8. Run the command `firebase init` in the root directory. Type "y" to proceed. When asked to select the Firebase CLI features to set up, select Database and Hosting options. Next, select "Use an existing project" and select the project name that you created earlier. Once the database finishes setting up, type "y" when it asks if you would like to set up Realtime Database for the project. Next, select "us-central1" for the location. Press "Enter" when asked about the Realtime Database Security Rules file, using your public directory, and configuring a single-page app. Type "n" to setting up automatic builds and deploys with GitHub and overwriting the `public/index.html` file.
9. Go to the `firebase.json` file. In the "hosting" object, change the line `"public": "public",` to `"public": "build",` and save the changes.
10. Now, you can run the commands `npm run build` to create a production build and `firebase deploy` to deploy the Firebase web app. The hosting URL will be shown in the command prompt after the web app is deployed successfully.

# How to Test
To run all Jest test files, run the following command:
```
npm test
```

To run a specific Jest test file, run the following command:
```
npm test <filename>.test.tsx
```