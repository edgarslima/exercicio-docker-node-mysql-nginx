FROM node:18 AS build

RUN apt update && \
    apt install -y wget netcat-traditional && \
    wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for
    
WORKDIR /usr/src/app

#VOLUME [ "./node:/usr/src/app/" ]

#COPY package*.json ./
#COPY index.js ./



#CMD [ "node", "index.js" ]