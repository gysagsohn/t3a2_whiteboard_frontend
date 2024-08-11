# T3A2 - Whiteboard Scheduler Frontend

This is the frontend for my T3A2 MERN full-stack web application. This project serves as the interface for managing operators, assets, clients, and allocations in a scheduling system. The application is designed with React and implements various features such as authentication, CRUD operations, and responsive design.

## Table of Contents

- [Repository Links](#repository-links)
- [Website Links](#website-links)
- [Deployment](#deployment)
- [Project Overview](#project-overview)
- [Packages Used](#packages-used)
- [Routes/Pages](#routespages)
- [Contexts](#contexts)
- [Data Management](#data-management)
- [Components](#components)
- [Styling (CSS)](#styling-css)
- [Functional Overview](#functional-overview)
- [Future Enhancements](#future-enhancements)
- [Project Management](#project-management)
- [Development Testing](#development-testing)
  - [Dashboard Page](#dashboard-page)
  - [Allocation Page](#allocation-page)
  - [Asset Page](#asset-page)
  - [Client Page](#client-page)
  - [Operator Page](#operator-page)
  - [User Page](#user-page)
  - [Login/Signup Page](#loginsignup-page)
  - [Hosting](#hosting)
  - [UI/UX Testing](#uiux-testing)
  - [Mobile Responsiveness](#mobile-responsiveness)

## Repository Links

- **Frontend Repository**: [GitHub - Frontend](https://github.com/gysagsohn/t3a2_whiteboard_frontend)
- **Backend Repository**: [GitHub - Backend](https://github.com/gysagsohn/T3A2B_whiteboardscheduler_backend)

## Website Links

- **Live Website**: [Whiteboard Scheduler](https://whiteboardschedulercom.netlify.app/)
- **Custom Domain**: [whiteboardscheduler.com](https://whiteboardscheduler.com/)

## Deployment

- The frontend has been deployed using **Netlify**.

## Project Overview

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

## Project Management

To effectively manage the development process, I used a **Kanban board** on Trello and applied **story points** to each task. This approach helped in estimating the difficulty and time required for each feature.

### Kanban Board

- **Trello**: rsources/T3A2/PartB/trello baord

### Story Points

- **Story Points**: Each Trello card was assigned story points, representing the estimated difficulty and time required to complete the task. This helped prioritize tasks and manage time more effectively throughout the project.

### Conventional Commits

- **Conventional Commits 1.0.0**: I adhered to the Conventional Commits standard for my Git commit messages. This standardized format improved the clarity of my commit history and made it easier to track changes over time.

## Development Testing

The application was manually tested during development to ensure all functionalities worked as intended. Below is an overview of the testing methods and results for each page.

### Dashboard Page

- **Basic Route**: Passed  
  *Method*: Start the app and go to the local host to verify if the message is displayed correctly.
  ![Dashboard Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Dashboard testing.png>)
  
- **API Route**: Passed  
  *Method*: Start the app and go to the local host to check if data is being fetched and displayed correctly.
  ![Dashboard API Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Dashboard API.png>)

### Allocation Page

- **Basic Route**: Passed  
  *Method*: Go to the route (localhost:3000/allocation) and verify if the page loads correctly.
  ![Allocation Page Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page Testing.png>)
  
- **Create Data**: Passed  
  *Method*: Use Bruno to create data in the backend and verify if it appears on the front end.
  ![Creating Data](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page Testing.png>)

- **Edit Data**: Passed  
  *Method*: Edit existing data and check if the changes are reflected.
  ![Edit Data](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/edit.png>)
  
- **Delete Data**: Passed  
  *Method*: Delete data and verify if it is removed from the list.
  ![Delete Data](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/delete.png>)

### Asset Page

- **Basic Route**: Passed  
  *Method*: Go to the route (localhost:3000/asset) and verify if the page loads correctly.
  ![Asset Page Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset Page testing.png>)
  
- **API Route**: Passed  
  *Method*: Use Bruno to create data in the backend and verify if it appears on the front end.
  ![Asset API Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset API tested.png>)
  ![Asset Route with API data](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset Page testing.png>)

- **Create Asset**: Failed  
*Method*: Use route to create new asset
![Asset Route](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset Page testing.png>)
![Failed Method](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset Page testing.png>)

**Round 2**

- **API Route**: Passed  
  *Method*: go to route to see API data is coming and button is present
  ![new Asset route](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/AssetAPI.png>)

- **Create Asset**: Passed - but when typing the info isn't coming up  
  *Method*: Use route to create new asset
  ![Creating Asset but can't see typing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset Page testing.png>)

- **Create/edit Asset with preview**: Passed 
  *Method*: Use route to create new asset
  ![Edit Asset and preview working](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/test to show it shows preview.png>)

- **Button and Data Preview**: Passed  
  *Method*: Verify that buttons and data preview correctly.
  ![Preview Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset Page testing.png>)

- **New Asset Creation**: Passed  
  *Method*: Create a new asset and verify if it is added to the list.
  ![New Asset Created](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/new asset.png>)

### Client Page

- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![Client Page Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/new asset.png>)
  
- **Backend info showing**: Passed  
  *Method*: Go to route and see backend info is showing
  ![Back end info showing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/client page.png>)
  
- **Add Client**: Passed  
  *Method*: Add a new client and verify if it is added to the list.
  ![Add Client](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/adding new client.png>)
  
- **Edit Client**: Passed  
  *Method*: Edit a client and verify if the changes are reflected.
  ![Edit Client](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/editing client.png>)
  
- **Delete Client**: Passed  
  *Method*: Delete a client and verify if it is removed from the list.
  ![Delete Client](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/deleting client.png>)

### Operator Page

- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![Operator Page Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/Opeartor page testing.png>)
  
- **API for backend working**: Passed  
  *Method*: go to route to see if backend data is showing up
  ![Operator CRUD Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/New operator.png>)
  
- **Add Operator**: Passed  
  *Method*: Add a new operator and verify if it is added to the list.
  ![Add Operator](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/New operator.png>)

- **Edit Operator**: Passed  
  *Method*: Edit an operator and verify if the changes are reflected.
  ![Edit Operator](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/edit operator.png>)
  
- **Delete Operator**: Passed  
  *Method*: Delete an operator and verify if it is removed from the list.
  ![Delete Operator](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/delete operator.png>)

### User Page

- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![User Page Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/User Page Testing.png>)
  
- **API route**: Passed  
  *Method*: go to route to see if backend data is showing up
  ![User CRUD Testing]![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/User API.png>)
  
- **Edit User**: Passed  
  *Method*: Edit a user and verify if the changes are reflected.
  ![Edit User](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/edit user API.png>)
  
- **Delete User**: Passed  
  *Method*: Delete a user and verify if it is removed from the list.
  ![Delete User](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/Screenshot 2024-08-09 at 9.31.14 AM.png>)


### Login/Signup Page

- **Basic Route**: Passed  
  *Method*: Go to the route and verify if the page loads correctly.
  ![Login Page Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page testing.png>)
  
- **Protected Route**: Passed  
  *Method*: Attempt to access a protected route without logging in and verify if it redirects to the login/signup page.
  ![Protected Route Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/Login:singup page with options for both.png>)
  
- **JWT Handling Issue**: Failed initially due to missing CORS implementation, resolved after adding CORS.
  *Method*: Attempt to login
  ![JWT Handling Issue loggin in](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/new user sign up 1.png>)
  ![JWT Handling Fixed]![singup](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/new user sign up 1.png>)

  - **Modal and button**: Passed
  *Method*: See if modal works and buttons (note it worked but other issues as above)
  ![JWT Handling Issue loggin in](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/new user sign up 1.png>)
  ![JWT Handling Fixed]![singup](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/new user sign up 1.png>)

### Hosting

- **URL Working**: Initially failed but resolved after waiting for DNS propagation.
  *Method*: visit url
  ![URL Working](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Hosting working.png>)
  
- **DNS Redirection**: Initially failed but resolved after waiting for DNS propagation.
  *Method*: visit url
  ![URL Working Final](<rsources/T3A2/PartB/Development Testing/frontend/route testing/URL working.png>)

### UI/UX Testing

- **Color Consistency**: Passed  
  *Method*: Verify that the selected colors are applied consistently across the site.
  ![Color Testing](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Colour.png>)
  
- **Navbar Color Change**: Passed  
  *Method*: Navigate through different pages and verify that the navbar color changes according to the active route.
  ![Navbar Color Change](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/Asset Page.png>)

- **Logo Link**: Passed  
  *Method*: Click on the logo and verify if it navigates back to the dashboard.
  ![Navbar Color Change](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/Asset Page.png>)

- **Icon Visibility**: Passed  
  *Method*: Verify that the GitHub and LinkedIn icons are visible and functional.
  ![GitHub and LinkedIn Icons](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Git hub and Linkedin ICON.png>)

- **Link Functionality**: Passed  
  *Method*: Click on the icons and verify if they redirect to the correct profiles.
  ![GitHub Link](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Git HUB.png>)
  ![LinkedIn Link](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/Linkedin.png>)

### Mobile Responsiveness

- **Login/Signup Page**: Passed  
  *Method*: Use inspect mode to simulate a smaller screen and verify that the layout adjusts correctly.
  ![Login/Signup Mobile](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/Client Page.png>)
  
- **Dashboard Page**: Passed  
  *Method*: Use inspect mode to simulate a smaller screen and verify that the layout adjusts correctly.
  ![Dashboard Mobile](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/dashboard page.png>)
  
- **Scrolling within the Box**: Passed  
  *Method*: Verify that scrolling works correctly within content boxes.
  ![Scrolling Box](<rsources/T3A2/PartB/Development Testing/frontend/route testing/UI testubg/mobile user/scrolling within the box.png>)
