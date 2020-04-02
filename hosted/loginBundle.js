'use strict';

var generateUserCode = function generateUserCode(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// check if existing user has entered data into all fields
var handleLogin = function handleLogin(e) {
    e.preventDefault();

    if ($('#user').val() == '') {
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
var handleSignup = function handleSignup(e) {
    e.preventDefault();

    if ($('#user').val() == '') {
        handleError('All fields are required.');
        return false;
    }

    sendAjax('POST', $('#signupForm').attr('action'), $('#signupForm').serialize(), redirect);

    return false;
};

// create login form with username and pass
var LoginWindow = function LoginWindow(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { id: 'loginForm', name: 'loginForm',
                onSubmit: handleLogin,
                action: '/login',
                method: 'POST',
                className: 'mainForm' },
            React.createElement(
                'label',
                { htmlFor: 'username' },
                'Username: '
            ),
            React.createElement('input', { id: 'user', type: 'text', name: 'username', placeholder: 'username' }),
            React.createElement('input', { className: 'formSubmit', type: 'submit', value: 'Sign in' })
        ),
        React.createElement(CodeModal, null)
    );
};

// create signup window with username, pass, and confirmed pass
var SignupWindow = function SignupWindow(props) {
    return React.createElement(
        'form',
        { id: 'signupForm', name: 'signupForm',
            onSubmit: handleSignup,
            action: '/signup',
            method: 'POST',
            className: 'mainForm' },
        React.createElement(
            'label',
            { htmlFor: 'username' },
            'New Username: '
        ),
        React.createElement('input', { id: 'user', type: 'text', name: 'username', placeholder: 'username' }),
        React.createElement('input', { className: 'formSubmit', id: 'idkMan', type: 'submit', value: 'Sign up' })
    );
};

var CodeModal = function CodeModal(props) {
    return React.createElement(
        'div',
        { className: 'userCodeModal', id: 'userCodeModal' },
        React.createElement(
            'div',
            { className: 'userCodeModalContent' },
            React.createElement(
                'h2',
                null,
                'Your user code is ',
                generateUserCode(4)
            ),
            React.createElement(SignupWindow, null)
        )
    );
};

// create login view in center of page
var createLoginWindow = function createLoginWindow() {
    ReactDOM.render(React.createElement(LoginWindow, null), document.querySelector('#content'));
};

// // create signup view in center of page
// const createSignupWindow = () => {
//     ReactDOM.render(
//         <SignupWindow />,
//         document.querySelector('#content')
//     );
// };

// depending on if login or signup icon pressed, create corresponding view
var setup = function setup() {
    var loginButton = document.querySelector('#loginButton');
    var signupButton = document.querySelector('#signupButton');

    signupButton.addEventListener('click', function (e) {
        e.preventDefault();
        // createSignupWindow();
        return false;
    });

    loginButton.addEventListener('click', function (e) {
        e.preventDefault();
        createLoginWindow();
        return false;
    });

    createLoginWindow();

    var codeModal = document.getElementById("userCodeModal");
    var genUserCodeBtn = document.getElementById("genUserCodeBtn");

    genUserCodeBtn.onclick = function () {
        codeModal.style.display = "block";
    };

    window.onclick = function (event) {
        if (event.target === codeModal) {
            codeModal.style.display = "none";
        }
    };

    var submit = document.getElementById("idkMan");
    submit.onclick = function () {
        sendAjax('POST', $('#signupForm').attr('action'), $('#signupForm').serialize(), redirect);
    };
};

// load in csrf token
$(document).ready(function () {
    setup();
});
'use strict';

// helper function to create an error message with desired error text
var handleError = function handleError(message) {};

// redirect page and hide error
var redirect = function redirect(response) {
    window.location = response.redirect;
};

// send ajax data and handle error
var sendAjax = function sendAjax(type, action, data, success) {
    $.ajax({
        cache: false,
        type: type,
        url: action,
        data: data,
        dataType: 'json',
        success: success,
        error: function error(xhr, status, _error) {
            var messageObj = JSON.parse(xhr.responseText);
            handleError(messageObj.error);
        }
    });
};
