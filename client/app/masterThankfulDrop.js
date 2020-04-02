const handleMasterDrop = (e) => {
    e.preventDefault();

    const masterSubmitModal = document.getElementById("masterSubmitModal");
    const submitMasterBtn = document.getElementById("submitMasterBtn");
    const dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = () => {
        masterSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === masterSubmitModal) {
        masterSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);
    if($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = () => {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};
  
const handleMasterCount = (e) => {
    ReactDOM.render(
    <MasterForm masterCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
};

const MasterTitle = (props) => {
    return (
        <h2 id="masterTitle">I am excited for...</h2>
    );
};

const MasterForm = (props) => {
    return (
        <div>
            <form id='masterForm'
            onSubmit={handleMasterDrop}
            name='masterForm'
            action='/masterThankYou'
            method='POST'
            className='masterForm' >
                <input id='masterText' type='text' name='answer' maxLength="60" placeholder='...' onChange={handleMasterCount}/>
                <input id='category' type='text' name='category' value='thankful' placeholder='thankful' onChange={handleMasterCount}/>        
                <input className='logThoughtSubmit' id="logMasterSubmit" type='submit' value='Submit' />
            </form>
            <p id="masterCount">{props.masterCount}/60</p>
            <button id="masterBackBtn">Go back</button>
            <BackModal/>
            <MasterSubmitModal />
        </div>
    );
};

const MasterSubmitModal = () => {
    return (
        <div className="masterSubmitModal" id="masterSubmitModal">
            <div className="masterSubmitContent">
                <h1>All finished?</h1>
                <p>This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissMasterSubmit">Go back</button>
                <button id="submitMasterBtn">Finish</button>
            </div>
        </div>
    );
};

const createMasterView = function() {
    ReactDOM.render(
        <MasterTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <MasterForm />, document.querySelector('#logThought')
    );

    const logMasterSubmit = document.getElementById("logMasterSubmit");
    const dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = () => {
        masterSubmitModal.style.display = "block";
    };
};

const handleThankfulClick = (masterID) => {
    const masterType = document.querySelector('#thankfulWrite');
	
	masterType.addEventListener('click', e => {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
        triggerBackModal();
	});
};