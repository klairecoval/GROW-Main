const handleHappiestDrop = (e) => {
    e.preventDefault();

    const happiestSubmitModal = document.getElementById("happiestSubmitModal");
    const submitHappiestBtn = document.getElementById("submitHappiestBtn");
    const dismissHappiestModal = document.getElementById("dismissHappiestSubmit");

    dismissHappiestModal.onclick = () => {
        happiestSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === happiestSubmitModal) {
        happiestSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);
    if($('#happiestText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitHappiestBtn.onclick = () => {
        sendAjax('POST', $('#happiestForm').attr('action'), $('#happiestForm').serialize(), redirect);
    };

    return false;
};
  
const handleHappiestCount = (e) => {
    ReactDOM.render(
    <HappiestForm happiestCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
};

const HappiestTitle = (props) => {
    return (
        <h2 id="happiestTitle">I am happiest when...</h2>
    );
};

const HappiestForm = (props) => {
    return (
        <div>
            <form id='happiestForm'
            onSubmit={handleHappiestDrop}
            name='happiestForm'
            action='/logMaster'
            method='POST'
            className='happiestForm' >
                <input id='happiestText' type='text' name='answer' maxLength="60" placeholder='...' onChange={handleHappiestCount}/>
                <input id='category' type='text' name='category' value='happiest' placeholder='happiest' onChange={handleHappiestCount}/>        
                <input className='logThoughtSubmit' id="logHappiestSubmit" type='submit' value='Submit' />
            </form>
            <p id="happiestCount">{props.happiestCount}/60</p>
            <button id="happiestBackBtn">Go back</button>
            <BackModal/>
            <HappiestSubmitModal />
        </div>
    );
};

const HappiestSubmitModal = () => {
    return (
        <div className="happiestSubmitModal" id="happiestSubmitModal">
            <div className="happiestSubmitContent">
                <h1>All finished?</h1>
                <p>This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissHappiestSubmit">Go back</button>
                <button id="submitHappiestBtn">Finish</button>
            </div>
        </div>
    );
};

const createHappiestView = function() {
    ReactDOM.render(
        <HappiestTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <HappiestForm />, document.querySelector('#logThought')
    );

    const logHappiestSubmit = document.getElementById("logHappiestSubmit");
    const dismissHappiestModal = document.getElementById("dismissHappiestSubmit");

    logHappiestSubmit.onclick = () => {
        happiestSubmitModal.style.display = "block";
    };
};


const handleHappiestClick = () => {
	const happiestType = document.querySelector('#happiestPrompt');
	
	happiestType.addEventListener('click', e => {
        e.preventDefault();
        createHappiestView();
        triggerBackModal();
	});
};