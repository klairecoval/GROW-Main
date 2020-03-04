// check if existing user has entered data into all fields
const handleLoginMobile = (e) => {
    e.preventDefault();

    if($('#user').val() == '') {
        console.log('User ID Code is empty.');
        return false;
    }

    console.log('we are about to send ajax pray for us');
    console.log($('input[name=username').val());

    sendAjax('POST', $('#loginForm').attr('action'), $('#loginForm').serialize(), redirect);
    return false;
};

// create login form with username and pass
const LoginWindow = (props) => {
    return (
        <form id='loginForm' name='loginForm'
            onSubmit={handleLoginMobile}
            action='/loginMobile'
            method='POST'
            className='mainForm'>
            <label htmlFor='username'>User ID Code: </label>
            <input id='user' type='text' name='username' placeholder='username' />
            <p>Enter in the 4 digit code<br/> written on your card.</p>
            <input className='formSubmit' type='submit' value='Sign in' />
        </form>
    );
};


// create login view in center of page
const createLoginWindow = () => {
    ReactDOM.render(
        <LoginWindow />,
        document.querySelector('#mobileContent')
    );
};

const setup = () => {
    createLoginWindow();
};

$(document).ready(function() {
    setup();
});