
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
        <h2  className="lato promptTitle" id="thankfulTitle">I'M THANKFUL FOR:</h2>
    );
};

const ThankfulForm = (props) => {
    return (
        <div>
            <button className="playfair" id="thankfulBackBtn">Back to prompts</button>
            <form id='thankfulForm'
            onSubmit={handleThankfulDrop}
            name='thankfulForm'
            action='/logMaster'
            method='POST'
            className='thankfulForm' >
                <input id='thankfulText' className="playfair" type='text' name='answer' maxLength="90" placeholder='...' onChange={handleThankfulCount}/>
                <input id='category' type='text' name='category' value='thankful' placeholder='thankful' onChange={handleThankfulCount}/>        
                <input className='logThoughtSubmit' id="logThankfulSubmit" type='submit' value='Submit' />
            </form>
            <p id="thankfulCount">{props.thankfulCount}/90</p>
            <BackModal/>
            <ThankfulSubmitModal />
        </div>
    );
};

const ThankfulSubmitModal = () => {
    return (
        <div className="thankfulSubmitModal" id="thankfulSubmitModal">
            <div className="thankfulSubmitContent">
                <h1 className="playfair">All finished?</h1>
                <p className="lato">This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissThankfulSubmit" className="playfair closeModalBtn">Go back</button>
                <button id="submitThankfulBtn" className="playfair modalSubmitBtn">Submit</button>
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

const handleThankfulClick = () => {
    const thankfulType = document.querySelector('#thankfulPrompt');
	
	thankfulType.addEventListener('click', e => {
        e.preventDefault();
        createThankfulView();
        triggerBackModal();
	});
};