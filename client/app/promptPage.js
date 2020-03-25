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
        <div className="loveModal" id="loveModal">
            <div className="loveModalContent">
                <h1>I love...</h1>
                <button id="loveWrite">Write response</button>
                <button id="dismissLove">Select different prompt</button>
            </div>
        </div>
    );
};
const ThankfulModal = () => {
    return (
        <div className="thankfulModal" id="thankfulModal">
            <div className="thankfulModalContent">
                <h1>I'm thankful for...</h1>
                <button id="thankfulWrite">Write response</button>
                <button id="dismissThankful">Select different prompt</button>
            </div>
        </div>
    );
};
const InspiredModal = () => {
    return (
        <div className="inspiredModal" id="inspiredModal">
            <div className="inspiredModalContent">
                <h1>I'm inspired by...</h1>
                <button id="inspiredWrite">Write response</button>
                <button id="dismissInspired">Select different prompt</button>
            </div>
        </div>
    );
};
const ExcitedModal = () => {
    return (
        <div className="excitedModal" id="excitedModal">
            <div className="excitedModalContent">
                <h1>I'm excited for...</h1>
                <button id="excitedWrite">Write response</button>
                <button id="dismissExcited">Select different prompt</button>
            </div>
        </div>
    );
};
const HappiestModal = () => {
    return (
        <div className="happiestModal" id="happiestModal">
            <div className="happiestModalContent">
                <h1>I'm happiest when...</h1>
                <button id="happiestWrite">Write response</button>
                <button id="dismissHappiest">Select different prompt</button>
            </div>
        </div>
    );
};
const ProudModal = () => {
    return (
        <div className="proudModal" id="proudModal">
            <div className="proudModalContent">
                <h1>I'm proud of...</h1>
                <button id="proudWrite">Write response</button>
                <button id="dismissProud">Select different prompt</button>
            </div>
        </div>
    );
};

const MasterModal = () => {
    return (
        <div className="masterModal" id="masterModal">
            <div className="masterModalContent">
                <h1>I'm a test...</h1>
                <button id="masterWrite">Write response</button>
                <button id="dismissMaster">Select different prompt</button>
            </div>
        </div>
    );
};

const triggerPromptModals = () => {
    const loveModal = document.getElementById("loveModal");
    const happiestModal = document.getElementById("happiestModal");
    const proudModal = document.getElementById("proudModal");
    const excitedModal = document.getElementById("excitedModal");
    const thankfulModal = document.getElementById("thankfulModal");
    const inspiredModal = document.getElementById("inspiredModal");
    const masterModal = document.getElementById("masterModal");

    const excitedPromptBtn = document.getElementById("excitedPrompt");
    const happiestPromptBtn = document.getElementById("happiestPrompt");
    const inspiredPromptBtn = document.getElementById("inspiredPrompt");
    const proudPromptBtn = document.getElementById("proudPrompt");
    const lovePromptBtn = document.getElementById("lovePrompt");
    const thankfulPromptBtn = document.getElementById("thankfulPrompt");
    const masterPromptBtn = document.getElementById("masterModal");
    
    const dismissLove = document.getElementById("dismissLove");
    const dismissThankful = document.getElementById("dismissThankful");
    const dismissInspired = document.getElementById("dismissInspired");
    const dismissExcited = document.getElementById("dismissExcited");
    const dismissProud = document.getElementById("dismissProud");
    const dismissHappiest = document.getElementById("dismissHappiest");
    const dismissMaster = document.getElementById("dismissMaster");

    
    excitedPromptBtn.onclick = () => {
        excitedModal.style.display = "block";
    };
    happiestPromptBtn.onclick = () => {
        happiestModal.style.display = "block";
    };
    inspiredPromptBtn.onclick = () => {
        inspiredModal.style.display = "block";
    };
    proudPromptBtn.onclick = () => {
        proudModal.style.display = "block";
    };
    lovePromptBtn.onclick = () => {
        loveModal.style.display = "block";
    };
    thankfulPromptBtn.onclick = () => {
        thankfulModal.style.display = "block";
    };
    masterPromptBtn.onclick = () => {
        masterModal.style.display = "block";
    }
    
    dismissLove.onclick = () => {
        loveModal.style.display = "none";
    };
    dismissExcited.onclick = () => {
        excitedModal.style.display = "none";
    };
    dismissHappiest.onclick = () => {
        happiestModal.style.display = "none";
    };
    dismissInspired.onclick = () => {
        inspiredModal.style.display = "none";
    }
    dismissProud.onclick = () => {
        proudModal.style.display = "none";
    };
    dismissThankful.onclick = () => {
        thankfulModal.style.display = "none";
    };
    dismissMaster.onclick = () => {
        masterModal.style.display = "none";
    }
    
    window.onclick = (event) => {
      if (event.target === loveModal) {
        loveModal.style.display = "none";
      } else if(event.target === excitedModal) {
        excitedModal.style.display = "none";
      } else if(event.target === happiestModal) {
        happiestModal.style.display = "none";
      } else if(event.target === inspiredModal) {
        inspiredModal.style.display = "none";
      } else if(event.target === proudModal) {
        proudModal.style.display = "none";
      } else if(event.target === thankfulModal) {
        thankfulModal.style.display = "none";      
      } else if(event.target === MasterModal) {
          masterModal.style.display = "none";
      }
    };
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
    const masterBtn = document.getElementById("masterBackBtn");
    
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
    } else if (masterBtn) {
        masterBtn.onclick = () => {
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
            <button id="masterPrompt">I'm a master prompt...</button>
            <ThankfulModal />
            <InspiredModal />
            <LoveModal />
            <ExcitedModal />
            <HappiestModal />
            <ProudModal />
            <MasterModal />
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

    triggerPromptModals();
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
    document.getElementById('proudPrompt') && document.getElementById('thankfulPrompt') &&
    document.getElementById('masterPrompt')) {
        handleExcitedClick(id);
        handleHappiestClick(id);
        handleInspiredClick(id);
        handleLoveClick(id);
        handleProudClick(id);
        handleThankfulClick(id);
        handleMasterClick(id);
    }
};

// instantiate above
$(document).ready(function() {
    if(document.querySelector('#promptTitle') && document.querySelector('#logThought')) {
        setup();
    }
});