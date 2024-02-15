FROM php:8.1-fpm
RUN pecl install xdebug-3.2.1 \
	&& docker-php-ext-enable xdebug

COPY ./conf.d /usr/local/etc/php/conf.d

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer