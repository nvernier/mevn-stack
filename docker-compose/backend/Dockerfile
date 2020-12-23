FROM node:14-buster

ARG user
ARG uid

# Replace node user with a custom one
RUN userdel -r node
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user && \
    chown -R $user:$user /home/$user
COPY --from=node:14-buster /home/node/.profile /home/$user/
COPY --from=node:14-buster /home/node/.bashrc /home/$user/
COPY --from=node:14-buster /home/node/.bash_logout /home/$user/

WORKDIR /var/www

USER $user
