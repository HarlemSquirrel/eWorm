# eWorm
A book rating app on rails.

This was created for a series of projects for the Full Stack Web Development track at [Learn Verified][learn-co].

# Live Single Page App
I am now hosting the SPA version of this with Heroku. You can check it out at [eworm.herokuapp.com](eworm.herokuapp.com)

# Taking a Test Drive Yourself
You can get up and running by first cloning this repo.
```
git clone https://github.com/HarlemSquirrel/eWorm.git
```
Then take a look at the branches with `git branch -a` and switch to a branch with `git checkout <branch-name>` The master branch has the first web app I built with rails running everything. The `jQuery-and-JSON` branch has some resources loading with JQuery talking to Rails via JSON get/post requests. The `angular-single-page-app` branch has more enhancements with everything running on a single page. Angular is really powerful and you can see what I've learned to implement.

Next, you'll need to install the gems. Remember, if you switch branches you will need to run this again.
```
bundle install
```
If you're trying out the one-page Angular app, you'll need [Bower](https://github.com/bower/bower) which can be installed with [NPM](https://github.com/npm/npm).
```
sudo npm install -g bower
bower install
```

To get the database up and running...
```
rake db:create db:migrate
```

You can get some fake data and a user account test@test.net with password 'testwecan' by running...
```
rake db:seed
```

You can then get the server up and running.
```
rails s
```

# Tests
There are some tests I wrote for the models and controllers that you can run. The controller tests are not helpful with the angular front-end and so I have commented out most of them on that branch.
```
$ rspec
...........................................

Finished in 0.85603 seconds (files took 1.92 seconds to load)
43 examples, 0 failures
```

And finally visit http://localhost:3000 to take her for a spin!

[learn-co]: http://learn.co
