# Weekly Status Report 3

## Team Report
### Goals From Last Week
- Start implementing the frontend in React (Aaron, Amanda)
- Write the specification for backend (Juan, Ned)
- Implement Player and Team class (Caroline)

### Progress and Issues
This week, we did more research on the algorithm, which allowed us to recognize what additional data we will need and finalize what fields are needed for the Team and Player classes. On the frontend side, we started setting up the different components and pages of the web application. We also defined the software architecture and design for our project and came up with an updated schedule for HW4. We moved our weekly team meetings to Tuesdays instead of Monday, which worked well for us as all members participated.

### Plans and Goals
- Continue implementing the static mock-up pages in React (Aaron, Amanda)
- Finalize algorithm and find additional data needed. (Juan, Ned)
- Set up testing and write tests for Team and Player (Caroline)

## Team Member Contributions
### 1. Aaron
#### Goals From Last Week
- Begin hardcoding the frontend in ReactJS
- Work alongside backend to implement changes in design as seen fit

#### Progress and Issues
This week I began working on the games page for the frontend representation. I also have spent an ample amount time implementing the autofill searchbar, which has 
proven to be quite involved. This week, a lot of my learning has been around search options for our data, and I've found some unique tools that will aid in the
autofill funcitonality an save us a lot of coding time. I am still working on finsihing the search bar, as I need to know our JSON file format so that I can search
through it appropriately and effectively. However, Juan will be giving me this information shortly, so I don't think this block will last past the end of this week.

#### Plans and Goals
- Finish search bar component.
- Continue progress on the games page for a static mock up.

### 2. Amanda
#### Goals From Last Week
- Begin implementing the frontend for our web application in React.
- Search online for APIs that get NBA basketball images.

#### Progress and Issues
This week I worked on defining the software architecture for our project. I worked with Juan to figure out what data should be stored and how our database would be organized. I created an ER diagram of the data to show the relationship between the different entities better. I also started implementing a static mock-up of the home page in React. Once again, meeting in person to discuss the project worked well for me. By working on HW4, I learned more about the different software architectures, such as MVC, MVP, and MVVM. I had trouble deciding which software architecture would work well for our project, but I was able to choose one after talking more with the TAs. I am still slightly stuck finding the best method to get NBA images for our web application. To prevent this from blocking the progress of our work, I will use placeholder images on our web application for now.

#### Plans and Goals
- Add interactions to the Figma prototype.
- Continue implementing static mock-up of pages in React for our web application.
- Create a new logo for PerfectTeam.

### 3. Caroline
#### Goals From Last Week
- Finish Team and Player backend classes.
- Help the team complete HW4.

#### Progress and Issues
This week I finished a first draft of the Team and Player classes. We changed all of the statistics needed for the algorithm, so I added these to the Stats class and added getters for the fields of Player and Stats. I also helped the team complete HW5 by doing the coding guidelines section and updating my role and schedule. I don't have any huge blockers right now, other than not knowing what to work on next besides testing.

#### Plans and Goals
- Set up testing and write tests for Team and Player.
- Help the team complete HW5.

### 4. Juan
#### Goals From Last Week
- Help team to finisht the architecture and ER for our techinal spec.
- Finish the integration of the backend and the creation of the tables in our server.

#### Progress and Issues
This week I help the team working on the architecture and design of the project, I help with the software design where I structured the design of the application based on our MVC approach. Working on this I was able to create a system desing flow that will help us to understand how is the data is going to show up. By understanding this, I was able to help my teammates to create the ER diagram that will help us to understand the data and how is the data is structured in our system.

#### Plans and Goals
Finishing the parsing the data from CSV to JSON file and create the endpoints for our project. 
Finishing the structure of our JSON files that will be send to the frontend.

### 5. Ned
#### Goals From Last Week
A plan that I have to increase accuracy in my algorithm was to take into consideration age as a factor in determining how well a player is going to play the next season but more importantly the players projected stats for the next season. I have seen similar patterns in how players will hit a prime and the deteriorate. Most players don't improve past their 27th and 28th birthdays. Another factor I need to implement is how much playing time makes an influence on the game. While one player may not get a lot of time on one team, they may get a lot more attention on another which can change how winshares and other stats are calculated.

My goal is to find a way to implement these biases into my algorithm and finalize what I need from the other classes to do what I want to do.

#### Progress and Issues
This week I have been finalizing what I want for the algorithm and helping the other teammates with their classes. I have figured out what I want for the algorithm but the data that we collected doesn't completely match up with what I need as variables. We have added all the neccessary fields and stats to the team and player classes. Another issue that I will have is trying to find a way to adjust stats related to playing time since different players on different teams will have differing playing time numbers. For example a super star on a bad team will most likely play the whole game while a star surrounded by other great players will likely get more rest and play less.

#### Plans and Goals
My plan is to distribute the playing time minutes dependant on how much time they get on their current teams and scale the minutes to fit the 240 minutes that each team plays. I also need to find another source of stats that contain the missing variables that I need for the formula. Another plan I have is to work with Juan on helping him filter the data. My goal for this coming week is to have the algorithm done.
