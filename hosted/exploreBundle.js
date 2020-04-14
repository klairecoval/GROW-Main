'use strict';

var ExploreAnswers = function ExploreAnswers(props) {
    var exploreAnswerNodes = props.answers.map(function (masterPrompt) {
        if (masterPrompt.category === "excited") {
            return React.createElement(
                'div',
                { className: 'exploreExcited', key: masterPrompt._id },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'h3',
                    null,
                    'I am excited for'
                ),
                React.createElement(
                    'h3',
                    { className: 'promptAnswer' },
                    ' ',
                    masterPrompt.answer
                )
            );
        } else if (masterPrompt.category === "thankful") {
            return React.createElement(
                'div',
                { className: 'exploreThankful', key: masterPrompt._id, onClick: ExploreThankfulModal },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'div',
                    { id: 'exploreThankfulModal', className: 'exploreThankfulModal', key: masterPrompt._id },
                    React.createElement(
                        'div',
                        { className: 'exploreThankfulModalContent', key: masterPrompt._id },
                        React.createElement(
                            'h3',
                            null,
                            'I am thankful for'
                        ),
                        React.createElement(
                            'h3',
                            { className: 'promptAnswer' },
                            masterPrompt.answer
                        )
                    )
                ),
                React.createElement(
                    'span',
                    { className: 'thankfulID' },
                    masterPrompt._id
                )
            );
        } else if (masterPrompt.category === "inspired") {
            return React.createElement(
                'div',
                { className: 'exploreInspired', key: masterPrompt._id },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'h3',
                    null,
                    'I am inspired by'
                ),
                React.createElement(
                    'h3',
                    { className: 'promptAnswer' },
                    ' ',
                    masterPrompt.answer
                )
            );
        } else if (masterPrompt.category === "love") {
            return React.createElement(
                'div',
                { className: 'exploreLove', key: masterPrompt._id },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'h3',
                    null,
                    'I love'
                ),
                React.createElement(
                    'h3',
                    { className: 'promptAnswer' },
                    ' ',
                    masterPrompt.answer
                )
            );
        }
        if (masterPrompt.category === "happiest") {
            return React.createElement(
                'div',
                { className: 'exploreHappiest', key: masterPrompt._id },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'h3',
                    null,
                    'I am happiest when'
                ),
                React.createElement(
                    'h3',
                    { className: 'promptAnswer' },
                    ' ',
                    masterPrompt.answer
                )
            );
        }
        if (masterPrompt.category === "proud") {
            return React.createElement(
                'div',
                { className: 'exploreProud', key: masterPrompt._id },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'h3',
                    null,
                    'I am proud of'
                ),
                React.createElement(
                    'h3',
                    { className: 'promptAnswer' },
                    ' ',
                    masterPrompt.answer
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
    // const thankfulLeaf = e.target.parentElement.querySelector("#exploreThankfulLeaf");

    exploreThankfulModal.style.display = "block";
    console.log("thankful modal called and triggered");

    window.onclick = function (event) {
        if (event.target === exploreThankfulModal) {
            exploreThankfulModal.style.display = "none";
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
