const PromptAnswers = function(props) {
    
    const answerNodes = props.answers.map(function(masterPrompt) {
        return (
            <div className='answerList'>
                <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                <h3 className='promptType'> {masterPrompt.category}</h3>
            </div>
        );
    });
    
    return(
        <div className='answerList'>
            {answerNodes}
        </div>
    );
};



const loadAnswers = () => {
    sendAjax('GET', '/getMaster', null, (data) => {
        ReactDOM.render(
            <PromptAnswers answers={data.answers} />, document.querySelector('#answers')
        );
    });
};

const setup = function() {
    ReactDOM.render(
        <PromptAnswers answers={[]} />, document.querySelector('#answers')
    );
    console.log("set has been read through");
    loadAnswers();
};

setup();