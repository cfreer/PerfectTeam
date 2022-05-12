# Weekly Status Report 5

## Team Report
### Goals From Last Week
- Finish first draft of backend (Caroline, Ned, Juan)
- Finish first draft of frontend (Aaron, Amanda)
- Combine front and backend to create a beta release (Everyone)

### Progress and Issues


### Plans and Goals
- Finalize suggested players feature (Caroline)
- Add extra interactions to frontend to improve user experience (Amanda)


## Team Member Contributions
### 1. Aaron
#### Goals From Last Week
- Finish a basic games page
- decide how we intend to keep the games page up to date.
- Begin work on players page.

#### Progress and Issues
This week I was able to complete a basic page for both games and teams, in which the necessary information could be displayed. I also resolved the issue with keeping
games up to date, as currently the playoffs are nearing completion, and I will be able to include all games for the time being, but in the future adn if time allows, I will webscrape the data or take the data from a API call to include current games. I was also able to debug and with some help, fully implement the autofill searchbar as a component. I was able to add this component ot the players page so players could be searched for informative purposes. The major functions now also correctly work with API, so I look to increase the use of these functions on other pages in the future. There were certianly a lot fo challenges this week with accessing the API and making the pages function accordingly, but we were eventually able to complete that. There is currently nothing blocking me, which is a nice change of pace.

#### Plans and Goals
- Improve UI on the pages I worked on (could be CSS or reformatting)
- Fully implement a teams grab funcitonality from database
- look into webscraping games (if deemed necessary or benificial)
- Add images, such as player profiles

### 2. Amanda
#### Goals From Last Week
- Add interactions to the Figma prototype.
- Finish implementing pages in React for our web application.
- Help integrate frontend and backend.

#### Progress and Issues
I worked on adding a lot of features to the front end. I added the Create Team page, Quick Add Team feature, and more unit tests for the different components and pages. I also updated the README.md to reflect the directory changes made to our repo to separate frontend and backend files. As we worked on integrating the frontend and backend, the API documentation written by the backend group was very helpful in understanding how the create the fetch calls. I learned that a lot of work is needed to develop a beta version and integrate the frontend and backend. I had trouble figuring out how to update a parent component state from a child component, but I was able to figure this out by passing a callback function to the child component. I will continue to add more interactions that improve user experience and add another suggestion feature that suggests players for teams.

#### Plans and Goals
- Add extra interactions to create a team page that improves user experience
- Add suggested players for teams to quick add feature
- Add images for players and the slideshow

### 3. Caroline
#### Goals From Last Week
- Help the team complete HW6.
- Get the quick add feature for teams working.

#### Progress and Issues
I did a lot of work on the backend this week. We reformatted the backend to fully be in the API, so I added the player and team routes. I also updated the testing documentation and added API testing. One issue was when changes were made to the database, it would break the API, but adding the API tests has helped with this issue, and we will likely not be making a lot more changes to the database.

#### Plans and Goals
- Get suggested players for teams working in the backend.
- Add tests for this feature.
- Help the team complete HW7.


### 4. Juan
#### Goals From Last Week
- Finish the integration of the Module APIs
- Have a beta where the data can flow from end-to-end

#### Progress and Issues
I set up the API and database for the backend this week and also added endpoints for the quick add and NBA teams routes. I ran into some issues with getting our API to connect to our mongoose database but got them sorted out. Additionally, I had trouble finding a way to get the API hosted on firebase, but the team was able to get it hosted on Heroku instead.

#### Plans and Goals
- Clean up database to fix typos
- Add any endpoints the frontend realizes they need

### 5. Ned
#### Goals From Last Week
The main goal is to finish the beta release by friday hopefully before our weekly meeting so we can show Ardi our progress. My personal goal is to have our algorithm working and being somewhat accurate before we spend time testing it.

#### Progress and Issues

#### Plans and Goals

