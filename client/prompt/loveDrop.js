const handleLoveDrop = (e) => {
    e.preventDefault();

    const loveSubmitModal = document.getElementById("loveSubmitModal");
    const submitLoveBtn = document.getElementById("submitLoveBtn");
    const dismissLoveModal = document.getElementById("dismissLoveSubmit");

    dismissLoveModal.onclick = () => {
        loveSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === loveSubmitModal) {
        loveSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);
    if($('#loveText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitLoveBtn.onclick = () => {
        sendAjax('POST', $('#loveForm').attr('action'), $('#loveForm').serialize(), redirect);
    };

    return false;
};
  
const handleLoveCount = (e) => {
    ReactDOM.render(
    <LoveForm loveCount={90-(e.target.value.length)}/>, document.querySelector('#logThought')
    );
};

const LoveTitle = (props) => {
    return (
        <div>
            <button className="playfair back2prompts" id="loveBackBtn">Back to prompts</button>
            <h2  className="lato promptTitle" id="loveTitle">I LOVE:</h2>
        </div>
    );
};

const LoveForm = (props) => {
    return (
        <div>
            <form id='loveForm'
            onSubmit={handleLoveDrop}
            name='loveForm'
            action='/logMaster'
            method='POST'
            className='loveForm' >
                <textarea id='loveText' className="playfair promptTextArea" type='text' name='answer' rows="4" cols="50" maxLength="90" placeholder='ex: "humanity"' onChange={handleLoveCount}></textarea>
                <input id='category' type='text' name='category' value='love' placeholder='love' onChange={handleLoveCount}/>   
                <p className="lato answerCharCount" id="loveCount">{props.loveCount} characters remaining</p>     
                <input className='logThoughtSubmit' id="logLoveSubmit" type='submit' value='Submit' />
            </form>
            <BackModal/>
            <LoveSubmitModal />
            <img src="/assets/img/PromptAnswerLeaves/LoveLeaf.svg" className="promptAnswerLeaf"/>
        </div>
    );
};

const LoveSubmitModal = () => {
    return (
        <div className="loveSubmitModal" id="loveSubmitModal">
            <div className="loveSubmitContent">
                <h1 className="playfair submitModalTitle">All finished?</h1>
                <p className="lato submitModalSubtext">This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissLoveSubmit" className="playfair closeModalBtn">Go back</button>
                <button id="submitLoveBtn" className="playfair modalSubmitBtn">Submit</button>
            </div>
        </div>
    );
};

const createLoveView = function() {
    ReactDOM.render(
        <LoveTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <LoveForm />, document.querySelector('#logThought')
    );

    const logLoveSubmit = document.getElementById("logLoveSubmit");
    const dismissLoveModal = document.getElementById("dismissLoveSubmit");

    logLoveSubmit.onclick = () => {
        loveSubmitModal.style.display = "block";
    };
};

const handleLoveClick = () => {
    const loveType = document.querySelector('#lovePrompt');
	
	loveType.addEventListener('click', e => {
        e.preventDefault();
        createLoveView();
        triggerBackModal();
	});
};