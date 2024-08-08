# T3A2-A - Full Stack App - Whiteboard scheduler
# http://www.whiteboardscheduler.com/

## R1 Description of your website, including:
### - Purpose
Currently, at ReadyGroup, the company uses a whiteboard to plan its scheduling. This system was introduced by a previous General Manager who brought it from his Air Force experience, where a similar system was used to manage airplanes, their activity, and crew. Please see example photos below:

![whiteboard example 1](<docs/Photos/whiteboard_example/WhatsApp Image 2024-07-06 at 11.55.56 (1).jpeg>) 
![whiteboard example 1](<docs/Photos/whiteboard_example/WhatsApp Image 2024-07-06 at 11.55.56 (2).jpeg>) 
![whiteboard example 1](<docs/Photos/whiteboard_example/WhatsApp Image 2024-07-06 at 11.55.56 (3).jpeg>) 
![whiteboard example 1](<docs/Photos/whiteboard_example/WhatsApp Image 2024-07-06 at 11.55.56.jpeg>) 
![whiteboard example 1](<docs/Photos/whiteboard_example/WhatsApp Image 2024-07-06 at 11.55.57 (1).jpeg>) 
![whiteboard example 1](<docs/Photos/whiteboard_example/WhatsApp Image 2024-07-06 at 11.55.57.jpeg>)

The idea is straightforward: it is a method to visualising the resources available based on the main assets (vac trucks) on the vertical axis and days on the horizontal axis. The rules of the board are:

- Jobs: Jobs are written with whiteboard markers and indicated by the client name. Day shifts are indicated in blue, night shifts in black, and maintenance/breakdowns in red. Each day, an asset can have multiple jobs. Day shifts should be placed at the top of the box, night shifts at the bottom, and maintenance should occupy the whole box unless it's known to be done during the day or night, in which case the day/night shift rules apply. Jobs are named after the client, and if a client has multiple bookings in one day at different locations, it is written as "client-project."

- Operators: Operators are represented as magnetic strips. At the bottom of the board, each day lists all operators available to work. Different colors of the strips represent their licenses, which determine what kind of assets they can drive. For an asset to go out on a job, an operator needs to be allocated, and more than one operator can be allocated to a job. This allocation is marked when the magnetic strip of the operator is place in the box on top of the job, inculcating, who is going to that job with the asset and the date

- Additional Assets: Depending on the job, additional assets can be allocated, such as tippers, quick cuts/road saws, extra hoses, and excavators. They are indicated by their own magnetic strips with their own asset numbers. When required for a job, they are allocated to the box based on the main asset assigned to that job.

The purpose of this board is to act as a scheduler that visually shows the planner all available assets (including operators) for that day, allowing them to plan and rearrange until everything is allocated, and to try different combinations. Once this process is completed, the allocation is input into the digital system we currently use, "Formitize."

The purpose of my project is to turn this system into a web application. In the past, we have tried to digitize this using Trello and Monday.com; however, these solutions did not meet our requirements. As we are growing as a company and multiple people are now involved in the scheduling process, a digital board accessible via the internet would provide a flexible solution, especially with working from different locations.


## - Functionality / features

## 1. User Authentication and Authorization
- **User Roles:**
  - **Admin:** Full access and can create and delete other users.
  - **User:** Full access, but cannot create or delete other users.
- **Secure Login/Signup:** Authentication using JWT.

## 2. Client Management
- **Create/Edit/Delete Client:** Forms to create and update client details.

## 3. Job Management
- **Create/Edit/Delete Jobs:** Forms to create and update job details.
- **Link to Client Management:** Display the client associated with each job.
- **Job Visualization:** Display jobs with color-coded shifts (day, night, maintenance) and associated clients.
- **Asset and Operator Allocation:** Assets and operators can be allocated within the job section.
- **Drag and Drop (Stretch Goal):** Ability to move a job around in the calendar view once it has been allocated.

## 4. Operator Management
- **Create/Edit/Delete Operators:** Manage operator details and licenses.
- **Operator Availability:** Display available operators for each day.
- **Drag and Drop (Stretch Goal):** In the calendar view, allow the option to drag and drop an operator to a job and asset.

## 5. Asset Management
- **Create/Edit/Delete Assets:** Manage details of main assets (vac trucks) and additional assets (additional assets are stretch goals) (tippers, quick cuts, etc.).
- **Asset Visualization:** Display main assets on the vertical axis.
- **Additional Assets Availability (Stretch Goal):** Display available additional assets for each day.
- **Additional Assets Drag and Drop (Stretch Goal):** In the calendar view, allow the option to drag and drop an additional asset to a job and main asset.

