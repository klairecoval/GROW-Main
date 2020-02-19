const handleExcitedDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#excitedText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#excitedForm').attr('action'), $('#excitedForm').serialize(), function() {
    });

    return false;
};

const ExcitedTitle = (props) => {
    return (
        <h2 id="excitedTitle">I am excited for...</h2>
    );
};

const ExcitedForm = (props) => {
    return (
        <form id='excitedForm'
        onSubmit={handleExcitedDrop}
        name='excitedForm'
        action='/thankYou'
        method='POST'
        className='excitedForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='excitedText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const createExcitedView = function() {
    ReactDOM.render(
        <ExcitedTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <ExcitedForm />, document.querySelector('#logThought')
    );
};

const handleExcitedClick = () => {
	const excitedType = document.querySelector('#excitedPrompt');
	
	excitedType.addEventListener('click', e => {
		e.preventDefault();
		createExcitedView();
	});
};