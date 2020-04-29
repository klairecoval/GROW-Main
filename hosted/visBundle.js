"use strict";

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
        if (masterPrompt.category === "excited" || masterPrompt.viewable === "true") {
            return React.createElement(
                "div",
                { key: masterPrompt._id, className: "answer" },
                React.createElement("img", { src: "/assets/img/redSquare.png", alt: "red square" }),
                React.createElement(
                    "h3",
                    { className: "promptAnswer" },
                    " ",
                    masterPrompt.answer
                ),
                React.createElement(
                    "h3",
                    { className: "promptType" },
                    " ",
                    masterPrompt.category
                ),
                React.createElement(
                    "button",
                    { className: "reportButton", onClick: reportAnswer },
                    "Report"
                ),
                React.createElement(
                    "span",
                    { className: "answerId" },
                    masterPrompt._id
                )
            );
        } else if (masterPrompt.category === "thankful") {
            return React.createElement(
                "div",
                { key: masterPrompt._id, className: "answer" },
                React.createElement("img", { src: "/assets/img/blueSquare.jpg", alt: "blue square" }),
                React.createElement(
                    "h3",
                    { className: "promptAnswer" },
                    " ",
                    masterPrompt.answer
                ),
                React.createElement(
                    "h3",
                    { className: "promptType" },
                    " ",
                    masterPrompt.category
                )
            );
        } else if (masterPrompt.category === "inspired") {
            return React.createElement(
                "div",
                { key: masterPrompt._id, className: "answer" },
                React.createElement("img", { src: "/assets/img/redSquare.png", alt: "red square" }),
                React.createElement(
                    "h3",
                    { className: "promptAnswer" },
                    " ",
                    masterPrompt.answer
                ),
                React.createElement(
                    "h3",
                    { className: "promptType" },
                    " ",
                    masterPrompt.category
                )
            );
        } else if (masterPrompt.category === "love") {
            return React.createElement(
                "div",
                { key: masterPrompt._id, className: "answer" },
                React.createElement("img", { src: "/assets/img/blueSquare.jpg", alt: "blue square" }),
                React.createElement(
                    "h3",
                    { className: "promptAnswer" },
                    " ",
                    masterPrompt.answer
                ),
                React.createElement(
                    "h3",
                    { className: "promptType" },
                    " ",
                    masterPrompt.category
                )
            );
        } else if (masterPrompt.category === "happiest") {
            return React.createElement(
                "div",
                { key: masterPrompt._id, className: "answer" },
                React.createElement("img", { src: "/assets/img/redSquare.png", alt: "red square" }),
                React.createElement(
                    "h3",
                    { className: "promptAnswer" },
                    " ",
                    masterPrompt.answer
                ),
                React.createElement(
                    "h3",
                    { className: "promptType" },
                    " ",
                    masterPrompt.category
                )
            );
        } else if (masterPrompt.category === "proud") {
            return React.createElement(
                "div",
                { key: masterPrompt._id, className: "answer" },
                React.createElement("img", { src: "/assets/img/blueSquare.jpg", alt: "blue square" }),
                React.createElement(
                    "h3",
                    { className: "promptAnswer" },
                    " ",
                    masterPrompt.answer
                ),
                React.createElement(
                    "h3",
                    { className: "promptType" },
                    " ",
                    masterPrompt.category
                )
            );
        }
    });

    return React.createElement(
        "div",
        { className: "answerList" },
        answerNodes
    );
};

var reportAnswer = function reportAnswer(e) {
    var id = e.target.parentElement.querySelector('.answerId').innerText;
    var _csrf = document.querySelector('input[name="_csrf]').value;

    sendAjax('DELETE', '/reportMaster', { id: id, _csrf: _csrf }, function (data) {
        loadAnswers();
    });
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

var handleReportBtn = function handleReportBtn(e) {
    e.preventDefault();

    sendAjax('POST', '/reportMaster', null, function (data) {
        createMasterMessage("reportSuccess", data.message);
    });
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
