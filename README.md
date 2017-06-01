# LS-Mobile-II

## Topics

* AsyncStorage
* TextInput
* Button
* react-navigation
* this.props.navigation
* this.props.navigation.navigate('Route')
*	StackNavigator
* static navigationOptions
* ListView

## Assignment

For your assignment you will be creating a mobile application with four views.

Home:
This view will have two buttons.
Button one will say `Sign In` and will navigate the user to the `SignIn` component.
Button two will say `Sign Up` and will navigate the user to the `SignUp` component.

SignUp:
This view will have two input fields and a button that says `Sign Up`.
The first input field will be for the `email`.
The second input field will be for the `password`.
When the user clicks the `Sign Up` button you will use `axios` to make a POST request to `/users`.
If the user successfully signs up then you will navigate the user to the `Content` component.
Be sure to save the JWT token to `AsyncStorage`.

SignIn:
This view will have two input fields and a button that says `Sign In`.
The first input field will be for the `email`.
The second input field will be for the `password`.
When the user clicks the `Sign In` button you will use `axios` to make a POST request to `/signin`.
If you receive a valid JWT token then save it to `AsyncStorage` and then navigate the user to `Content`.

Content:
This component will take the JWT token saved to `AsyncStorage` and will put it on the header of a
POST request to `/users`.  The header key is `authorization`.
Make this request from inside of `componentDidMount` and run it whenever this component is rendered.
Once you receive back the list of users from the database then display them using a `ListView` component.


Make all requests to https://mobile-server-ii.herokuapp.com
Make sure that you save the JWT token to `AsyncStorage`.
Once you complete the basic requirements then work on covering edge cases.  A good starting point would be to add 
another password input to the `SignUp` component.  Notify the user if their second password doesn't match the first.
Replace the characters in the password input fields with dots.
Show the user an error message if the email they provide is already in the database.
If the user provides an incorrect email/password combo display an error message in the `SignIn` component.
Note: Never tell a user that they entered an incorrect password, always say incorrect email or password.
This makes it so people can't figure out what emails you have in your database.


### Server Routes

[GET] `/users` Gets all users. Requires a header `authorization` and a valid JWT.
[POST] `/users` Creates a user. Requires an object with two properties: `email` and `password`. Returns a JWT.
[POST] `/signin` Requires an object with two properties: `email` and `password`. Returns a JWT.
 

