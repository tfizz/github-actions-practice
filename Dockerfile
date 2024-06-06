FROM httpd:alpine3.16
COPY ./dist/ /usr/local/apache2/htdocs/
RUN chown -R 1001:1001 /usr/local/apache2/
EXPOSE 80
USER 1001