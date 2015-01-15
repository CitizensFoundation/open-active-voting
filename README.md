Open Active Voting

Simple ballot based voting system.

Editor is here:
https://github.com/rbjarnason/open-active-voting-editor

Install Ubuntu dependencies
````bash
sudo apt-get -yqq install curl git build-essential libxslt-dev libxml2-dev libmysqlclient-dev mysql-server
````

Install Ruby 2.0
````bash
http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.5.tar.gz
tar -xvzf ruby-2.1.5.tar.gz
cd ruby...
make
sudo make install
````

Install bundler and dependencies
````bash
gem install bundler
cd open-active-voting
bundle install
````

Setup the database (edit config file)
````bash
cd config
vi database.yml
# Edit database.yml to point to your MySQL server
cd ..
rake db:create
rake db:schema:load
rake db:seed
````

Running the test server
````bash
rails server -e test
````

In a new terminal Running the tests
````bash
cd open-active-voting
bundle exec rake test:integration
````

Browsing the test system

Open http://localhost:3000/ in your browser
