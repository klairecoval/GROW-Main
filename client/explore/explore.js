const calcDate = (date) => {
    const d = new Date(date);
    const dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }); 
    const [{ value: mo },,{ value: da },,{ value: ye }] = dtf.formatToParts(d);
    
    return (`${mo} ${da}, ${ye}`);
};

const ExploreAnswers = function(props) {
    const exploreAnswerNodes = props.answers.map(function(masterPrompt) {
        if(masterPrompt.category === "excited"){
            return (
                <div className='exploreExcited' key={masterPrompt._id} onClick={ExploreExcitedModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreExcitedModal" className="exploreExcitedModal">
                        <div className="exploreExcitedModalContent" className='answer'>
                            <button className="playfair" id="dismissExcitedExplore">Back</button>
                            <h3>I am excited for</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="socialMediaShareBtns">
                                <p>Help spread the positivity by sharing this thought.</p>
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am excited for " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am excited for " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                            <p>Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                            <button className='reportButton' onClick={reportAnswer}>Report</button>
                            <span type="hidden" className="answerId">{masterPrompt._id}</span>
                        </div>
                    </div>
                </div>
            );
        } else if(masterPrompt.category === "thankful"){
            return(
                <div className='exploreThankful' key={masterPrompt._id} onClick={ExploreThankfulModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreThankfulModal" className="exploreThankfulModal">
                        <div className="exploreThankfulModalContent" className='answer'>
                            <button id="dismissThankfulExplore">Back</button>
                            <h3>I am thankful for</h3>
                            <h3 className='promptAnswer'>{masterPrompt.answer}</h3>
                            <div className="socialMediaShareBtns">
                                <p>Help spread the positivity by sharing this thought.</p>
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am thankful for " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am thankful for " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                            <p>Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                            <button className='reportButton' onClick={reportAnswer}>Report</button>
                            <span type="hidden" className="answerId">{masterPrompt._id}</span>
                        </div>
                    </div>
                </div>
            );
        } else if(masterPrompt.category === "inspired"){
            return (
                <div className='exploreInspired' key={masterPrompt._id} onClick={ExploreInspiredModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreInspiredModal" className="exploreInspiredModal">
                        <div className="exploreInspiredModalContent" className='answer'>
                            <button id="dismissInspiredExplore">Back</button>
                            <h3>I am inspired by</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="socialMediaShareBtns">
                                <p>Help spread the positivity by sharing this thought.</p>
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am inspired by " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am inspired by " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                            <p>Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                            <button className='reportButton' onClick={reportAnswer}>Report</button>
                            <span type="hidden" className="answerId">{masterPrompt._id}</span>
                        </div>
                    </div>
                </div>
            );
        } else if(masterPrompt.category === "love"){
            return (
                <div className='exploreLove' key={masterPrompt._id} onClick={ExploreLoveModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreLoveModal" className="exploreLoveModal" key={masterPrompt._id} >
                        <div className="exploreLoveModalContent" className='answer'>
                            <button id="dismissLoveExplore">Back</button>
                            <h3>I love</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="socialMediaShareBtns">
                                <p>Help spread the positivity by sharing this thought.</p>
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I love " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I love " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                            <p>Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                            <button className='reportButton' onClick={reportAnswer}>Report</button>
                            <span type="hidden" className="answerId">{masterPrompt._id}</span>
                        </div>
                    </div>
                </div>
                );
        }
        if(masterPrompt.category === "happiest"){
            return (
                <div className='exploreHappiest' key={masterPrompt._id} onClick={ExploreHappiestModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreHappiestModal" className="exploreHappiestModal" key={masterPrompt._id} >
                        <div className="exploreHappiestModalContent" className='answer'>
                            <button id="dismissHappiestExplore">Back</button>
                            <h3>I am happiest when</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="socialMediaShareBtns">
                                <p>Help spread the positivity by sharing this thought.</p>
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am happiest when " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am happiest when " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                            <p>Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                            <button className='reportButton' onClick={reportAnswer}>Report</button>
                            <span type="hidden" className="answerId">{masterPrompt._id}</span>
                        </div>
                    </div>
                </div>
            );
        }
        if(masterPrompt.category === "proud"){
            return (
                <div className='exploreProud' key={masterPrompt._id} onClick={ExploreProudModal}>
                    <img src='/assets/img/leafFILLER.png'/>
                    <div id="exploreProudModal" className="exploreProudModal" key={masterPrompt._id} className='answer'>
                        <div className="exploreProudModalContent">
                            <button id="dismissProudExplore">Back</button>
                            <h3>I am proud of</h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="socialMediaShareBtns">
                                <p>Help spread the positivity by sharing this thought.</p>
                                <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am proud of " + masterPrompt.answer} target="_blank">
                                    Twitter
                                </a>
                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore" target="_blank">
                                    Facebook
                                </a>
                                <a href={"https://reddit.com/submit?url=https://grow-main.herokuapp.com/explore&title=I am proud of " + masterPrompt.answer} target="_blank">
                                    Reddit
                                </a>
                                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                    LinkedIn
                                </a>
                            </div>
                            <p>Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                            <button className='reportButton' onClick={reportAnswer}>Report</button>
                            <span type="hidden" className="answerId">{masterPrompt._id}</span>
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
    const dismissThankfulExplore = e.target.parentElement.querySelector('#dismissThankfulExplore');

    if(exploreThankfulModal) {
        exploreThankfulModal.style.display = "block";
    }

    dismissThankfulExplore.onclick = () => {
        exploreThankfulModal.style.display = "none";
    }
    
    window.onclick = (event) => {
        if (event.target === exploreThankfulModal) {
            exploreThankfulModal.style.display = "none";
        }
    }
};

const ExploreExcitedModal = (e) => {
    const exploreExcitedModal = e.target.parentElement.querySelector("#exploreExcitedModal");
    const dismissExcitedExplore = e.target.parentElement.querySelector('#dismissExcitedExplore');

    if(exploreExcitedModal) {
        exploreExcitedModal.style.display = "block";
    }

    dismissExcitedExplore.onclick = () => {
        exploreExcitedModal.style.display = "none";
    }
    
    window.onclick = (event) => {
        if (event.target === exploreExcitedModal) {
            exploreExcitedModal.style.display = "none";
        }
    }
};

const ExploreInspiredModal = (e) => {
    const exploreInspiredModal = e.target.parentElement.querySelector("#exploreInspiredModal");
    const dismissInspiredExplore = e.target.parentElement.querySelector('#dismissInspiredExplore');

    if(exploreInspiredModal) {
        exploreInspiredModal.style.display = "block";
    }

    dismissInspiredExplore.onclick = () => {
        exploreInspiredModal.style.display = "none";
    }
    
    window.onclick = (event) => {
        if (event.target === exploreInspiredModal) {
            exploreInspiredModal.style.display = "none";
        }
    }
};

const ExploreLoveModal = (e) => {
    const exploreLoveModal = e.target.parentElement.querySelector("#exploreLoveModal");
    const dismissLoveExplore = e.target.parentElement.querySelector('#dismissLoveExplore');

    if(exploreLoveModal) {
        exploreLoveModal.style.display = "block";
    }

    dismissLoveExplore.onclick = () => {
        exploreLoveModal.style.display = "none";
    }
    
    window.onclick = (event) => {
        if (event.target === exploreInspiredModal) {
            exploreLoveModal.style.display = "none";
        }
    }
};

const ExploreHappiestModal = (e) => {
    const exploreHappiestModal = e.target.parentElement.querySelector("#exploreHappiestModal");
    const dismissHappiestExplore = e.target.parentElement.querySelector('#dismissHappiestExplore');

    if(exploreHappiestModal) {
        exploreHappiestModal.style.display = "block";
    }

    dismissHappiestExplore.onclick = () => {
        exploreHappiestModal.style.display = "none";
    }
    
    window.onclick = (event) => {
        if (event.target === exploreHappiestModal) {
            exploreHappiestModal.style.display = "none";
        }
    }
};

const ExploreProudModal = (e) => {
    const exploreProudModal = e.target.parentElement.querySelector("#exploreProudModal");
    const dismissProudExplore = e.target.parentElement.querySelector('#dismissProudExplore');

    if(exploreProudModal) {
        exploreProudModal.style.display = "block";
    }

    dismissProudExplore.onclick = () => {
        exploreProudModal.style.display = "none";
    }
    
    window.onclick = (event) => {
        if (event.target === exploreProudModal) {
            exploreProudModal.style.display = "none";
        }
    }
};

const reportAnswer = (e) => {
    const id = e.target.parentElement.querySelector('.answerId').innerText;
    
    sendAjax('DELETE', '/reportMaster', {id}, data => {
        loadExploreAnswers();
    });
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