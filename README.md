# Project Readme

## Introduction

This project aims to enhance the functionality of a single webpage that originally read data from a static file to a more interactive web application. By leveraging the React framework, we've transformed the static webpage into a dynamic and responsive application capable of fetching data from a specified backend.

## Setup Instructions

To set up the frontend application locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/nahidDeveloper/WarickBusinessSchoolClient.git
   ```
   2. **Navigate to project directory**:
   ```bash
   cd WarickBusinessSchoolClient
   ```
   3. **Install dependencies**:
   ```bash
   npm install
   ```

   ## Set Environment Variables:

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:

    ```dotenv
    REACT_APP_API_BASE_URL=http://localhost:3000
    ```

    Replace `http://localhost:3000` with the URL of your backend server.

## Start the Development Server:

To start the development server, run the following command:

```bash
npm start
```
This will start the development server and open the application in your default web browser.

And here's the link to my backend GitHub repository:

[WarickBusinessSchool](https://github.com/nahidDeveloper/WarickBusinessSchool)
## Key Changes

### Transition to React

The original single webpage has been migrated to a React-based application, enabling us to create a more modular and maintainable codebase.

### Component Architecture

We've adopted a component-based architecture, breaking down the UI into reusable and manageable components. This approach enhances code organization, scalability, and reusability.

### Dynamic Data Retrieval

Instead of relying on static data from a file, our application now fetches data from a specified backend. This dynamic data retrieval ensures that our application remains up-to-date and reflects real-time information.

### Pagination

We've implemented pagination functionality to improve data readability and user experience. Pagination divides large datasets into smaller, more manageable chunks, allowing users to navigate through pages efficiently.

### CSS Improvements

While the current CSS styling enhances the appearance of the application, there is still room for improvement. We aim to refine the CSS further to achieve a more polished and visually appealing interface.

## Future Enhancements

### Chart Integration

In future iterations, we plan to integrate charting libraries to visualize data trends and insights. Charts offer a powerful way to present complex data in a digestible format, enabling users to gain valuable insights at a glance.

### Expanded Functionality

With React's flexibility, we can easily extend the functionality of our application. Future enhancements may include additional features such as user authentication, data filtering, and advanced search capabilities.

## Conclusion

By transitioning from a single static webpage to a dynamic React-based application, we've significantly improved the interactivity, scalability, and maintainability of the project. With ongoing development efforts and continuous feedback, we strive to deliver an exceptional user experience and meet the evolving needs of users.