## 6. Scheduling and Planning
- **Calendar View:** Show jobs and assets on a calendar/grid format.
- **Conflict Detection:** Alerts for scheduling conflicts (e.g., double-booked assets or operators, stretch goal).
- **Shift Management:** Differentiate between day, night, and maintenance shifts.
- **Add/Edit Jobs (Stretch Goal):** Ability to add jobs directly in the calendar view and/or edit jobs that are already allocated (stretch goal).
- **Drag and Drop (Stretch Goal):** Ability to move operators and jobs around.

## 7. Real-Time Collaboration
- **Live Updates:** Reflect changes in real-time for all users.
- **Collaborative Editing:** Multiple users can edit the schedule simultaneously.

## 8. Responsive Design
- **Mobile-First Design:** Optimized for mobile devices.
- **Large Screen Views:** Different views for very large vertical screens.

## 9. Security (Stretch Goal)
- **Data Encryption:** Ensure sensitive data is encrypted both in transit and at rest.
- **Secure Access:** Implement HTTPS and other security best practices.

### - Target audience
The target audience for the above web application is ReadyGroup, as I am trying to solve a problem that the company has. However, the application can be used by anyone that has assets and are allocating operators to it and require assistance with the planning process. It can be used by the following:
-   Logistics and Transportation Companies
-   Plant hire company
-   Construction Companies
-   Manufacturing and Maintenance Companies
-   Telecommunications Companies

### - Tech stack

This project leverages the MERN stack with MongoDB, Express.js, React.js, and Node.js to develop a scalable and efficient scheduling system web application. Utilising Render and Netlify for deployment, along with Git for version control, ensures robust backend functionality, seamless frontend development, and efficient deployment and version control processes essential for complex applications.

### 1. MongoDB

- **Type:** NoSQL database
- **Purpose:** Stores data in a flexible, JSON-like format, suitable for diverse data structures.
- **Key Features:**
  - Schema-less: Allows flexible data modeling.
  - Scalability: Supports horizontal scaling through sharding.
  - High Availability: Provides replication for fault tolerance and data redundancy.

### 2. Express.js

- **Type:** Node.js web application framework
- **Purpose:** Simplifies the creation of robust web servers and APIs using Node.js.
- **Key Features:**
  - Middleware Support: Integrates middleware for handling requests, responses, and routing.
  - Routing: Defines endpoints to manage HTTP requests (GET, POST, PUT, DELETE).

### 3. React.js

- **Type:** JavaScript library for building user interfaces
- **Purpose:** Facilitates the development of interactive UI components.
- **Key Features:**
  - Component-based: Divides UI into reusable components for easy maintenance.
  - Virtual DOM: Enhances performance by minimizing DOM updates.
  - Declarative: Simplifies UI logic by describing how the UI should look based on state.

### 4. Node.js

- **Type:** JavaScript runtime environment
- **Purpose:** Executes server-side JavaScript code, integrates with MongoDB, and provides backend logic.
- **Key Features:**
  - Event-driven: Uses asynchronous I/O for scalability and performance.
  - Package Ecosystem: npm manages libraries and dependencies.
  - Server-side Development: Implements business logic, authentication, and data management.

## Deployment and Version Control

### Deployment Platforms

- **Render:** Provides scalable cloud hosting and deployment automation.
- **Netlify:** Offers continuous deployment, CDN, and serverless backend capabilities.

### Version Control

- **Git:** Manages codebase versioning, facilitates collaboration, and tracks changes over time.
  - **Workflow:** Supports branching, merging, and pull requests for efficient team development.

# R2 Dataflow Digram

The following Dataflow Diagram are created using Yourdon and Coad convention (Data Flow Diagram Symbols n.d.)

## DataFlow Diagram level 0 

![DataFlowDiagram_level0](docs/data_flow_digram/DataFlowDiagram_level0.drawio.png)

## External Entities:

- Users
- Database

# Main Process:
- login, authentication and authorisation
- Allocating System: within the scheduling system there are:
    - asset
    - operators
    - clients

# Data Flows:
- User to Allocating System:
    - Send login credentials (email, password)
    - Request available operators, clients, and assets
    - Send allocation details (operator, client, asset, dates)
    - see below at User creation, login, authentication and authorisation for details

- Allocating System:
    - Return confirmation or error messages
    - Provide available operators, clients, and assets
    - Confirm allocation success or return error messages
    - see below allocation process for further details

- Allocating System to Database:
    - Store and retrieve user, client, operator, and asset information
    - Store allocation details
    - see below allocation process for further details

- user to Asset/Plant/Operator System:
    - Request/create/edit operators, clients, and assets information
    - Send allocation details (operator, client, asset, dates)
    - see below for further details

