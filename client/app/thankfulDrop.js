const handleThankfulDrop = (e) => {
    e.preventDefault();

    const thankfulMasterSubmitModal = document.getElementById("masterThankfulSubmitModal");
    const submitMasterThankfulBtn = document.getElementById("submitMasterThankfulBtn");
    const dismissMasterThankfulModal = document.getElementById("dismissMasterThankfulSubmit");

    dismissMasterThankfulModal.onclick = () => {
        thankfulSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === thankfulSubmitModal) {
        masterThankfulSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#thankfulText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterThankfulBtn.onclick = () => {
        sendAjax('POST', $('#masterThankfulForm').attr('action'), $('#masterThankfulForm').serialize(), redirect);
    };

    return false;
};

const handleThankfulCount = (e) => {
    ReactDOM.render(
    <ThankfulForm thankfulCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
};

const masterThankfulTitle = (props) => {
    return (
        <h2 id="masterThankfulTitle">I am thankful for...</h2>
    );
};

const MasterThankfulForm = (props) => {
    return (
        <div>
            <form id='masterThankfulForm'
            onSubmit={handleMasterDrop}
            name='masterThankfulForm'
            action='/thankfulThankYou'
            method='POST'
            className='masterThankfulForm' >
                <input id='thankfulText' type='text' name='answer' maxLength="60" placeholder='...' onChange={handleThankfulCount} />
                <input className='logThoughtSubmit' id="logThankfulSubmit" type='submit' value='Log' />
            </form>
            <p id="thankfulCount">{props.thankfulCount}/60</p>
            <button id="thankfulBackBtn">Go back</button>
            <BackModal/>
            <ThankfulSubmitModal />
        </div>
    );
};

const MasterThankfulSubmitModal = () => {
    return (
        <div className="thankfulSubmitModal" id="thankfulSubmitModal">
            <div className="thankfulSubmitContent">
                <h1>All finished?</h1>
                <p>This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissThankfulSubmit">Go back</button>
                <button id="submitThankfulBtn">Finish</button>
            </div>
        </div>
    );
};

const createMasterThankfulView = function() {
    ReactDOM.render(
        <ThankfulTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <ThankfulForm />, document.querySelector('#logThought')
    );

    const logThankfulSubmit = document.getElementById("logThankfulSubmit");
    const dismissThankfulModal = document.getElementById("dismissThankfulSubmit");

    logThankfulSubmit.onclick = () => {
        thankfulSubmitModal.style.display = "block";
    };
};

const handleMasterThankfulClick = (thankfulID) => {
	const thankfulType = document.querySelector('#thankfulWrite');
	
	thankfulType.addEventListener('click', e => {
        e.preventDefault();
        clearTimeout(thankfulID);
        createThankfulView();
        triggerBackModal();
	});
};