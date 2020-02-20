const handleLoveDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#loveText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#loveForm').attr('action'), $('#loveForm').serialize(), function() {
        loadLoveFromServer();
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
        action='/loveThankYou'
        method='POST'
        className='loveForm' >
            <label htmlFor='answer'>Text: </label>
            <input id='loveText' type='text' name='answer' placeholder='...' />
            <input className='logThoughtSubmit' type='submit' value='Log' />
        </form>
    );
};

const LoveList = function(props) {
    if(props.loveResponses.length === 0) {
        return (
            <h3>No Happy Thoughts</h3>
        );
    }

    const loveNodes = props.loveResponses.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    .map(function(loveThought) {
        return (
            <div key={loveThought._id}>
                <h3> {loveThought.answer} </h3>
                <span>{loveThought._id}</span>
            </div>
        );
    });

    return (
        <div>
            {loveNodes}
            <p>{props.loveResponses.length} thoughts</p>
        </div>
    );
};

const loadLoveFromServer = () => {
    sendAjax('GET', '/getLove', null, (data) => {
        ReactDOM.render(
            <LoveList loveResponses={data.loveResponses} />, document.querySelector('#error')
        );
    });
};

const createLoveView = function() {
    ReactDOM.render(
        <LoveTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <LoveForm />, document.querySelector('#logThought')
    );
};

const handleLoveClick = () => {
	const loveType = document.querySelector('#loveWrite');
	
	loveType.addEventListener('click', e => {
		e.preventDefault();
		createLoveView();
	});
};