const handleLoveDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#loveText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#loveForm').attr('action'), $('#loveForm').serialize(), function() {
    });

    return false;
};

const LoveTitle = (props) => {
    return (
        <h2 id="loveTitle">I love...</h2>
    );
};

const LoveForm = (props) => {
    return (
        <form id='loveForm'
        onSubmit={handleLoveDrop}
        name='loveForm'
        // action='/maker'
        method='POST'
        className='loveForm' >
            <label htmlFor='text'>Text: </label>
            <input id='loveText' type='text' name='text' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const createLoveView = function() {
    ReactDOM.render(
        <LoveTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <LoveForm />, document.querySelector('#logThought')
    );
};

const handleLoveType = () => {
	const loveType = document.querySelector('#loveType');
	
	loveType.addEventListener('click', e => {
		e.preventDefault();
		createLoveView();
	});
};