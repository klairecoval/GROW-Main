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
        <h2 id="proudTitle">I proud...</h2>
    );
};

const ProudForm = (props) => {
    return (
        <div>
            <form id='proudForm'
            onSubmit={handleProudDrop}
            name='proudForm'
            action='/masterThankYou'
            method='POST'
            className='proudForm' >
                <input id='proudText' type='text' name='answer' maxLength="60" placeholder='...' onChange={handleProudCount}/>
                <input id='category' type='text' name='category' value='proud' placeholder='proud' onChange={handleProudCount}/>        
                <input className='logThoughtSubmit' id="logProudSubmit" type='submit' value='Submit' />
            </form>
            <p id="proudCount">{props.proudCount}/60</p>
            <button id="proudBackBtn">Go back</button>
            <BackModal/>
            <ProudSubmitModal />
        </div>
    );
};

const ProudSubmitModal = () => {
    return (
        <div className="proudSubmitModal" id="proudSubmitModal">
            <div className="proudSubmitContent">
                <h1>All finished?</h1>
                <p>This will submit your response to your card.<br/>
                    Don’t worry, they’re all anonymous.</p>
                <button id="dismissProudSubmit">Go back</button>
                <button id="submitProudBtn">Finish</button>
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

const handleProudClick = (proudID) => {
	const proudType = document.querySelector('#proudWrite');
	
	proudType.addEventListener('click', e => {
        e.preventDefault();
        clearTimeout(proudID);
        createProudView();
        triggerBackModal();
	});
};