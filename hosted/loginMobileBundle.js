'use strict';

// check if existing user has entered data into all fields
var handleLoginMobile = function handleLoginMobile(e) {
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

// create login form with username and pass
var LoginWindow = function LoginWindow(props) {
    return React.createElement(
        'form',
        { id: 'loginForm', name: 'loginForm',
            onSubmit: handleLoginMobile,
            action: '/loginMobile',
            method: 'POST',
            className: 'mainForm' },
        React.createElement(
            'label',
            { htmlFor: 'username' },
            'User ID Code: '
        ),
        React.createElement('input', { id: 'user', type: 'text', name: 'username', placeholder: 'username' }),
        React.createElement(
            'p',
            null,
            'Enter in the 4 digit code',
            React.createElement('br', null),
            ' written on your card.'
        ),
        React.createElement('input', { className: 'formSubmit', type: 'submit', value: 'Sign in' })
    );
};

// create login view in center of page
var createLoginWindow = function createLoginWindow() {
    ReactDOM.render(React.createElement(LoginWindow, null), document.querySelector('#mobileContent'));
};

var setup = function setup() {
    createLoginWindow();
};

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
