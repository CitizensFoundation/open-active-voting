set :application, "open-active-voting"
set :domain, "ktest.betrireykjavik.is"
set :selected_branch, "master"
set :repository, "git@github.com:rbjarnason/open-active-voting.git"
set :use_sudo, false
set :deploy_to, "/home/ktest/sites/#{application}/#{selected_branch}"
set :branch, "#{selected_branch}"
set :user, "ktest"
set :deploy_via, :remote_cache
set :scm, "git"

# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "ktest.betrireykjavik.is"                          # Your HTTP server, Apache/etc
role :app, "ktest.betrireykjavik.is"                          # This may be the same as your `Web` server
role :db,  "ktest.betrireykjavik.is", :primary => true # This is where Rails migrations will run

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

namespace :assets do
  task :precompile, :roles => :web do
    run "cd #{current_path} && RAILS_ENV=production bundle exec rake assets:precompile"
  end

  task :cleanup, :roles => :web do
    run "cd #{current_path} && RAILS_ENV=production bundle exec rake assets:clean"
  end
end

#after :deploy, "assets:precompile"

task :after_update_code do
  run "ln -s   #{deploy_to}/#{shared_dir}/config/database.yml #{current_release}/config/database.yml"
end

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end

        require './config/boot'
        require 'airbrake/capistrano'
