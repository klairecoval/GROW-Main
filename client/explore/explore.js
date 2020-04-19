const ExploreAnswers = function(props) {
    const exploreAnswerNodes = props.answers.map(function(masterPrompt) {
        if(masterPrompt.category === "excited"){
            return (
                <div className='exploreExcited' key={masterPrompt._id} onClick={ExploreExcitedModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreExcitedModal" className="exploreExcitedModal">
                        <div className="exploreExcitedModalContent">
                            <h3>I am excited for</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <p>{masterPrompt.createdData.slice(0,10)}</p>
                            <div className="socialMediaShareBtns">
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am excited for " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am excited for " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?url=https://grow-main.herokuapp.com/explore&title=GROW&summary=I am excited for " + masterPrompt.answer} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(masterPrompt.category === "thankful"){
            return(
                <div className='exploreThankful' key={masterPrompt._id} onClick={ExploreThankfulModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreThankfulModal" className="exploreThankfulModal">
                        <div className="exploreThankfulModalContent">
                            <h3>I am thankful for</h3>
                            <h3 className='promptAnswer'>{masterPrompt.answer}</h3>
                            <p>{masterPrompt.createdData.slice(0,10)}</p>
                            <div className="socialMediaShareBtns">
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am thankful for " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am thankful for " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?url=https://grow-main.herokuapp.com/explore&title=GROW&summary=I am thankful for " + masterPrompt.answer} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(masterPrompt.category === "inspired"){
            return (
                <div className='exploreInspired' key={masterPrompt._id} onClick={ExploreInspiredModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreInspiredModal" className="exploreInspiredModal">
                        <div className="exploreInspiredModalContent">
                            <h3>I am inspired by</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <p>{masterPrompt.createdData.slice(0,10)}</p>
                            <div className="socialMediaShareBtns">
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am inspired by " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am inspired by " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?url=https://grow-main.herokuapp.com/explore&title=GROW&summary=I am inspired by " + masterPrompt.answer} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(masterPrompt.category === "love"){
            return (
                <div className='exploreLove' key={masterPrompt._id} onClick={ExploreLoveModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreLoveModal" className="exploreLoveModal">
                        <div className="exploreLoveModalContent">
                            <h3>I love</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <p>{masterPrompt.createdData.slice(0,10)}</p>
                            <div className="socialMediaShareBtns">
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I love " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I love " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?url=https://grow-main.herokuapp.com/explore&title=GROW&summary=I love " + masterPrompt.answer} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                );
        }
        if(masterPrompt.category === "happiest"){
            return (
                <div className='exploreHappiest' key={masterPrompt._id} onClick={ExploreHappiestModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreHappiestModal" className="exploreHappiestModal">
                        <div className="exploreHappiestModalContent">
                            <h3>I am happiest when</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <p>{masterPrompt.createdData.slice(0,10)}</p>
                            <div className="socialMediaShareBtns">
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am happiest when " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am happiest when " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?url=https://grow-main.herokuapp.com/explore&title=GROW&summary=I am happiest when " + masterPrompt.answer} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if(masterPrompt.category === "proud"){
            return (
                <div className='exploreProud' key={masterPrompt._id} onClick={ExploreProudModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreProudModal" className="exploreProudModal">
                        <div className="exploreProudModalContent">
                            <h3>I am proud of</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <p>{masterPrompt.createdData.slice(0,10)}</p>
                            <div className="socialMediaShareBtns">
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am proud of " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am proud of " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?url=https://grow-main.herokuapp.com/explore&title=GROW&summary=I am proud of " + masterPrompt.answer} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
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

    exploreThankfulModal.style.display = "block";
    
    window.onclick = (event) => {
        if (event.target === exploreThankfulModal) {
            exploreThankfulModal.style.display = "none";
        }
    }
};

const ExploreExcitedModal = (e) => {
    const exploreExcitedModal = e.target.parentElement.querySelector("#exploreExcitedModal");

    exploreExcitedModal.style.display = "block";
    
    window.onclick = (event) => {
        if (event.target === exploreExcitedModal) {
            exploreExcitedModal.style.display = "none";
        }
    }
};

const ExploreInspiredModal = (e) => {
    const exploreInspiredModal = e.target.parentElement.querySelector("#exploreInspiredModal");

    exploreInspiredModal.style.display = "block";
    
    window.onclick = (event) => {
        if (event.target === exploreInspiredModal) {
            exploreInspiredModal.style.display = "none";
        }
    }
};

const ExploreLoveModal = (e) => {
    const exploreLoveModal = e.target.parentElement.querySelector("#exploreLoveModal");

    exploreLoveModal.style.display = "block";
    
    window.onclick = (event) => {
        if (event.target === exploreInspiredModal) {
            exploreLoveModal.style.display = "none";
        }
    }
};

const ExploreHappiestModal = (e) => {
    const exploreHappiestModal = e.target.parentElement.querySelector("#exploreHappiestModal");

    exploreHappiestModal.style.display = "block";
    
    window.onclick = (event) => {
        if (event.target === exploreHappiestModal) {
            exploreHappiestModal.style.display = "none";
        }
    }
};

const ExploreProudModal = (e) => {
    const exploreProudModal = e.target.parentElement.querySelector("#exploreProudModal");

    exploreProudModal.style.display = "block";
    
    window.onclick = (event) => {
        if (event.target === exploreProudModal) {
            exploreProudModal.style.display = "none";
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