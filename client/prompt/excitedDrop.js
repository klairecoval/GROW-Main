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
        <ExcitedForm excitedCount={90-(e.target.value.length)}/>, document.querySelector('#logThought')
    );
};

const ExcitedTitle = (props) => {
    return (
        <div>
            <button id="excitedBackBtn" className="playfair back2prompts"><img src="/assets/img/arrow.svg" className="backArrow" />Back to prompts</button>
            <h2 className="lato promptTitle" id="excitedTitle">I'M EXCITED FOR:</h2>
        </div>
    );
};

const ExcitedForm = (props) => {
    return (
        <div>
            <form id='excitedForm'
            onSubmit={handleExcitedDrop}
            name='excitedForm'
            action='/logMaster'
            method='POST'
            className='excitedForm' >
                <input id='excitedText' className="playfair promptTextArea" type='text' name='answer' maxLength="90" placeholder='ex: "social gatherings"' onChange={handleExcitedCount}/>
                <input id='category' type='text' name='category' value='excited' placeholder='excited' onChange={handleExcitedCount}/>        
                <input className='logThoughtSubmit' id="logExcitedSubmit" type='submit' value='Submit Response' />
            </form>
            <p id="excitedCount" className="lato answerCharCount">{props.excitedCount} characters remaining</p>
            <BackModal/>
            <ExcitedSubmitModal />
            <img src="/assets/img/PromptAnswerLeves/ExcitedLeaf.svg" className="promptAnswerLeaf"/>
        </div>
    );
};

const ExcitedSubmitModal = () => {
    return (
        <div className="excitedSubmitModal" id="excitedSubmitModal">
            <div className="excitedSubmitContent">
                <h1 className="playfair">All finished?</h1>
                <p className="lato">This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissExcitedSubmit" className="playfair closeModalBtn">Go back</button>
                <button id="submitExcitedBtn" className="playfair modalSubmitBtn">Submit</button>
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

const handleExcitedClick = () => {
    const excitedType = document.querySelector('#excitedPrompt');
	
	excitedType.addEventListener('click', e => {
        e.preventDefault();
        createExcitedView();
        triggerBackModal();
	});
};