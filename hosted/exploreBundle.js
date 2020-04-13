'use strict';

var ExploreAnswers = function ExploreAnswers(props) {
    var exploreAnswerNodes = props.answers.map(function (masterPrompt) {
        if (masterPrompt.category === "excited") {
            return React.createElement(
                'div',
                { className: 'exploreThought' },
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
                { className: 'exploreThought' },
                React.createElement('img', { src: '/assets/img/leafFILLER.png' }),
                React.createElement(
                    'h3',
                    null,
                    'I am thankful for'
                ),
                React.createElement(
                    'h3',
                    { className: 'promptAnswer' },
                    ' ',
                    masterPrompt.answer
                )
            );
        } else if (masterPrompt.category === "inspired") {
            return React.createElement(
                'div',
                { className: 'exploreThought' },
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
                { className: 'exploreThought' },
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
                { className: 'exploreThought' },
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
                { className: 'exploreThought' },
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
