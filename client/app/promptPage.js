let id;

const PromptTitle = (props) => {
    return (
        <div>
            <a href="/aboutPage" target="_parent" id="startBtn"><button>Back</button></a>
            <h1 id="promptPageTitle">Select a prompt:</h1>
            <p>Which one of these speaks to you? Choose one <br/>
                that you want to write about.</p>
        </div>
    );
};

const BackModal = () => {
    return (
        <div id="backModal" className="backModal">
            <div className="backModalContent">
                <h1>Are you sure you <br/>want to go back?</h1>
                <p>Going back now will lose your progress.</p>
                <button id="stayBtn">Stay</button>
                <a href="/promptPage" target="_parent" id="continueBtn"><button>Continue</button></a>
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
        thankfulBtn.onlick = () => {
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
        <div>
            <button id="inspiredPrompt">I'm inspired by...</button>
            <button id="happiestPrompt">I'm happiest when...</button>
            <button id="proudPrompt">I'm proud of...</button>
            <button id="lovePrompt">I love...</button>
            <button id="thankfulPrompt">I'm thankful for...</button>
            <button id="excitedPrompt">I'm excited for...</button>
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