-  Asset/Plant/Operator System:
    - Return confirmation or error messages
    - Provide operators, clients, and assets information requested
    - Confirm success or return error messages
    - see below allocation process for further details

- Allocating System to Database:
    - Store and retrieve user, client, operator, and asset information
    - Store details

- user login/authentication
    - Authenticate user credentials
    - Retrieve and validate JWT tokens
    - see below at User creation, login, authentication and authorisation for details



## User creation, login, authentication and authorisation

![DataFlowDiagram_user](<docs/data_flow_digram/DataFlowDigram_user.drawio .png>)

## Steps

### 1. Admin User Initiates Registration
- **Action**: Admin user sends email and password to the registration service.
- **Data Sent**: `email`, `password`.
- **Error Handling**: If details are invalid, incomplete, or already exist, the system returns an error message.

### 2. Registration Service Stores Details
- **Action**: The registration service stores the admin user details in the database.
- **Data Sent**: `email`, `password`.
- **Data Returned**: Confirmation of successful registration.

### 3. Generate Login Token
- **Action**: Upon successful registration, a login token (JWT) is generated and stored in the database.
- **Data Sent**: `email`, `password`.
- **Data Returned**: JWT token.

### 4. Admin User Login
- **Action**: The authentication service verifies the admin user's credentials.
- **Data Sent**: `email`, `password`.
- **Data Returned**: New JWT token (if expired), confirmation of successful authentication.

### 5. Login
- **Action**: The user is logged in using the JWT token.
- **Data Sent**: JWT token.
- **Data Returned**: Confirmation of successful login, redirect to dashboard.

### 6. Admin User Creates Standard User
- **Action**: Authenticated admin user creates a standard user by sending their details to the registration service.
- **Data Sent**: Standard user details (`email`, `password`).
- **Data Returned**: Confirmation of successful user creation, error message if any.

### 7. Standard User Login
- **Action**: Standard user sends email and password to the authentication service.
- **Process**: Follows the same steps as admin user login (Steps 3, 4, and 5).
- **Data Sent**: `email`, `password`.
- **Data Returned**: JWT token, confirmation of successful login, error message if any.

## Creating/deleting/edit -  Asset

![DataFlowDiagram_asset](docs/data_flow_digram/DataFlowDigramer_Asset.drawio.png)

## Steps

### 1. User Login
- **Action**: User sends email and password to the authentication service.
- **Data Sent**: `email`, `password`.
- **Error Handling**: If details are invalid or incomplete, the system returns an error message.
- **Data Returned**: Confirmation of successful login, or error message.

### 2. Authentication
- **Action**: The authentication service verifies the user's credentials against the stored details in the database.
- **Data Sent**: `email`, `password`.
- **Data Returned**: New JWT token (if expired), confirmation of successful authentication, or error message.

### 3. Check Database
- **Action**: Authentication service checks the database for user credentials.
- **Data Sent**: User credentials.
- **Data Returned**: Confirmation of successful authentication, or error message.

### 4. User Selects Action
- **Action**: User decides to create a new asset or edit an existing asset.
- **Data Sent**: User selection (create new asset or edit asset).
- **Data Returned**: Form for creating a new asset or current asset information for editing.

### 5. New Asset Form
- **Action**: If the user selects to create a new asset, they fill out a form with asset details.
- **Data Sent**: Asset details (name, type, etc.).
- **Data Returned**: Processed asset information.

### 6. Process Asset Information
- **Action**: Asset information is processed and prepared for database entry.
- **Data Sent**: Processed asset information.
- **Data Returned**: None.

### 7. Store/Update Asset Information
- **Action**: Asset information is sent to the database and checked for existing entries. If the asset already exists, an error message is returned.
- **Data Sent**: Asset details.
- **Error Handling**: If the asset already exists, an error message is returned.
- **Data Returned**: Error message (if asset exists), or confirmation of successful entry/update.

### 8. Confirm Asset Creation/Update
- **Action**: Confirmation of asset creation/update is sent back to the user.
- **Data Sent**: Confirmation of successful asset creation/update.
- **Data Returned**: Success message.

### 9. Edit/Delete Asset Information
- **Action**: If the user wants to edit or delete an existing asset, they select the asset to be edited or deleted.
- **Data Sent**: Asset selection.
- **Data Returned**: Current asset information from the database.

### 10. Retrieve Asset Information
- **Action**: Database sends back current asset information.
- **Data Sent**: Current asset details.
- **Data Returned**: Asset details.

### 11. Update/Delete Asset Information
- **Action**: User edits or deletes the current asset information.
- **Data Sent**: Updated asset details (if editing), or deletion request.
- **Data Returned**: Confirmation of successful update or deletion, or error message.

