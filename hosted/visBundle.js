'use strict';

var PromptAnswers = function PromptAnswers(props) {

    //    if(props.answers.length === 0){
    //        return(
    //            <div className='answerList'>
    //                <h3 className='emptyAnswer'>Nothing has been filled in yet</h3>
    //            </div>
    //        );
    //    }
    //    
    var answerNodes = props.answers.map(function (masterPrompt) {
        if (masterPrompt.category === "excited") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/redSquare.png', alt: 'red square' }),
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
                    masterPrompt.viewable
                ),
                React.createElement(
                    'h3',
                    { className: 'promptType' },
                    ' ',
                    masterPrompt.category
                )
            );
        }
        if (masterPrompt.category === "thankful") {
            return React.createElement(
                'div',
                { className: 'answer' },
                React.createElement('img', { src: '/assets/img/blueSquare.png', alt: 'blue square' }),
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
                    masterPrompt.viewable
                ),
                React.createElement(
                    'h3',
                    { className: 'promptType' },
                    ' ',
                    masterPrompt.category
                )
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
