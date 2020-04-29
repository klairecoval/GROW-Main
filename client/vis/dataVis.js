const PromptAnswers = function(props) {
    const answerNodes = props.answers.map(function(masterPrompt) {
        if(masterPrompt.category === "excited"){
            return (
                <div className='answer'>
                    <img src='/assets/img/LeafVariation1/Excited1.svg' alt='excited leaf'/>
                </div>
            );
        } else if(masterPrompt.category === "thankful"){
            return(
                <div className='answer'>
                    <img src='/assets/img/LeafVariation2/Thankful2.svg' alt='thankful leaf'/>
                </div>
            );
        } else if(masterPrompt.category === "inspired"){
            return (
                <div className='answer'>
                    <img src='/assets/img/LeafVariation3/Inspired3.svg' alt='inspired leaf'/>
                </div>
            );
        } else if(masterPrompt.category === "love"){
            return (
                <div className='answer'>
                    <img src='/assets/img/LeafVariation1/Love1.svg' alt='love leaf'/>
                </div>
            );
        } else if(masterPrompt.category === "happiest"){
            return (
                <div className='answer'>
                    <img src='/assets/img/LeafVariation2/Happiest2.svg' alt='happiest leaf'/>
                </div>
            );
        } else if(masterPrompt.category === "proud"){
            return (
                <div className='answer'>
                    <img src='/assets/img/LeafVariation3/Proud3.svg' alt='proud leaf'/>
                </div>
            );
        }
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
            <PromptAnswers answers={data.docs} />, document.querySelector('#answers')
        );
    });
};

const setupDataVis = function() {
    ReactDOM.render(
        <PromptAnswers answers={[]} />, document.querySelector('#answers')
    );
    console.log("set has been read through");
    loadAnswers();
};

$(document).ready(function() {
    if(document.querySelector('#answers')){
        setupDataVis();
    }
});