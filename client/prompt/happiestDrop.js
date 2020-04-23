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
        <h2  className="lato promptTitle" id="happiestTitle">I'M HAPPIEST WHEN:</h2>
    );
};

const HappiestForm = (props) => {
    return (
        <div>
            <button className="playfair back2prompts" id="happiestBackBtn"><img src="/assets/img/arrow.svg" className="backArrow" />Back to prompts</button>
            <form id='happiestForm'
            onSubmit={handleHappiestDrop}
            name='happiestForm'
            action='/logMaster'
            method='POST'
            className='happiestForm' >
                <input id='happiestText' className="playfair" type='text' name='answer' maxLength="90" placeholder='ex: "I am with loved ones"' onChange={handleHappiestCount}/>
                <input id='category' type='text' name='category' value='happiest' placeholder='happiest' onChange={handleHappiestCount}/>        
                <input className='logThoughtSubmit' id="logHappiestSubmit" type='submit' value='Submit response' />
            </form>
            <p className="lato" id="happiestCount">{props.happiestCount}/90</p>
            <BackModal/>
            <HappiestSubmitModal />
        </div>
    );
};

const HappiestSubmitModal = () => {
    return (
        <div className="happiestSubmitModal" id="happiestSubmitModal">
            <div className="happiestSubmitContent">
                <h1 className="playfair">All finished?</h1>
                <p className="lato">This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissHappiestSubmit" className="playfair closeModalBtn">Go back</button>
                <button id="submitHappiestBtn" className="playfair modalSubmitBtn">Submit</button>
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