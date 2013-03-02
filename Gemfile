source 'http://rubygems.org'

gem 'rails', '3.2.12'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'execjs'
  gem 'therubyracer'
  gem 'sass-rails'
  gem 'uglifier'
end

# Gems used in all environments including production
gem "airbrake" # Online error reporting system
gem 'haml' # generate html from templates
gem 'jquery-rails' # Jquery for Rails
gem 'mysql2' # The Mysql Driver
gem 'dalli' # Memcache driver
gem 'capistrano' # Used to manage deployments to staging servers
gem 'nokogiri' # XML/HTML Parsing library
gem 'soap4r', :git => 'git://github.com/felipec/soap4r.git'

group :development, :test do
  # Pretty printed test output
  #gem 'waitr'
  gem 'awesome_print'
  gem 'watir-webdriver'
  gem 'psych', '1.2.2'
  gem 'headless'
  gem 'turn', '~> 0.8.3', :require => false
end
