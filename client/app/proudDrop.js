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
        action='/proudThankYou'
        method='POST'
        className='proudForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='proudText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const ProudList = function(props) {
    if(props.proudResponses.length === 0) {
        return (
            <h3>No Happy Thoughts</h3>
        );
    }

    const proudNodes = props.proudResponses.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    .map(function(proudThought) {
        return (
            <div key={proudThought._id}>
                <h3> {proudThought.answer} </h3>
                <span>{proudThought._id}</span>
            </div>
        );
    });

    return (
        <div>
            {proudNodes}
            <p>{props.proudResponses.length} thoughts</p>
        </div>
    );
};

const loadProudFromServer = () => {
    sendAjax('GET', '/getProud', null, (data) => {
        ReactDOM.render(
            <ProudList proudResponses={data.proudResponses} />, document.querySelector('#error')
        );
    });
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