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
 
### Usage
* Click on Sign Up to register as a user.
* Click on Log In to log in as a registered user.
* Click on View All Toys to view available toys.
* Click on My Toys to see your collection.
* Enter new toy info and click on Add New Toy.
* Click on I Had This button if you had that toy. 
* Click on Unclaim button to remove the toy from your collection.
 
 
