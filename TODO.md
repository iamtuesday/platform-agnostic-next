## Sources

- https://pottencia.com/
- https://potenciascoit.framer.website/#home
- https://authjs.dev/getting-started/migrating-to-v5#authenticating-server-side
- https://nextjs.org/learn/dashboard-app/adding-authentication
- https://nodejs.org/api/stream.html
- https://www.freecodecamp.org/espanol/news/node-js-streams-todo-lo-que-necesitas-saber/
  https://framer.com/projects/POTENCIA-SCOIT-EXPERIENCE--2T276vmyByh3M1SK6JNB-7gDt9?node=ot0YTdGLB

## Postgress

- sudo apt update
- sudo apt install postgresql postgresql-contrib
- sudo systemctl status postgresql
- sudo -i -u postgres
- psql

- CREATE USER hard WITH PASSWORD 'Roy@@2024';
- CREATE DATABASE agnostic_db WITH OWNER hard;
- \q --> Exists database

- sudo systemctl restart postgresql

- npx prisma migrate dev --name init
- psql "postgresql://hard:Roy@@2024@localhost:5432/agnostic_db"
- sudo -u postgres psql
- \du
- sudo -u postgres psql -h localhost -d agnostic_db -U hard
- ALTER USER hard CREATEDB;

## Prisma

### npx prisma migrate dev --name init

- It creates a new SQL migration file for this migration
- It runs the SQL migration file against the database

### npx prisma db push

npx prisma studio