### 12. Store/Update Asset Information
- **Action**: Updated asset information is sent back to the database.
- **Data Sent**: Updated asset details.
- **Data Returned**: Confirmation of successful update or deletion, or error message.

### 13. Confirm Update/Delete
- **Action**: Confirmation of update or deletion is sent back to the user.
- **Data Sent**: Confirmation of successful update or deletion.
- **Data Returned**: Success message or error message.


## Creating/deleting/edit - Operator

![DataFlowDiagram_Operator](docs/data_flow_digram/DataFlowDiagram_Operator.drawio.png)

## Steps

### 1. User Login
- **Action**: User sends email and password to the authentication service.
- **Data Sent**: `email`, `password`.
- **Error Handling**: If details are invalid or incomplete, the system returns an error message.
- **Data Returned**: Confirmation of successful login, or error message.

### 2. Authentication
- **Action**: The authentication service verifies the user's credentials against the stored details in the database.
- **Data Sent**: `email`, `password`.
- **Data Returned**: New JWT token (if expired), confirmation of successful authentication, or error message.

### 3. Check Database
- **Action**: Authentication service checks the database for user credentials.
- **Data Sent**: User credentials.
- **Data Returned**: Confirmation of successful authentication, or error message.

### 4. User Selects Action
- **Action**: User decides to create a new operator or edit an existing operator.
- **Data Sent**: User selection (create new operator or edit operator).
- **Data Returned**: Form for creating a new operator or current operator information for editing.

### 5. New Operator Form
- **Action**: If the user selects to create a new operator, they fill out a form with operator details.
- **Data Sent**: Operator details (name, license type, etc.).
- **Data Returned**: Processed operator information.

### 6. Process Operator Information
- **Action**: Operator information is processed and prepared for database entry.
- **Data Sent**: Processed operator information.
- **Data Returned**: None.

### 7. Store/Update Operator Information
- **Action**: Operator information is sent to the database and checked for existing entries. If the operator already exists, an error message is returned.
- **Data Sent**: Operator details.
- **Error Handling**: If the operator already exists, an error message is returned.
- **Data Returned**: Error message (if operator exists), or confirmation of successful entry/update.

### 8. Confirm Operator Creation/Update
- **Action**: Confirmation of operator creation/update is sent back to the user.
- **Data Sent**: Confirmation of successful operator creation/update.
- **Data Returned**: Success message.

### 9. Edit/Delete Operator Information
- **Action**: If the user wants to edit or delete an existing operator, they select the operator to be edited or deleted.
- **Data Sent**: Operator selection.
- **Data Returned**: Current operator information from the database.

### 10. Retrieve Operator Information
- **Action**: Database sends back current operator information.
- **Data Sent**: Current operator details.
- **Data Returned**: Operator details.

### 11. Update/Delete Operator Information
- **Action**: User edits or deletes the current operator information.
- **Data Sent**: Updated operator details (if editing), or deletion request.
- **Data Returned**: Confirmation of successful update or deletion, or error message.

### 12. Store/Update Operator Information
- **Action**: Updated operator information is sent back to the database.
- **Data Sent**: Updated operator details.
- **Data Returned**: Confirmation of successful update or deletion, or error message.

### 13. Confirm Update/Delete
- **Action**: Confirmation of update or deletion is sent back to the user.
- **Data Sent**: Confirmation of successful update or deletion.
- **Data Returned**: Success message or error message.



## ## Creating/deleting/edit - Client/Project

![DataFlowDiagram_Client](docs/data_flow_digram/DataFlowDigram_clientdrawio.drawio.png)

## Steps

### 1. User Login
- **Action**: User sends email and password to the authentication service.
- **Data Sent**: `email`, `password`.
- **Error Handling**: If details are invalid or incomplete, the system returns an error message.
- **Data Returned**: Confirmation of successful login, or error message.

### 2. Authentication
- **Action**: The authentication service verifies the user's credentials against the stored details in the database.
- **Data Sent**: `email`, `password`.
- **Data Returned**: New JWT token (if expired), confirmation of successful authentication, or error message.

### 3. Check Database
- **Action**: Authentication service checks the database for user credentials.
- **Data Sent**: User credentials.
- **Data Returned**: Confirmation of successful authentication, or error message.

### 4. User Selects Action
- **Action**: User decides to create a new client or edit an existing client.
- **Data Sent**: User selection (create new client or edit client).
- **Data Returned**: Form for creating a new client or current client information for editing.

### 5. New Client Form
- **Action**: If the user selects to create a new client, they fill out a form with client details.
- **Data Sent**: Client details (name, contact information, etc.).
- **Data Returned**: Processed client information.

