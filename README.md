# ihadthat-react-redux-api
## README
### Description
I Had That! is an app with a Javascript frontend and Ruby on Rails API backend to create a collection of toys you had from your childhood. 

### Installation Instructions
Fork and clone the repo to your local machine.

Change directory into ihadthat-backend and run:
* cd ihadthat-backend
* bundle install

### Setup and seed the database:
* rake db:create
* rake db:migrate
* rake db:seed

Run the rails server from localhost:3000
* rails s

You should see the list of toys from `localhost:3000/api/v1/toys`

Navigate to the ihadthat-react-redux-api/ihadthat-frontend.
* cd ../ihadthat-frontend
cd npm start

You should see the app from `localhost:3001`.
 
 
 
