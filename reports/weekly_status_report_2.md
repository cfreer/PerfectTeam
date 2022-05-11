# Weekly Status Report 2

## Team Report
### Goals From Last Week
- Create mock UI for website (Aaron, Amanda)
- Write the specification for backend (Caroline, Juan, Ned)

### Progress and Issues
This week Amanda and Aaron came up with a mockup for the frontend UI. Amanda and Juan got the Firebase server working, and Juan, Ned, and Caroline started implementing the backend. We also worked as a team to get our GitHub set up and organized for HW3. One thing blocking our team this week was lack of communication, as we only had 2/5 members present at our team meeting. We plan on having full attendance next week and therefore be more organized. As the backend gets more complicated, more methods and implementations are necessary all around in the different classes. One change in one class can require other classes to "catch up." We have made good progress overall in the team and player classes, and the frontend devs are working closely with the backend devs to ensure the frontend has the tools they need.

### Plans and Goals
- Start implementing the frontend in React (Aaron, Amanda)
- Write the specification for backend (Juan, Ned)
- Implement Player and Team class (Caroline)

## Team Member Contributions
### 1. Aaron
#### Goals From Last Week
- Begin our initial mockup of our UI for frontend.
- Figure out what command line calls will be needed for combing different langauges together.

#### Progress and Issues
 I focused mainly on finishing our design on Figma for the UI design. I worked on finalizing a page on games currently occuring
 and a page that presents the user with all of the current teams in the NBA. What worked well for me was having an open line of communication with
 the team members on backend where we were able to discuss what data would be used and presented. I learned a lot this week about the benefits of
 having a plan that is well thought out and well communicated, as it has helped us to avoid a lot of roadblocks that I feel could have occured otherwise.
 The main issue I was running into was in what way data should be expressed in the UI, whether a scroll bar would be more effective in circumstances
 was one example of this. However, many of these issues were quickly solved thanks to communciation with the team.

#### Plans and Goals
- Begin harcoding the frontend in ReactJS
- Work alongside backend to implement changes in design as seen fit

### 2. Amanda
#### Goals From Last Week
- Research more about how we will host our web application.
- Create a mock UI for the web application using Figma.

#### Progress and Issues
I worked on creating the design for the UI of our web application. I first sketched the designs on paper and then created the Home page, Create a Team page, and the player profile page in Figma. I also helped with HW3 by setting up the React files and including Firebase in the React app. After researching the different options to host our web application, Juan and I decided to use Firebase Hosting. I went through the steps to set up a Firebase server for our project and wrote detailed instructions to include in our README.md for HW3. The thing that worked for me the best this week was meeting up with others to discuss the project. I learned that it takes a lot of communication and discussion between the frontend and backend groups to work on a project together. I had trouble finding out what data the backend group was working with but got a better understanding once they created the classes and data file in our Git repo. One thing that I am unsure about is the source of images for our web application. I think there may be APIs online that get NBA basketball images. I plan to spend time this week looking for useful APIs.

#### Plans and Goals
- Begin implementing the frontend for our web application in React.
- Search online for APIs that get NBA basketball images.

### 3. Caroline
#### Goals From Last Week
- Help team complete the GitHub README.md.
- Figure out what we are using for our backend server and get a basic stucture set up.

#### Progress and Issues
This week I started implementing the backend classes for our web application, focusing on the Team and Player classes. I also helped the team complete HW3. One thing blocking me right now is still not having a clear spec of the expected behavior for these classes, but I will hopefully get some clarification on that this week and get a first draft of these classes finished up.

#### Plans and Goals
- Finish Team and Player backend classes.
- Help the team complete HW4.


### 4. Juan
#### Goals From Last Week
- Create the server and system design of the backend by researching different tools and understanding how the data is going to flow.
- Research about the machine learning and algorithms that we can use to get the score for the win/loss projections.

#### Progress and Issues
This week I worked on the creation of the server in Firebased, I was able to help them by creating an app that allow us to server our website and the databases at the same time. On the other hand, I helped my team creating the search and csvtojson java classes that will help us to create the integration of the search bar and the mock data for the frontend. Some of the issues that we have is understanding the data that we need to put in our json files and the best way to send the data.

#### Plans and Goals
- Help team to finisht the architecture and ER for our techinal spec.
- Finish the integration of the backend and the creation of the tables in our server.

### 5. Ned
#### Goals From Last Week
Plan is to do some more research and to start working on the spec for the backend.
A goal would be to come up with a basic algorithm that is somewhat effective in predicting win/loss and also to have a spec done within a week or two.

#### Progress and Issues
Have done a lot of research on finding the best way of creating an algorithm. Added some spec elements into backend. Helped imagine first design of the frontend. Some issues have been working on the algorithm there are certain method calls I require from the other classes that don't exist yet so for my stuff to work I need to write out more in the other classes.

#### Plans and Goals
A plan that I have to increase accuracy in my algorithm was to take into consideration age as a factor in determining how well a player is going to play the next season but more importantly the players projected stats for the next season. I have seen similar patterns in how players will hit a prime and the deteriorate. Most players don't improve past their 27th and 28th birthdays. Another factor I need to implement is how much playing time makes an influence on the game. While one player may not get a lot of time on one team, they may get a lot more attention on another which can change how winshares and other stats are calculated.

My goal is to find a way to implement these biases into my algorithm and finalize what I need from the other classes to do what I want to do.
