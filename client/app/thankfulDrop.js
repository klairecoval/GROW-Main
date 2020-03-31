const handleThankfulDrop = (e) => {
    e.preventDefault();

    const thankfulSubmitModal = document.getElementById("thankfulSubmitModal");
    const submitThankfulBtn = document.getElementById("submitThankfulBtn");
    const dismissThankfulModal = document.getElementById("dismissThankfulSubmit");

    dismissThankfulModal.onclick = () => {
        thankfulSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === thankfulSubmitModal) {
        thankfulSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);

    if($('#thankfulText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitThankfulBtn.onclick = () => {
        sendAjax('POST', $('#thankfulForm').attr('action'), $('#thankfulForm').serialize(), redirect);
    };

    return false;
};

const handleThankfulCount = (e) => {
    ReactDOM.render(
    <ThankfulForm thankfulCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
};

const ThankfulTitle = (props) => {
    return (
        <h2 id="thankfulTitle">I am thankful for...</h2>
    );
};

const ThankfulForm = (props) => {
    return (
        <div>
            <form id='thankfulForm'
            onSubmit={handleMasterDrop}
            name='thankfulForm'
            action='/thankfulThankYou'
            method='POST'
            className='thankfulForm' >
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

const ThankfulSubmitModal = () => {
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

const createThankfulView = function() {
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

const handleThankfulClick = (thankfulID) => {
	const thankfulType = document.querySelector('#thankfulWrite');
	
	thankfulType.addEventListener('click', e => {
        e.preventDefault();
        clearTimeout(thankfulID);
        createThankfulView();
        triggerBackModal();
	});
};