let id;

const PromptTitle = (props) => {
    return (
        <div id="selectPromptPageTitle">
            <a href="/explorePage" target="_parent" id="startBtn"><button className="back2explore playfair">Back to explore</button></a>
            <div id="selectPromptPageTitleText">
                <h3 className="lato" id="promptPageTitle">THOUGHT SUBMISSION</h3>
                <h1 className="playfair" id="promptPageSubtitle">Choose your prompt</h1>
            </div>
        </div>
    );
};

const BackModal = () => {
    return (
        <div id="backModal" className="backModal">
            <div className="backModalContent">
                <h1 className="playfair backModalTitle">Are you sure you <br/>want to go back?</h1>
                <p className="lato backModalSubtext">Going back now will lose your progress.</p>
                <button id="stayBtn"className="playfair closeModalBtn">Stay</button>
                <a href="/promptPage" target="_parent" id="continueBtn"><button className="playfair modalSubmitBtn">Go back</button></a>
            </div>
        </div>
    );
};

const triggerBackModal = () => {
    const backModal = document.getElementById("backModal");
    const happiestBtn = document.getElementById("happiestBackBtn");
    const inspiredBtn = document.getElementById("inspiredBackBtn");
    const proudBtn = document.getElementById("proudBackBtn");
    const loveBtn = document.getElementById("loveBackBtn");
    const thankfulBtn = document.getElementById("thankfulBackBtn");
    const excitedBtn = document.getElementById("excitedBackBtn");
    
    const stay = document.getElementById("stayBtn");
    
    if (happiestBtn) {
        happiestBtn.onclick = () => {
            backModal.style.display = "block";
        };
    }
    if(inspiredBtn) {
        inspiredBtn.onclick = () => {
            backModal.style.display = "block";
        };
    } else if (proudBtn) {
        proudBtn.onclick = () => {
            backModal.style.display = "block";
        };
    } else if(loveBtn) {
        loveBtn.onclick = () => {
            backModal.style.display = "block";
        };
    } else if (thankfulBtn) {
        thankfulBtn.onclick = () => {
            backModal.style.display = "block";
        };
    } else if (excitedBtn) {
        excitedBtn.onclick = () => {
            backModal.style.display = "block";
        };
    }
    
    stay.onclick = () => {
        backModal.style.display = "none";
    }
    
    window.onclick = (event) => {
      if (event.target === backModal) {
        backModal.style.display = "none";
      }
    }
};

const PromptButtons = () => {
    return (
        <div id="promptBtns">
            <div>
                <p className="promptNumbers lato">01</p>
                <button id="inspiredPrompt" className="lato">I'm inspired by</button>
            </div>
            <div>
                <p className="promptNumbers lato">02</p>
                <button id="excitedPrompt" className="lato">I'm excited for</button>
            </div>
            <div>
                <p className="promptNumbers lato">03</p>
                <button id="happiestPrompt" className="lato">I'm happiest when</button>
            </div>
            <div>
                <p className="promptNumbers lato">04</p>
                <button id="proudPrompt" className="lato">I'm proud of</button>
            </div>
            <div>
                <p className="promptNumbers lato">05</p>
                <button id="lovePrompt" className="lato">I love</button>
            </div>
            <div>
                <p className="promptNumbers lato">06</p>
                <button id="thankfulPrompt" className="lato">I'm thankful for</button>
            </div>
        </div>
    );
};

const setup = function() {
    ReactDOM.render(
        <PromptTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <PromptButtons />, document.querySelector('#logThought')
    );

    // handle button prompt clicks
    if(document.getElementById('inspiredPrompt') && document.getElementById('happiestPrompt') 
    && document.getElementById('lovePrompt') &&
    document.getElementById('proudPrompt') && document.getElementById('thankfulPrompt') &&
    document.getElementById('excitedPrompt')) {
        handleInspiredClick();
        handleHappiestClick();
        handleLoveClick();
        handleProudClick();
        handleThankfulClick();
        handleExcitedClick();
    }
};

// instantiate above
$(document).ready(function() {
    if(document.querySelector('#promptTitle') && document.querySelector('#logThought')) {
        setup();
    }
});