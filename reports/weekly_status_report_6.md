# Weekly Status Report 6

## Team Report
### Goals From Last Week
- Finalize suggested players feature (Caroline)
- Add extra interactions to the create team page to improve user experience (Amanda)
- Change and clean data in database (Juan)
- Start looking into using ML for our backend algorithm (Ned, Amanda)
- Continue improving UI for games, teams, and player pages (Aaron)

### Progress and Issues
We improved the backend this week to have an endpoint for getting players' stats by name and functionality for the suggested players feature. We also fixed the typos in the player database and added URLs to their profile pictures so that we can have images. We improved the interactions on the Create Team page on the frontend by adding a clear button that allows users to remove all 12 players in a team. We also fixed the search bar to clear once the player clicks on the Add Player button. We are currently having trouble getting live game data for our Games page. We found an API that can return the game data for the day and are trying to figure out the best way to utilize the information returned by the API.

### Plans and Goals
- Peer review another project (everyone)
- Add support for player profile pictures in the frontend (Aaron & Amanda)
- Add suggested players from teams feature to the Create Team page (Amanda)
- Continue working on adding live game data to the Games page (Aaron)

## Team Member Contributions
### 1. Aaron
#### Goals From Last Week
- Improve UI on the pages I worked on (could be CSS or reformatting)
- Fully implement a teams grab funcitonality from database
- Look into webscraping games (if deemed necessary or benificial)
- Add images, such as player profiles

#### Progress and Issues
This week involved a lot fo research for me, as I was looking into appropriate API's at minimal to no cost that would allow us to update current game scores as they happened. i eventually located one with the help of our project manager that would give us the desired information, and began implementing a comonent titles "box score" that would update the given scores as they were updated. I also focused on completing the homework and added a few tests. I am currently not stuck, and just need oen more API call to work so that I can successfully implement the box score component. 

#### Plans and Goals
- Finish the games page
- add player profile images and other stats to the players page.

### 2. Amanda
#### Goals From Last Week
- Add extra interactions to create a team page that improves user experience
- Add suggested players for teams to quick add feature.
- Add images for players and the slideshow.
- Look into potentially using machine learning for backend.

#### Progress and Issues
This week I added a clear button to the Create Team page that removes all 12 players from the team. I also fixed the search bar to clear when the user clicks on the Add Player button, making it easier for users to continue searching for players quickly. I also started working on the suggested players for teams features and helped write the user documentation for HW7. I had trouble figuring out how to style and clear the search bar since we imported the react-search-autocomplete component. I figured out how to manipulate the existing component by searching for examples on the react-search-autocomplete GitHub repo and other examples online. I am currently not stuck on anything and will continue working on the suggested players feature. Since Juan has added the images for each player in the database, I also plan to work on getting the images to appear on the Create Team page.

#### Plans and Goals
- Continue working on suggested players for teams to quick add feature.
- Add images for players and the slideshow on the Create Team and Home page.
- Look into potentially using machine learning for backend.

### 3. Caroline
#### Goals From Last Week
- Get suggested players for teams working in the backend.
- Add tests for this feature.
- Help the team complete HW7.

#### Progress and Issues
This week I added an endpoint to the backend API to get players' stats by name. I also added to the quick add endpoint to allow the user to optionally supply 3 players' ranks to make sure they are included in the team, which will be used for the suggested players feature. I also added tests for both of these new functionalities. No major issues this week, which is good.

#### Plans and Goals
- Help the team complete HW8.
- Help frontend where they need and adjust backend to meet their needs.


### 4. Juan
#### Goals From Last Week
- Clean up database to fix typos
- Add any endpoints the frontend realizes they need

#### Progress and Issues
I spent most of my time this week updating the database. This included fixing a bug in which player names were replaced with team names. I also added necessary stats that were required for the algorithm to work. I altered the stats so that they were an all aroudn average, increasing accuracy for the algorithm. I also made a few minor changes to the database to improve functionailty for the frontend team.

#### Plans and Goals
- Continue to respond to frontend needs for endpoints
- update database as required

### 5. Ned
#### Goals From Last Week
The main plan for this next week is to work on adding small features and cleaning up bugs. The other goal is to try to see what I can do for a ML algorithm and see if that stretch goal will be possible in the time we have left.

#### Progress and Issues
This past week ive been updating the algorithm to better fit the actual statistics from this season. I also updated some test cases to fit the change. 

#### Plans and Goals
My goal is to continue to update the algorithm and make it more accurate as we change how some of the team lineups work.
