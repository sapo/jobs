FROM php:8.1-fpm
RUN pecl install xdebug-3.2.1 \
	&& docker-php-ext-enable xdebug

RUN docker-php-ext-install mysqli pdo pdo_mysql

COPY ./conf.d /usr/local/etc/php/conf.d

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer