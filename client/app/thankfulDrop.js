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
        action='/thankfulThankYou'
        method='POST'
        className='thankfulForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='thankfulText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const ThankfulList = function(props) {
    if(props.thankfulResponses.length === 0) {
        return (
            <h3>No Happy Thoughts</h3>
        );
    }

    const thankfulNodes = props.thankfulResponses.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    .map(function(thankfulThought) {
        return (
            <div key={thankfulThought._id}>
                <h3> {thankfulThought.answer} </h3>
                <span>{thankfulThought._id}</span>
            </div>
        );
    });

    return (
        <div>
            {thankfulNodes}
            <p>{props.thankfulResponses.length} thoughts</p>
        </div>
    );
};

const loadThankfulFromServer = () => {
    sendAjax('GET', '/getThankful', null, (data) => {
        ReactDOM.render(
            <ThankfulList thankfulResponses={data.thankfulResponses} />, document.querySelector('#error')
        );
    });
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