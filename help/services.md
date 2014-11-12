---
layout: help
title: Services
---

### Postgresql

Version 9.3 with Contrib package are preinstalled and run automatically. Login: `postgres`, without the password

    psql -U postgres -c "create database test;"


### Mysql

Version 5.6 is preinstalled and run automatically. Login: `root`, without the password

    mysql -u root -e "create database test"

### MongoDB

Version 2.6.5 is preinstalled, to run, issue:

    services:
      - mongodb

### Redis

Version 2.8.5 is preinstalled and run automatically

### Rabbitmq

Version 3.3.4 is preinstalled; to run, issue:

    services:
      - rabbitmq

### Elasticsearch

Version 1.2.1 is preinstalled; to run, issue:

    services:
      - elasticsearch

### PhantomJS

Version 1.9.7 is preinstalled

### SphinxSearch

Version 2.2.5 is preinstalled
