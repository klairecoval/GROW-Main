// check if existing user has entered data into all fields
const handleLogin = (e) => {
    e.preventDefault();

    // $('#beerMessage').animate({height: 'hide'}, 350);

    if($('#user').val() == '') {
        console.log('User ID Code is empty.');
        return false;
    }

    console.log('we are about to send ajax pray for us');
    console.log($('input[name=username').val());

    sendAjax('POST', $('#loginForm').attr('action'), $('#loginForm').serialize(), redirect);
    return false;
};

// check if new user has filled out all fields
// check if pass and confirmed pass match
const handleSignup = (e) => {
    e.preventDefault();

    // $('#beerMessage').animate({height: 'hide'}, 350);

    if($('#user').val() == '') {
        handleError('User ID Code required.');
        return false;
    }

    sendAjax('POST', $('#signupForm').attr('action'), $('#signupForm').serialize(), redirect);

    return false;
};

// create login form with username and pass
const LoginWindow = (props) => {
    return (
        <form id='loginForm' name='loginForm'
            onSubmit={handleLogin}
            action='/login'
            method='POST'
            className='mainForm'>
            <label htmlFor='username'>User ID Code: </label>
            <input id='user' type='text' name='username' placeholder='username' />
            <input className='formSubmit' type='submit' value='Sign in' />
        </form>
    );
};

// create signup window with username, pass, and confirmed pass
const SignupWindow = (props) => {
    return (
        <form id='signupForm' name='signupForm'
            onSubmit={handleSignup}
            action='/signup'
            method='POST'
            className='mainForm'>
            <label htmlFor='username'>User ID code: </label>
            <input id='user' type='text' name='username' placeholder='username' />
            <input className='formSubmit' type='submit' value='Sign up' />
        </form>
    );
};

// create login view in center of page
const createLoginWindow = () => {
    ReactDOM.render(
        <LoginWindow />,
        document.querySelector('#content')
    );
};

// create signup view in center of page
const createSignupWindow = () => {
    ReactDOM.render(
        <SignupWindow />,
        document.querySelector('#content')
    );
};

// depending on if login or signup icon pressed, create corresponding view
const setup = () => {
    const loginButton = document.querySelector('#loginButton');
    const signupButton = document.querySelector('#signupButton');

    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        createSignupWindow();
        return false;
    });

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        createLoginWindow();
        return false;
    });

    createLoginWindow();
};

// // get csrf token
// const getToken = () => {
//     sendAjax('GET', '/getToken', null, (result) => {
//         setup(result.csrfToken);
//     });
// };

// load in csrf token
$(document).ready(function() {
    setup();
});