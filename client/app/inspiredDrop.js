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
        // action='/maker'
        method='POST'
        className='inspiredForm' >
            <label htmlFor='text'>Text: </label>
            <input id='inspiredText' type='text' name='text' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const setup = function() {
    ReactDOM.render(
        <InspiredForm />, document.querySelector('#logThought')
    );

    ReactDOM.render(
        <InspiredForm />, document.querySelector('#promptTitle')
    );
};