### 6. Process Client Information
- **Action**: Client information is processed and prepared for database entry.
- **Data Sent**: Processed client information.
- **Data Returned**: None.

### 7. Store Client Information
- **Action**: Client information is sent to the database and checked for existing entries.
- **Data Sent**: Client details.
- **Error Handling**: If the client already exists, an error message is returned.
- **Data Returned**: Error message (if client exists), or confirmation of successful entry.

### 8. Confirm Client Creation
- **Action**: Confirmation of client creation is sent back to the user.
- **Data Sent**: Confirmation of successful client creation.
- **Data Returned**: Success message.

### 9. Edit/Delete Client Information
- **Action**: If the user wants to edit or delete an existing client, they select the client to be edited or deleted.
- **Data Sent**: Client selection.
- **Data Returned**: Current client information from the database.

### 10. Retrieve Client Information
- **Action**: Database sends back current client information.
- **Data Sent**: Current client details.
- **Data Returned**: Client details.

### 11. Update/Delete Client Information
- **Action**: User edits or deletes the current client information.
- **Data Sent**: Updated client details (if editing), or deletion request.
- **Data Returned**: Confirmation of successful update or deletion, or error message.

### 12.  Same flow as step 7 Store Updated Information
- **Action**: Updated client information is sent back to the database.
- **Data Sent**: Updated client details.
- **Data Returned**: Confirmation of successful update or deletion, or error message.

### 13. Same flow as step 8 Confirm Update/Delete
- **Action**: Confirmation of update or deletion is sent back to the user.
- **Data Sent**: Confirmation of successful update or deletion.
- **Data Returned**: Success message or error message.


# Allocation Process

![DataFlowDiagram_allocation](docs/data_flow_digram/DataFlowDiagram_allocations.drawio.png)

## Steps
## 1. User Login
**Action:** User sends email and password to the authentication service.  
**Data Sent:** email, password.  
**Error Handling:** If details are invalid or incomplete, the system returns an error message.  
**Data Returned:** Confirmation of successful login, or error message.  

## 2. Fetch Available Operators/Asset/Client
**Action:** User selects dates and sends request to fetch available operators/asset and client on that date.  
**Data Sent:** Selected dates.  
**Data Returned:** List of available operators/ client and asset details.  


## 3. Allocate Operator
**Action:** User selects an operator and allocates them to the client and asset for the selected dates.  
**Data Sent:** Operator ID, Client ID, Asset ID, Dates.  
**Error Handling:** If operator is unavailable, return an error message.  
**Data Returned:** Confirmation of successful allocation, or error message.  

## 3a. Allocate Operator
**Action:** User selects an allocation
**Data Sent:** Allocation Id
**Error Handling:** If operator is unavailable, return an error message.  
**Data Returned:** Confirmation of successful allocation, or error message.  

## 4. Update Database
**Action:** Store allocation details in the database.  
**Data Sent:** Allocation details (Operator ID, Client ID, Asset ID, Dates).  
**Data Returned:** Confirmation of successful update, or error message.  

## 5. Confirmation
**Action:** Provide feedback to the user.  
**Data Sent:** Confirmation message.  
**Data Returned:** Success message, or error message.

# R3 Application Architecture Diagram

## Application Architecture Diagram Explanation

![AAD](<docs/Application_Architecture_Diagram /ApplicationArchitectureDiagram.drawio.png>)

### 1. User
- **Description:** The end-user who interacts with the web application via a web browser.

### 2. Browser
- **Description:** The interface through which the user interacts with the web application. The browser sends HTTP requests and displays HTML pages.
- **Flow:**
  - **User Access:** The user navigates to the web application's URL.
  - **Login Page:** The user is presented with a login page to enter their credentials.

### 3. User Authentication
- **Description:** The front-end component where the user can log in or sign up.
- **Actions:**
  - **Login:** User submits email and password.
  - **Signup:** User registers with email and password.

### 4. Authentication/Authorization
- **Description:** The backend service that handles user authentication and authorization using JWT (stored in MongoDB).
- **Actions:**
  - **Authentication:** Verifies user login credentials.
  - **Authorization:** Determines user permissions for creating, deleting, and editing other users (only admin can create other users).

### 5. Asset/Client/Operator (Front End)
- **Description:** The front-end interface where users can interact with assets, clients, or operators.
- **Actions:**
  - **View:** Display details of assets, clients, or operators.
  - **Create/Edit/Delete:** Users can create, edit, or delete assets, clients, or operators based on their needs.

### 6. Asset/Client/Operator (Backend)
- **Description:** The backend service that processes API requests related to assets, clients, and operators.
- **Actions:**
  - **Process Requests:** Handles logic for viewing, creating, editing, and deleting assets, clients, or operators.
  - **Error Handling:** Manages errors and provides appropriate feedback.

