# 0x05. NodeJS Basics

This project focuses on the fundamentals of Node.js, including creating HTTP servers, using modules, asynchronous programming, and Express.js.

---

## Learning Objectives

By the end of this project, you should be able to:

- Run JavaScript using Node.js.
- Use Node.js modules.
- Use specific Node.js modules to read files.
- Use the `process` module to access command-line arguments and the environment.
- Create a small HTTP server using Node.js.
- Create a small HTTP server using Express.js.
- Create advanced routes with Express.js.
- Use ES6 features with Node.js (using `babel-node`).
- Use `nodemon` to develop faster.

---

## Resources

You should review the following materials to complete this project:

- [Node.js Getting Started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API Documentation](https://nodejs.org/api/process.html)
- [Child Process Module](https://nodejs.org/api/child_process.html)
- [Express Getting Started](https://expressjs.com/en/starter/installing.html)
- [Mocha Documentation](https://mochajs.org/)
- [Nodemon Documentation](https://nodemon.io/)

---

## Requirements

- All code should follow `ESLint` guidelines.
- Files will be interpreted/compiled on Ubuntu 18.04 LTS using Node.js version `12.x.x`.
- All `.js` files should end with a new line.
- A `README.md` file at the root of the folder is mandatory.
- Code will be tested using Jest: `npm run test`.
- Code should pass `ESLint` and testing: `npm run full-test`.

---

## Project Structure

The project includes the following files and directories:

### Provided Files

1. `database.csv` - A sample CSV file used in various tasks.
2. `package.json` - Contains project dependencies and scripts.
3. `babel.config.js` - Babel configuration for ES6 transpilation.
4. `.eslintrc.js` - Configuration for ESLint.

### Tasks

#### 0. Executing Basic JavaScript with Node.js
- File: `0-console.js`
- Function: `displayMessage(string)`
- Prints the string to STDOUT.

#### 1. Using `process.stdin`
- File: `1-stdin.js`
- Implements an interactive program using `process.stdin`.

#### 2. Reading a File Synchronously
- File: `2-read_file.js`
- Function: `countStudents(path)`
- Reads `database.csv` synchronously and logs student information.

#### 3. Reading a File Asynchronously
- File: `3-read_file_async.js`
- Function: `countStudents(path)`
- Reads `database.csv` asynchronously and returns a `Promise`.

#### 4. Create a Small HTTP Server with Node.js
- File: `4-http.js`
- Creates an HTTP server that responds with `Hello ALX!` on any endpoint.

#### 5. Complex HTTP Server with Node.js
- File: `5-http.js`
- HTTP server with two endpoints:
  - `/`: Responds with `Hello ALX!`.
  - `/students`: Displays a list of students (uses `countStudents`).

#### 6. HTTP Server with Express.js
- File: `6-http_express.js`
- Uses Express.js to create a server that responds with `Hello ALX!`.

#### 7. Complex HTTP Server with Express.js
- File: `7-http_express.js`
- Express server with two endpoints:
  - `/`: Responds with `Hello ALX!`.
  - `/students`: Displays a list of students (uses `countStudents`).

#### 8. Organizing a Complex HTTP Server
- Directory: `full_server`
  - Organized code with `controllers`, `routes`, and `utils`.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Oxshady/alx-backend-javascript.git
   cd alx-backend-javascript/0x05-Node_JS_basic
