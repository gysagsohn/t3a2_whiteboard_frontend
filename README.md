# T3A2 Whiteboard Scheduler Frontend

This is the frontend for my T3A2 MERN full stack web application. This project serves as the interface for managing operators, assets, clients, and allocations in a scheduling system. The application is designed with React and implements various features such as authentication, CRUD operations, and responsive design.

### Repository Links:
- **Frontend Repository**: [GitHub - Frontend](https://github.com/gysagsohn/t3a2_whiteboard_frontend)
- **Backend Repository**: [GitHub - Backend](https://github.com/gysagsohn/T3A2B_whiteboardscheduler_backend)

### Website Links:
- **Live Website**: [Whiteboard Scheduler](https://whiteboardschedulercom.netlify.app/)
- **Custom Domain**: [whiteboardscheduler.com](https://whiteboardscheduler.com/)

### Deployment
- The frontend has been deployed using **Netlify**.

### Project Overview
This application allows users to manage scheduling information for operators, assets, clients, and allocations through a user-friendly interface. The frontend communicates with the backend via RESTful APIs to perform CRUD operations.

## Packages Used
- **React**: Core framework for building the user interface.
- **React Router DOM**: For handling routing and navigation between pages.
- **React Modal**: For implementing modals on the login and signup pages.
- **Axios**: For making HTTP requests to the backend API.
- **CORS**: To enable cross-origin resource sharing between the frontend and backend.
- **React Icons**: For adding icons (GitHub, LinkedIn) to the contact page.

## Routes/Pages
The application is divided into several pages, each accessible through specific routes:

- **Dashboard Page** (`/`): Home page displaying a summary of allocations, assets, clients, and operators.
- **Login Page** (`/login`): Allows users to log in; redirects to the dashboard upon successful login.
- **Operator Page** (`/operator`): Manage operators, including creating, updating, and deleting operator records.
- **Asset Page** (`/asset`): Manage assets with options to create, update, and delete asset records.
- **Client Page** (`/client`): Manage client information with full CRUD functionality.
- **Allocation Page** (`/allocation`): Manage allocations, including assigning assets and operators to clients.
- **User Page** (`/user`): Manage user details; currently allows editing and deleting user profiles.
- **Contact Page** (`/contact`): Displays contact information with links to GitHub and LinkedIn profiles.

## Contexts
- **Authentication Context**: Used to manage user authentication state across the application, ensuring only authenticated users can access certain pages.

## Data Management
The application handles the following data entities, each corresponding to specific pages:
- **Login**: Authenticates users and manages session tokens.
- **Operator**: Handles data related to operators, including license classes and available days.
- **Asset**: Manages assets, including asset types and registration information.
- **Client**: Manages client information and associated projects.
- **Allocation**: Manages the allocation of assets and operators to clients.
- **User**: Handles user profiles, allowing updates to user details.

## Components
The application is built with reusable components to enhance maintainability and scalability:
- **NavBar**: A responsive navigation bar that includes links to different pages and a logout button. It dynamically changes color based on the current active page.
- **Header**: Contains the application’s logo and a link back to the dashboard.
- **Button**: Customizable buttons used throughout the application, with styles that change on hover and active states.

## Styling (CSS)
The application uses a modular CSS approach, with separate files for each component and page:
- **Global Styles** (`global.css`): Contains the base styles for the entire application, including typography and colors.
- **Button Styles** (`buttons.css`): Defines the styles for primary, secondary, and disabled buttons.
- **Page-Specific Styles**: Each page has its own CSS file to handle unique styling needs:
  - `dashboardPage.css`
  - `operatorPage.css`
  - `assetPage.css`
  - `clientPage.css`
  - `allocationPage.css`
  - `userPage.css`
  - `contactPage.css`
- **Responsive Design**: CSS media queries are used to ensure the application is fully responsive and usable on different screen sizes.

## Functional Overview
The application is designed with the following functionalities:
- **Authentication**: Users must log in to access most of the pages. JWT tokens are stored in local storage to maintain sessions.
- **CRUD Operations**: Each data entity (operator, asset, client, allocation, user) can be created, read, updated, and deleted through the respective pages.
- **Responsive Design**: The application is fully responsive, with layouts adjusting for mobile, tablet, and desktop screens.
- **Modals**: The login and signup forms are displayed in modals, providing a smooth user experience without navigating away from the current page.

## Future Enhancements
- **Dark/Light Mode**: Implement a theme toggle that allows users to switch between dark and light modes.
- **User Profile Page**: Add a dedicated page for users to view and edit their profiles.
- **Enhanced Error Handling**: Improve error messages and feedback to users during operations like login and data submission.
- **Improved Accessibility**: Ensure all components and pages are fully accessible to users with disabilities, following WCAG guidelines.

## Development Testing - Manual Testing

The application was manually tested during development to ensure all functionalities worked as intended. Below is an overview of the testing methods and results for each page.

### Dashboard Page
- **Basic Route**: Passed  
  *Method*: Start the app and go to the local host to verify if the message is displayed correctly.
  ![Dashboard Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/Dashboard testing.png>)
  
- **API Route**: Passed  
  *Method*: Start the app and go to the local host to check if data is being fetched and displayed correctly.
  ![Dashboard API Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/Dashboard API.png>)

### Allocation Page
- **Basic Route**: Passed  
  *Method*: Go to the route (localhost:3000/allocation) and verify if the page loads correctly.
  ![Allocation Page Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page Testing.png>)
  
- **Create Data**: Passed  
  *Method*: Use Bruno to create data in the backend and verify if it appears on the front end.
  ![Creating Data](<resources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/creating some data.png>)
  
- **Edit Data**: Passed  
  *Method*: Edit existing data and check if the changes are reflected.
  ![Edit Data](<resources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/edit.png>)
  
- **Delete Data**: Passed  
  *Method*: Delete data and verify if it is removed from the list.
  ![Delete Data](<resources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/delete.png>)

### Asset Page
- **Basic Route**: Passed  
  *Method*: Go to the route (localhost:3000/asset) and verify if the page loads correctly.
  ![Asset Page Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset Page testing.png>)
  
- **API Route**: Passed  
  *Method*: Use Bruno to create data in the backend and verify if it appears on the front end.
  ![Asset API Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset API tested.png>)

- **Button and Data Preview**: Passed  
  *Method*: Verify that buttons and data preview correctly.
  ![Preview Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/test to show it shows preview.png>)

- **New Asset Creation**: Passed  
  *Method*: Create a new asset and verify if it is added to the list.
  ![New Asset Created](<resources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/new asset.png>)

### Client Page
- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![Client Page Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/client page/client page testing.png>)
  
- **CRUD Operations**: Passed  
  *Method*: Verify that create, read, update, and delete operations work as expected.
  ![Client CRUD Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/client page/client page.png>)
  
- **Add Client**: Passed  
  *Method*: Add a new client and verify if it is added to the list.
  ![Add Client](<resources/T3A2/PartB/Development Testing/frontend/route testing/client page/adding new client.png>)
  
- **Edit Client**: Passed  
  *Method*: Edit a client and verify if the changes are reflected.
  ![Edit Client](<resources/T3A2/PartB/Development Testing/frontend/route testing/client page/editing client.png>)
  
- **Delete Client**: Passed  
  *Method*: Delete a client and verify if it is removed from the list.
  ![Delete Client](<resources/T3A2/PartB/Development Testing/frontend/route testing/client page/deleting client.png>)

### Operator Page
- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![Operator Page Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/Opeartor page testing.png>)
  
- **CRUD Operations**: Passed  
  *Method*: Verify that create, read, update, and delete operations work as expected.
  ![Operator CRUD Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/Operator Page.png>)
  
- **Add Operator**: Passed  
  *Method*: Add a new operator and verify if it is added to the list.
  ![Add Operator](<resources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/New operator.png>)
  
- **Edit Operator**: Passed  
  *Method*: Edit an operator and verify if the changes are reflected.
  ![Edit Operator](<resources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/edit operator.png>)
  
- **Delete Operator**: Passed  
  *Method*: Delete an operator and verify if it is removed from the list.
  ![Delete Operator](<resources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/delete operator.png>)

### User Page
- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![User Page Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/userPage/User Page Testing.png>)
  
- **CRUD Operations**: Passed  
  *Method*: Verify that create, read, update, and delete operations work as expected.
  ![User CRUD Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/userPage/User API.png>)
  
- **Edit User**: Passed  
  *Method*: Edit a user and verify if the changes are reflected.
  ![Edit User](<resources/T3A2/PartB/Development Testing/frontend/route testing/userPage/edit user API.png>)
  
- **Delete User**: Passed  
  *Method*: Delete a user and verify if it is removed from the list.
  ![Delete User](<resources/T3A2/PartB/Development Testing/frontend/route testing/userPage/Screenshot 2024-08-09 at 9.31.14 AM.png>)

### Login/Signup Page
- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![Login Page Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/Login Page testing.png>)
  
- **Protected Route**: Passed  
  *Method*: Attempt to access a protected route without logging in and verify if it redirects to the login/signup page.
  ![Protected Route Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/Login:singup page with options for both.png>)
  
- **JWT Handling Issue**: Failed initially due to missing CORS implementation, resolved after adding CORS.
  ![JWT Handling Issue](<resources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/failed signup.png>) 
  ![JWT Handling Fixed](<resources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/USer logged in.png>)

### Hosting
- **URL Working**: Passed  
  *Method*: Verify that the deployed site is accessible via the custom domain.
  ![URL Working](<resources/T3A2/PartB/Development Testing/frontend/route testing/Hosting working.png>)
  
- **DNS Redirection**: Initially failed but resolved after waiting for DNS propagation.
  ![DNS Redirection](<resources/T3A2/PartB/Development Testing/frontend/route testing/URL working.png>)
  ![URL Working Final](<resources/T3A2/PartB/Development Testing/frontend/route testing/URL check whiteboardscheuler.com.png>)

### UI/UX Testing
- **Color Consistency**: Passed  
  *Method*: Verify that the selected colors are applied consistently across the site.
  ![Color Testing](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Colour.png>)
  
- **Navbar Color Change**: Passed  
  *Method*: Navigate through different pages and verify that the navbar color changes according to the active route.
  ![Navbar Color Change](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/Asset Page.png>)
  
- **Logo Link**: Passed  
  *Method*: Click on the logo and verify if it navigates back to the dashboard.
  ![Logo Link](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/Asset Page.png>)

- **Icon Visibility**: Passed  
  *Method*: Verify that the GitHub and LinkedIn icons are visible and functional.
  ![GitHub and LinkedIn Icons](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Git hub and Linkedin ICON.png>)
  
- **Link Functionality**: Passed  
  *Method*: Click on the icons and verify if they redirect to the correct profiles.
  ![GitHub Link](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Git HUB.png>)
  ![LinkedIn Link](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Linkedin.png>)

### Mobile Responsiveness
- **Login/Signup Page**: Passed  
  *Method*: Use inspect mode to simulate a smaller screen and verify that the layout adjusts correctly.
  ![Login/Signup Mobile](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/signup:login page.png>)
  
- **Dashboard Page**: Passed  
  *Method*: Use inspect mode to simulate a smaller screen and verify that the layout adjusts correctly.
  ![Dashboard Mobile](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/dashboard page.png>)
  
- **Scrolling within the Box**: Passed  
  *Method*: Verify that scrolling works correctly within content boxes.
  ![Scrolling Box](<resources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/scrolling within the box.png>)

## Additional Development Testing Recommendations
To achieve 90% test coverage, consider the following additional testing:

- **Unit Testing**: Implement unit tests for individual components using a testing framework like Jest.
- **Integration Testing**: Test the interaction between different components and the backend API.
- **End-to-End Testing**: Use a tool like Cypress to simulate user interactions and test the entire workflow from login to CRUD operations.
- **Error Handling Testing**: Verify that appropriate error messages are displayed for different types of failures, such as network errors or invalid inputs.
- **Cross-Browser Testing**: Ensure the application works consistently across different browsers (e.g., Chrome, Firefox, Safari).

This enhanced testing strategy will help ensure that all aspects of the application function as expected and provide a better user experience.