### 7. Allocation (Front End)
- **Description:** The front-end interface where users can allocate operators to clients and assets.
- **Actions:**
  - **View:** Display allocation details.
  - **Create/Edit/Delete:** Users can create, edit, or delete allocations based on their needs.

### 8. Allocation (Backend)
- **Description:** The backend service that processes API requests related to allocations.
- **Actions:**
  - **Process Requests:** Handles logic for viewing, creating, editing, and deleting allocations.
  - **Error Handling:** Manages errors and provides appropriate feedback.

### 9. Database
- **Description:** The MongoDB database that stores all the data for the application.
- **Collections:**
  - **Users:** Stores user data for authentication and authorization.
  - **Assets:** Stores asset details.
  - **Clients:** Stores client details.
  - **Operators:** Stores operator details.
  - **Allocations:** Stores allocation details.

 # R4 User Stories

 # User Stories with Persona, What, and Why

## User Story 1: Admin User Registration
**Persona:** Admin  
**What:** As an admin, I want to register for the application by providing my email and password.  
**Why:** So that I can create and manage the company account and other user accounts and oversee the system's assets, clients, and operators.

## User Story 2: Admin Authorization
**Persona:** Admin  
**What:** As an admin, I want to be able to create other users for my company.  
**Why:** So that I can create/edit accounts for other users within my company so that they can use the service.

## User Story 3: Admin/User Login
**Persona:** Admin/User  
**What:** As an admin/user, I want to be able to log in to the web application.  
**Why:** So that I can access the information and use the web application.

## User Story 4: Create New Asset
**Persona:** Admin/User  
**What:** As a user, I want to create a new asset by filling out a form with the asset details.  
**Why:** So that the asset can be tracked and managed within the system.

## User Story 5: Edit Existing Asset
**Persona:** Admin/User  
**What:** As a user, I want to edit an existing asset's details.  
**Why:** So that I can update information as it changes, ensuring the system remains accurate and up-to-date.

## User Story 6: Create New Operator
**Persona:** Admin/User  
**What:** As a user, I want to create a new operator by filling out a form with the operator details.  
**Why:** So that the operator can be tracked and managed within the system.

## User Story 7: Edit Existing Operator
**Persona:** Admin/User  
**What:** As a user, I want to edit an existing operator’s details.  
**Why:** So that I can update information as it changes, ensuring the system remains accurate and up-to-date.

## User Story 8: Create New Client
**Persona:** Admin/User  
**What:** As a user, I want to create a new client by filling out a form with the client details.  
**Why:** So that the client can be tracked and managed within the system.

## User Story 9: Edit Existing Client
**Persona:** Admin/User  
**What:** As a user, I want to edit an existing client’s details.  
**Why:** So that I can update information as it changes, ensuring the system remains accurate and up-to-date.

## User Story 10: Allocate Operator to Client and Asset
**Persona:** Admin/User  
**What:** As a user, I want to allocate an operator to a client and asset based on specific dates.  
**Why:** So that I can ensure the right operator is assigned to the right task, improving efficiency and resource management.

## User Story 11: View Allocation Details
**Persona:** Admin/User  
**What:** As a user, I want to view the allocation details of operators, clients, and assets.  
**Why:** So that I can monitor and manage the assignments and make adjustments if necessary.

## User Story 12: Responsive UI
**Persona:** Admin/User  
**What:** As a user, I want a responsive user interface that works well on a laptop, tablet, and phone.  
**Why:** So that I can access and use the system effectively from any device, increasing flexibility and usability.

## User Story 13: Calendar View (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want to be able to see all of the allocations on a calendar.  
**Why:** So that I can see everything that is happening and it would help me plan.

## User Story 14: Calendar View - Time Period (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want to be able to see all of the allocations on a calendar within different time periods, for example, see just 1 day or 3 days or a week or see next week but just that week.  
**Why:** So that I can see everything that is happening and it would help me understand what jobs are coming up and who I have allocated to them.

## User Story 15: Drag and Drop (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want to be able to do the allocation in the calendar view and move things around to see what works.  
**Why:** The idea of the whiteboard is to visualise the allocation and move things around to see what combination would work.

## User Story 16: Calendar View Showing All Things Missing (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want to be able to do the allocation in the calendar view and move things around to see what works.  
**Why:** The idea of the whiteboard is to visualise the allocation and move things around to see what combination would work.

## User Story 17: Allocating Operator & Truck Requirement - License (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want to see if an operator can use a certain asset based on the licence/training they have and get a warning if I try to allocate an operator to a truck they can’t drive.  
**Why:** The idea is that I can’t remember what licence every operator has and what licence is required to drive a certain truck as the company becomes larger, so I want the system to keep track of that.

