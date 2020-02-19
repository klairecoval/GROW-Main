const handleThankfulDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#thankfulText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#thankfulForm').attr('action'), $('#thankfulForm').serialize(), function() {
        return null;
    });

    return false;
};

const ThankfulTitle = (props) => {
    return (
        <h2 id="thankfulTitle">I am thankful for...</h2>
    );
};

const ThankfulForm = (props) => {
    return (
        <form id='thankfulForm'
        onSubmit={handleThankfulDrop}
        name='thankfulForm'
        action='/thankYou'
        method='POST'
        className='thankfulForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='thankfulText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const createThankfulView = function() {
    ReactDOM.render(
        <ThankfulTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <ThankfulForm />, document.querySelector('#logThought')
    );
};

const handleThankfulClick = () => {
	const thankfulType = document.querySelector('#thankfulPrompt');
	
	thankfulType.addEventListener('click', e => {
		e.preventDefault();
		createThankfulView();
	});
};