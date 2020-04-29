'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var calcDate = function calcDate(date) {
    var d = new Date(date);
    var dtf = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' });

    var _dtf$formatToParts = dtf.formatToParts(d),
        _dtf$formatToParts2 = _slicedToArray(_dtf$formatToParts, 5),
        mo = _dtf$formatToParts2[0].value,
        da = _dtf$formatToParts2[2].value,
        ye = _dtf$formatToParts2[4].value;

    return mo + ' ' + da + ', ' + ye;
};

var ExploreAnswers = function ExploreAnswers(props) {
    var exploreAnswerNodes = props.answers.map(function (masterPrompt) {
        if (masterPrompt.category === "excited") {
            return React.createElement(
                'div',
                { className: 'exploreExcited', key: masterPrompt._id, onClick: ExploreExcitedModal },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'div',
                    { id: 'exploreExcitedModal', className: 'exploreExcitedModal' },
                    React.createElement(
                        'div',
                        { className: 'exploreExcitedModalContent' },
                        React.createElement(
                            'button',
                            { className: 'playfair dismissExploreModal', id: 'dismissExcitedExplore' },
                            'Back'
                        ),
                        React.createElement('img', { src: '/assets/img/LeafVariation1/Excited1.svg', className: 'exploreModalPromptLeaf' }),
                        React.createElement(
                            'h3',
                            { className: 'lato' },
                            'I\'M EXCITED FOR'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'promptAnswer' },
                            ' ',
                            masterPrompt.answer
                        ),
                        React.createElement(
                            'div',
                            { className: 'exploreColorModal', id: 'excitedExploreColorModal' },
                            React.createElement(
                                'div',
                                { className: 'socialMediaShareBtns' },
                                React.createElement(
                                    'p',
                                    { className: 'lato' },
                                    'Help spread the positivity by sharing this thought.'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am excited for " + masterPrompt.answer, target: '_blank' },
                                    'Twitter'
                                ),
                                React.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore', target: '_blank' },
                                    'Facebook'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts", target: '_blank' },
                                    'LinkedIn'
                                )
                            ),
                            React.createElement(
                                'p',
                                { className: 'lato' },
                                'Submitted: ',
                                calcDate(masterPrompt.createdData.slice(0, 10))
                            )
                        )
                    )
                )
            );
        } else if (masterPrompt.category === "thankful") {
            return React.createElement(
                'div',
                { className: 'exploreThankful', key: masterPrompt._id, onClick: ExploreThankfulModal },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'div',
                    { id: 'exploreThankfulModal', className: 'exploreThankfulModal' },
                    React.createElement(
                        'div',
                        { className: 'exploreThankfulModalContent' },
                        React.createElement(
                            'button',
                            { className: 'playfair dismissExploreModal', id: 'dismissThankfulExplore' },
                            'Back'
                        ),
                        React.createElement('img', { src: '/assets/img/LeafVariation1/Thankful1.svg', className: 'exploreModalPromptLeaf' }),
                        React.createElement(
                            'h3',
                            { className: 'lato' },
                            'I\'M THANKFUL FOR'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'promptAnswer' },
                            masterPrompt.answer
                        ),
                        React.createElement(
                            'div',
                            { className: 'exploreColorModal', id: 'thankfulExploreColorModal' },
                            React.createElement(
                                'div',
                                { className: 'socialMediaShareBtns' },
                                React.createElement(
                                    'p',
                                    { className: 'lato' },
                                    'Help spread the positivity by sharing this thought.'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am thankful for " + masterPrompt.answer, target: '_blank' },
                                    'Twitter'
                                ),
                                React.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore', target: '_blank' },
                                    'Facebook'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts", target: '_blank' },
                                    'LinkedIn'
                                )
                            ),
                            React.createElement(
                                'p',
                                { className: 'lato' },
                                'Submitted: ',
                                calcDate(masterPrompt.createdData.slice(0, 10))
                            )
                        )
                    )
                )
            );
        } else if (masterPrompt.category === "inspired") {
            return React.createElement(
                'div',
                { className: 'exploreInspired', key: masterPrompt._id, onClick: ExploreInspiredModal },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'div',
                    { id: 'exploreInspiredModal', className: 'exploreInspiredModal' },
                    React.createElement(
                        'div',
                        { className: 'exploreInspiredModalContent' },
                        React.createElement(
                            'button',
                            { className: 'playfair dismissExploreModal', id: 'dismissInspiredExplore' },
                            'Back'
                        ),
                        React.createElement('img', { src: '/assets/img/LeafVariation1/Inspired1.svg', className: 'exploreModalPromptLeaf' }),
                        React.createElement(
                            'h3',
                            { className: 'lato' },
                            'I\'M INSPIRED BY'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'promptAnswer' },
                            ' ',
                            masterPrompt.answer
                        ),
                        React.createElement(
                            'div',
                            { className: 'exploreColorModal', id: 'inspiredExploreColorModal' },
                            React.createElement(
                                'div',
                                { className: 'socialMediaShareBtns' },
                                React.createElement(
                                    'p',
                                    { className: 'lato' },
                                    'Help spread the positivity by sharing this thought.'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am inspired by " + masterPrompt.answer, target: '_blank' },
                                    'Twitter'
                                ),
                                React.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore', target: '_blank' },
                                    'Facebook'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts", target: '_blank' },
                                    'LinkedIn'
                                )
                            ),
                            React.createElement(
                                'p',
                                { className: 'lato' },
                                'Submitted: ',
                                calcDate(masterPrompt.createdData.slice(0, 10))
                            )
                        )
                    )
                )
            );
        } else if (masterPrompt.category === "love") {
            return React.createElement(
                'div',
                { className: 'exploreLove', key: masterPrompt._id, onClick: ExploreLoveModal },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'div',
                    { id: 'exploreLoveModal', className: 'exploreLoveModal' },
                    React.createElement(
                        'div',
                        { className: 'exploreLoveModalContent' },
                        React.createElement(
                            'button',
                            { className: 'playfair dismissExploreModal', id: 'dismissLoveExplore' },
                            'Back'
                        ),
                        React.createElement('img', { src: '/assets/img/LeafVariation1/Love1.svg', className: 'exploreModalPromptLeaf' }),
                        React.createElement(
                            'h3',
                            { className: 'lato' },
                            'I LOVE'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'promptAnswer' },
                            ' ',
                            masterPrompt.answer
                        ),
                        React.createElement(
                            'div',
                            { className: 'exploreColorModal', id: 'loveExploreColorModal' },
                            React.createElement(
                                'div',
                                { className: 'socialMediaShareBtns' },
                                React.createElement(
                                    'p',
                                    { className: 'lato' },
                                    'Help spread the positivity by sharing this thought.'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I love " + masterPrompt.answer, target: '_blank' },
                                    'Twitter'
                                ),
                                React.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore', target: '_blank' },
                                    'Facebook'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts", target: '_blank' },
                                    'LinkedIn'
                                )
                            ),
                            React.createElement(
                                'p',
                                { className: 'lato' },
                                'Submitted: ',
                                calcDate(masterPrompt.createdData.slice(0, 10))
                            )
                        )
                    )
                )
            );
        }
        if (masterPrompt.category === "happiest") {
            return React.createElement(
                'div',
                { className: 'exploreHappiest', key: masterPrompt._id, onClick: ExploreHappiestModal },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'div',
                    { id: 'exploreHappiestModal', className: 'exploreHappiestModal' },
                    React.createElement(
                        'div',
                        { className: 'exploreHappiestModalContent' },
                        React.createElement(
                            'button',
                            { className: 'playfair dismissExploreModal', id: 'dismissHappiestExplore' },
                            'Back'
                        ),
                        React.createElement('img', { src: '/assets/img/LeafVariation1/Happiest1.svg', className: 'exploreModalPromptLeaf' }),
                        React.createElement(
                            'h3',
                            { className: 'lato' },
                            'I\'M HAPPIEST WHEN'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'promptAnswer' },
                            ' ',
                            masterPrompt.answer
                        ),
                        React.createElement(
                            'div',
                            { className: 'exploreColorModal', id: 'happiestExploreColorModal' },
                            React.createElement(
                                'div',
                                { className: 'socialMediaShareBtns' },
                                React.createElement(
                                    'p',
                                    { className: 'lato' },
                                    'Help spread the positivity by sharing this thought.'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am happiest when " + masterPrompt.answer, target: '_blank' },
                                    'Twitter'
                                ),
                                React.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore', target: '_blank' },
                                    'Facebook'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts", target: '_blank' },
                                    'LinkedIn'
                                )
                            ),
                            React.createElement(
                                'p',
                                { className: 'lato' },
                                'Submitted: ',
                                calcDate(masterPrompt.createdData.slice(0, 10))
                            )
                        )
                    )
                )
            );
        }
        if (masterPrompt.category === "proud") {
            return React.createElement(
                'div',
                { className: 'exploreProud', key: masterPrompt._id, onClick: ExploreProudModal },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'div',
                    { id: 'exploreProudModal', className: 'exploreProudModal' },
                    React.createElement(
                        'div',
                        { className: 'exploreProudModalContent' },
                        React.createElement(
                            'button',
                            { className: 'playfair dismissExploreModal', id: 'dismissProudExplore' },
                            'Back'
                        ),
                        React.createElement('img', { src: '/assets/img/LeafVariation1/Proud1.svg', className: 'exploreModalPromptLeaf' }),
                        React.createElement(
                            'h3',
                            { className: 'lato' },
                            'I\'M PROUD OF'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'promptAnswer' },
                            ' ',
                            masterPrompt.answer
                        ),
                        React.createElement(
                            'div',
                            { className: 'exploreColorModal', id: 'proudExploreColorModal' },
                            React.createElement(
                                'div',
                                { className: 'socialMediaShareBtns' },
                                React.createElement(
                                    'p',
                                    { className: 'lato' },
                                    'Help spread the positivity by sharing this thought.'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://twitter.com/share?url=https://grow-main.herokuapp.com/explore/&text=I am proud of " + masterPrompt.answer, target: '_blank' },
                                    'Twitter'
                                ),
                                React.createElement(
                                    'a',
                                    { href: 'https://www.facebook.com/sharer/sharer.php?u=https://grow-main.herokuapp.com/explore', target: '_blank' },
                                    'Facebook'
                                ),
                                React.createElement(
                                    'a',
                                    { href: "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.grow-main.herokuapp.com%2F&title=GROW&summary=Grow%2C+Positive%2C+Thoughts&source=GROW-Thoughts", target: '_blank' },
                                    'LinkedIn'
                                )
                            ),
                            React.createElement(
                                'p',
                                { className: 'lato' },
                                'Submitted: ',
                                calcDate(masterPrompt.createdData.slice(0, 10))
                            )
                        )
                    )
                )
            );
        }
    });
    return React.createElement(
        'div',
        { className: 'exploreList' },
        exploreAnswerNodes
    );
};

