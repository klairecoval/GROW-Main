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
    if(!e) {
        ReactDOM.render(
            <ProudForm proudCount={90}/>, document.querySelector('#logThought')
        );
    } else {
        ReactDOM.render(
            <ProudForm proudCount={90-(e.target.value.length)}/>, document.querySelector('#logThought')
        );
    }
};

const ProudTitle = (props) => {
    return (
        <div>
            <button className="playfair back2prompts" id="proudBackBtn">Back to prompts</button>
            <h2  className="lato promptTitle" id="proudTitle">I'M PROUD OF:</h2>
        </div>
    );
};

const ProudForm = (props) => {
    return (
        <div>
            <form id='proudForm'
            onSubmit={handleProudDrop}
            name='proudForm'
            action='/logMaster'
            method='POST'
            className='proudForm' >
                <textarea id='proudText' className="playfair promptTextArea" type='text' name='answer' rows="4" cols="50" maxLength="90" placeholder='ex: "medical workers"' onChange={handleProudCount}></textarea>
                <input id='category' type='text' name='category' value='proud' placeholder='proud' onChange={handleProudCount}/>
                <p className="lato answerCharCount" id="proudCount">{props.proudCount} characters remaining</p>        
                <input className='logThoughtSubmit' id="logProudSubmit" type='submit' value='Submit' />
            </form>
            <BackModal/>
            <ProudSubmitModal />
            <img src="/assets/img/PromptAnswerLeaves/ProudLeaf.svg" className="promptAnswerLeaf"/>
        </div>
    );
};

const ProudSubmitModal = () => {
    return (
        <div className="proudSubmitModal" id="proudSubmitModal">
            <div className="proudSubmitContent">
                <h1 className="playfair submitModalTitle">All finished?</h1>
                <p className="lato submitModalSubtext">This will submit your response to your card.<br/>
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

    handleProudCount();

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