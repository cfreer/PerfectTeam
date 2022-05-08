# Weekly Status Report 4

## Team Report
### Goals From Last Week
- Continue implementing the static mock-up pages in React (Aaron, Amanda)
- Finalize algorithm and find additional data needed. (Juan, Ned)
- Set up testing and write tests for Team and Player (Caroline)

### Progress and Issues
We got our CI and testing set up through GitHub for both the frontend and backend this week. We were able to fix the React version and library issues for the frontend and finish the NavBar, App, and Home page components. We also added unit testing for React components using Jest. Besides meeting on Zoom for our weekly team meeting, meeting in person to work on the homework assignment worked well for us. We learned how to set up GitHub Actions to automate testing.

### Plans and Goals
- Finish first draft of backend (Caroline, Ned, Juan)
- Finish first draft of frontend (Aaron, Amanda)
- Combine front and backend to create a beta release (Everyone)


## Team Member Contributions
### 1. Aaron
#### Goals From Last Week
- Finish search bar component.
- Continue progress on the games page for a static mock up.

#### Progress and Issues
This week my primary focus was to finish up the autofill search bar component, which I was successfully able to complete thanks to the JSON file being done.
I also continued to work on the games page, but need to decide how we plan to update the page based on current games, which may just require weekly work to 
be accurate. I am planning to finish the basic setup for the games page and work on the players page. Meeting in person was incredibly beneficial to me, as it 
streamlined the processes that I was currently working on. We plan to continue this this week. Otherwise I have been fixing bugs as they come up, but not too many errors so far.

#### Plans and Goals
- Finsih a basic games page
- decide how we intend to keep the games page up to date.
- Begin work on players page.

### 2. Amanda
#### Goals From Last Week
- Add interactions to the Figma prototype.
- Continue implementing static mock-up of pages in React for our web application.
- Create a new logo for PerfectTeam.

#### Progress and Issues
I worked on adding a new workflow to GitHub Actions that builds and tests the frontend of our web application. Also, I set up more React libraries in our project and finished implementing the NavBar component, App, and Home pages in React. I added Jest unit tests for the NavBar and App components, and I am currently working on tests for the Home page. Additionally, I created a new logo for PerfectTeam. Meeting in person to discuss the project worked well for me. This week I learned how to set up GitHub Actions and add our own workflows to automate. I had trouble adding the React libraries to our project, but I fixed the errors by creating a new React project and reinstalling everything. Currently, I am not really stuck on anything and will continue to work on implementing all components and pages of the web application for our beta release next week.

#### Plans and Goals
- Add interactions to the Figma prototype.
- Finish implementing pages in React for our web application.
- Help integrate frontend and backend.

### 3. Caroline
#### Goals From Last Week
- Set up testing and write tests for Team and Player.
- Help the team complete HW5.

#### Progress and Issues
This week I got our CI of choice, GitHub Actions, set up. I also added JUnit tests for the Team class, but I realized I do not yet have a need for testing for the Player class, as it does not have any functionality except for getting and setting fields. One thing I am worried about is getting everything together for our beta release next week.

#### Plans and Goals
- Help the team complete HW6.
- Get the quick add feature for teams working.

### 4. Juan
#### Goals From Last Week
- Finishing the parsing the data from CSV to JSON file and create the endpoints for our project.
- Finishing the structure of our JSON files that will be send to the frontend.

#### Progress and Issues
This week I was able to finished querying the data and putting together some of the data tables necessary for the project to follow. At the same time, I created some JUnit tests to test how the data flow into the different parameters. Finishing the structure of our JSON files helped us to understand what is the necessary that we need for our algorithm and make sure it aligns with the parameters in our statical model.

#### Plans and Goals
- Finish the integration of the Module APIs
- Have a beta where the data can flow from end-to-end


### 5. Ned
#### Goals From Last Week
My plan is to distribute the playing time minutes dependant on how much time they get on their current teams and scale the minutes to fit the 240 minutes that each team plays. I also need to find another source of stats that contain the missing variables that I need for the formula. Another plan I have is to work with Juan on helping him filter the data. My goal for this coming week is to have the algorithm done.

#### Progress and Issues
This week I finished the algorithm and helped other group members work through any problems they had. I also helped with hw 5 adding justifications for different design choices. One issue we had was a miscomunication I had with Ardi but we dealt with it. Another issue we may have is finishing the beta.

#### Plans and Goals
The main goal is to finish the beta release by friday hopefully before our weekly meeting so we can show Ardi our progress. My personal goal is to have our algorithm working and being somewhat accurate before we spend time testing it.
