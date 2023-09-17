# 🚀 Linfluence Web Application

## Before starting the application

Setting up the .env file

DATABASE_URL = "mysql://{user_name}:{password}@localhost:3306/{db_name}"


## Quick Start
1. Start the DB server (MySQLWorkBench)

```shell
$ mysql.server start # MacOS
$ net start mysql # Windows
$ service mysql start # ubuntu
```


2. Start Private Application (localhost:5002)

```shell
$ yarn dev #for development
$ yarn build #for optimized production build
$ yarn start #for production
```