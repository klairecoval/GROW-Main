const generateUserCode = (length) => {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// check if existing user has entered data into all fields
const handleLogin = (e) => {
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

// check if new user has filled out all fields
// check if pass and confirmed pass match
const handleSignup = (e) => {
    e.preventDefault();

    if($('#user').val() == '') {
        handleError('All fields are required.');
        return false;
    }

    sendAjax('POST', $('#signupForm').attr('action'), $('#signupForm').serialize(), redirect);

    return false;
};

// create login form with username and pass
const LoginWindow = (props) => {
    return (
        <div>
            <form id='loginForm' name='loginForm'
            onSubmit={handleLogin}
            action='/login'
            method='POST'
            className='mainForm'>
                <label htmlFor='username'>Username: </label>
                <input id='user' type='text' name='username' placeholder='username' />
                <input className='formSubmit' type='submit' value='Sign in' />
            </form>
            <CodeModal />
        </div>
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
            <label htmlFor='username'>New Username: </label>
            <input id='user' type='text' name='username' placeholder='username' />
            <input className='formSubmit' id="idkMan" type='submit' value='Sign up' />
        </form>
    );
};

const CodeModal = (props) => {
    return (
        <div className="userCodeModal" id="userCodeModal" >
            <div className="userCodeModalContent">
                <h2>Your user code is {generateUserCode(4)}</h2>
                <SignupWindow />
            </div>
        </div>
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

    const codeModal = document.getElementById("userCodeModal");
    const genUserCodeBtn = document.getElementById("genUserCodeBtn");
    
    genUserCodeBtn.onclick = () => {
        codeModal.style.display = "block";
    };
    
    window.onclick = (event) => {
      if (event.target === codeModal) {
        codeModal.style.display = "none";
      }
    }

    const submit = document.getElementById("idkMan");
    submit.onclick = () => {
        sendAjax('POST', $('#signupForm').attr('action'), $('#signupForm').serialize(), redirect);
    };
};

// load in csrf token
$(document).ready(function() {
    setup();
});