var ExploreThankfulModal = function ExploreThankfulModal(e) {
    var exploreThankfulModal = e.target.parentElement.querySelector("#exploreThankfulModal");
    var dismissThankfulExplore = e.target.parentElement.querySelector('#dismissThankfulExplore');

    if (exploreThankfulModal) {
        exploreThankfulModal.style.display = "block";
    }

    dismissThankfulExplore.onclick = function () {
        exploreThankfulModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === exploreThankfulModal) {
            exploreThankfulModal.style.display = "none";
        }
    };
};

var ExploreExcitedModal = function ExploreExcitedModal(e) {
    var exploreExcitedModal = e.target.parentElement.querySelector("#exploreExcitedModal");
    var dismissExcitedExplore = e.target.parentElement.querySelector('#dismissExcitedExplore');

    if (exploreExcitedModal) {
        exploreExcitedModal.style.display = "block";
    }

    dismissExcitedExplore.onclick = function () {
        exploreExcitedModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === exploreExcitedModal) {
            exploreExcitedModal.style.display = "none";
        }
    };
};

var ExploreInspiredModal = function ExploreInspiredModal(e) {
    var exploreInspiredModal = e.target.parentElement.querySelector("#exploreInspiredModal");
    var dismissInspiredExplore = e.target.parentElement.querySelector('#dismissInspiredExplore');

    if (exploreInspiredModal) {
        exploreInspiredModal.style.display = "block";
    }

    dismissInspiredExplore.onclick = function () {
        exploreInspiredModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === exploreInspiredModal) {
            exploreInspiredModal.style.display = "none";
        }
    };
};

