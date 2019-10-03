# Simple Task Manager
[Simple Task Manager](https://simple-task-management-tool.herokuapp.com) is a project management tool that allows to efficiently organize work on projects. It provides simple functionality for managers and regular users, helping customize workflows for each project and adjust work structure to specific requirements.

The tool offers convenient prioritization, sorting, and different views to manage your projects’ tasks easier.

### [Live](https://simple-task-management-tool.herokuapp.com)

## Features
* Create `Project` and `Task`
* Edit and delete `Project` and `Task`
* Set `Priority` for each `Task`
* Update status for `Task` between `TODO`, `Progress` and `Done`

### [API Documentation](https://documenter.getpostman.com/view/1729081/SVtPZrVy?version=latest)

## Tech Stack
* [Java](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) - Language
* [Spring Boot 2.0](https://spring.io/projects/spring-boot) - Api Development
* [MySQL](https://www.mysql.com/) - Database
* [React](https://reactjs.org/) - UI Library
* [Heroku](https://heroku.com/) - App Hosting
* [Free MySQL Hosting](https://www.freemysqlhosting.net/) - Database Hosting

## Prerequisite Technologies In Your Machine
* [Java 1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Maven 3.6](https://maven.apache.org/guides/getting-started/windows-prerequisites.html)
* [MySQL](https://www.mysql.com/)
* [Node 10.15.3](https://nodejs.org/en/)
* [React](https://reactjs.org/)
* [Spring Tool Suite](https://spring.io/tools3/sts/all)


## Installation

#### Clone Repo
```
git clone https://github.com/bmshamsnahid/Personal-Project-Management.git
```

#### Enable Environment
```
> Make sure your database server is up and running
> Create database
> Update `src\main\resources\application.properties` with suitable database configuration
> Open Project in Spring Tool Suite
> Make sure node.js is installed in your system
```

#### Run Application
```
> Update `pom.xml` using `maven`
> Run the `src\main\java\io\agileintelligence\ppmtool\PpmToolApplication.java` as Spring Boot App
> Go to `\ui` and install dependencies `npm i`
> Run the front end `npm start`
> Your app is available in `http://localhost:3000`
```

#### Deployment
Build the maven project
```
mvn clean install
```
Build the react side
```
npm run build
```
Put the react `ui\build` directory to `src\main\resources\static`

You are all set to go.


## Upcoming Features
* Manage development environment variable
* Switch position
* Searching
* Drag and drop
* Team collaboration
