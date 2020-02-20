const handleInspiredDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#inspiredText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#inspiredForm').attr('action'), $('#inspiredForm').serialize(), function() {
        loadInspiredFromServer();
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
        action='/inspiredThankYou'
        method='POST'
        className='inspiredForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='inspiredText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const InspiredList = function(props) {
    if(props.inspiredResponses.length === 0) {
        return (
            <h3>No Inspired Thoughts</h3>
        );
    }

    const inspiredNodes = props.inspiredResponses.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    .map(function(inspiredThought) {
        return (
            <div key={inspiredThought._id}>
                <h3> {inspiredThought.answer} </h3>
                <span>{inspiredThought._id}</span>
            </div>
        );
    });

    return (
        <div>
            {inspiredNodes}
            <p>{props.inspiredResponses.length} thoughts</p>
        </div>
    );
};

const loadInspiredFromServer = () => {
    sendAjax('GET', '/getInspired', null, (data) => {
        ReactDOM.render(
            <InspiredList inspiredResponses={data.inspiredResponses} />, document.querySelector('#error')
        );
    });
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