const ExploreAnswers = function(props) {
    const exploreAnswerNodes = props.answers.map(function(masterPrompt) {
        if(masterPrompt.category === "excited"){
            return (
                <div className='exploreExcited' key={masterPrompt._id} >
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am excited for</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        } else if(masterPrompt.category === "thankful"){
            return(
                <div className='exploreThankful' key={masterPrompt._id} onClick={ExploreThankfulModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreThankfulModal" className="exploreThankfulModal" key={masterPrompt._id}>
                        <div className="exploreThankfulModalContent"  key={masterPrompt._id}>
                            <h3>I am thankful for</h3>
                            <h3 className='promptAnswer'>{masterPrompt.answer}</h3>
                        </div>
                    </div>
                </div>
            );
        } else if(masterPrompt.category === "inspired"){
            return (
                <div className='exploreInspired' key={masterPrompt._id}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am inspired by</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        } else if(masterPrompt.category === "love"){
            return (
                <div className='exploreLove' key={masterPrompt._id}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I love</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
                );
        }
        if(masterPrompt.category === "happiest"){
            return (
                <div className='exploreHappiest' key={masterPrompt._id}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <h3>I am happiest when</h3>
                    <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                </div>
            );
        }
        if(masterPrompt.category === "proud"){
            return (
                <div className='exploreProud' key={masterPrompt._id}>
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

const ExploreThankfulModal = (e) => {
    const exploreThankfulModal = e.target.parentElement.querySelector("#exploreThankfulModal");
    // const thankfulLeaf = e.target.parentElement.querySelector("#exploreThankfulLeaf");

    exploreThankfulModal.style.display = "block";
    console.log("thankful modal called and triggered");
    
    window.onclick = (event) => {
        if (event.target === exploreThankfulModal) {
            exploreThankfulModal.style.display = "none";
        }
    }
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