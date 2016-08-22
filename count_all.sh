#!/bin/bash
stty -echo
docker run -i -e "RAILS_ENV=production" -e "APP_DB_HOST=10.10.11.101" -e "APP_DB_DATABASE=oav_production" -e "APP_DB_USERNAME=oav_user" -e "APP_DB_PASSWORD=Soda6tream" -e "APP_DB_PORT=3306" -v /home/ibui/app/open-active-voting:/home/app/oav_website -v /home/ibui/counting_key:/home/app/counting_key yrpri/oav4.6.11 /sbin/my_init --skip-startup-files --skip-runit -- sudo -u app -- sh -c 'cd /home/app/oav_website; RAILS_ENV=production private_key=/home/app/counting_key/privkey.pem bundle exec rake counting:count;'
stty echo
printf "\n"
