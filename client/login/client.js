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
        <div>
            <form id='loginForm' name='loginForm'
                onSubmit={handleLogin}
                action='/login'
                method='POST'
                className='mainForm'>
                <label htmlFor='username'>User ID Code: </label>
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
            <input id='user' className="lato" type='text' name='username' placeholder='Paste code here' />
            <input className='formSubmit playfair' id="submitSignup" type='submit' value='Enter Grow' />
        </form>
    );
};

const CodeModal = (props) => {
    return (
        <div className="userCodeModal" id="userCodeModal" >
            <div className="userCodeModalContent">
                <a href="/aboutPage" target="_parent"><button className="playfair loginBackAboutBtn">Back</button></a>
                <h2 className="playfair enterGrow">Enter Grow</h2>
                <p className="lato">Please copy the code below and paste it in the text box to <br />enter. Thank you for keeping the garden safe.</p>
                <div id="userCodeElements">
                    <div id="userCodeVal" className="playfair">{generateUserCode(4)}</div>
                    <button onClick={copyDivToClipboard} className="playfair" id="copyCodeBtn">Copy</button>
                </div>
                <SignupWindow />
            </div>
        </div>
    );
};

const copyDivToClipboard = () => {
    var range = document.createRange();
    range.selectNode(document.getElementById('userCodeVal'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

// create login view in center of page
const createLoginWindow = () => {
    ReactDOM.render(
        <LoginWindow />,
        document.querySelector('#loginContent')
    );
};

// create signup view in center of page
const createSignupWindow = () => {
    ReactDOM.render(
        <SignupWindow />,
        document.querySelector('#loginContent')
    );
};

const createCodeModal = () => {
    ReactDOM.render(
        <CodeModal />, 
        document.querySelector('#loginContent')
    );
}

// depending on if login or signup icon pressed, create corresponding view
const setup = () => {
    // createLoginWindow();
    createCodeModal();
};

// load in csrf token
$(document).ready(function() {
    setup();
});