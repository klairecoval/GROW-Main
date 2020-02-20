const handleHappiestDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#happiestText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#happiestForm').attr('action'), $('#happiestForm').serialize(), function() {
        loadHappiestFromServer();
    });

    return false;
};

const HappiestTitle = (props) => {
    return (
        <h2 id="happiestTitle">I feel happiest when...</h2>
    );
};

const HappiestForm = (props) => {
    return (
        <form id='happiestForm'
        onSubmit={handleHappiestDrop}
        name='happiestForm'
        action='/happiestThankYou'
        method='POST'
        className='happiestForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='happiestText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const HappiestList = function(props) {
    if(props.happiestResponses.length === 0) {
        return (
            <h3>No Happy Thoughts</h3>
        );
    }

    const happiestNodes = props.happiestResponses.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    .map(function(happiestThought) {
        return (
            <div key={happiestThought._id}>
                <h3> {happiestThought.answer} </h3>
                <span>{happiestThought._id}</span>
            </div>
        );
    });

    return (
        <div>
            {happiestNodes}
            <p>{props.happiestResponses.length} thoughts</p>
        </div>
    );
};

const loadHappiestFromServer = () => {
    sendAjax('GET', '/getHappiest', null, (data) => {
        ReactDOM.render(
            <HappiestList happiestResponses={data.happiestResponses} />, document.querySelector('#error')
        );
    });
};

const createHappiestView = function() {
    ReactDOM.render(
        <HappiestTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <HappiestForm />, document.querySelector('#logThought')
    );
};

const handleHappiestClick = () => {
	const happiestType = document.querySelector('#happiestPrompt');
	
	happiestType.addEventListener('click', e => {
		e.preventDefault();
		createHappiestView();
	});
};