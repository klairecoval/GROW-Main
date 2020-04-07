const handleExcitedDrop = (e) => {
    e.preventDefault();

    const excitedSubmitModal = document.getElementById("excitedSubmitModal");
    const submitExcitedBtn = document.getElementById("submitExcitedBtn");
    const dismissExcitedModal = document.getElementById("dismissExcitedSubmit");

    dismissExcitedModal.onclick = () => {
        excitedSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === excitedSubmitModal) {
        excitedSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);
    if($('#excitedText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitExcitedBtn.onclick = () => {
        sendAjax('POST', $('#excitedForm').attr('action'), $('#excitedForm').serialize(), redirect);
    };

    return false;
};
  
const handleExcitedCount = (e) => {
    ReactDOM.render(
    <ExcitedForm excitedCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
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
            action='/masterThankYou'
            method='POST'
            className='excitedForm' >
                <input id='excitedText' type='text' name='answer' maxLength="60" placeholder='...' onChange={handleExcitedCount}/>
                <input className='logThoughtSubmit' id="logExcitedSubmit" type='submit' value='Submit' />
                <h3 id='category' name='excited'>excited</h3>
            </form>
            <p id="excitedCount">{props.excitedCount}/60</p>
            <button id="excitedBackBtn">Go back</button>
            <BackModal/>
            <ExcitedSubmitModal />
        </div>
    );
};

const ExcitedSubmitModal = () => {
    return (
        <div className="excitedSubmitModal" id="excitedSubmitModal">
            <div className="excitedSubmitContent">
                <h1>All finished?</h1>
                <p>This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissExcitedSubmit">Go back</button>
                <button id="submitExcitedBtn">Finish</button>
            </div>
        </div>
    );
};

const createExcitedView = function() {
    ReactDOM.render(
        <ExcitedTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <ExcitedForm />, document.querySelector('#logThought')
    );

    const logExcitedSubmit = document.getElementById("logExcitedSubmit");
    const dismissExcitedModal = document.getElementById("dismissExcitedSubmit");

    logExcitedSubmit.onclick = () => {
        excitedSubmitModal.style.display = "block";
    };
};

const handleExcitedClick = (excitedID) => {
    const excitedType = document.querySelector('#excitedWrite');
	
	excitedType.addEventListener('click', e => {
        e.preventDefault();
        clearTimeout(excitedID);
        createExcitedView();
        triggerBackModal();
	});
};