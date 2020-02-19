const handleInspiredDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#inspiredText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#inspiredForm').attr('action'), $('#inspiredForm').serialize(), function() {
    });

    return false;
};

const InspiredTitle = (props) => {
    return (
        <h2 id="inspiredTitle">I am inspired by...</h2>
    );
};

const InspiredForm = (props) => {
    return (
        <form id='inspiredForm'
        onSubmit={handleInspiredDrop}
        name='inspiredForm'
        action='/thankYou'
        method='POST'
        className='inspiredForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='inspiredText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const createInspiredView = function() {
    ReactDOM.render(
        <InspiredTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <InspiredForm />, document.querySelector('#logThought')
    );
};

const handleInspiredClick = () => {
	const inspiredType = document.querySelector('#inspiredPrompt');
	
	inspiredType.addEventListener('click', e => {
		e.preventDefault();
		createInspiredView();
	});
};