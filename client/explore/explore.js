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
                <div className='exploreExcited' key={masterPrompt._id}>
                    <svg id="leaf1" className="leaf" viewBox="0 0 207 180" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={excitedModalSibling}>
                        <path d="M154.081 113.884C154.385 113.876 176.947 148.081 197.509 155.94C218.425 163.983 194.01 164.233 191.189 161.034C188.175 157.573 171.301 152.126 154.081 113.884Z" fill="url(#paint0_linear)"/>
                        <path d="M160.287 80.0953C157.272 81.4162 154.372 82.9873 151.619 84.7922C151.594 84.8001 151.574 84.8067 151.58 84.7688C153.555 81.6486 155.643 78.6662 157.844 75.8219C157.507 75.2859 157.161 74.7486 156.804 74.2193C156.804 74.2193 156.798 74.1988 156.772 74.2299C151.809 76.7614 147.154 79.854 142.896 83.447C142.872 83.455 142.847 83.4629 142.85 83.4304C145.288 77.8106 148.131 72.3753 151.357 67.1676C151.357 67.1602 151.355 67.1529 151.35 67.1472C148.245 63.6228 144.764 60.4489 140.969 57.6822C127.231 47.7673 111.635 40.7246 95.1152 36.9751L95.0826 36.9857C86.7885 41.7371 79.8403 46.9942 74.4337 52.5674C74.4092 52.5754 74.3766 52.586 74.3809 52.5575C76.4745 46.4495 79.0058 40.5005 81.9548 34.7567C81.9548 34.7567 81.9548 34.7567 81.9469 34.7322C56.8377 31.8871 35.9719 40.2992 8.35958 41.2716C-2.67953 67.2796 18.9864 85.4523 41.6655 101.896C41.6699 101.897 41.6745 101.897 41.6788 101.896C41.6831 101.894 41.687 101.892 41.69 101.888C47.9949 99.1468 54.4375 96.7335 60.9919 94.6582C61.0205 94.649 61.0352 94.6803 61.0052 94.6991C55.953 97.9056 51.0276 101.391 46.2577 105.12C46.2577 105.12 46.2643 105.14 46.2683 105.153C54.1153 110.495 63.1483 115.629 72.9578 120.515C93.8279 130.612 117.672 134.116 136.662 136.246C155.626 138.208 169.727 138.754 170.462 138.614C170.467 138.617 170.473 138.617 170.478 138.616C170.483 138.614 170.488 138.61 170.491 138.605C170.193 137.799 174.46 107.776 160.302 80.0995C160.297 80.097 160.292 80.0956 160.287 80.0953Z" fill="#F1F8F7"/>
                        <path opacity="0.75" d="M169.687 138.59L169.672 138.627C165.809 138.619 151.337 137.904 133.042 135.833C114.726 133.601 92.606 130.016 73.1057 120.512C63.2949 115.622 54.2647 110.483 46.4218 105.139C46.4218 105.139 46.4138 105.114 46.4125 105.11C51.1783 101.383 56.1051 97.9011 61.1559 94.6905C61.1845 94.6812 61.1712 94.6404 61.1426 94.6497C54.5881 96.724 48.1447 99.1346 41.838 101.872C41.8343 101.875 41.8298 101.878 41.8248 101.88C41.8199 101.881 41.8146 101.882 41.8095 101.881C19.2884 85.5345 9.00576 66.1516 22.8801 50.3067C22.8864 50.3003 22.8941 50.2955 22.9026 50.2927C22.9112 50.29 22.9202 50.2893 22.9291 50.2908C81.4105 70.118 131.201 101.084 169.687 138.59Z" fill="url(#paint1_linear)"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M68.9943 41.4162C68.3071 42.9388 66.1381 44.1486 64.1579 44.0789C49.3289 43.6251 37.7835 46.5042 30.2491 49.3032C29.7613 48.6901 30.2345 49.2583 29.7263 48.6518C37.3596 41.6019 51.1714 37.8965 66.7203 38.5948C68.6501 38.6899 69.6594 39.9368 68.9943 41.4162Z" fill="#F4DCDC"/>
                        </g>
                        <path d="M22.0812 48.1851C29.7146 50.5392 37.1131 53.1713 44.4143 55.9266C51.7155 58.6818 58.8067 61.7069 65.7799 64.8482C72.7531 67.9895 79.5098 71.3523 86.1388 74.8436C92.7678 78.3349 99.2054 81.9984 105.511 85.8054C111.817 89.6125 117.888 93.601 123.833 97.7222C129.779 101.843 135.57 106.042 141.118 110.434C146.666 114.826 152.078 119.336 157.299 123.963C162.52 128.589 167.522 133.36 172.318 138.258C167.276 133.573 162.124 128.933 156.755 124.446C151.387 119.959 145.923 115.512 140.247 111.235C134.572 106.957 128.79 102.746 122.779 98.706C116.769 94.6656 110.651 90.7332 104.344 86.9633C98.0366 83.1935 91.6298 79.4696 85.0409 75.9607C78.4519 72.4518 71.6827 69.1068 64.844 65.844C58.0053 62.5811 50.9779 59.5124 43.8294 56.593C36.681 53.6736 29.4298 50.8608 22.0812 48.1851Z" fill="white"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M165.771 122.45L165.212 122.451C161.781 119.288 159.77 115.168 159.72 110.735C159.64 104.268 158.663 96.7617 155.232 89.529L155.225 89.5086L155.266 89.4953C157.358 88.2021 160.256 88.7771 161.032 90.5826C167.841 106.424 165.672 122.464 165.771 122.45Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M139.921 64.1739C139.066 65.737 136.369 66.1639 135.225 64.9108C131.024 60.3197 125.474 56.158 118.145 52.9619C112.101 50.3187 105.849 48.2556 99.4676 46.7991C97.569 46.3702 97.4531 44.4473 99.2527 43.3008C99.5991 43.0838 99.9267 42.8728 100.268 42.6661C101.144 42.1063 102.201 41.9187 103.224 42.1416C113.898 45.1017 124.031 49.9833 133.154 56.5605C135.502 58.2536 137.697 60.1659 139.712 62.2726C139.952 62.5218 140.104 62.847 140.142 63.1934C140.18 63.5398 140.102 63.8861 139.921 64.1739V64.1739Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M136.5 107.202C114.875 88.1558 68.7351 66.1043 56.1904 60.7296C41.1361 60.5848 110.525 49.9256 136.5 107.202Z" fill="#C3E9CD"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M55.2131 105.255C71.9298 122.436 130.305 131.852 157.403 134.413C131.683 121.984 91.0697 118.245 84.6714 95.6877C83.6554 92.1059 122.151 109.95 138.677 117.8C99.8618 92.4976 22.1315 45.0135 21.7308 57.495C21.2299 73.0969 36.8149 92.2484 41.0306 95.0976C51.8467 90.9941 65.5563 90.0847 65.5563 90.0847C65.5563 90.0847 58.0977 101.928 55.2131 105.255Z" fill="#C8E9E6"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="177.482" y1="112.046" x2="183.012" y2="165.613" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F0E6"/>
                        <stop offset="0.14" stopColor="#D7F0E8"/>
                        <stop offset="0.51" stopColor="#E2F7F3"/>
                        <stop offset="0.81" stopColor="#EAF9F7"/>
                        <stop offset="1" stopColor="#DFF5F4"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="31.4725" y1="115.508" x2="149.721" y2="77.1017" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C1F5F3"/>
                        <stop offset="0.58" stopColor="#8ABEBB"/>
                        <stop offset="1" stopColor="#CEFAF6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div id="exploreExcitedModal" className="exploreExcitedModal">
                        <div className="exploreExcitedModalContent answer">
                            <button className="playfair dismissExploreModal" id="dismissExcitedExplore">Back</button>
                            <img src="/assets/img/LeafVariation1/Excited1.svg" className="exploreModalPromptLeaf"/>
                            <h3 className="lato exploreModalTitle">I'M EXCITED FOR <img src="/assets/img/PromptLine.svg"/></h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="exploreColorModal" id="excitedExploreColorModal">
                                <p className="lato shareText">Help spread the positivity by sharing this thought.</p>
                                <div className="socialMediaShareBtns">
                                    <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explorePage/&text=I am excited for " + masterPrompt.answer + " %23RITGROW"} target="_blank" >
                                        <i className="fa fa-twitter-square fa-lg" ></i>
                                    </a>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explorePage" target="_blank" >
                                        <i className="fa fa-facebook-square fa-lg"></i>
                                    </a>
                                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank" >
                                        <i className="fa fa-linkedin-square fa-lg"></i>
                                    </a>
                                </div>
                                <p className="lato submittedDate">Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                                <p className="lato report">
                                    Inappropriate submission?
                                    <button className='reportButton' onClick={reportAnswer}><strong>Let us know.</strong></button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="answerId">{masterPrompt._id}</span>
                </div>
            );
        } else if(masterPrompt.category === "thankful"){
            return(
                <div className='exploreThankful' key={masterPrompt._id} >
                    <svg id="leaf2" className="leaf" viewBox="0 0 207 180" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={thankfulModalSibling}>
                        <path d="M154.081 113.884C154.385 113.876 176.947 148.081 197.509 155.94C218.425 163.983 194.01 164.233 191.189 161.034C188.175 157.573 171.301 152.126 154.081 113.884Z" fill="url(#paint0_linear)"/>
                        <path d="M160.287 80.0953C157.272 81.4162 154.372 82.9873 151.619 84.7922C151.594 84.8001 151.574 84.8067 151.58 84.7688C153.555 81.6486 155.643 78.6662 157.844 75.8219C157.507 75.2859 157.161 74.7486 156.804 74.2193C156.804 74.2193 156.798 74.1988 156.772 74.2299C151.809 76.7614 147.154 79.854 142.896 83.447C142.872 83.455 142.847 83.4629 142.85 83.4304C145.288 77.8106 148.131 72.3753 151.357 67.1676C151.357 67.1602 151.355 67.1529 151.35 67.1472C148.245 63.6228 144.764 60.4489 140.969 57.6822C127.231 47.7673 111.635 40.7246 95.1152 36.9751L95.0826 36.9857C86.7885 41.7371 79.8403 46.9942 74.4337 52.5674C74.4092 52.5754 74.3766 52.586 74.3809 52.5575C76.4745 46.4495 79.0058 40.5005 81.9548 34.7567C81.9548 34.7567 81.9548 34.7567 81.9469 34.7322C56.8377 31.8871 35.9719 40.2992 8.35958 41.2716C-2.67953 67.2796 18.9864 85.4523 41.6655 101.896C41.6699 101.897 41.6745 101.897 41.6788 101.896C41.6831 101.894 41.687 101.892 41.69 101.888C47.9949 99.1468 54.4375 96.7335 60.9919 94.6582C61.0205 94.649 61.0352 94.6803 61.0052 94.6991C55.953 97.9056 51.0276 101.391 46.2577 105.12C46.2577 105.12 46.2643 105.14 46.2683 105.153C54.1153 110.495 63.1483 115.629 72.9578 120.515C93.8279 130.612 117.672 134.116 136.662 136.246C155.626 138.208 169.727 138.754 170.462 138.614C170.467 138.617 170.473 138.617 170.478 138.616C170.483 138.614 170.488 138.61 170.491 138.605C170.193 137.799 174.46 107.776 160.302 80.0995C160.297 80.097 160.292 80.0956 160.287 80.0953Z" fill="#F1F8F7"/>
                        <path opacity="0.75" d="M169.687 138.59L169.672 138.627C165.809 138.619 151.337 137.904 133.042 135.833C114.726 133.601 92.606 130.016 73.1057 120.512C63.2949 115.622 54.2647 110.483 46.4218 105.139C46.4218 105.139 46.4138 105.114 46.4125 105.11C51.1783 101.383 56.1051 97.9011 61.1559 94.6905C61.1845 94.6812 61.1712 94.6404 61.1426 94.6497C54.5881 96.724 48.1447 99.1346 41.838 101.872C41.8343 101.875 41.8298 101.878 41.8248 101.88C41.8199 101.881 41.8146 101.882 41.8095 101.881C19.2884 85.5345 9.00576 66.1516 22.8801 50.3067C22.8864 50.3003 22.8941 50.2955 22.9026 50.2927C22.9112 50.29 22.9202 50.2893 22.9291 50.2908C81.4105 70.118 131.201 101.084 169.687 138.59Z" fill="url(#paint1_linear)"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M68.9943 41.4162C68.3071 42.9388 66.1381 44.1486 64.1579 44.0789C49.3289 43.6251 37.7835 46.5042 30.2491 49.3032C29.7613 48.6901 30.2345 49.2583 29.7263 48.6518C37.3596 41.6019 51.1714 37.8965 66.7203 38.5948C68.6501 38.6899 69.6594 39.9368 68.9943 41.4162Z" fill="#F4DCDC"/>
                        </g>
                        <path d="M22.0812 48.1851C29.7146 50.5392 37.1131 53.1713 44.4143 55.9266C51.7155 58.6818 58.8067 61.7069 65.7799 64.8482C72.7531 67.9895 79.5098 71.3523 86.1388 74.8436C92.7678 78.3349 99.2054 81.9984 105.511 85.8054C111.817 89.6125 117.888 93.601 123.833 97.7222C129.779 101.843 135.57 106.042 141.118 110.434C146.666 114.826 152.078 119.336 157.299 123.963C162.52 128.589 167.522 133.36 172.318 138.258C167.276 133.573 162.124 128.933 156.755 124.446C151.387 119.959 145.923 115.512 140.247 111.235C134.572 106.957 128.79 102.746 122.779 98.706C116.769 94.6656 110.651 90.7332 104.344 86.9633C98.0366 83.1935 91.6298 79.4696 85.0409 75.9607C78.4519 72.4518 71.6827 69.1068 64.844 65.844C58.0053 62.5811 50.9779 59.5124 43.8294 56.593C36.681 53.6736 29.4298 50.8608 22.0812 48.1851Z" fill="white"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M165.771 122.45L165.212 122.451C161.781 119.288 159.77 115.168 159.72 110.735C159.64 104.268 158.663 96.7617 155.232 89.529L155.225 89.5086L155.266 89.4953C157.358 88.2021 160.256 88.7771 161.032 90.5826C167.841 106.424 165.672 122.464 165.771 122.45Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M139.921 64.1739C139.066 65.737 136.369 66.1639 135.225 64.9108C131.024 60.3197 125.474 56.158 118.145 52.9619C112.101 50.3187 105.849 48.2556 99.4676 46.7991C97.569 46.3702 97.4531 44.4473 99.2527 43.3008C99.5991 43.0838 99.9267 42.8728 100.268 42.6661C101.144 42.1063 102.201 41.9187 103.224 42.1416C113.898 45.1017 124.031 49.9833 133.154 56.5605C135.502 58.2536 137.697 60.1659 139.712 62.2726C139.952 62.5218 140.104 62.847 140.142 63.1934C140.18 63.5398 140.102 63.8861 139.921 64.1739V64.1739Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M136.5 107.202C114.875 88.1558 68.7351 66.1043 56.1904 60.7296C41.1361 60.5848 110.525 49.9256 136.5 107.202Z" fill="#C3E9CD"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M55.2131 105.255C71.9298 122.436 130.305 131.852 157.403 134.413C131.683 121.984 91.0697 118.245 84.6714 95.6877C83.6554 92.1059 122.151 109.95 138.677 117.8C99.8618 92.4976 22.1315 45.0135 21.7308 57.495C21.2299 73.0969 36.8149 92.2484 41.0306 95.0976C51.8467 90.9941 65.5563 90.0847 65.5563 90.0847C65.5563 90.0847 58.0977 101.928 55.2131 105.255Z" fill="#C8E9E6"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="177.482" y1="112.046" x2="183.012" y2="165.613" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F0E6"/>
                        <stop offset="0.14" stopColor="#D7F0E8"/>
                        <stop offset="0.51" stopColor="#E2F7F3"/>
                        <stop offset="0.81" stopColor="#EAF9F7"/>
                        <stop offset="1" stopColor="#DFF5F4"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="31.4725" y1="115.508" x2="149.721" y2="77.1017" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C1F5F3"/>
                        <stop offset="0.58" stopColor="#8ABEBB"/>
                        <stop offset="1" stopColor="#CEFAF6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div id="exploreThankfulModal" className="exploreThankfulModal">
                        <div className="exploreThankfulModalContent answer">
                            <button className="playfair dismissExploreModal" id="dismissThankfulExplore">Back</button>
                            <img src="/assets/img/LeafVariation1/Thankful1.svg"  className="exploreModalPromptLeaf" />
                            <h3 className="lato exploreModalTitle">I'M THANKFUL FOR <img src="/assets/img/PromptLine.svg"/></h3>
                            <h3 className='promptAnswer'>{masterPrompt.answer}</h3>
                            <div className="exploreColorModal" id="thankfulExploreColorModal">
                                <p className="lato shareText">Help spread the positivity by sharing this thought.</p>
                                <div className="socialMediaShareBtns">
                                    <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am thankful for " + masterPrompt.answer + " %23RITGROW"} target="_blank" >
                                        <i className="fa fa-twitter-square fa-lg" ></i>
                                    </a>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explorePage" target="_blank">
                                        <i className="fa fa-facebook-square fa-lg"></i>
                                    </a>
                                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank" >
                                        <i className="fa fa-linkedin-square fa-lg"></i>
                                    </a>
                                </div>
                                <p className="lato submittedDate">Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                                <p className="lato report">
                                    Inappropriate submission?
                                    <button className='reportButton' onClick={reportAnswer}><strong>Let us know.</strong></button>
                                </p>                              
                            </div>
                        </div>
                    </div>
                    <span className="answerId">{masterPrompt._id}</span>
                </div>
            );
        } else if(masterPrompt.category === "inspired"){
            return (
                <div className='exploreInspired' key={masterPrompt._id}>
                    <svg id="leaf3" className="leaf" viewBox="0 0 207 180" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={inspiredModalSibling}>
                        <path d="M154.081 113.884C154.385 113.876 176.947 148.081 197.509 155.94C218.425 163.983 194.01 164.233 191.189 161.034C188.175 157.573 171.301 152.126 154.081 113.884Z" fill="url(#paint0_linear)"/>
                        <path d="M160.287 80.0953C157.272 81.4162 154.372 82.9873 151.619 84.7922C151.594 84.8001 151.574 84.8067 151.58 84.7688C153.555 81.6486 155.643 78.6662 157.844 75.8219C157.507 75.2859 157.161 74.7486 156.804 74.2193C156.804 74.2193 156.798 74.1988 156.772 74.2299C151.809 76.7614 147.154 79.854 142.896 83.447C142.872 83.455 142.847 83.4629 142.85 83.4304C145.288 77.8106 148.131 72.3753 151.357 67.1676C151.357 67.1602 151.355 67.1529 151.35 67.1472C148.245 63.6228 144.764 60.4489 140.969 57.6822C127.231 47.7673 111.635 40.7246 95.1152 36.9751L95.0826 36.9857C86.7885 41.7371 79.8403 46.9942 74.4337 52.5674C74.4092 52.5754 74.3766 52.586 74.3809 52.5575C76.4745 46.4495 79.0058 40.5005 81.9548 34.7567C81.9548 34.7567 81.9548 34.7567 81.9469 34.7322C56.8377 31.8871 35.9719 40.2992 8.35958 41.2716C-2.67953 67.2796 18.9864 85.4523 41.6655 101.896C41.6699 101.897 41.6745 101.897 41.6788 101.896C41.6831 101.894 41.687 101.892 41.69 101.888C47.9949 99.1468 54.4375 96.7335 60.9919 94.6582C61.0205 94.649 61.0352 94.6803 61.0052 94.6991C55.953 97.9056 51.0276 101.391 46.2577 105.12C46.2577 105.12 46.2643 105.14 46.2683 105.153C54.1153 110.495 63.1483 115.629 72.9578 120.515C93.8279 130.612 117.672 134.116 136.662 136.246C155.626 138.208 169.727 138.754 170.462 138.614C170.467 138.617 170.473 138.617 170.478 138.616C170.483 138.614 170.488 138.61 170.491 138.605C170.193 137.799 174.46 107.776 160.302 80.0995C160.297 80.097 160.292 80.0956 160.287 80.0953Z" fill="#F1F8F7"/>
                        <path opacity="0.75" d="M169.687 138.59L169.672 138.627C165.809 138.619 151.337 137.904 133.042 135.833C114.726 133.601 92.606 130.016 73.1057 120.512C63.2949 115.622 54.2647 110.483 46.4218 105.139C46.4218 105.139 46.4138 105.114 46.4125 105.11C51.1783 101.383 56.1051 97.9011 61.1559 94.6905C61.1845 94.6812 61.1712 94.6404 61.1426 94.6497C54.5881 96.724 48.1447 99.1346 41.838 101.872C41.8343 101.875 41.8298 101.878 41.8248 101.88C41.8199 101.881 41.8146 101.882 41.8095 101.881C19.2884 85.5345 9.00576 66.1516 22.8801 50.3067C22.8864 50.3003 22.8941 50.2955 22.9026 50.2927C22.9112 50.29 22.9202 50.2893 22.9291 50.2908C81.4105 70.118 131.201 101.084 169.687 138.59Z" fill="url(#paint1_linear)"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M68.9943 41.4162C68.3071 42.9388 66.1381 44.1486 64.1579 44.0789C49.3289 43.6251 37.7835 46.5042 30.2491 49.3032C29.7613 48.6901 30.2345 49.2583 29.7263 48.6518C37.3596 41.6019 51.1714 37.8965 66.7203 38.5948C68.6501 38.6899 69.6594 39.9368 68.9943 41.4162Z" fill="#F4DCDC"/>
                        </g>
                        <path d="M22.0812 48.1851C29.7146 50.5392 37.1131 53.1713 44.4143 55.9266C51.7155 58.6818 58.8067 61.7069 65.7799 64.8482C72.7531 67.9895 79.5098 71.3523 86.1388 74.8436C92.7678 78.3349 99.2054 81.9984 105.511 85.8054C111.817 89.6125 117.888 93.601 123.833 97.7222C129.779 101.843 135.57 106.042 141.118 110.434C146.666 114.826 152.078 119.336 157.299 123.963C162.52 128.589 167.522 133.36 172.318 138.258C167.276 133.573 162.124 128.933 156.755 124.446C151.387 119.959 145.923 115.512 140.247 111.235C134.572 106.957 128.79 102.746 122.779 98.706C116.769 94.6656 110.651 90.7332 104.344 86.9633C98.0366 83.1935 91.6298 79.4696 85.0409 75.9607C78.4519 72.4518 71.6827 69.1068 64.844 65.844C58.0053 62.5811 50.9779 59.5124 43.8294 56.593C36.681 53.6736 29.4298 50.8608 22.0812 48.1851Z" fill="white"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M165.771 122.45L165.212 122.451C161.781 119.288 159.77 115.168 159.72 110.735C159.64 104.268 158.663 96.7617 155.232 89.529L155.225 89.5086L155.266 89.4953C157.358 88.2021 160.256 88.7771 161.032 90.5826C167.841 106.424 165.672 122.464 165.771 122.45Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M139.921 64.1739C139.066 65.737 136.369 66.1639 135.225 64.9108C131.024 60.3197 125.474 56.158 118.145 52.9619C112.101 50.3187 105.849 48.2556 99.4676 46.7991C97.569 46.3702 97.4531 44.4473 99.2527 43.3008C99.5991 43.0838 99.9267 42.8728 100.268 42.6661C101.144 42.1063 102.201 41.9187 103.224 42.1416C113.898 45.1017 124.031 49.9833 133.154 56.5605C135.502 58.2536 137.697 60.1659 139.712 62.2726C139.952 62.5218 140.104 62.847 140.142 63.1934C140.18 63.5398 140.102 63.8861 139.921 64.1739V64.1739Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M136.5 107.202C114.875 88.1558 68.7351 66.1043 56.1904 60.7296C41.1361 60.5848 110.525 49.9256 136.5 107.202Z" fill="#C3E9CD"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M55.2131 105.255C71.9298 122.436 130.305 131.852 157.403 134.413C131.683 121.984 91.0697 118.245 84.6714 95.6877C83.6554 92.1059 122.151 109.95 138.677 117.8C99.8618 92.4976 22.1315 45.0135 21.7308 57.495C21.2299 73.0969 36.8149 92.2484 41.0306 95.0976C51.8467 90.9941 65.5563 90.0847 65.5563 90.0847C65.5563 90.0847 58.0977 101.928 55.2131 105.255Z" fill="#C8E9E6"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="177.482" y1="112.046" x2="183.012" y2="165.613" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F0E6"/>
                        <stop offset="0.14" stopColor="#D7F0E8"/>
                        <stop offset="0.51" stopColor="#E2F7F3"/>
                        <stop offset="0.81" stopColor="#EAF9F7"/>
                        <stop offset="1" stopColor="#DFF5F4"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="31.4725" y1="115.508" x2="149.721" y2="77.1017" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C1F5F3"/>
                        <stop offset="0.58" stopColor="#8ABEBB"/>
                        <stop offset="1" stopColor="#CEFAF6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div id="exploreInspiredModal" className="exploreInspiredModal">
                        <div className="exploreInspiredModalContent answer">
                            <button className="playfair dismissExploreModal" id="dismissInspiredExplore">Back</button>
                            <img src="/assets/img/LeafVariation1/Inspired1.svg"  className="exploreModalPromptLeaf" />
                            <h3 className="lato exploreModalTitle">I'M INSPIRED BY <img src="/assets/img/PromptLine.svg"/></h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="exploreColorModal" id="inspiredExploreColorModal">
                                <p className="lato shareText">Help spread the positivity by sharing this thought.</p>
                                <div className="socialMediaShareBtns">
                                    <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explorePage/&text=I am inspired by " + masterPrompt.answer + " %23RITGROW"} target="_blank" >
                                        <i className="fa fa-twitter-square fa-lg" ></i>
                                    </a>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explorePage" target="_blank">
                                        <i className="fa fa-facebook-square fa-lg"></i>
                                    </a>
                                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                        <i className="fa fa-linkedin-square fa-lg"></i>
                                    </a>
                                </div>
                                <p className="lato submittedDate">Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                                <p className="lato report">
                                    Inappropriate submission?
                                    <button className='reportButton' onClick={reportAnswer}><strong>Let us know.</strong></button>
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <span className="answerId">{masterPrompt._id}</span>
                </div>
            );
        } else if(masterPrompt.category === "love"){
            return (
                <div className='exploreLove' key={masterPrompt._id} >
                    <svg id="leaf4" className="leaf" viewBox="0 0 207 180" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={loveModalSibling}>
                        <path d="M154.081 113.884C154.385 113.876 176.947 148.081 197.509 155.94C218.425 163.983 194.01 164.233 191.189 161.034C188.175 157.573 171.301 152.126 154.081 113.884Z" fill="url(#paint0_linear)"/>
                        <path d="M160.287 80.0953C157.272 81.4162 154.372 82.9873 151.619 84.7922C151.594 84.8001 151.574 84.8067 151.58 84.7688C153.555 81.6486 155.643 78.6662 157.844 75.8219C157.507 75.2859 157.161 74.7486 156.804 74.2193C156.804 74.2193 156.798 74.1988 156.772 74.2299C151.809 76.7614 147.154 79.854 142.896 83.447C142.872 83.455 142.847 83.4629 142.85 83.4304C145.288 77.8106 148.131 72.3753 151.357 67.1676C151.357 67.1602 151.355 67.1529 151.35 67.1472C148.245 63.6228 144.764 60.4489 140.969 57.6822C127.231 47.7673 111.635 40.7246 95.1152 36.9751L95.0826 36.9857C86.7885 41.7371 79.8403 46.9942 74.4337 52.5674C74.4092 52.5754 74.3766 52.586 74.3809 52.5575C76.4745 46.4495 79.0058 40.5005 81.9548 34.7567C81.9548 34.7567 81.9548 34.7567 81.9469 34.7322C56.8377 31.8871 35.9719 40.2992 8.35958 41.2716C-2.67953 67.2796 18.9864 85.4523 41.6655 101.896C41.6699 101.897 41.6745 101.897 41.6788 101.896C41.6831 101.894 41.687 101.892 41.69 101.888C47.9949 99.1468 54.4375 96.7335 60.9919 94.6582C61.0205 94.649 61.0352 94.6803 61.0052 94.6991C55.953 97.9056 51.0276 101.391 46.2577 105.12C46.2577 105.12 46.2643 105.14 46.2683 105.153C54.1153 110.495 63.1483 115.629 72.9578 120.515C93.8279 130.612 117.672 134.116 136.662 136.246C155.626 138.208 169.727 138.754 170.462 138.614C170.467 138.617 170.473 138.617 170.478 138.616C170.483 138.614 170.488 138.61 170.491 138.605C170.193 137.799 174.46 107.776 160.302 80.0995C160.297 80.097 160.292 80.0956 160.287 80.0953Z" fill="#F1F8F7"/>
                        <path opacity="0.75" d="M169.687 138.59L169.672 138.627C165.809 138.619 151.337 137.904 133.042 135.833C114.726 133.601 92.606 130.016 73.1057 120.512C63.2949 115.622 54.2647 110.483 46.4218 105.139C46.4218 105.139 46.4138 105.114 46.4125 105.11C51.1783 101.383 56.1051 97.9011 61.1559 94.6905C61.1845 94.6812 61.1712 94.6404 61.1426 94.6497C54.5881 96.724 48.1447 99.1346 41.838 101.872C41.8343 101.875 41.8298 101.878 41.8248 101.88C41.8199 101.881 41.8146 101.882 41.8095 101.881C19.2884 85.5345 9.00576 66.1516 22.8801 50.3067C22.8864 50.3003 22.8941 50.2955 22.9026 50.2927C22.9112 50.29 22.9202 50.2893 22.9291 50.2908C81.4105 70.118 131.201 101.084 169.687 138.59Z" fill="url(#paint1_linear)"/>
                        <g style={{mixBlendMode:"screen",opacity:"0.35"}}>
                        <path d="M68.9943 41.4162C68.3071 42.9388 66.1381 44.1486 64.1579 44.0789C49.3289 43.6251 37.7835 46.5042 30.2491 49.3032C29.7613 48.6901 30.2345 49.2583 29.7263 48.6518C37.3596 41.6019 51.1714 37.8965 66.7203 38.5948C68.6501 38.6899 69.6594 39.9368 68.9943 41.4162Z" fill="#F4DCDC"/>
                        </g>
                        <path d="M22.0812 48.1851C29.7146 50.5392 37.1131 53.1713 44.4143 55.9266C51.7155 58.6818 58.8067 61.7069 65.7799 64.8482C72.7531 67.9895 79.5098 71.3523 86.1388 74.8436C92.7678 78.3349 99.2054 81.9984 105.511 85.8054C111.817 89.6125 117.888 93.601 123.833 97.7222C129.779 101.843 135.57 106.042 141.118 110.434C146.666 114.826 152.078 119.336 157.299 123.963C162.52 128.589 167.522 133.36 172.318 138.258C167.276 133.573 162.124 128.933 156.755 124.446C151.387 119.959 145.923 115.512 140.247 111.235C134.572 106.957 128.79 102.746 122.779 98.706C116.769 94.6656 110.651 90.7332 104.344 86.9633C98.0366 83.1935 91.6298 79.4696 85.0409 75.9607C78.4519 72.4518 71.6827 69.1068 64.844 65.844C58.0053 62.5811 50.9779 59.5124 43.8294 56.593C36.681 53.6736 29.4298 50.8608 22.0812 48.1851Z" fill="white"/>
                        <g style={{mixBlendMode:"screen",opacit:"0.35"}}>
                        <path d="M165.771 122.45L165.212 122.451C161.781 119.288 159.77 115.168 159.72 110.735C159.64 104.268 158.663 96.7617 155.232 89.529L155.225 89.5086L155.266 89.4953C157.358 88.2021 160.256 88.7771 161.032 90.5826C167.841 106.424 165.672 122.464 165.771 122.45Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:"screen",opacity:"0.35"}}>
                        <path d="M139.921 64.1739C139.066 65.737 136.369 66.1639 135.225 64.9108C131.024 60.3197 125.474 56.158 118.145 52.9619C112.101 50.3187 105.849 48.2556 99.4676 46.7991C97.569 46.3702 97.4531 44.4473 99.2527 43.3008C99.5991 43.0838 99.9267 42.8728 100.268 42.6661C101.144 42.1063 102.201 41.9187 103.224 42.1416C113.898 45.1017 124.031 49.9833 133.154 56.5605C135.502 58.2536 137.697 60.1659 139.712 62.2726C139.952 62.5218 140.104 62.847 140.142 63.1934C140.18 63.5398 140.102 63.8861 139.921 64.1739V64.1739Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:"multiply",opacity:"0.25"}}>
                        <path d="M136.5 107.202C114.875 88.1558 68.7351 66.1043 56.1904 60.7296C41.1361 60.5848 110.525 49.9256 136.5 107.202Z" fill="#C3E9CD"/>
                        </g>
                        <g style={{mixBlendMode:"lighten",opacity:"0.35"}}>
                        <path d="M55.2131 105.255C71.9298 122.436 130.305 131.852 157.403 134.413C131.683 121.984 91.0697 118.245 84.6714 95.6877C83.6554 92.1059 122.151 109.95 138.677 117.8C99.8618 92.4976 22.1315 45.0135 21.7308 57.495C21.2299 73.0969 36.8149 92.2484 41.0306 95.0976C51.8467 90.9941 65.5563 90.0847 65.5563 90.0847C65.5563 90.0847 58.0977 101.928 55.2131 105.255Z" fill="#C8E9E6"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="177.482" y1="112.046" x2="183.012" y2="165.613" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F0E6"/>
                        <stop offset="0.14" stopColor="#D7F0E8"/>
                        <stop offset="0.51" stopColor="#E2F7F3"/>
                        <stop offset="0.81" stopColor="#EAF9F7"/>
                        <stop offset="1" stopColor="#DFF5F4"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="31.4725" y1="115.508" x2="149.721" y2="77.1017" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C1F5F3"/>
                        <stop offset="0.58" stopColor="#8ABEBB"/>
                        <stop offset="1" stopColor="#CEFAF6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div id="exploreLoveModal" className="exploreLoveModal" key={masterPrompt._id} >
                        <div className="exploreLoveModalContent answer">
                            <button className="playfair dismissExploreModal" id="dismissLoveExplore">Back</button>
                            <img src="/assets/img/LeafVariation1/Love1.svg"  className="exploreModalPromptLeaf" />
                            <h3 className="lato exploreModalTitle">I LOVE <img src="/assets/img/PromptLine.svg"/></h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="exploreColorModal" id="loveExploreColorModal">
                                <p className="lato shareText">Help spread the positivity by sharing this thought.</p>
                                <div className="socialMediaShareBtns">
                                    <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explorePage/&text=I love " + masterPrompt.answer + " %23RITGROW"} target="_blank">
                                        <i className="fa fa-twitter-square fa-lg" ></i>
                                    </a>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explorePage" target="_blank" >
                                        <i className="fa fa-facebook-square fa-lg"></i>
                                    </a>
                                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank" >
                                        <i className="fa fa-linkedin-square fa-lg"></i>
                                    </a>
                                </div>
                                <p className="lato submittedDate">Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                                <p className="lato report">
                                    Inappropriate submission?
                                    <button className='reportButton' onClick={reportAnswer}><strong>Let us know.</strong></button>
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <span className="answerId">{masterPrompt._id}</span>
                </div>
                );
        }
        if(masterPrompt.category === "happiest"){
            return (
                <div className='exploreHappiest' key={masterPrompt._id} >
                    <svg id="leaf5" className="leaf" viewBox="0 0 207 180" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={happyModalSibling}>
                        <path d="M154.081 113.884C154.385 113.876 176.947 148.081 197.509 155.94C218.425 163.983 194.01 164.233 191.189 161.034C188.175 157.573 171.301 152.126 154.081 113.884Z" fill="url(#paint0_linear)"/>
                        <path d="M160.287 80.0953C157.272 81.4162 154.372 82.9873 151.619 84.7922C151.594 84.8001 151.574 84.8067 151.58 84.7688C153.555 81.6486 155.643 78.6662 157.844 75.8219C157.507 75.2859 157.161 74.7486 156.804 74.2193C156.804 74.2193 156.798 74.1988 156.772 74.2299C151.809 76.7614 147.154 79.854 142.896 83.447C142.872 83.455 142.847 83.4629 142.85 83.4304C145.288 77.8106 148.131 72.3753 151.357 67.1676C151.357 67.1602 151.355 67.1529 151.35 67.1472C148.245 63.6228 144.764 60.4489 140.969 57.6822C127.231 47.7673 111.635 40.7246 95.1152 36.9751L95.0826 36.9857C86.7885 41.7371 79.8403 46.9942 74.4337 52.5674C74.4092 52.5754 74.3766 52.586 74.3809 52.5575C76.4745 46.4495 79.0058 40.5005 81.9548 34.7567C81.9548 34.7567 81.9548 34.7567 81.9469 34.7322C56.8377 31.8871 35.9719 40.2992 8.35958 41.2716C-2.67953 67.2796 18.9864 85.4523 41.6655 101.896C41.6699 101.897 41.6745 101.897 41.6788 101.896C41.6831 101.894 41.687 101.892 41.69 101.888C47.9949 99.1468 54.4375 96.7335 60.9919 94.6582C61.0205 94.649 61.0352 94.6803 61.0052 94.6991C55.953 97.9056 51.0276 101.391 46.2577 105.12C46.2577 105.12 46.2643 105.14 46.2683 105.153C54.1153 110.495 63.1483 115.629 72.9578 120.515C93.8279 130.612 117.672 134.116 136.662 136.246C155.626 138.208 169.727 138.754 170.462 138.614C170.467 138.617 170.473 138.617 170.478 138.616C170.483 138.614 170.488 138.61 170.491 138.605C170.193 137.799 174.46 107.776 160.302 80.0995C160.297 80.097 160.292 80.0956 160.287 80.0953Z" fill="#F1F8F7"/>
                        <path opacity="0.75" d="M169.687 138.59L169.672 138.627C165.809 138.619 151.337 137.904 133.042 135.833C114.726 133.601 92.606 130.016 73.1057 120.512C63.2949 115.622 54.2647 110.483 46.4218 105.139C46.4218 105.139 46.4138 105.114 46.4125 105.11C51.1783 101.383 56.1051 97.9011 61.1559 94.6905C61.1845 94.6812 61.1712 94.6404 61.1426 94.6497C54.5881 96.724 48.1447 99.1346 41.838 101.872C41.8343 101.875 41.8298 101.878 41.8248 101.88C41.8199 101.881 41.8146 101.882 41.8095 101.881C19.2884 85.5345 9.00576 66.1516 22.8801 50.3067C22.8864 50.3003 22.8941 50.2955 22.9026 50.2927C22.9112 50.29 22.9202 50.2893 22.9291 50.2908C81.4105 70.118 131.201 101.084 169.687 138.59Z" fill="url(#paint1_linear)"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M68.9943 41.4162C68.3071 42.9388 66.1381 44.1486 64.1579 44.0789C49.3289 43.6251 37.7835 46.5042 30.2491 49.3032C29.7613 48.6901 30.2345 49.2583 29.7263 48.6518C37.3596 41.6019 51.1714 37.8965 66.7203 38.5948C68.6501 38.6899 69.6594 39.9368 68.9943 41.4162Z" fill="#F4DCDC"/>
                        </g>
                        <path d="M22.0812 48.1851C29.7146 50.5392 37.1131 53.1713 44.4143 55.9266C51.7155 58.6818 58.8067 61.7069 65.7799 64.8482C72.7531 67.9895 79.5098 71.3523 86.1388 74.8436C92.7678 78.3349 99.2054 81.9984 105.511 85.8054C111.817 89.6125 117.888 93.601 123.833 97.7222C129.779 101.843 135.57 106.042 141.118 110.434C146.666 114.826 152.078 119.336 157.299 123.963C162.52 128.589 167.522 133.36 172.318 138.258C167.276 133.573 162.124 128.933 156.755 124.446C151.387 119.959 145.923 115.512 140.247 111.235C134.572 106.957 128.79 102.746 122.779 98.706C116.769 94.6656 110.651 90.7332 104.344 86.9633C98.0366 83.1935 91.6298 79.4696 85.0409 75.9607C78.4519 72.4518 71.6827 69.1068 64.844 65.844C58.0053 62.5811 50.9779 59.5124 43.8294 56.593C36.681 53.6736 29.4298 50.8608 22.0812 48.1851Z" fill="white"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M165.771 122.45L165.212 122.451C161.781 119.288 159.77 115.168 159.72 110.735C159.64 104.268 158.663 96.7617 155.232 89.529L155.225 89.5086L155.266 89.4953C157.358 88.2021 160.256 88.7771 161.032 90.5826C167.841 106.424 165.672 122.464 165.771 122.45Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M139.921 64.1739C139.066 65.737 136.369 66.1639 135.225 64.9108C131.024 60.3197 125.474 56.158 118.145 52.9619C112.101 50.3187 105.849 48.2556 99.4676 46.7991C97.569 46.3702 97.4531 44.4473 99.2527 43.3008C99.5991 43.0838 99.9267 42.8728 100.268 42.6661C101.144 42.1063 102.201 41.9187 103.224 42.1416C113.898 45.1017 124.031 49.9833 133.154 56.5605C135.502 58.2536 137.697 60.1659 139.712 62.2726C139.952 62.5218 140.104 62.847 140.142 63.1934C140.18 63.5398 140.102 63.8861 139.921 64.1739V64.1739Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M136.5 107.202C114.875 88.1558 68.7351 66.1043 56.1904 60.7296C41.1361 60.5848 110.525 49.9256 136.5 107.202Z" fill="#C3E9CD"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M55.2131 105.255C71.9298 122.436 130.305 131.852 157.403 134.413C131.683 121.984 91.0697 118.245 84.6714 95.6877C83.6554 92.1059 122.151 109.95 138.677 117.8C99.8618 92.4976 22.1315 45.0135 21.7308 57.495C21.2299 73.0969 36.8149 92.2484 41.0306 95.0976C51.8467 90.9941 65.5563 90.0847 65.5563 90.0847C65.5563 90.0847 58.0977 101.928 55.2131 105.255Z" fill="#C8E9E6"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="177.482" y1="112.046" x2="183.012" y2="165.613" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F0E6"/>
                        <stop offset="0.14" stopColor="#D7F0E8"/>
                        <stop offset="0.51" stopColor="#E2F7F3"/>
                        <stop offset="0.81" stopColor="#EAF9F7"/>
                        <stop offset="1" stopColor="#DFF5F4"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="31.4725" y1="115.508" x2="149.721" y2="77.1017" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C1F5F3"/>
                        <stop offset="0.58" stopColor="#8ABEBB"/>
                        <stop offset="1" stopColor="#CEFAF6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div id="exploreHappiestModal" className="exploreHappiestModal" key={masterPrompt._id} >
                        <div className="exploreHappiestModalContent answer">
                            <button className="playfair dismissExploreModal" id="dismissHappiestExplore">Back</button>
                            <img src="/assets/img/LeafVariation1/Happiest1.svg"  className="exploreModalPromptLeaf" />
                            <h3 className="lato exploreModalTitle">I'M HAPPIEST WHEN <img src="/assets/img/PromptLine.svg"/></h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="exploreColorModal" id="happiestExploreColorModal">
                                <p className="lato shareText">Help spread the positivity by sharing this thought.</p>
                                <div className="socialMediaShareBtns">
                                    <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explorePage/&text=I am happiest when " + masterPrompt.answer + " %23RITGROW"} target="_blank" >
                                        <i className="fa fa-twitter-square fa-lg" ></i>
                                    </a>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explorePage" target="_blank" >
                                        <i className="fa fa-facebook-square fa-lg"></i>
                                    </a>
                                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                        <i className="fa fa-linkedin-square fa-lg"></i>                                   
                                    </a>
                                </div>
                                <p className="lato submittedDate">Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                                <p className="lato report">
                                    Inappropriate submission?
                                    <button className='reportButton' onClick={reportAnswer}><strong>Let us know.</strong></button>
                                </p>                               
                            </div>
                        </div>
                    </div>
                    <span className="answerId">{masterPrompt._id}</span>
                </div>
            );
        }
        if(masterPrompt.category === "proud"){
            return (
                <div className='exploreProud' key={masterPrompt._id} >
                    <svg id="leaf6" className="leaf" viewBox="0 0 207 180" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={proudModalSibling}>
                        <path d="M154.081 113.884C154.385 113.876 176.947 148.081 197.509 155.94C218.425 163.983 194.01 164.233 191.189 161.034C188.175 157.573 171.301 152.126 154.081 113.884Z" fill="url(#paint0_linear)"/>
                        <path d="M160.287 80.0953C157.272 81.4162 154.372 82.9873 151.619 84.7922C151.594 84.8001 151.574 84.8067 151.58 84.7688C153.555 81.6486 155.643 78.6662 157.844 75.8219C157.507 75.2859 157.161 74.7486 156.804 74.2193C156.804 74.2193 156.798 74.1988 156.772 74.2299C151.809 76.7614 147.154 79.854 142.896 83.447C142.872 83.455 142.847 83.4629 142.85 83.4304C145.288 77.8106 148.131 72.3753 151.357 67.1676C151.357 67.1602 151.355 67.1529 151.35 67.1472C148.245 63.6228 144.764 60.4489 140.969 57.6822C127.231 47.7673 111.635 40.7246 95.1152 36.9751L95.0826 36.9857C86.7885 41.7371 79.8403 46.9942 74.4337 52.5674C74.4092 52.5754 74.3766 52.586 74.3809 52.5575C76.4745 46.4495 79.0058 40.5005 81.9548 34.7567C81.9548 34.7567 81.9548 34.7567 81.9469 34.7322C56.8377 31.8871 35.9719 40.2992 8.35958 41.2716C-2.67953 67.2796 18.9864 85.4523 41.6655 101.896C41.6699 101.897 41.6745 101.897 41.6788 101.896C41.6831 101.894 41.687 101.892 41.69 101.888C47.9949 99.1468 54.4375 96.7335 60.9919 94.6582C61.0205 94.649 61.0352 94.6803 61.0052 94.6991C55.953 97.9056 51.0276 101.391 46.2577 105.12C46.2577 105.12 46.2643 105.14 46.2683 105.153C54.1153 110.495 63.1483 115.629 72.9578 120.515C93.8279 130.612 117.672 134.116 136.662 136.246C155.626 138.208 169.727 138.754 170.462 138.614C170.467 138.617 170.473 138.617 170.478 138.616C170.483 138.614 170.488 138.61 170.491 138.605C170.193 137.799 174.46 107.776 160.302 80.0995C160.297 80.097 160.292 80.0956 160.287 80.0953Z" fill="#F1F8F7"/>
                        <path opacity="0.75" d="M169.687 138.59L169.672 138.627C165.809 138.619 151.337 137.904 133.042 135.833C114.726 133.601 92.606 130.016 73.1057 120.512C63.2949 115.622 54.2647 110.483 46.4218 105.139C46.4218 105.139 46.4138 105.114 46.4125 105.11C51.1783 101.383 56.1051 97.9011 61.1559 94.6905C61.1845 94.6812 61.1712 94.6404 61.1426 94.6497C54.5881 96.724 48.1447 99.1346 41.838 101.872C41.8343 101.875 41.8298 101.878 41.8248 101.88C41.8199 101.881 41.8146 101.882 41.8095 101.881C19.2884 85.5345 9.00576 66.1516 22.8801 50.3067C22.8864 50.3003 22.8941 50.2955 22.9026 50.2927C22.9112 50.29 22.9202 50.2893 22.9291 50.2908C81.4105 70.118 131.201 101.084 169.687 138.59Z" fill="url(#paint1_linear)"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M68.9943 41.4162C68.3071 42.9388 66.1381 44.1486 64.1579 44.0789C49.3289 43.6251 37.7835 46.5042 30.2491 49.3032C29.7613 48.6901 30.2345 49.2583 29.7263 48.6518C37.3596 41.6019 51.1714 37.8965 66.7203 38.5948C68.6501 38.6899 69.6594 39.9368 68.9943 41.4162Z" fill="#F4DCDC"/>
                        </g>
                        <path d="M22.0812 48.1851C29.7146 50.5392 37.1131 53.1713 44.4143 55.9266C51.7155 58.6818 58.8067 61.7069 65.7799 64.8482C72.7531 67.9895 79.5098 71.3523 86.1388 74.8436C92.7678 78.3349 99.2054 81.9984 105.511 85.8054C111.817 89.6125 117.888 93.601 123.833 97.7222C129.779 101.843 135.57 106.042 141.118 110.434C146.666 114.826 152.078 119.336 157.299 123.963C162.52 128.589 167.522 133.36 172.318 138.258C167.276 133.573 162.124 128.933 156.755 124.446C151.387 119.959 145.923 115.512 140.247 111.235C134.572 106.957 128.79 102.746 122.779 98.706C116.769 94.6656 110.651 90.7332 104.344 86.9633C98.0366 83.1935 91.6298 79.4696 85.0409 75.9607C78.4519 72.4518 71.6827 69.1068 64.844 65.844C58.0053 62.5811 50.9779 59.5124 43.8294 56.593C36.681 53.6736 29.4298 50.8608 22.0812 48.1851Z" fill="white"/>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M165.771 122.45L165.212 122.451C161.781 119.288 159.77 115.168 159.72 110.735C159.64 104.268 158.663 96.7617 155.232 89.529L155.225 89.5086L155.266 89.4953C157.358 88.2021 160.256 88.7771 161.032 90.5826C167.841 106.424 165.672 122.464 165.771 122.45Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M139.921 64.1739C139.066 65.737 136.369 66.1639 135.225 64.9108C131.024 60.3197 125.474 56.158 118.145 52.9619C112.101 50.3187 105.849 48.2556 99.4676 46.7991C97.569 46.3702 97.4531 44.4473 99.2527 43.3008C99.5991 43.0838 99.9267 42.8728 100.268 42.6661C101.144 42.1063 102.201 41.9187 103.224 42.1416C113.898 45.1017 124.031 49.9833 133.154 56.5605C135.502 58.2536 137.697 60.1659 139.712 62.2726C139.952 62.5218 140.104 62.847 140.142 63.1934C140.18 63.5398 140.102 63.8861 139.921 64.1739V64.1739Z" fill="#F4DCDC"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M136.5 107.202C114.875 88.1558 68.7351 66.1043 56.1904 60.7296C41.1361 60.5848 110.525 49.9256 136.5 107.202Z" fill="#C3E9CD"/>
                        </g>
                        <g style={{mixBlendMode:'screen', opacity:"0.35"}}>
                        <path d="M55.2131 105.255C71.9298 122.436 130.305 131.852 157.403 134.413C131.683 121.984 91.0697 118.245 84.6714 95.6877C83.6554 92.1059 122.151 109.95 138.677 117.8C99.8618 92.4976 22.1315 45.0135 21.7308 57.495C21.2299 73.0969 36.8149 92.2484 41.0306 95.0976C51.8467 90.9941 65.5563 90.0847 65.5563 90.0847C65.5563 90.0847 58.0977 101.928 55.2131 105.255Z" fill="#C8E9E6"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear" x1="177.482" y1="112.046" x2="183.012" y2="165.613" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F0E6"/>
                        <stop offset="0.14" stopColor="#D7F0E8"/>
                        <stop offset="0.51" stopColor="#E2F7F3"/>
                        <stop offset="0.81" stopColor="#EAF9F7"/>
                        <stop offset="1" stopColor="#DFF5F4"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="31.4725" y1="115.508" x2="149.721" y2="77.1017" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C1F5F3"/>
                        <stop offset="0.58" stopColor="#8ABEBB"/>
                        <stop offset="1" stopColor="#CEFAF6"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <div id="exploreProudModal" className="exploreProudModal" key={masterPrompt._id}>
                        <div className="exploreProudModalContent answer">
                            <button className="playfair dismissExploreModal" id="dismissProudExplore">Back</button>
                            <img src="/assets/img/LeafVariation1/Proud1.svg"  className="exploreModalPromptLeaf" />
                            <h3 className="lato exploreModalTitle">I'M PROUD OF <img src="/assets/img/PromptLine.svg"/></h3>
                            <h3 className='promptAnswer'> {masterPrompt.answer}</h3>
                            <div className="exploreColorModal" id="proudExploreColorModal">
                                <p className="lato shareText">Help spread the positivity by sharing this thought.</p>
                                <div className="socialMediaShareBtns">
                                    <a href={"https://twitter.com/share?url=https://grow-main.herokuapp.com/explorePage/&text=I am proud of " + masterPrompt.answer + " %23RITGROW"} target="_blank" >
                                        <i className="fa fa-twitter-square fa-lg" ></i>
                                    </a>
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explorePage" target="_blank" >
                                        <i className="fa fa-facebook-square fa-lg"></i>
                                    </a>
                                    <a href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts"} target="_blank">
                                        <i className="fa fa-facebook-square fa-lg"></i>
                                    </a>
                                </div>
                                <p className="lato submittedDate">Submitted: {calcDate(masterPrompt.createdData.slice(0,10))}</p>
                                <p className="lato report">
                                    Inappropriate submission?
                                    <button className='reportButton' onClick={reportAnswer}><strong>Let us know.</strong></button>
                                </p>                                
                            </div>
                        </div>
                    </div>
                    <span className="answerId">{masterPrompt._id}</span>
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

const thankfulModalSibling = (e) => {
    let exploreThankfulModal;
    let x = e.target;

    while(x.tagName !== 'svg') {
        x = x.parentElement;
    }
    exploreThankfulModal = x.nextSibling;
    const dismissThankfulExplore = document.querySelector('#dismissThankfulExplore');

    if(exploreThankfulModal) {
        exploreThankfulModal.style.display = "block";
    }

    if(dismissThankfulExplore) {
        dismissThankfulExplore.onclick = () => {
            exploreThankfulModal.style.display = "none";
        }
    }
    
    window.onclick = (event) => {
        if (event.target === exploreThankfulModal) {
            exploreThankfulModal.style.display = "none";
        }
    }
};

const excitedModalSibling = (e) => {
    let exploreExcitedModal;
    let x = e.target;

    while(x.tagName !== 'svg') {
        x = x.parentElement;
    }
    exploreExcitedModal = x.nextSibling;
    const dismissExcitedExplore = document.querySelector('#dismissExcitedExplore');

    if(exploreExcitedModal) {
        exploreExcitedModal.style.display = "block";
    }

    if(dismissExcitedExplore) {
        dismissExcitedExplore.onclick = () => {
            exploreExcitedModal.style.display = "none";
        }
    }
    
    window.onclick = (event) => {
        if (event.target === exploreExcitedModal) {
            exploreExcitedModal.style.display = "none";
        }
    }
};

const inspiredModalSibling = (e) => {
    let exploreInspiredModal;
    let x = e.target;

    while(x.tagName !== 'svg') {
        x = x.parentElement;
    }
    exploreInspiredModal = x.nextSibling;
    const dismissInspiredExplore = document.querySelector('#dismissInspiredExplore');

    if(exploreInspiredModal) {
        exploreInspiredModal.style.display = "block";
    }

    if(dismissInspiredExplore) {
        dismissInspiredExplore.onclick = () => {
            exploreInspiredModal.style.display = "none";
        }
    }
    
    window.onclick = (event) => {
        if (event.target === exploreInspiredModal) {
            exploreInspiredModal.style.display = "none";
        }
    }
};

const loveModalSibling = (e) => {
    let exploreLoveModal;
    let x = e.target;

    while(x.tagName !== 'svg') {
        x = x.parentElement;
    }
    exploreLoveModal = x.nextSibling;
    const dismissLoveExplore = document.querySelector('#dismissLoveExplore');

    if(exploreLoveModal) {
        exploreLoveModal.style.display = "block";
    }

    if(dismissLoveExplore) {
        dismissLoveExplore.onclick = () => {
            exploreLoveModal.style.display = "none";
        }
    }
    
    window.onclick = (event) => {
        if (event.target === exploreLoveModal) {
            exploreLoveModal.style.display = "none";
        }
    }
};

const happyModalSibling = (e) => {
    let exploreHappiestModal;
    let x = e.target;

    while(x.tagName !== 'svg') {
        x = x.parentElement;
    }
    exploreHappiestModal = x.nextSibling;
    const dismissHappiestExplore = document.querySelector('#dismissHappiestExplore');

    if(exploreHappiestModal) {
        exploreHappiestModal.style.display = "block";
    }

    if(dismissHappiestExplore) {
        dismissHappiestExplore.onclick = () => {
            exploreHappiestModal.style.display = "none";
        }
    }
    
    window.onclick = (event) => {
        if (event.target === exploreHappiestModal) {
            exploreHappiestModal.style.display = "none";
        }
    }
}

const proudModalSibling = (e) => {
    let exploreProudModal;
    let x = e.target;

    while(x.tagName !== 'svg') {
        x = x.parentElement;
    }
    exploreProudModal = x.nextSibling;
    const dismissProudExplore = document.querySelector('#dismissProudExplore');

    if(exploreProudModal) {
        exploreProudModal.style.display = "block";
    }

    if(dismissProudExplore) {
        dismissProudExplore.onclick = () => {
            exploreProudModal.style.display = "none";
        }
    }
    
    window.onclick = (event) => {
        if (event.target === exploreProudModal) {
                exploreProudModal.style.display = "none";
        }
    }
};

const moveLeaves =() => {
    console.log('we are leaves');
    gsap.registerPlugin(MotionPathPlugin);

    //leaf1-----------------------------------------
    gsap.set(".leaf", {
        fill: "#D9EFED",
        x:"-100vw",
    })

    var tl1 = gsap.timeline({
        paused: false,
        repeat: -1
    });
    tl1.to("#leaf1", {
        stagger: "random(3,10)",
        duration: "random(7,15)",
        rotation: "random(-180, 180)",
        ease: "slow(0.3, 0.4, false)",
        motionPath: {
            path: "#path1",
            align: "#path1",
            alignOrigin: [0.5, 0.5],
        }
    }, "+=0");

    $("#leaf1").each(function (index, element) {
        var tl = new TimelineLite({
            paused: true
        });
        tl.to(element, 0.8, {
                stroke: "#4FD4FE"
            })
        .set(element, {
                zIndex:1,
            })
            .to(element, {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)",
                width: "12vw"
            }, "-=.8")
        element.animation = tl;
    })

    $("#leaf1").mouseenter(function () {
        this.animation.play();
        tl1.pause();
    })

    $("#leaf1").mouseleave(function () {
        this.animation.reverse();
        tl1.play();
    })

    //leaf2-----------------------------------------
    var tl2 = gsap.timeline({
        paused: false,
        repeat: -1
    });
    tl2.to("#leaf2", {
        stagger: "random(3,10)",
        duration: "random(7,15)",
        rotation: "random(-180, 180)",
        ease: "slow(0.3, 0.4, false)",
        motionPath: {
            path: "#path2",
            align: "#path2",
            alignOrigin: [0.5, 0.5],
        }
    }, "+=.2");


    $("#leaf2").each(function (index, element) {
        var tl = new TimelineLite({
            paused: true
        });
        tl.to(element, 0.8, {
                stroke: "#55D897"
            })
        .set(element, {
                zIndex:1,
            })
            .to(element, {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)",
                width: "12vw"
            }, "-=.8")
        element.animation = tl;
    })

    $("#leaf2").mouseenter(function () {
        this.animation.play();
        tl2.pause();
    })

    $("#leaf2").mouseleave(function () {
        this.animation.reverse();
        tl2.play();
    })

    //leaf3-----------------------------------------
    var tl3 = gsap.timeline({
        paused: false,
        repeat: -1
    });
    tl3.to("#leaf3", {
        stagger: "random(3,10)",
        duration: "random(7,15)",
        rotation: "random(-180, 180)",
        ease: "slow(0.3, 0.4, false)",
        motionPath: {
            path: "#path3",
            align: "#path3",
            alignOrigin: [0.5, 0.5],
        }
    }, "+=6");


    $("#leaf3").each(function (index, element) {
        var tl = new TimelineLite({
            paused: true
        });
        tl.to(element, 0.8, {
                stroke: "#FEA050"
            })
        .set(element, {
                zIndex:1,
            })
            .to(element, {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)",
                width: "12vw"
            }, "-=.8")
        element.animation = tl;
    })

    $("#leaf3").mouseenter(function () {
        this.animation.play();
        tl3.pause();
    })

    $("#leaf3").mouseleave(function () {
        this.animation.reverse();
        tl3.play();
    })

    //leaf4-----------------------------------------
    var tl4 = gsap.timeline({
        paused: false,
        repeat: -1
    });
    tl4.to("#leaf4", {
        stagger: "random(3,10)",
        duration: "random(7,15)",
        rotation: "random(-180, 180)",
        ease: "slow(0.3, 0.4, false)",
        motionPath: {
            path: "#path4",
            align: "#path4",
            alignOrigin: [0.5, 0.5],
        }
    }, "+=1");


    $("#leaf4").each(function (index, element) {
        var tl = new TimelineLite({
            paused: true
        });
        tl.to(element, 0.8, {
                stroke: "#FC528F"
            })
        .set(element, {
                zIndex:1,
            })
            .to(element, {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)",
                width: "12vw"
            }, "-=.8")
        element.animation = tl;
    })

    $("#leaf4").mouseenter(function () {
        this.animation.play();
        tl4.pause();
    })

    $("#leaf4").mouseleave(function () {
        this.animation.reverse();
        tl4.play();
    })


    //leaf5-----------------------------------------
    var tl5 = gsap.timeline({
        paused: false,
        repeat: -1
    });
    tl5.to("#leaf5", {
        stagger: "random(3,10)",
        duration: "random(7,15)",
        rotation: "random(-180, 180)",
        ease: "slow(0.3, 0.4, false)",
        motionPath: {
            path: "#path2",
            align: "#path2",
            alignOrigin: [0.5, 0.5],
        }
    }, "+=0");

    $("#leaf5").each(function (index, element) {
        var tl = new TimelineLite({
            paused: true
        });
        tl.to(element, 0.8, {
                stroke: "#FFE175"
            })
        .set(element, {
                zIndex:1,
            })
            .to(element, {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)",
                width: "12vw"
            }, "-=.8")
        element.animation = tl;
    })

    $("#leaf5").mouseenter(function () {
        this.animation.play();
        tl5.pause();
    })

    $("#leaf5").mouseleave(function () {
        this.animation.reverse();
        tl5.play();
    })

    //leaf6-----------------------------------------
    var tl6 = gsap.timeline({
        paused: false,
        repeat: -1
    });
    tl6.to("#leaf6", {
        stagger: "random(3,10)",
        duration: "random(7,15)",
        rotation: "random(-180, 180)",
        ease: "slow(0.3, 0.4, false)",
        motionPath: {
            path: "#path6",
            align: "#path6",
            alignOrigin: [0.5, 0.5],
        }
    }, "+=4");


    $("#leaf6").each(function (index, element) {
        var tl = new TimelineLite({
            paused: true
        });
        tl.to(element, 0.8, {
                stroke: "#ED6E5F"
            })
        .set(element, {
                zIndex:1,
            })
            .to(element, {
                duration: 2.5,
                ease: "elastic.out(1, 0.5)",
                width: "12vw"
            }, "-=.8")
        element.animation = tl;
    })

    $("#leaf6").mouseenter(function () {
        this.animation.play();
        tl6.pause();
    })

    $("#leaf6").mouseleave(function () {
        this.animation.reverse();
        tl6.play();
    })
};

const reportAnswer = (e) => {
    console.log('entered report');
    console.log(e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.answerId'));

    const id = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.answerId').innerText;
    
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

$( document ).ajaxComplete(function() {
    moveLeaves();
  });