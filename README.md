# e-commerce-back-end

![Badge](https://img.shields.io/badge/License-MIT-lightblue.svg)

![Screenshot of routes during testing](https://github.com/tracybrtn/e-commerce-back-end/blob/2a361d71b3586e83a17144ba1ddfdcfdf4ef057f/assets/images/insomnia-routes-test.png)

## Description

Back end for an e-commerce site that uses Express.js, Sequelize, and MySQL2.

## Table of Contents

- [e-commerce-back-end](#e-commerce-back-end)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Built with](#built-with)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

### User Story

AS A manager at an internet retail company

- I WANT a back end for my e-commerce website that uses the latest technologies
  - SO THAT my company can compete with other e-commerce companies
  
### Acceptance Criteria

GIVEN a functional Express.js API

- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
  - THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
  - THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
  - THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia for categories, products, or tags
  - THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
  - THEN I am able to successfully create, update, and delete data in my database

## Installation

[This walk-through demonstrates how to install the application.](https://watch.screencastify.com/v/FXB5YTBBpyngvnWLqVQd).

1. Make sure you have `node.js` and `MySQL` installed in your local machine.
2. Clone this repo or download the code. Open it with vscode
3. Create a .env file in the root directory of the repository to connect to your MySQL database.

        DB_NAME=ecommerce_db
        DB_PASSWORD=(yourpassword) 
        DB_USER=(yourusername)
4. Run the following commands:

        npm init
        npm install dotenv
        npm install mysql2
        npm install express
        npm install sequelize

## Usage

After [installing](#installation) the application, you will need to complete the following steps.

Step 1: Connect to the database by running `mysql -u(your username) -p` then enter your password. These need to match the ones from the .env file. Once you are logged in source the schema.sql by inputting `source db/schema.sql`. Exit MySQL.

Step 2: Seed the database with sample data used for testing purposes. In the root directory, run the command `npm seed` on your terminal.

Step 3: Start the server by running `npm start`.

Once the server is running you can use Insomnia to test the routes.

[This walk-through video walks the user through all the API routes](https://watch.screencastify.com/v/FXB5YTBBpyngvnWLqVQd).

## Built with

- Node.js
- Sequelize
- MySQL2
- Express.js
- Dotenv

## License

This application is licensed under MIT.

## Contributing

If you would like to contribute to this project reach out to me. You can find my contact information in the [Questions](#questions) section. You are also welcome to fork the repository.

If you decide to fork it, then:

1. Create your feature branch
2. Commit your changes
3. Push your branch
4. Submit a pull request

## Tests

Not applicable at the moment.

## Questions

If you have any questions about this project, contact me at tracynburton@gmail.com.
Don't forget to check out my other projects! Visit [my github](https://github.com/tracybrtn).
