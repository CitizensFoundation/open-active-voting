FROM phusion/passenger-ruby21

MAINTAINER Robert Vidar Bjarnason <robert@citizens.is>

RUN echo 'version 0.1'

ENV HOME /root
ENV RAILS_ENV production

CMD ["/sbin/my_init"]

RUN apt-get install libyaml-dev

RUN rm -f /etc/service/nginx/down
RUN rm /etc/nginx/sites-enabled/default
ADD nginx.conf /etc/nginx/sites-enabled/oav_website.conf
# Add the rails-env configuration file
ADD rails-env.conf /etc/nginx/main.d/rails-env.conf

ADD . /home/app/oav_website
WORKDIR /home/app/oav_website
RUN chown -R app:app /home/app/oav_website
RUN sudo -u app bundle install --deployment
RUN sudo -u app RAILS_ENV=production rake assets:precompile

RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 80
