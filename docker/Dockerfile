FROM debian:12
EXPOSE 80
VOLUME /var/www

WORKDIR /root/
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install php php-mbstring php-sqlite3 -y
RUN a2enmod rewrite
RUN sed -i 's/^display_errors\s*=.*/display_errors = On/' /etc/php/8.2/apache2/php.ini
RUN echo 'html_errors = Off' >> /etc/php/8.2/apache2/php.ini
RUN usermod -u 1000 www-data
RUN groupmod -g 1000 www-data
COPY conf/000-default.conf /etc/apache2/sites-available/
CMD /etc/init.d/apache2 start && tail -f /var/log/apache2/access.log
