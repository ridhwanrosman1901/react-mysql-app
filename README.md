# React MySQL Demo App

This is a simple full-stack web application built using React for the frontend and Node.js with Express.js for the backend. The application connects to a MySQL database to perform basic CRUD operations (Create, Read, Update, Delete) on a `student` table.

## Features

- **Create Student:** Add new students with name, email, marks, grade, and city.
- **Read Students:** View the list of all students.
- **Update Student:** Update the details (name, email, marks, grade, and city) of an existing student.
- **Delete Student:** Remove a student from the database.

## Preview
![Home Page Screenshot](/frontend/src/ss1.png)
![Add New User Screenshot](/frontend/src/ss2.png)
![New User Added Successfully](./frontend/src/assets/ss3.png)
![Updated Database](./frontend/src/assets/ss4.png)

## Project Structure

### Frontend (React)

- **App.js:** Main application file containing the routing logic.
- **CreateStudent.js:** Component for adding a new student.
- **Student.js:** Component for displaying the list of students and handling deletion.
- **Updatestudent.js:** Component for updating an existing student's details.
- **index.js:** Entry point of the React application.

### Backend (Node.js + Express)

- **server.js:** Main server file containing routes for CRUD operations and connection logic to the MySQL database.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL installed and running on your machine.
- Basic knowledge of React and Node.js.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ridhwanrosman1901/react-mysql-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-mysql-app
   ```

3. Install dependencies for the backend:

   ```bash
   npm install
   ```

4. Install dependencies for the frontend:

   ```bash
   cd client
   npm install
   ```

### Setup MySQL Database

1. Open your MySQL command line or MySQL Workbench.
2. Create a new database:

   ```sql
   CREATE DATABASE react_sql_db;
   ```

3. Create a `student` table:

   ```sql
   USE react_sql_db;
   CREATE TABLE student (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) NOT NULL
   );
   ```

4. Update the MySQL connection details in the `server.js` file:

   ```javascript
   const db = mysql.createConnection({
       host: "localhost",
       user: "root",
       password: "your_mysql_password",
       database: "react_sql_db"
   });
   ```

### Running the Application

1. Start the backend server:

   ```bash
   node server.js
   ```

2. Start the frontend development server:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

### Usage

- To **add a student**, click on the "Add" button and fill out the form.
- To **update a student**, click on the "Update" button next to a student's name and edit their details.
- To **delete a student**, click on the "Delete" button next to a student's name.

### Technologies Used

- **Frontend:** React.js, Bootstrap 4
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **HTTP Client:** Axios

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any bug or feature request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.