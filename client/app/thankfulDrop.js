const handleThankfulDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#thankfulText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#thankfulForm').attr('action'), $('#thankfulForm').serialize(), function() {
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
        // action='/maker'
        method='POST'
        className='thankfulForm' >
            <label htmlFor='text'>Text: </label>
            <input id='thankfulText' type='text' name='text' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const setup = function() {
    ReactDOM.render(
        <ThankfulForm />, document.querySelector('#logThought')
    );

    ReactDOM.render(
        <InspiredForm />, document.querySelector('#promptTitle')
    );
};