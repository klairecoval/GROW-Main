'use strict';

var PromptAnswers = function PromptAnswers(props) {

    var answerNodes = props.answers.map(function (masterPrompt) {
        return React.createElement(
            'div',
            { className: 'answerList' },
            React.createElement(
                'h3',
                { className: 'promptAnswer' },
                ' ',
                masterPrompt.answer
            ),
            React.createElement(
                'h3',
                { className: 'promptType' },
                ' ',
                masterPrompt.category
            )
        );
    });

    return React.createElement(
        'div',
        { className: 'answerList' },
        answerNodes
    );
};

var loadAnswers = function loadAnswers() {
    sendAjax('GET', '/getMaster', null, function (data) {
        ReactDOM.render(React.createElement(PromptAnswers, { answers: data.answers }), document.querySelector('#answers'));
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
