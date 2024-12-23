# SkillsSprout

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [User Story](#userstory)
- [Description](#description)
- [Usage](#usage)
- [Build](#builds)
- [License](#license)
- [Questions](#questions)

## User Story
As a user, I want to be able to search GitHub and Google Books to find resources on a coding and/or programming topic to help me learn more about that skill.

## Description
This application uses React, Node.js, Express.js, PostgreSQL, Sequelize, APIs, and Render to create the front and back ends of an application that provides a resources for learners and/or aspiring developers looking to improve certain skills.  Upon creating an account and opening a search, the application will provide the user with links to resources in GoogleBooks and GitHub user profiles that may be able to provide them with examples and learning resources.

## Usage
https://skillsshareproject.onrender.com
Create an account or login
Complete a search of the database to connect with users, Google Books, and GitHub profiles
Evaluate results 
Click next to get new results

## Build
Install dependencies
```sh
npm i
```
Connect to your Postgres server and run the following command
```postgres
\i server/db/schema.sql
```
Once you have created the database, fill in `.env` file with `DB_NAME`, `DB_USER`, `DB_PASSWORD` and then start the application.
```
npm run start
```

## License 
This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Questions
Reach out to our group via GitHub (all collaborators listed on repository).

