const PromptTitle = (props) => {
    return (
        <h2 id="promptPageTitle">Choose a Prompt</h2>
    );
};

const PromptButtons = () => {
    return (
        <div>
            <button id="excitedPrompt">I am excited for...</button>
            <button id="happiestPrompt">I feel happiest when...</button>
            <button id="inspiredPrompt">I am inspired by..</button>
            <button id="lovePrompt">I love...</button>
            <button id="proudPrompt">I am proud of...</button>
            <button id="thankfulPrompt">I am thankful for...</button>
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