## User Story 18: Allocating Operator Requirement - Date (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want the system to show only operators that are available to work on that day.  
**Why:** The idea is that I can’t remember when operators are available, they could be on leave or don’t work on certain dates so I want the system to keep track of that.

## User Story 19: Allocating Client & Asset Requirement - Inspection (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want to see if an asset can go to a particular client. Certain clients require the asset to be inspected (and pass the inspection) for their site.  
**Why:** The idea is that I can’t remember if an asset has been inspected (and passed) the client requirement and it can’t be sent to that client if it hasn’t. So I want the system to keep track of that.

## User Story 20: Allocating Client & Operator Requirement - Induction (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want to see if an operator can go to a particular client. Certain clients require the operator to be inducted for their site before they can come on-site.  
**Why:** The idea is that I can’t remember if an operator has been inducted to a site (and passed). So I want the system to keep track of that.

## User Story 21: Import/Export Data (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I use other systems within the business, I want to see if I can export/import data from the other systems I use.  
**Why:** The idea is that I don’t have to manually transfer the data, I want to be able to get the data into an Excel document and then export/import that data.

## User Story 22: Open API (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, the main alternative system I use to connect to is Formitize and I want to see if this can link directly (both ways) to it.  
**Why:** After I do the planning, I just want the allocation to be automatically added to Formitize so that each operator can be notified where they are going.

## User Story 23: Responsive UI (Really Large Screen) (Stretch Goal)
**Persona:** Admin/User  
**What:** As a user, I want this to replace the whiteboard, so I want to be able to see all of the allocations on a really big screen. Currently, we use a 50” TV to show the current location of all trucks (GPS tracker) and I want the allocations to show up on that.  
**Why:** The idea is that we visualise the allocations and that everyone can see it in the office, so they know what every truck and operator is doing. By being able to show up on a 50” TV then it would be a true replacement.

## User Story 24: Change Log (Stretch Goal)
**Persona:** Admin/User  
**What:** As an admin/user, I want to see who has made the changes and what changes they made.  
**Why:** I work in a team where multiple people will have access to the same system, so if a change is made, I just want a log on that change. This would also help me with compliance and security.
 

# R5 Wireframes for multiple standard screen sizes, created using industry standard software

Each page will have 3 lay out:
- Desktop 1024 X 768 +
- mobile 300 X 800  

Theme colours
- Off White #F2F4F4
- Light Orange #FDAA48 
- Obsidian Black #0B1215
- Cyan Clue #14A3C7

Font
- Inter

## The page that are planned for are (based on min viable product and these does not include the stretch goals):
### Login/sign up page
![landing page](docs/wirefram/signuplogin/longin_signup_landingpage.png)
![signup](docs/wirefram/signuplogin/longin_signup_landingpage_singup.png)
![login](docs/wirefram/signuplogin/longin_signup_landingpage_login.png)


Mobile version

![landing page mobile](docs/wirefram/signuplogin/longin_signup_landingpage_mobile.png)
![sing up mobile](docs/wirefram/signuplogin/longin_signup_landingpage_singup_mobile.png)
![login mobile](docs/wirefram/signuplogin/longin_signup_landingpage_login_mobile.png)

### Dashboard
![dashboard](docs/wirefram/dashboard/Dashboard.png)

Mobile version

![dshboard mobile](docs/wirefram/dashboard/Dashboard_phone.png)


### Asset page

![asset_landing](docs/wirefram/asset/desktop/Asset_landing.png)
![asset_new](docs/wirefram/asset/desktop/Asset_new.png)
![asset_edit](docs/wirefram/asset/desktop/Asset_edit.png)

Mobile version

![asset_landing_mobile](docs/wirefram/asset/mobile/Asset_langing_mobile.png)
![asset_new_mobile](docs/wirefram/asset/mobile/Asset_new.png)
![asset_edit_mobile](docs/wirefram/asset/mobile/Asset_edit.png)

### Operator Page
![operator_landing](docs/wirefram/Operator/desktop/operator_new.png)
![operator_new](docs/wirefram/Operator/desktop/operator_new.png)
![operator_edit](docs/wirefram/Operator/desktop/operator_edit.png)

Mobile version

![operator_landing_mobile](docs/wirefram/Operator/mobile/operator_landing_landing.png)
![operator_new](docs/wirefram/Operator/mobile/operator_new_mobile.png)
![operator_edit](docs/wirefram/Operator/mobile/operator_edit_mobile.png)

### Client Page
![client_landing](docs/wirefram/client/desktop/client_new.png)
![client_new](docs/wirefram/client/desktop/client_new.png)
![client_edit](docs/wirefram/client/desktop/client_edit.png)

