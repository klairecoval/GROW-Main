'use strict';

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

    exploreThankfulModal.style.display = "block";

    window.onclick = function (event) {
        if (event.target === exploreThankfulModal) {
            exploreThankfulModal.style.display = "none";
        }
    };
};

var ExploreExcitedModal = function ExploreExcitedModal(e) {
    var exploreExcitedModal = e.target.parentElement.querySelector("#exploreExcitedModal");

    exploreExcitedModal.style.display = "block";

    window.onclick = function (event) {
        if (event.target === exploreExcitedModal) {
            exploreExcitedModal.style.display = "none";
        }
    };
};

var ExploreInspiredModal = function ExploreInspiredModal(e) {
    var exploreInspiredModal = e.target.parentElement.querySelector("#exploreInspiredModal");

    exploreInspiredModal.style.display = "block";

    window.onclick = function (event) {
        if (event.target === exploreInspiredModal) {
            exploreInspiredModal.style.display = "none";
        }
    };
};

var ExploreLoveModal = function ExploreLoveModal(e) {
    var exploreLoveModal = e.target.parentElement.querySelector("#exploreLoveModal");

    exploreLoveModal.style.display = "block";

    window.onclick = function (event) {
        if (event.target === exploreInspiredModal) {
            exploreLoveModal.style.display = "none";
        }
    };
};

var ExploreHappiestModal = function ExploreHappiestModal(e) {
    var exploreHappiestModal = e.target.parentElement.querySelector("#exploreHappiestModal");

    exploreHappiestModal.style.display = "block";

    window.onclick = function (event) {
        if (event.target === exploreHappiestModal) {
            exploreHappiestModal.style.display = "none";
        }
    };
};

var ExploreProudModal = function ExploreProudModal(e) {
    var exploreProudModal = e.target.parentElement.querySelector("#exploreProudModal");

    exploreProudModal.style.display = "block";

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
