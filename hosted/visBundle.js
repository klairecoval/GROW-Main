'use strict';

var PromptAnswers = function PromptAnswers(props) {
    var answerNodes = props.answers.map(function (masterPrompt) {
        if (masterPrompt.category === "excited") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/Excited2.svg', alt: 'excited leaf' })
            );
        } else if (masterPrompt.category === "thankful") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/Thankful3.svg', alt: 'thankful leaf' })
            );
        } else if (masterPrompt.category === "inspired") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/Inspired1.svg', alt: 'inspired leaf' })
            );
        } else if (masterPrompt.category === "love") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/Love2.svg', alt: 'love leaf' })
            );
        } else if (masterPrompt.category === "happiest") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/Happiest3.svg', alt: 'happiest leaf' })
            );
        } else if (masterPrompt.category === "proud") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/Proud1.svg', alt: 'proud leaf' })
            );
        }
    });

    return React.createElement(
        'div',
        { className: 'answerList' },
        answerNodes
    );
};

var loadAnswers = function loadAnswers() {
    sendAjax('GET', '/getMaster', null, function (data) {
        ReactDOM.render(React.createElement(PromptAnswers, { answers: data.docs }), document.querySelector('#answers'));
    });
};

var setupDataVis = function setupDataVis() {
    ReactDOM.render(React.createElement(PromptAnswers, { answers: [] }), document.querySelector('#answers'));
    console.log("set has been read through");
    loadAnswers();
};

$(document).ready(function () {
    if (document.querySelector('#answers')) {
        setupDataVis();
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
