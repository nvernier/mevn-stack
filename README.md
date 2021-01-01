# mevn-stack
MEVN: MongoDB-Express-Vue.js-Node.js stack 'template' with authentication

## Run it
1. 
```bash 
git clone
```
2. 
```bash
cd /project-name
```
3. 
```bash
cp .env.example .env
cp app/backend/.env.example app/backend/.env
```
edit thus created .env files
4. 
```bash
docker-compose run --rm --entrypoint "npm install" backend
docker-compose run --rm --entrypoint "npm install" frontend
```
5.
```bash
docker-compose up -d
```

