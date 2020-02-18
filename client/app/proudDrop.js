const handleProudDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#proudText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#proudForm').attr('action'), $('#proudForm').serialize(), function() {
    });

    return false;
};

const ProudTitle = (props) => {
    return (
        <h2 id="proudTitle">I am proud of...</h2>
    );
};

const ProudForm = (props) => {
    return (
        <form id='proudForm'
        onSubmit={handleProudDrop}
        name='proudForm'
        action='/thankYou'
        method='POST'
        className='proudForm' >
            <label htmlFor='text'>Text: </label>
            <input id='proudText' type='text' name='text' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const createProudView = function() {
    ReactDOM.render(
        <ProudTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <ProudForm />, document.querySelector('#logThought')
    );
};

const handleProudClick = () => {
	const proudType = document.querySelector('#proudPrompt');
	
	proudType.addEventListener('click', e => {
		e.preventDefault();
		createProudView();
	});
};