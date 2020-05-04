const handleInspiredDrop = (e) => {
    e.preventDefault();

    const inspiredSubmitModal = document.getElementById("inspiredSubmitModal");
    const submitInspiredrBtn = document.getElementById("submitInspiredBtn");
    const dismissInspiredModal = document.getElementById("dismissInspiredSubmit");

    dismissInspiredModal.onclick = () => {
        inspiredSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === inspiredSubmitModal) {
        inspiredSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);
    if($('#inspiredText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitInspiredBtn.onclick = () => {
        sendAjax('POST', $('#inspiredForm').attr('action'), $('#inspiredForm').serialize(), redirect);
    };

    return false;
};
  
const handleInspiredCount = (e) => {
    ReactDOM.render(
        <InspiredForm inspiredCount={90-(e.target.value.length)}/>, document.querySelector('#logThought')
    );
};

const InspiredTitle = (props) => {
    return (
        <div>
            <button className="playfair back2prompts" id="inspiredBackBtn">Back to prompts</button>
            <h2  className="lato promptTitle" id="inspiredTitle">I'M INSPIRED BY:</h2>
        </div>
    );
};

const InspiredForm = (props) => {
    return (
        <div>
            <form id='inspiredForm'
            onSubmit={handleInspiredDrop}
            name='inspiredForm'
            action='/logMaster'
            method='POST'
            className='inspiredForm' >
                <textarea id='inspiredText' className="playfair promptTextArea" type='text' name='answer' maxLength="90" rows="4" cols="50" placeholder='ex: "the generosity of others"' onChange={handleInspiredCount}></textarea>
                <input id='category' type='text' name='category' value='inspired' placeholder='inspired' onChange={handleInspiredCount}/>   
                <p id="inspiredCount" className="lato answerCharCount">{props.inspiredCount} characters remaining</p>     
                <input className='logThoughtSubmit' id="logInspiredSubmit" type='submit' value='Submit response' />
            </form>
            <BackModal/>
            <InspiredSubmitModal />
            <img src="/assets/img/PromptAnswerLeaves/InspiredLeaf.svg" className="promptAnswerLeaf"/>
        </div>
    );
};

const InspiredSubmitModal = () => {
    return (
        <div className="inspiredSubmitModal" id="inspiredSubmitModal">
            <div className="inspiredSubmitContent">
                <h1 className="playfair submitModalTitle">All finished?</h1>
                <p className="lato submitModalSubtext">This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissInspiredSubmit" className="playfair closeModalBtn">Go back</button>
                <button id="submitInspiredBtn" className="playfair modalSubmitBtn">Submit</button>
            </div>
        </div>
    );
};

const createInspiredView = function() {
    ReactDOM.render(
        <InspiredTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <InspiredForm />, document.querySelector('#logThought')
    );

    const logInspiredSubmit = document.getElementById("logInspiredSubmit");
    const dismissInspiredModal = document.getElementById("dismissInspiredSubmit");

    logInspiredSubmit.onclick = () => {
        inspiredSubmitModal.style.display = "block";
    };
};

const handleInspiredClick = () => {
    const inspiredType = document.querySelector('#inspiredPrompt');
	
	inspiredType.addEventListener('click', e => {
        e.preventDefault();
        createInspiredView();
        triggerBackModal();
	});
};