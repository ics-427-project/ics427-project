# Welcome to the ics427-project wiki!

## Table of contents
* [Home](#home)
* [Contact Us](#contact-us)
* [User Guide](#user-guide)


## Home
The name of this application is called Study Hub and it allows for students to make study sessions with one another through the application. The main feature is the create study session where students can pick their time and date with a description of what they need help in and what class they are in. It will then be posted in a group list where every student can see everyone post and if they want to have a study session or help out that student then they can contact them. Another feature is the leaderboard that gives students an incentive to use the application as they can earn up the points to get certain rewards. 
![image](https://user-images.githubusercontent.com/70462461/116766170-ce9cd180-a9c4-11eb-8d56-3fe92ee3654e.png)

## Contact Us

Group Members:
Mark Matsuoka, Len Nguyen, Tyler Asato, Rusty Jacinto

## User Guide:
This section provides information of interest to Meteor developers wishing to use this code base as a basis for their own development tasks.

### Installation
First, [install Meteor](https://www.meteor.com/install).
![image](https://user-images.githubusercontent.com/70462461/116771350-72e34000-a9e6-11eb-8add-45a65e402069.png)

Second, go to the [ICS-427-Project page](https://github.com/ics-427-project/ics427-project), and click the "Use this template" button. Complete the dialog box to create a new repository that you own that is initialized with this template's files.
![image](https://user-images.githubusercontent.com/70462461/116771339-4c250980-a9e6-11eb-9529-3cc7c5fe25a0.png)

Third, go to your newly created repository, and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.
![image](https://user-images.githubusercontent.com/70462461/116771367-960def80-a9e6-11eb-8735-330477b53729.png)

Fourth, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

Finally, an additional library is required due to the interactive calendar we have installed in our site. Install this library with:

```
$ npm install --save @fullcalendar/react @fullcalendar/daygrid
```

### Running the system

 Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/ics-study-hub/ics-study-hub/blob/master/app/package.json):

 ```
 $ meteor npm run start
 ```

 The first time you run the app, it will create some default users and data. Here is the output:


```
meteor npm run start

> meteor-application-template-react@ start C:\Users\Len Nguyen\Documents\GitHub\ics427-project\app
> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../config/settings.development.json

[[[[[ C:\Users\Len Nguyen\Documents\GitHub\ics427-project\app ]]]]]

=> Started proxy.
=> Started MongoDB.
W20210430-14:45:33.558(-10)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20210430-14:45:33.626(-10)? (STDERR) While this implementation will work correctly, it is known to be
W20210430-14:45:33.627(-10)? (STDERR) approximately three times slower than the native implementation.
W20210430-14:45:33.627(-10)? (STDERR) In order to use the native implementation instead, run
W20210430-14:45:33.627(-10)? (STDERR) 
W20210430-14:45:33.627(-10)? (STDERR)   meteor npm install --save bcrypt
W20210430-14:45:33.627(-10)? (STDERR) 
W20210430-14:45:33.628(-10)? (STDERR) in the root directory of your application.
I20210430-14:45:34.783(-10)? Creating the default user(s)
I20210430-14:45:34.783(-10)?   Creating user admin@foo.com.
I20210430-14:45:35.012(-10)?   Creating user john@foo.com.
I20210430-14:45:35.197(-10)? User Count: 2
I20210430-14:45:35.198(-10)? Getting additional users.
I20210430-14:45:35.198(-10)? Loading user data from private/data.json
I20210430-14:45:35.198(-10)?   Creating user admin1@foo.com.
I20210430-14:45:35.386(-10)?   Creating user admin2@foo.com.
I20210430-14:45:35.573(-10)?   Creating user admin3@foo.com.
I20210430-14:45:35.760(-10)?   Creating user eharmon@chessreview.com.
I20210430-14:45:35.943(-10)?   Creating user cdiggory@hogwarts.edu.
I20210430-14:45:36.124(-10)?   Creating user charlie.kelly@sunny.com.
I20210430-14:45:36.305(-10)?   Creating user nickmiller@clydes.com.
I20210430-14:45:36.484(-10)?   Creating user schmidt@assstrat.com.
I20210430-14:45:36.663(-10)?   Creating user michael.scott@michaelscottpapercompany.com.
I20210430-14:45:36.847(-10)?   Creating user fryder@disney.com.
I20210430-14:45:37.033(-10)?   Creating user regionalmanager@dundermifflin.com.
I20210430-14:45:37.213(-10)?   Creating user john@doe.com.
I20210430-14:45:37.395(-10)?   Creating user mgray@greyslonememorial.com.
I20210430-14:45:37.577(-10)?   Creating user scooper@caltech.edu.
I20210430-14:45:37.762(-10)?   Creating user jon@nightswatch.org.
I20210430-14:45:37.945(-10)?   Creating user chanandler@aol.com.
I20210430-14:45:38.125(-10)?   Creating user gellar@dinomuseum.org.
I20210430-14:45:38.303(-10)?   Creating user lemon@thegirlieshow.com.
I20210430-14:45:38.481(-10)?   Creating user gilmore@aol.com.
I20210430-14:45:38.663(-10)?   Creating user tommy@picklesinventions.com.
I20210430-14:45:38.844(-10)?   Creating user morgan@flpd.com.
I20210430-14:45:39.024(-10)?   Creating user house@md.edu.
I20210430-14:45:39.205(-10)?   Creating user pparker@nyu.edu.
I20210430-14:45:39.387(-10)? User Count: 25
I20210430-14:45:39.394(-10)? Creating default data.
I20210430-14:45:39.394(-10)?   Adding to sessions: Johnny Johnson (john@foo.com)
I20210430-14:45:39.415(-10)?   Adding to sessions: Amanda McPhearson (john@foo.com)
I20210430-14:45:39.419(-10)? Creating default leaderboard.
I20210430-14:45:39.419(-10)?   Adding leaderboard: Philip Johnson (john@foo.com)
I20210430-14:45:39.427(-10)?   Adding leaderboard: Henri Casanova (john@foo.com)
I20210430-14:45:39.430(-10)? Loading data from private/data.json
I20210430-14:45:39.431(-10)?   Adding to sessions: Elizabeth Harmon (eharmon@chessreview.com)
I20210430-14:45:39.433(-10)?   Adding to sessions: Cedric Diggory (cdiggory@hogwarts.edu)
I20210430-14:45:39.434(-10)?   Adding to sessions: Charlie Kelly (charlie.kelly@sunny.com)
I20210430-14:45:39.436(-10)?   Adding to sessions: Nick Miller (nickmiller@clydes.com)
I20210430-14:45:39.438(-10)?   Adding to sessions: Winston Schmidt (schmidt@assstrat.com)
I20210430-14:45:39.439(-10)?   Adding to sessions: Michael Scott (michael.scott@michaelscottpapercompany.com)
I20210430-14:45:39.441(-10)?   Adding to sessions: Flynn Ryder (fryder@disney.com)
I20210430-14:45:39.442(-10)?   Adding to sessions: Dwight Schrute (regionalmanager@dundermifflin.com)
I20210430-14:45:39.444(-10)?   Adding to sessions: Walter White (john@doe.com)
I20210430-14:45:39.445(-10)?   Adding to sessions: Meredith Gray (mgray@greyslonememorial.com)
I20210430-14:45:39.447(-10)?   Adding to sessions: Sheldon Cooper (scooper@caltech.edu)
I20210430-14:45:39.448(-10)?   Adding to sessions: Jon Snow (jon@nightswatch.org)
I20210430-14:45:39.450(-10)?   Adding to sessions: Chanandler Bong (chanandler@aol.com)
I20210430-14:45:39.451(-10)?   Adding to sessions: Ross Gellar (gellar@dinomuseum.org)
I20210430-14:45:39.453(-10)?   Adding to sessions: Liz Lemon (lemon@thegirlieshow.com)
I20210430-14:45:39.454(-10)?   Adding to sessions: Lorelai Gilmore (gilmore@aol.com)
I20210430-14:45:39.456(-10)?   Adding to sessions: Tommy Pickles (tommy@picklesinventions.com)
I20210430-14:45:39.457(-10)?   Adding to sessions: Dexter Morgan (morgan@flpd.com)
I20210430-14:45:39.459(-10)?   Adding to sessions: Gregory House (house@md.edu)
I20210430-14:45:39.460(-10)?   Adding to sessions: Peter Parker (pparker@nyu.edu)
I20210430-14:45:39.464(-10)?   Adding to sessions: Jared Dunn (john@foo.com)
I20210430-14:45:39.465(-10)?   Adding to sessions: Jim Halpert (john@foo.com)
I20210430-14:45:39.468(-10)?   Adding to sessions: Glen Rhee (john@foo.com)
I20210430-14:45:39.469(-10)?   Adding to sessions: Lucille Bluth (john@foo.com)
I20210430-14:45:39.471(-10)?   Adding to sessions: Lizzy Mcguire (john@foo.com)
I20210430-14:45:39.472(-10)?   Adding to sessions: Chuckie Finster (john@foo.com)
I20210430-14:45:39.474(-10)?   Adding to sessions: Huey Freeman (john@foo.com)
I20210430-14:45:39.475(-10)?   Adding to sessions: James Smith (john@foo.com)
I20210430-14:45:39.477(-10)?   Adding to sessions: Maria Garcia (john@foo.com)
I20210430-14:45:39.479(-10)?   Adding to sessions: David Cross (john@foo.com)
I20210430-14:45:39.481(-10)?   Adding to sessions: Mike McCarthy (john@foo.com)
I20210430-14:45:39.482(-10)?   Adding to sessions: Mike Tomlin (john@foo.com)
I20210430-14:45:39.484(-10)?   Adding to sessions: Jeremy Lin (john@foo.com)
I20210430-14:45:39.485(-10)?   Adding to sessions: Alfred Alcott (john@foo.com)
I20210430-14:45:39.487(-10)?   Adding to sessions: Eric Buchanon (john@foo.com)
I20210430-14:45:39.488(-10)?   Adding to sessions: Luke Deems (john@foo.com)
I20210430-14:45:39.490(-10)?   Adding to sessions: Alice Hopper (john@foo.com)
I20210430-14:45:39.491(-10)?   Adding to sessions: Felix Allano (john@foo.com)
I20210430-14:45:39.493(-10)?   Adding to sessions: Bethany Dobs (john@foo.com)
I20210430-14:45:39.494(-10)?   Adding to sessions: Christine Carson (john@foo.com)
I20210430-14:45:39.496(-10)?   Adding to sessions: Albert Antonio (john@foo.com)
I20210430-14:45:39.498(-10)?   Adding to sessions: Richard Wright (john@foo.com)
I20210430-14:45:39.500(-10)?   Adding to sessions: Lillian Alcos (john@foo.com)
I20210430-14:45:39.502(-10)?   Adding to sessions: Susan Marsas (john@foo.com)
I20210430-14:45:39.503(-10)?   Adding to sessions: Kawika Anderson (john@foo.com)
I20210430-14:45:39.505(-10)?   Adding to sessions: Lucy Deeds (john@foo.com)
I20210430-14:45:39.507(-10)?   Adding to sessions: Molly Winterbottom (john@foo.com)
I20210430-14:45:39.508(-10)?   Adding to sessions: Tony Chopper (john@foo.com)
I20210430-14:45:39.510(-10)?   Adding to sessions: Red Milkerson (john@foo.com)
I20210430-14:45:39.512(-10)?   Adding to sessions: Bell Adam (john@foo.com)
I20210430-14:45:39.514(-10)?   Adding to sessions: Milton Rice (john@foo.com)
I20210430-14:45:39.516(-10)?   Adding leaderboard: Elizabeth Harmon (eharmon@chessreview.com)
I20210430-14:45:39.517(-10)?   Adding leaderboard: Michael Scott (michael.scott@michaelscottpapercompany.com)
I20210430-14:45:39.563(-10)? Monti APM: completed instrumenting the app
=> Started your app.

=> App running at: http://localhost:3000/


```

### Walkthrough

The following sections describe the major features of this template.

### Directory structure

The top-level directory structure is:

```
app/        # holds the Meteor application sources
config/     # holds configuration files, such as settings.development.json
doc/        # holds developer documentation, user guides, etc.
.gitignore  # don't commit IntelliJ project files, node_modules, and settings.production.json
```

This structure separates documentation files (such as screenshots) and configuration files (such as the settings files) from the actual Meteor application.

The app/ directory has this structure:

```
client/
  main.html      # The boilerplate HTML with a "root" div to be manipulated by React.
  main.js        # import startup files.

imports/
  api/           # Define collections
    stuff/       # The Stuffs collection definition
  startup/       # Define code to run when system starts up (client-only, server-only, both)
    client/
    server/
  ui/
    layouts/     # Contains top-level layout (<App> component).
    pages/       # Contains components for each page.
    components/  # Contains page elements, some of which could appear on multiple pages.

node_modules/    # managed by npm

public/          # static assets (like images) can go here.

server/
   main.js       # import the server-side js files.

tests/			## Implementation of testcafe to test code
```

### Security Notes
Most of the security testing on this application were done manually as there were no automated fuzzing tester that can check every possible scenario so there are possibilities of having a security problem that was not tested in this current release. As for the functions application, there are currently some Pass FSR(with exceptions) and FSR escalation like the sign in feature that does not check the amount of incorrect login attempts, leaderboards, and creating a session but will be updated and patched to fix those issues in a later release version.

### Release License
[License](https://github.com/ics-427-project/ics427-project/blob/master/LICENSE) and 
[Release](https://github.com/ics-427-project/ics427-project/releases/tag/v1.2)
