const handleExcitedDrop = (e) => {
    e.preventDefault();

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#excitedText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#excitedForm').attr('action'), $('#excitedForm').serialize(), redirect);

    return false;
};

const ExcitedTitle = (props) => {
    return (
        <h2 id="excitedTitle">I am excited for...</h2>
    );
};

const ExcitedForm = (props) => {
    return (
        <div>
            <form id='excitedForm'
            onSubmit={handleExcitedDrop}
            name='excitedForm'
            action='/excitedThankYou'
            method='POST'
            className='excitedForm' >
                <input id='excitedText' type='text' name='answer' placeholder='...' />
                <input className='logThoughtSubmit' type='submit' value='Log' />
            </form>
            <button>Go back</button>
            <BackModal/>
        </div>
    );
};

const ExcitedList = function(props) {
    if(props.excitedResponses.length === 0) {
        return (
            <h3>No Excited Thoughts</h3>
        );
    }

    const excitedNodes = props.excitedResponses.sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
    .map(function(excitedThought) {
        return (
            <div key={excitedThought._id}>
                <h3> {excitedThought.answer} </h3>
                <span>{excitedThought._id}</span>
            </div>
        );
    });

    return (
        <div>
            {excitedNodes}
            <p>{props.excitedResponses.length} thoughts</p>
        </div>
    );
};

const loadExcitedFromServer = () => {
    sendAjax('GET', '/getExcited', null, (data) => {
        ReactDOM.render(
            <ExcitedList excitedResponses={data.excitedResponses} />, document.querySelector('#error')
        );
    });
};

const createExcitedView = function() {
    ReactDOM.render(
        <ExcitedTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <ExcitedForm />, document.querySelector('#logThought')
    );
};

const handleExcitedClick = (idPrompt) => {
    const excitedType = document.querySelector('#excitedWrite');
	
	excitedType.addEventListener('click', e => {
        e.preventDefault();
        clearTimeout(idPrompt);
        createExcitedView();
	});
};