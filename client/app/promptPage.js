let id;

const PromptTitle = (props) => {
    return (
        <div>
            <a href="/logout" target="_parent" id="startBtn"><button>Back</button></a>
            <h1 id="promptPageTitle">Select a prompt:</h1>
            <p>Which one of these speaks to you? Choose one <br/>
                that you want to write about.</p>
        </div>
    );
};

const LoveModal = () => {
    return (
        <div id="loveModal">
            <button id="loveWrite">Write response</button>
            <button id="loveDismiss">Select different prompt</button>
        </div>
    );
};
const ThankfulModal = () => {
    return (
        <div id="thankfulModal">
            <button id="thankfulWrite">Write response</button>
            <button id="thankfulDismiss">Select different prompt</button>
        </div>
    );
};
const InspiredModal = () => {
    return (
        <div id="inspiredModal">
            <button id="inspiredWrite">Write response</button>
            <button id="inspiredDismiss">Select different prompt</button>
        </div>
    );
};
const ExcitedModal = () => {
    return (
        <div id="excitedModal">
            <button id="excitedWrite">Write response</button>
            <button id="excitedDismiss">Select different prompt</button>
        </div>
    );
};
const HappiestModal = () => {
    return (
        <div id="happiestModal">
            <button id="happiestWrite">Write response</button>
            <button id="happiestDismiss">Select different prompt</button>
        </div>
    );
};
const ProudModal = () => {
    return (
        <div id="proudModal">
            <button id="proudWrite">Write response</button>
            <button id="proudDismiss">Select different prompt</button>
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

    const excitedBtn = document.getElementById("excitedBackBtn");
    const happiestBtn = document.getElementById("happiestBackBtn");
    const inspiredBtn = document.getElementById("inspiredBackBtn");
    const proudBtn = document.getElementById("proudBackBtn");
    const loveBtn = document.getElementById("loveBackBtn");
    const thankfulBtn = document.getElementById("thankfulBackBtn");
    
    const stay = document.getElementById("stayBtn");
    
    if(excitedBtn) {
        excitedBtn.onclick = () => {
            backModal.style.display = "block";
        };
    }
    if (happiestBtn) {
        happiestBtn.onclick = () => {
            backModal.style.display = "block";
        };
    }
    if(inspiredBtn) {
        inspiredBtn.onclick = () => {
            console.log('getinspired');
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
            <button id="excitedPrompt">I'm excited for...</button>
            <button id="happiestPrompt">I'm happiest when...</button>
            <button id="proudPrompt">I'm proud of...</button>
            <button id="lovePrompt">I love...</button>
            <button id="thankfulPrompt">I'm thankful for...</button>
            <ThankfulModal />
            <InspiredModal />
            <LoveModal />
            <ExcitedModal />
            <HappiestModal />
            <ProudModal />
        </div>
    );
};

const idTimeout = () => {
    id = setTimeout(function(){
            location.replace("/logout");
        }, 90000);
};

const setup = function() {
    ReactDOM.render(
        <PromptTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <PromptButtons />, document.querySelector('#logThought')
    );

    idTimeout();

    // load thoughts for testing
    // loadExcitedFromServer();
    // loadHappiestFromServer();
    // loadInspiredFromServer();
    // loadLoveFromServer();
    // loadProudFromServer();
    // loadThankfulFromServer();

    // handle button prompt clicks
    if(document.getElementById('inspiredPrompt') && document.getElementById('excitedPrompt') &&
    document.getElementById('happiestPrompt') && document.getElementById('lovePrompt') &&
    document.getElementById('proudPrompt') && document.getElementById('thankfulPrompt')) {
        handleExcitedClick(id);
        handleHappiestClick(id);
        handleInspiredClick(id);
        handleLoveClick(id);
        handleProudClick(id);
        handleThankfulClick(id);
    }
};

// instantiate above
$(document).ready(function() {
    if(document.querySelector('#promptTitle') && document.querySelector('#logThought')) {
        setup();
    }
});