var ExploreLoveModal = function ExploreLoveModal(e) {
    var exploreLoveModal = e.target.parentElement.querySelector("#exploreLoveModal");
    var dismissLoveExplore = e.target.parentElement.querySelector('#dismissLoveExplore');

    if (exploreLoveModal) {
        exploreLoveModal.style.display = "block";
    }

    dismissLoveExplore.onclick = function () {
        exploreLoveModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === exploreInspiredModal) {
            exploreLoveModal.style.display = "none";
        }
    };
};

var ExploreHappiestModal = function ExploreHappiestModal(e) {
    var exploreHappiestModal = e.target.parentElement.querySelector("#exploreHappiestModal");
    var dismissHappiestExplore = e.target.parentElement.querySelector('#dismissHappiestExplore');

    if (exploreHappiestModal) {
        exploreHappiestModal.style.display = "block";
    }

    dismissHappiestExplore.onclick = function () {
        exploreHappiestModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === exploreHappiestModal) {
            exploreHappiestModal.style.display = "none";
        }
    };
};

var ExploreProudModal = function ExploreProudModal(e) {
    var exploreProudModal = e.target.parentElement.querySelector("#exploreProudModal");
    var dismissProudExplore = e.target.parentElement.querySelector('#dismissProudExplore');

    if (exploreProudModal) {
        exploreProudModal.style.display = "block";
    }

    dismissProudExplore.onclick = function () {
        exploreProudModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === exploreProudModal) {
            exploreProudModal.style.display = "none";
        }
    };
};

var loadExploreAnswers = function loadExploreAnswers() {
    sendAjax('GET', '/getMaster', null, function (data) {
        ReactDOM.render(React.createElement(ExploreAnswers, { answers: data.docs }), document.querySelector('#exploreThoughts'));
    });
};

var setupExplorePage = function setupExplorePage() {
    ReactDOM.render(React.createElement(ExploreAnswers, { answers: [] }), document.querySelector('#exploreThoughts'));
    loadExploreAnswers();
};

$(document).ready(function () {
    if (document.querySelector('#exploreThoughts')) {
        setupExplorePage();
    }
});
'use strict';

// helper function to create an error message with desired error text
var handleError = function handleError(message) {};

// redirect page and hide error
var redirect = function redirect(response) {
    window.location = response.redirect;
};

// send ajax data and handle error
var sendAjax = function sendAjax(type, action, data, success) {
    $.ajax({
        cache: false,
        type: type,
        url: action,
        data: data,
        dataType: 'json',
        success: success,
        error: function error(xhr, status, _error) {
            var messageObj = JSON.parse(xhr.responseText);
            handleError(messageObj.error);
        }
    });
};
