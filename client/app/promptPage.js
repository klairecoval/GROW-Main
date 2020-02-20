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
        <div id="backModal">
            <h1>Are you sure you <br/>want to go back?</h1>
            <p>Going back now will lose your progress.</p>
            <button id="stayBtn">Stay</button>
            <a href="/promptPage" target="_parent" id="continueBtn"><button>Continue</button></a>
        </div>
    );
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

const setup = function() {
    ReactDOM.render(
        <PromptTitle />, document.querySelector('#promptTitle')
    );

    ReactDOM.render(
        <PromptButtons />, document.querySelector('#logThought')
    );

    // load thoughts for testing
    loadExcitedFromServer();
    loadHappiestFromServer();
    loadInspiredFromServer();
    loadLoveFromServer();
    loadProudFromServer();
    loadThankfulFromServer();

    // handle button prompt clicks
    handleExcitedClick();
    handleHappiestClick();
    handleInspiredClick();
    handleLoveClick();
    handleProudClick();
    handleThankfulClick();
};

// instantiate above
$(document).ready(function() {
    if(document.querySelector('#promptTitle') && document.querySelector('#logThought')) {
        setup();
    }
});