Mobile version

![client_landing_mobile](docs/wirefram/client/mobile/client_landing_mobile.png)
![client_new_mobile](docs/wirefram/client/mobile/client_new_mobile.png)
![client_edit_mobile](docs/wirefram/client/mobile/client_edit_mobile.png)


### Allocation Page
![allocation_landing](docs/wirefram/Allocation/desktop/Allocation_landing.png)
![allocation_new](docs/wirefram/Allocation/desktop/Allocation_new.png)
![allocation_edit_1](docs/wirefram/Allocation/desktop/Allocations_edit_1.png)
![allocation_edit_2](docs/wirefram/Allocation/desktop/Allocation_edit_2.png)

Mobile version

![allocation_landing_mobile](docs/wirefram/Allocation/mobile/Allocation_landing_mobile.png)
![allocation_new_mobile](docs/wirefram/Allocation/mobile/Allocation_new_mobile.png)
![allocation_edit1_mobile](docs/wirefram/Allocation/mobile/Allocation_edit_mobile.png)
![allocation_edit2_mobile](docs/wirefram/Allocation/mobile/Allocation_edit2_mobile.png)

### Profile page
![profile](docs/wirefram/Profile/desktop/Profile.png)

Mobile version

![profile_mobile](docs/wirefram/Profile/mobile/Profile_mobile.png)

**Please see below for how it will all interact with each other**
![wirefram digram](<docs/wirefram/wirefram flow.png>)


# R6 Screenshots of your Trello board throughout the duration of the project
Please see below for the screen show of the trello board that I used to complete this project.: 

## Day 1
![alt text](<docs/Trello_screenshot/day1/Daily standup card.png>) 
![alt text](<docs/Trello_screenshot/day1/first tast to set up board.png>) 
![alt text](<docs/Trello_screenshot/day1/initial trello baord.png>) 
![alt text](<docs/Trello_screenshot/day1/R6 card.png>) 

## Day 2
![alt text](<docs/Trello_screenshot/day2/daily standup.png>) 
![alt text](docs/Trello_screenshot/day2/R1.png) 
![alt text](docs/Trello_screenshot/day2/trellobaord.png)

## Day 3
![alt text](docs/Trello_screenshot/day3/standup.png) 
![alt text](docs/Trello_screenshot/day3/Trelloboard.png)

## Day 4
![alt text](<docs/Trello_screenshot/day4/R1 card updated.png>) 
![alt text](docs/Trello_screenshot/day4/standup.png) 
![alt text](docs/Trello_screenshot/day4/trellobaord.png)

## Day 5
![alt text](<docs/Trello_screenshot/day5/R2 update on Dataflo digram.png>) 
![alt text](docs/Trello_screenshot/day5/standup.png) 
![alt text](docs/Trello_screenshot/day5/trellobaord.png)

## Day 6
![alt text](<docs/Trello_screenshot/day6/screen shot of the board.png>) 
![alt text](docs/Trello_screenshot/day6/Standup.png) 
![alt text](<docs/Trello_screenshot/day6/update on the tast.png>)

## Day 7
![alt text](docs/Trello_screenshot/day7/dailystandup.png) 
![alt text](<docs/Trello_screenshot/day7/Dataflow digram card.png>) 
![alt text](<docs/Trello_screenshot/day7/R3 card.png>) 
![alt text](<docs/Trello_screenshot/day7/trello board.png>)

## Day 8
![alt text](<docs/Trello_screenshot/day8 /Daily Standup.png>) 
![alt text](<docs/Trello_screenshot/day8 /R3 before being moved to testing.png>) 
![alt text](<docs/Trello_screenshot/day8 /R4 Card.png>) 
![alt text](<docs/Trello_screenshot/day8 /R5 Card.png>) 
![alt text](<docs/Trello_screenshot/day8 /screen shot of board start of day.png>)

## Day 9
![alt text](<docs/Trello_screenshot/day9/Day9 Standup.png>) 
![alt text](<docs/Trello_screenshot/day9/R5 Card.png>) 
![alt text](<docs/Trello_screenshot/day9/Trello board screen shot.png>)

## Day 10
![alt text](<docs/Trello_screenshot/day10/Completed R5.png>) 
![alt text](<docs/Trello_screenshot/day10/completed trello board before submission.png>) 
![alt text](<docs/Trello_screenshot/day10/R5 Card.png>) 
![alt text](docs/Trello_screenshot/day10/Standup.png)

# Reference List
Data Flow Diagram Symbols n.d., Lucidchart (https://www.lucidchart.com/pages/data-flow-diagram/data-flow-diagram-symbols).