const handleProudDrop = (e) => {
    e.preventDefault();

    const proudSubmitModal = document.getElementById("proudSubmitModal");
    const submitProudBtn = document.getElementById("submitProudBtn");
    const dismissProudModal = document.getElementById("dismissProudSubmit");

    dismissProudModal.onclick = () => {
        proudSubmitModal.style.display = "none";
    };
    
    window.onclick = (event) => {
      if (event.target === proudSubmitModal) {
        proudSubmitModal.style.display = "none";
      }
    };

    $('#errorMessage').animate({width:'hide'}, 350);
    if($('#proudText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitProudBtn.onclick = () => {
        sendAjax('POST', $('#proudForm').attr('action'), $('#proudForm').serialize(), redirect);
    };

    return false;
};
  
const handleProudCount = (e) => {
    ReactDOM.render(
    <ProudForm proudCount={e.target.value.length}/>, document.querySelector('#logThought')
    );
};

const ProudTitle = (props) => {
    return (
        <h2  className="lato promptTitle" id="proudTitle">I'M PROUD OF:</h2>
    );
};

const ProudForm = (props) => {
    return (
        <div>
            <button className="playfair back2prompts" id="proudBackBtn"><img src="/assets/img/arrow.svg" className="backArrow" />Back to prompts</button>
            <form id='proudForm'
            onSubmit={handleProudDrop}
            name='proudForm'
            action='/logMaster'
            method='POST'
            className='proudForm' >
                <input id='proudText' className="playfair" type='text' name='answer' maxLength="90" placeholder='ex: "medical workers"' onChange={handleProudCount}/>
                <input id='category' type='text' name='category' value='proud' placeholder='proud' onChange={handleProudCount}/>        
                <input className='logThoughtSubmit' id="logProudSubmit" type='submit' value='Submit' />
            </form>
            <p className="lato" id="proudCount">{props.proudCount}/90</p>
            <BackModal/>
            <ProudSubmitModal />
        </div>
    );
};

const ProudSubmitModal = () => {
    return (
        <div className="proudSubmitModal" id="proudSubmitModal">
            <div className="proudSubmitContent">
                <h1 className="playfair">All finished?</h1>
                <p className="lato">This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissProudSubmit" className="playfair closeModalBtn">Go back</button>
                <button id="submitProudBtn" className="playfair modalSubmitBtn">Submit</button>
            </div>
        </div>
    );
};

const createProudView = function() {
    ReactDOM.render(
        <ProudTitle />, document.querySelector('#promptTitle')
    );
    
    ReactDOM.render(
        <ProudForm />, document.querySelector('#logThought')
    );

    const logProudSubmit = document.getElementById("logProudSubmit");
    const dismissProudModal = document.getElementById("dismissProudSubmit");

    logProudSubmit.onclick = () => {
        proudSubmitModal.style.display = "block";
    };
};

const handleProudClick = () => {
	const proudType = document.querySelector('#proudPrompt');
	
	proudType.addEventListener('click', e => {
        e.preventDefault();
        createProudView();
        triggerBackModal();
	});
};