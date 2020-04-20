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
    <LoveForm loveCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
};

const LoveTitle = (props) => {
    return (
        <h2 id="loveTitle">I love...</h2>
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
                <input id='loveText' type='text' name='answer' maxLength="90" placeholder='...' onChange={handleLoveCount}/>
                <input id='category' type='text' name='category' value='love' placeholder='love' onChange={handleLoveCount}/>        
                <input className='logThoughtSubmit' id="logLoveSubmit" type='submit' value='Submit' />
            </form>
            <p id="loveCount">{props.loveCount}/90</p>
            <button id="loveBackBtn">Go back</button>
            <BackModal/>
            <LoveSubmitModal />
        </div>
    );
};

const LoveSubmitModal = () => {
    return (
        <div className="loveSubmitModal" id="loveSubmitModal">
            <div className="loveSubmitContent">
                <h1>All finished?</h1>
                <p>This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissLoveSubmit">Go back</button>
                <button id="submitLoveBtn">Finish</button>
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