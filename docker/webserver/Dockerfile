FROM phusion/passenger-ruby33:3.0.2
MAINTAINER Robert Vidar Bjarnason <robert@citizens.is>

RUN echo 'version 5.10.23'

ENV HOME /root
ENV APP_DB_HOST 10.10.11.101

CMD ["/sbin/my_init"]

RUN apt-get update
RUN apt-get --assume-yes install libyaml-dev sudo
RUN apt-get --assume-yes install build-essential patch
RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD docker/webserver/nginx.conf /etc/nginx/sites-enabled/oav_website.conf
ADD docker/webserver/rails-env.conf /etc/nginx/main.d/rails-env.conf
ADD docker/webserver/self_signed_ssl/bundle.crt /etc/ssl/bundle.crt
ADD docker/webserver/self_signed_ssl/private.key /etc/ssl/private.key

RUN mkdir -p /etc/my_init.d
ADD docker/webserver/setup_app.sh /etc/my_init.d/setup_app.sh

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY . /home/app/oav_website

EXPOSE 443
