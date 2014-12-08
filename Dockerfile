FROM dockerfile/nodejs

ADD . /nz-popit
WORKDIR /nz-popit

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]

