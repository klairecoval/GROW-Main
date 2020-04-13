const ExploreAnswers = function(props) {
    const exploreAnswerNodes = props.answers.map(function(masterPrompt) {
        if(masterPrompt.category === "excited"){
            return (
                <div className='exploreThought'>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am excited for</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        } else if(masterPrompt.category === "thankful"){
            return(
                <div className='exploreThought'>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am thankful for</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        } else if(masterPrompt.category === "inspired"){
            return (
                <div className='exploreThought'>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am inspired by</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        } else if(masterPrompt.category === "love"){
            return (
                <div className='exploreThought'>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I love</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
                );
        }
        if(masterPrompt.category === "happiest"){
            return (
                <div className='exploreThought'>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am happiest when</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        }
        if(masterPrompt.category === "proud"){
            return (
                <div className='exploreThought'>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am proud of</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        }

    });
    return(
        <div className='exploreList'>
            {exploreAnswerNodes}
        </div>
    );
};
        
const loadExploreAnswers = () => {
    sendAjax('GET', '/getMaster', null, (data) => {
        ReactDOM.render(
            <ExploreAnswers answers={data.docs} />, document.querySelector('#exploreThoughts')
        );
    });
};
    
const setupExplorePage = function() {
    ReactDOM.render(
        <ExploreAnswers answers={[]} />, document.querySelector('#exploreThoughts')
    );
    loadExploreAnswers();
};

$(document).ready(function() {
    if(document.querySelector('#exploreThoughts')){
        setupExplorePage();
    }
});