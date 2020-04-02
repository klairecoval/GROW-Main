const PromptAnswers = function(props) {
    
//    if(props.answers.length === 0){
//        return(
//            <div className='answerList'>
//                <h3 className='emptyAnswer'>Nothing has been filled in yet</h3>
//            </div>
//        );
//    }
//    
    const answerNodes = props.answers.map(function(masterPrompt) {
        if(masterPrompt.category === "excited"){
        return (
            <div className='answer'>
                <img src='/assets/img/redSquare.png' alt='red square'/>
                <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                <h3 className='promptType'> {masterPrompt.viewable}</h3>
                <h3 className='promptType'> {masterPrompt.category}</h3>
            </div>
            );
        }
        if(masterPrompt.category === "thankful"){
            return(
            <div className='answer'>
                <img src='/assets/img/blueSquare.jpg' alt='blue square'/>
                <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                <h3 className='promptType'> {masterPrompt.viewable}</h3>
                <h3 className='promptType'> {masterPrompt.category}</h3>
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