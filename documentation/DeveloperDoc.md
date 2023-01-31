# Developer Documentation

## How to Obtain the Source Code
All source code is included in our GitHub repository: https://github.com/cfreer/PerfectTeam. It can be obtained by cloning the repository using the following command:
`git clone https://github.com/cfreer/PerfectTeam.git`

## The Layout of Our Directory Structure
**.github/workflows**
Stores the .yml file needed for GitHub Actions to build and test the application.

**api**
Stores all files for Perfect Team API.

**api/models**
Stores all the mongoose models used for the API.

**api/routes**
Stores all the routes used to make various requests in the API.

**api/test**
Stores all the test files needed to test the API.

**client**
Stores all files for Perfect Team frontend application.

**client/data**
Stores all of the basketball data used for the application.

**client/lib**
Stores the .jar files needed for JUnit.

**client/public**
Stores the index.html file that hosts the application.

**client/src/components**
Stores all the components needed to create the frontend server.

**client/src/pages**
Stores all the pages needed to create the frontend server.

**documentation**
Stores the user and developer documentation.

## How to Build the Software
**Prerequisites:**
1. Clone the repo.
`git clone https://github.com/cfreer/PerfectTeam.git`
2. Change into the PerfectTeam directory.
`cd PerfectTeam`
3. Install the latest version of Node from https://nodejs.org/en/.

**Frontend:**
1. Change into the client directory.
`cd client`
2. Install the node dependencies.
`npm install`
3. Create a development build.
`npm start`

***Note: You do not need to run the backend API locally for both the local and Firebase-hosted frontend, as they use the Render-hosted API instead.***

**Backend:**
1. Change into the api directory.
`cd api`
2. Install the node dependencies.
`npm install`
3. Start the API locally on http://localhost:4567/.
`npm start`

## How to Test the Software
**Frontend:**
To run all Jest test files, run the following command in the client directory:
`npm test`

To run a specific Jest test file, run the following command in the client directory with the specific test file name replacing \<filename\>:
`npm test <filename>.test.tsx`

**Backend:**
To run all API tests, run the following command in the api directory:
`npm test`

## How to Add New Tests
Refer to our [how to add a new test](https://docs.google.com/document/d/1-kPpM9fv8adkxtt-zc9KxAO8eYRFMxG70Qdem-sFYcY/edit#bookmark=id.yhb6dbv4bw5n) to the code base section from our living doc.

## How to Build a Release of the Software
**Prerequisites:**
1. Use `git status` to make sure your local repository is up to date with the main branch. If not, use `git add`,  `git commit`, and `git push` commands to push all changes to GitHub and `git pull` to get all changes from GitHub.
2. As a sanity check, make sure all tests have passed locally and that the most recent commit on GitHub passes all checks of the GitHub Actions workflow.

**Frontend:**
1. If you are building a major release, increment the first digit by one and reset the middle and last digits of the version number to zero. If you are building a minor release, increment the middle digit and reset the last digit to zero. If you are building a patch release, increment the last digit of the version number by one. The version number can be found in the client/package.json file.
2. Change into the client directory.
`cd client`
3. Create a production build.
`npm run build`
4. Deploy production build to Firebase.
`firebase deploy`

***Note: Firebase should be installed by using `npm install -g firebase-tools` and logged into before running the `firebase deploy` command.***

**Backend:**
1. If you are building a major release, increment the first digit by one and reset the middle and last digits of the version number to zero. If you are building a minor release, increment the middle digit and reset the last digit to zero. If you are building a patch release, increment the last digit of the version number by one. The version number can be found in the api/package.json file.
2. The API will be deployed automatically when a new commit is merged with the main branch on GitHub.

## How to Set Up a New Server
***Note: If you would like to set up a new server and create the project from scratch, please follow the instructions below to set up Firebase Hosting for the React App and Render API.***
### How to Set Up Firebase Hosting and Include Firebase in the React App
1. Go to https://firebase.google.com/, click the "Get started" button, and sign in using a Google account.
2. Click the "Add project" button and enter a project name.
3. Unselect "Enable Google Analytics for this project" and create the project.
4. Click on the "</>" button under the project name to add Firebase to a web app.
5. Enter an app nickname and select "Also set up Firebase Hosting for this app." to register the app. Click the "Next" button until you reach the Install Firebase CLI section.
6. Run the npm command (`npm install -g firebase-tools`) in the root directory of the project. Click the "Next" button to continue to the Deploy to Firebase Hosting section.
7. Run the command `firebase login` in the root directory. It will prompt you to log in with the Google account that you used to sign up for Firebase.
8. Run the command `firebase init` in the root directory. Type "y" to proceed. When asked to select the Firebase CLI features to set up, select Database and Hosting options. Next, select "Use an existing project" and select the project name that you created earlier. Once the database finishes setting up, type "y" when it asks if you would like to set up a Realtime Database for the project. Next, select "us-central1" for the location. Press "Enter" when asked about the Realtime Database Security Rules file, using your public directory, and configuring a single-page app. Type "n" to set up automatic builds and deploy with GitHub and overwrite the `public/index.html` file.
9. Go to the `firebase.json` file. In the "hosting" object, change the line `"public": "public",` to `"public": "build",` and save the changes.
10. Now, you can run the commands `npm run build` to create a production build and `firebase deploy` to deploy the Firebase web app. The hosting URL will be shown in the command prompt after the web app is deployed successfully.

### How to Set Up Render API
[Render API Tutorial](https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/)
