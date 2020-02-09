const PromptTitle = (props) => {
    return (
        <h2 id="promptPageTitle">Choose a Prompt</h2>
    );
};

const LoveModal = () => {
    return (
        <div id="loveModal">
            <button id="loveType">TYPE</button>
            <h2>OR</h2>
            <button>DRAW</button>
        </div>
    );
};
const ThankfulModal = () => {
    return (
        <div id="thankfulModal">
            <button id="thankfulType">TYPE</button>
            <h2>OR</h2>
            <button>DRAW</button>
        </div>
    );
};
const InspiredModal = () => {
    return (
        <div id="inspiredModal">
            <button id="inspiredType">TYPE</button>
            <h2>OR</h2>
            <button>DRAW</button>
        </div>
    );
};
const ExcitedModal = () => {
    return (
        <div id="excitedModal">
            <button id="excitedType">TYPE</button>
            <h2>OR</h2>
            <button>DRAW</button>
        </div>
    );
};
const HappiestModal = () => {
    return (
        <div id="happiestModal">
            <button id="happiestType">TYPE</button>
            <h2>OR</h2>
            <button>DRAW</button>
        </div>
    );
};
const idkModal = () => {
    <div id="idkModal">
        <button id="idkType">TYPE</button>
        <h2>OR</h2>
        <button>DRAW</button>
    </div>
};

const PromptButtons = () => {
    return (
        <div>
            <button id="thankfulPrompt">I am thankful for...</button>
            <button id="inspiredPrompt">I am inspired by..</button>
            <button id="lovePrompt">I love...</button>
            <button id="excitedPrompt">I am excited for...</button>
            <button id="happiestPrompt">I feel happiest when...</button>
            <button id="idkPrompt">IDK...</button>
            <ThankfulModal />
            <InspiredModal />
            <LoveModal />
            <ExcitedModal />
            <HappiestModal />
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

    handleThankfulType();
    handleLoveType();
    handleInspiredType();
    handleHappiestType();
    handleExcitedType();
};

// instantiate above
$(document).ready(function() {
    setup();
});