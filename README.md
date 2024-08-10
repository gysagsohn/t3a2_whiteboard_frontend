# t3a2_whiteboard_frontend
This is the front end for my T3A2 MERN full stack webapplication. 

Backend repository can be found at:
https://github.com/gysagsohn/T3A2B_whiteboardscheduler_backend/

Website can be found at:
https://whiteboardschedulercom.netlify.app/

https://whiteboardscheduler.com/ - I have pointed the DNS just need to see if it changes after 24 hours

I have added another file to this repository called T3A2A, that contains all of the Part A of this assignment and the planning for it.

## Packages
React
syntax highlighter - see if we need it
modal 
react router DOM
react use
axios
cors
react-icons - for contact page


## Routes/pages - what pages
- dashboard will be home page
- login page - need logic so that if you aren't logged in, it takes you to login page
- operator
- asset
- client
- allocation 
- user
- logout function - not a page but removing JWT token

## Contexts

- authentication 

## Data
- login
- opeartor
- asset 
- clinet
- allocation 
- user

## function


## component  
- header
- change of button clour when you hover over it
- change of colour when you are on the page 
- dark/light mode - stretch goal
- logo taking back to dash baord
- user profile lead to user profile

## style (CSS file)
- header
- theme colour
- different size
- theme page
- each page

## Development testing

One of the first thing I made for this application was the routes. Once the routes was set, I tested to make sure it was working: 

#### Dashboard Page
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Dashboard testing.png>)

Confirmed the data is coming through and links to other site is working
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Dashboard API.png>)

#### Allocation Page
Confirm page is working
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page Testing.png>)

Creating some data to check the API on front end
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/creating some data.png>)

Confirm data is coming through
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/confrim it is working.png>)

Data can be edited
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/edit.png>)

Can be deleted
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Allocation Page/delete.png>)

#### Asset Page
Confirming route made
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Asset Page testing.png>)

Tested to confirm that the backend server was working and asset could be created
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/Asset API tested.png>)

Confirmed that API was being called and could see the asset created directly to backend
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/asset page with an asset created.png>) 


Having issues with creating asset
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/issues with Allocation.png>)

Round two testing after changing a bit of backend on what data it sent and frontend 

Created buttons for the asset type and license type based off the database information 
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/AssetAPI.png>)

I was attempting to write the new information but it would not show up on the screen
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/failed  doenst show what I am typing.png>)

Round 3 
It previews correctly 
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/test to show it shows preview.png>)

New asset created
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/AssetPage/round2/new asset.png>)


#### Client Page
Test to see the route is working
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page testing.png>)

Testing Client API and CRUD function working
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/client page.png>)

Adding new client
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/adding new client.png>)

Deleting client
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/deleting client.png>)

Editing client
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/client page/editing client.png>)

#### Operator Page
Route for Operator Page
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/Opeartor page testing.png>)

API called for Operator Page
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/Operator Page.png>)

Function for new operator
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/New operator.png>)

Edit operator
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/edit operator.png>)

Delete Operator
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/OperatorPage/delete operator.png>)


#### User Page
Route for user page
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/User Page Testing.png>)

Testing user API
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/User API.png>)

editing user
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/edit user API.png>)

Deleting user
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/userPage/Screenshot 2024-08-09 at 9.31.14 AM.png>)

#### Login Page/Signup page
Basic Route created
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page testing.png>)


Protected route created, and if there isn't a valid JWT user is sent to that page to login or sign up. 
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/Login:singup page with options for both.png>)

However, first round of code, wouldn't let the user login or sign up

![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/failed signup.png>) 

![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/failed login.png>)

or when new user were signed up they would sign up  but no JWT token was being sent back. I could confirm that new user was being created on the backend 

![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/backend API call.png>)

After few rounds of code adjustment, login/sign up function is working:

![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/USer logged in.png>)

![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/new user sign up 1.png>)

![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Login Page/Screenshot 2024-08-10 at 10.26.26 AM.png>)

### Hosting 
Checked URL is working and website is working
![alt text](<rsources/T3A2/PartB/Development Testing/frontend/route testing/Hosting working.png>)

