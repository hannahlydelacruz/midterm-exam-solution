# Midterm Exam Solution

This repository contains the solutions for the midterm exam, which consists of five questions related to Git, JavaScript, Node.js, Express, and MySQL with Sequelize.

## Project Structure

- `question1.js`: Implements Git and GitHub basics by initializing a git repository, creating a file named `git-basic.txt`, and committing the change.
- `question2.js`: Contains a function `delayedGreeting` that logs a greeting message after a 2-second delay.
- `question3.js`: Sets up a simple Express.js server that listens on port 3000 and defines a `/test` route.
- `question4.js`: Implements a basic CRUD system for managing tasks with fields `id`, `name`, and `description`.
- `question5.js`: Connects to a MySQL database using Sequelize and defines a model for a `users` table, including a route to fetch all users.
- `git-basic.txt`: Contains the text "Write your full name".
- `package.json`: Configuration file for npm, listing dependencies and scripts for running the application.
  
## Getting Started

To set up and run the application, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/hannahlydelacruz/midterm-exam-solution.git
   ```

2. **Navigate to the project directory**:
   ```
   cd midterm-exam-solution
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the Express server**:
   ```
   node question3.js
   ```

5. **Access the server**:
   Open your browser and go to `http://localhost:3000/test` to see the JSON response.

## Explanation of Each Question's Implementation

- **Question 1**: Demonstrates basic Git commands to initialize a repository and commit changes.
- **Question 2**: Uses `setTimeout` to create a delayed greeting function.
- **Question 3**: Sets up an Express server and defines a simple route to test the server.
- **Question 4**: Implements a CRUD system using JavaScript arrays to manage tasks.
- **Question 5**: Connects to a MySQL database using Sequelize and defines a model for user management.

## License

This project is licensed under the MIT License.