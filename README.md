# https://kolosand.github.io/today-calls/

Build application for creating TODO list of calls

You should create simple application to create TODO list of today's calls. Application consists of just one page and there is no need for some middleware or backend.

You can use any Javascript frameworks and libraries (MVC frameworks prefered) you prefer. Application stores all the data to local storage. Graphical design is up to the programmer, also some CSS framework can be used (Javascript quality is the most important). Ideally you should also write documentation and some tests for the application.

For application behavior description see description and wireframe:




![image](https://user-images.githubusercontent.com/43179024/148202841-5222533b-2df9-4f24-9f63-ea51b97e191b.png)




Add call

Section to add new record of call. It consists of these inputs:

●	name ­ validate for max. of 30 characters

●	phone number ­ see phone number validation below

●	time ­ just time, in mm:ss format

Phone number validation ­ each phone number should start with '+', or '00' string followed by digit characters or characters '(', ')', '­'. You should ignore all whitespaces when storing record and convert first letter '+' to '00' (there should be just one format to display phone number). Characters '(',')' and '­' can be used just once and should be just on position 2 to 8 in the string.

Example of valid phone numbers to store:
 
●	+(420) 111 222 333

●	+(420)­111222333

●	+420111222333

●	00420111222333

Stored and display format of phone number ­ 00XXX XXX XXX

Store all data to local storage.

List of calls

Display list of calls stored by user as shown in wireframe.

Header consists of name (sortable), phone number, time (sortable).

Each row consists of these columns:

●	name

●	phone number

●	time

●	delete action ­ deletes this record from storage

●	checkbox ­ disabled, checked if the time of call < current time

Default sort of list is by time ASC. User can sort by name and time.

Below the table are 3 buttons

●	all ­ display all records in list

●	next ­ display just calls in future

●	finished ­ display just calls in past

Next call

This section should show to the user the next call of the day.

In the ordered list of calls (by time ASC) find first record where time of call > current time and display that record.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



