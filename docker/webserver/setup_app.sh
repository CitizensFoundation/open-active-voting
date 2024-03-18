#! /bin/bash
chown -R app:app /home/app/oav_website
cd /home/app/oav_website

#sudo -u app gem update
#sudo -u app gem install bundler

#rm -r /home/app/oav_website/vendor/bundle

sudo -u app bundle install --deployment --verbose
sudo -u app bundle exec rake db:migrate RAILS_ENV=production
#sudo -u app bundle exec rake db:seed RAILS_ENV=production
mkdir -p /var/log/nginx

# If you are running behind a proxy you will need to add proxy_http and proxy_https veriables to all the sudo ruby calls
# Fe. sudo http_proxy="http://myproxy.net/" https_proxy="http://myproxy.net" -u app gem update
