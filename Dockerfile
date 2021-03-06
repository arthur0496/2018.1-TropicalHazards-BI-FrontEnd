FROM node:slim

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash - && apt-get install -y nodejs tree libfontconfig bzip2 xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 && npm install --quiet --global vue-cli

WORKDIR /TropicalHazards-BI-FrontEnd

COPY . /TropicalHazards-BI-FrontEnd

COPY package.json /package.json

RUN npm install
