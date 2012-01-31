set :application, "open-active-voting"
set :domain, "br1"
set :selected_branch, "master"
set :repository, "git://github.com/rbjarnason/open-active-voting.git"
set :use_sudo, false
set :deploy_to, "/home/ktest/sites/#{application}/#{selected_branch}"
set :branch, "#{selected_branch}"
set :user, "ktest"
set :deploy_via, :remote_cache
set :scm, "git"

# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "br1"                          # Your HTTP server, Apache/etc
role :app, "br1"                          # This may be the same as your `Web` server
role :db,  "br1", :primary => true # This is where Rails migrations will run

# if you're still using the script/reaper helper you will need
# these http://github.com/rails/irs_process_scripts

If you are using Passenger mod_rails uncomment this:
namespace :deploy do
  task :after_update_code do
    run "cd #{release_path}; RAILS_ENV=production rake assets:precompile"
  end

  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
end
