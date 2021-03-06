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

    console.log($('input[name=username').val());

    sendAjax('POST', $('#loginForm').attr('action'), $('#loginForm').serialize(), redirect);
    return false;
};

// check if new user has filled out all fields
// check if pass and confirmed pass match
var handleSignup = function handleSignup(e) {
    e.preventDefault();

    // $('#beerMessage').animate({height: 'hide'}, 350);

    if ($('#user').val() == '') {
        handleError('User ID Code required.');
        return false;
    }

    if (document.getElementById('userCodeVal').innerText !== $('#user').val()) {
        4;
        alert("Codes do not match.");
        return false;
    } else {
        sendAjax('POST', $('#signupForm').attr('action'), $('#signupForm').serialize(), redirect);
    }
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
                'User ID Code: '
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
        React.createElement('input', { id: 'user', className: 'lato', type: 'text', maxLength: '4', name: 'username', placeholder: 'Paste code here' }),
        React.createElement('input', { className: 'formSubmit playfair', id: 'submitSignup', type: 'submit', value: 'Enter Grow' })
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
                'a',
                { href: '/aboutPage', target: '_parent' },
                React.createElement(
                    'button',
                    { className: 'playfair loginBackAboutBtn' },
                    'Back'
                )
            ),
            React.createElement(
                'div',
                { id: 'enterGrowContent' },
                React.createElement(
                    'h2',
                    { className: 'playfair enterGrow' },
                    'Enter Grow'
                ),
                React.createElement(
                    'p',
                    { className: 'lato' },
                    'Please copy the code below and paste it in the text box to ',
                    React.createElement('br', null),
                    'enter. Thank you for keeping the garden safe.'
                ),
                React.createElement(
                    'div',
                    { id: 'userCodeElements' },
                    React.createElement(
                        'div',
                        { id: 'userCodeVal', className: 'playfair' },
                        generateUserCode(4)
                    ),
                    React.createElement(
                        'button',
                        { onClick: copyDivToClipboard, className: 'playfair', id: 'copyCodeBtn' },
                        'Copy'
                    )
                ),
                React.createElement(SignupWindow, null)
            )
        )
    );
};

var copyDivToClipboard = function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById('userCodeVal'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
};

// create login view in center of page
var createLoginWindow = function createLoginWindow() {
    ReactDOM.render(React.createElement(LoginWindow, null), document.querySelector('#loginContent'));
};

// create signup view in center of page
var createSignupWindow = function createSignupWindow() {
    ReactDOM.render(React.createElement(SignupWindow, null), document.querySelector('#loginContent'));
};

var createCodeModal = function createCodeModal() {
    ReactDOM.render(React.createElement(CodeModal, null), document.querySelector('#loginContent'));
};

// depending on if login or signup icon pressed, create corresponding view
var setup = function setup() {
    // createLoginWindow();
    createCodeModal();
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
