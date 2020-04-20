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
    <InspiredForm inspiredCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
};

const InspiredTitle = (props) => {
    return (
        <h2 id="inspiredTitle">I am inspired by...</h2>
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
                <input id='inspiredText' className="playfair" type='text' name='answer' maxLength="90" placeholder='...' onChange={handleInspiredCount}/>
                <input id='category' type='text' name='category' value='inspired' placeholder='inspired' onChange={handleInspiredCount}/>        
                <input className='logThoughtSubmit' id="logInspiredSubmit" type='submit' value='Submit' />
            </form>
            <p id="inspiredCount">{props.inspiredCount}/90</p>
            <button id="inspiredBackBtn">Go back</button>
            <BackModal/>
            <InspiredSubmitModal />
        </div>
    );
};

const InspiredSubmitModal = () => {
    return (
        <div className="inspiredSubmitModal" id="inspiredSubmitModal">
            <div className="inspiredSubmitContent">
                <h1 className="playfair">All finished?</h1>
                <p>This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissInspiredSubmit" className="playfair">Go back</button>
                <button id="submitInspiredBtn" className="playfair">Finish</button>
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