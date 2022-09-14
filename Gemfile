source 'https://rubygems.org'

ruby '2.7.6'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
#gem 'activesupport', '4.2.7.1', :path => "lib/rails/activesupport-4.2.7.1"
#gem 'rake'
gem 'rails', '5.2.8.1'
gem 'tzinfo-data'
gem 'rails-html-sanitizer'
gem 'browser'
gem "sprockets", "<4"

# Use sqlite3 as the database for Active Record
#gem 'sqlite3'
# Use SCSS for stylesheets
#gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
#gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7o
#gem "browser"
gem 'globalize'
# Gems used in all environments including production
gem "airbrake" # Online error reporting system
gem 'haml' # generate html from templates
#gem 'jquery-rails' # Jquery for Rails
gem 'mysql2' # The Mysql Driver
gem 'nokogiri'# XML/HTML Parsing library
gem 'psych'
#gem 'soap4r', :path =>"lib/soap4r" # git => 'https://github.com/rbjarnason/soap4r.git'
gem 'ruby-saml', :path => "lib/ruby-saml" # :git => 'https://github.com/rbjarnason/ruby-saml.git', :ref=>"63ce604db2e562eeb25467e7e1655d16bab7d9cb"
gem "passenger"
gem 'loofah'
gem "ffi"
gem "rubyzip"
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'awesome_print'
 # gem 'watir-webdriver'
  gem 'headless'
  gem 'turn', :require => false
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

