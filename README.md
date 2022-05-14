**AppSync, Amplify, Lambda, DynamoDB and React/NextJS Boilerplate**
------------------------
# TODO:
- [x] Generate Next.js
- [x] Add Tailwind library
- [x] Set up Amplify, AppSync, and DynamoDB
    - [x] Create Custom schema
    - [x] Push API to AWS
- [x] Remove Next.js so It's just React.js
- [x] Add Jest Testing Library
- [x] Add a ESLint
- [ ] Create App with React.js
    - [x] Create a Navbar
	- [ ] Create a form for adding data(like adding a product/order)
        - [x] Create basic form UI
        - [ ] Add form functionality(push data to DynamoDB)
    - [x] Create a landing page(x2)
    - [x] Create an Admin page
    - [x] Move the order data to the Admin Page
    - [x] Remove Data from the Home/Landing Page to the Admin page
- [ ] Add Cognito Auth
    - [ ] Add Email auth
        - [ ] Enable SES for verifying the Email instead of verifying via the Cognito Console
    - [ ] Add Apple auth
    - [ ] Add Google auth
    - [ ] Add Facebook auth
- [ ] Add a POST and GET lambda function that connects to the DB
---
# Documentation:
---
## About this app
This is a CRUD app that allows users to order products via a form. The data is stored in DynamoDB and gets returned to the user on another page that is only visible when logged in.

## Update schema
If you want to update the schema, locate the `schema.graphql` file, nested in the Amplify directory.
Once you've updated the schema, run `amplify push` (this will take a minute).

## If you want to create a new backend API
Try `amplify add api` to create a backend API and then "amplify push" to deploy everything


## Run the local development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Some Amplify commands
```bash
amplify status # will show your your current config
amplify add <category> #will allow you to add features like user login or a backend API
amplify push # will build your local backend resources and provision it in the cloud
amplify console #will open the Amplify Console and view your project status
amplify publish #will build all your local backend and frontend resources
```# shopping-list-app
# shopping-list-app
