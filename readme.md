
### 初始化项目及 连接 docker 中的mongodb

prisma init hello-mongo

docker-compose up -d
// reset your Docker containers
docker ps
prisma deploy

npm init -y
npm install --save prisma-client-lib
cd.>index.js

node index.js
// update datamodel.prisma
prisma deploy
prisma generate

http://localhost:4466/_admin

docker container ls
docker exec -it hello-mongo_mongo_1 bash

// use admin
// db.auth('prisma', 'prisma')
mongo -u 'prisma' -p 'prisma'
show dbs

// use database name
use default_default
show collections
db.users.findOne()