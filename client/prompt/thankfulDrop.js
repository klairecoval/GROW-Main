
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
    <ThankfulForm thankfulCount={90-(e.target.value.length)}/>, document.querySelector('#logThought')
    );
};

const ThankfulTitle = (props) => {
    return (
        <div>
            <button className="playfair back2prompts" id="thankfulBackBtn">Back to prompts</button>
            <h2  className="lato promptTitle" id="thankfulTitle">I'M THANKFUL FOR:</h2>
        </div>
    );
};

const ThankfulForm = (props) => {
    return (
        <div>
            <form id='thankfulForm'
            onSubmit={handleThankfulDrop}
            name='thankfulForm'
            action='/logMaster'
            method='POST'
            className='thankfulForm' >
                <input id='thankfulText' className="playfair promptTextArea" type='text' name='answer' maxLength="90" placeholder='ex: "essential workers"' onChange={handleThankfulCount}/>
                <input id='category' type='text' name='category' value='thankful' placeholder='thankful' onChange={handleThankfulCount}/> 
                <p id="thankfulCount" className="lato answerCharCount">{props.thankfulCount} characters remaining</p>       
                <input className='logThoughtSubmit' id="logThankfulSubmit" type='submit' value='Submit' />
            </form>
            <BackModal/>
            <ThankfulSubmitModal />
            <img src="/assets/img/PromptAnswerLeaves/ThankfulLeaf.svg" className="promptAnswerLeaf"/>
        </div>
    );
};

const ThankfulSubmitModal = () => {
    return (
        <div className="thankfulSubmitModal" id="thankfulSubmitModal">
            <div className="thankfulSubmitContent">
                <h1 className="playfair submitModalTitle">All finished?</h1>
                <p className="lato submitModalSubtext">This will submit your response to your card.<br/>
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