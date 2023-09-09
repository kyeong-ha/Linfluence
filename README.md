# 🚀 Linfluence Web Application


## Quick Start
1. Start the DB server (MySQLWorkBench)

```shell
$ mysql.server start # MacOS
$ net start mysql # Windows
$ service mysql start # ubuntu
```


2. Start Private Application (localhost:5002)

```shell
$ yarn private-dev #for development
$ yarn private-build #for optimized production build
$ yarn private-start #for production
```


3. Start Public Application (localhost:3000)

```shell
$ yarn public-dev #for development
$ yarn public-build #for optimized production build
$ yarn public-start #for production
```

## 프로젝트 구조 v1 (2023-09-09)


### 📁 private_app
Admin Web Application

### 📁 public_app
User Web Application

