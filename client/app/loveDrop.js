const handleExcitedDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#logText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#excitedForm').attr('action'), $('#excitedForm').serialize(), function() {
        loadExcitedThoughts();
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
        // action='/maker'
        method='POST'
        className='excitedForm' >
            <label htmlFor='text'>Text: </label>
            <input id='excitedText' type='text' name='text' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const setup = function() {
    ReactDOM.render(
        <ExcitedForm />, document.querySelector('#logThought')
    );

    ReactDOM.render(
        <DomoList />, document.querySelector('#domos')
    );
};