"use strict";
'use strict';

var handleExcitedDrop = function handleExcitedDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#excitedText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#excitedForm').attr('action'), $('#excitedForm').serialize(), function () {});

    return false;
};

var ExcitedTitle = function ExcitedTitle(props) {
    return React.createElement(
        'h2',
        { id: 'excitedTitle' },
        'I am excited for...'
    );
};

var ExcitedForm = function ExcitedForm(props) {
    return React.createElement(
        'form',
        { id: 'excitedForm',
            onSubmit: handleExcitedDrop,
            name: 'excitedForm',
            action: '/thankYou',
            method: 'POST',
            className: 'excitedForm' },
        React.createElement(
            'label',
            { htmlFor: 'text' },
            'Text: '
        ),
        React.createElement('input', { id: 'excitedText', type: 'text', name: 'text', placeholder: '...' }),
        React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
    );
};

var createExcitedView = function createExcitedView() {
    ReactDOM.render(React.createElement(ExcitedTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ExcitedForm, null), document.querySelector('#logThought'));
};

var handleExcitedType = function handleExcitedType() {
    var excitedType = document.querySelector('#excitedType');

    excitedType.addEventListener('click', function (e) {
        e.preventDefault();
        createExcitedView();
    });
};
'use strict';

var handleHappiestDrop = function handleHappiestDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#happiestText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#happiestForm').attr('action'), $('#happiestForm').serialize(), function () {});

    return false;
};

var HappiestTitle = function HappiestTitle(props) {
    return React.createElement(
        'h2',
        { id: 'happiestTitle' },
        'I feel happiest when...'
    );
};

var HappiestForm = function HappiestForm(props) {
    return React.createElement(
        'form',
        { id: 'happiestForm',
            onSubmit: handleHappiestDrop,
            name: 'happiestForm',
            action: '/thankYou',
            method: 'POST',
            className: 'happiestForm' },
        React.createElement(
            'label',
            { htmlFor: 'text' },
            'Text: '
        ),
        React.createElement('input', { id: 'happiestText', type: 'text', name: 'text', placeholder: '...' }),
        React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
    );
};

var createHappiestView = function createHappiestView() {
    ReactDOM.render(React.createElement(HappiestTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(HappiestForm, null), document.querySelector('#logThought'));
};

var handleHappiestType = function handleHappiestType() {
    var happiestType = document.querySelector('#happiestType');

    happiestType.addEventListener('click', function (e) {
        e.preventDefault();
        createHappiestView();
    });
};
'use strict';

var handleInspiredDrop = function handleInspiredDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#inspiredText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#inspiredForm').attr('action'), $('#inspiredForm').serialize(), function () {});

    return false;
};

var InspiredTitle = function InspiredTitle(props) {
    return React.createElement(
        'h2',
        { id: 'inspiredTitle' },
        'I am inspired by...'
    );
};

var InspiredForm = function InspiredForm(props) {
    return React.createElement(
        'form',
        { id: 'inspiredForm',
            onSubmit: handleInspiredDrop,
            name: 'inspiredForm',
            action: '/thankYou',
            method: 'POST',
            className: 'inspiredForm' },
        React.createElement(
            'label',
            { htmlFor: 'text' },
            'Text: '
        ),
        React.createElement('input', { id: 'inspiredText', type: 'text', name: 'text', placeholder: '...' }),
        React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
    );
};

var createInspiredView = function createInspiredView() {
    ReactDOM.render(React.createElement(InspiredTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(InspiredForm, null), document.querySelector('#logThought'));
};

var handleInspiredType = function handleInspiredType() {
    var inspiredType = document.querySelector('#inspiredType');

    inspiredType.addEventListener('click', function (e) {
        e.preventDefault();
        createInspiredView();
    });
};
'use strict';

var handleLoveDrop = function handleLoveDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#loveText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#loveForm').attr('action'), $('#loveForm').serialize(), function () {});

    return false;
};

var LoveTitle = function LoveTitle(props) {
    return React.createElement(
        'h2',
        { id: 'loveTitle' },
        'I love...'
    );
};

var LoveForm = function LoveForm(props) {
    return React.createElement(
        'form',
        { id: 'loveForm',
            onSubmit: handleLoveDrop,
            name: 'loveForm',
            action: '/thankYou',
            method: 'POST',
            className: 'loveForm' },
        React.createElement(
            'label',
            { htmlFor: 'text' },
            'Text: '
        ),
        React.createElement('input', { id: 'loveText', type: 'text', name: 'text', placeholder: '...' }),
        React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
    );
};

var createLoveView = function createLoveView() {
    ReactDOM.render(React.createElement(LoveTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(LoveForm, null), document.querySelector('#logThought'));
};

var handleLoveType = function handleLoveType() {
    var loveType = document.querySelector('#loveType');

    loveType.addEventListener('click', function (e) {
        e.preventDefault();
        createLoveView();
    });
};
"use strict";

var PromptTitle = function PromptTitle(props) {
    return React.createElement(
        "h2",
        { id: "promptPageTitle" },
        "Choose a Prompt"
    );
};

var LoveModal = function LoveModal() {
    return React.createElement(
        "div",
        { id: "loveModal" },
        React.createElement(
            "button",
            { id: "loveType" },
            "TYPE"
        ),
        React.createElement(
            "h2",
            null,
            "OR"
        ),
        React.createElement(
            "button",
            null,
            "DRAW"
        )
    );
};
var ThankfulModal = function ThankfulModal() {
    return React.createElement(
        "div",
        { id: "thankfulModal" },
        React.createElement(
            "button",
            { id: "thankfulType" },
            "TYPE"
        ),
        React.createElement(
            "h2",
            null,
            "OR"
        ),
        React.createElement(
            "button",
            null,
            "DRAW"
        )
    );
};
var InspiredModal = function InspiredModal() {
    return React.createElement(
        "div",
        { id: "inspiredModal" },
        React.createElement(
            "button",
            { id: "inspiredType" },
            "TYPE"
        ),
        React.createElement(
            "h2",
            null,
            "OR"
        ),
        React.createElement(
            "button",
            null,
            "DRAW"
        )
    );
};
var ExcitedModal = function ExcitedModal() {
    return React.createElement(
        "div",
        { id: "excitedModal" },
        React.createElement(
            "button",
            { id: "excitedType" },
            "TYPE"
        ),
        React.createElement(
            "h2",
            null,
            "OR"
        ),
        React.createElement(
            "button",
            null,
            "DRAW"
        )
    );
};
var HappiestModal = function HappiestModal() {
    return React.createElement(
        "div",
        { id: "happiestModal" },
        React.createElement(
            "button",
            { id: "happiestType" },
            "TYPE"
        ),
        React.createElement(
            "h2",
            null,
            "OR"
        ),
        React.createElement(
            "button",
            null,
            "DRAW"
        )
    );
};
var ProudModal = function ProudModal() {
    return React.createElement(
        "div",
        { id: "proudModal" },
        React.createElement(
            "button",
            { id: "proudType" },
            "TYPE"
        ),
        React.createElement(
            "h2",
            null,
            "OR"
        ),
        React.createElement(
            "button",
            null,
            "DRAW"
        )
    );
};

var PromptButtons = function PromptButtons() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { id: "thankfulPrompt" },
            "I am thankful for..."
        ),
        React.createElement(
            "button",
            { id: "inspiredPrompt" },
            "I am inspired by.."
        ),
        React.createElement(
            "button",
            { id: "lovePrompt" },
            "I love..."
        ),
        React.createElement(
            "button",
            { id: "excitedPrompt" },
            "I am excited for..."
        ),
        React.createElement(
            "button",
            { id: "happiestPrompt" },
            "I feel happiest when..."
        ),
        React.createElement(
            "button",
            { id: "proudPrompt" },
            "I am proud of..."
        ),
        React.createElement(ThankfulModal, null),
        React.createElement(InspiredModal, null),
        React.createElement(LoveModal, null),
        React.createElement(ExcitedModal, null),
        React.createElement(HappiestModal, null),
        React.createElement(ProudModal, null)
    );
};

var setup = function setup() {
    ReactDOM.render(React.createElement(PromptTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(PromptButtons, null), document.querySelector('#logThought'));

    handleThankfulType();
    handleLoveType();
    handleInspiredType();
    handleHappiestType();
    handleExcitedType();
    handleProudType();
};

// instantiate above
$(document).ready(function () {
    setup();
});
'use strict';

var handleProudDrop = function handleProudDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#proudText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#proudForm').attr('action'), $('#proudForm').serialize(), function () {});

    return false;
};

var ProudTitle = function ProudTitle(props) {
    return React.createElement(
        'h2',
        { id: 'proudTitle' },
        'Im proud of...'
    );
};

var ProudForm = function ProudForm(props) {
    return React.createElement(
        'form',
        { id: 'proudForm',
            onSubmit: handleProudDrop,
            name: 'proudForm',
            action: '/thankYou',
            method: 'POST',
            className: 'proudForm' },
        React.createElement(
            'label',
            { htmlFor: 'text' },
            'Text: '
        ),
        React.createElement('input', { id: 'proudText', type: 'text', name: 'text', placeholder: '...' }),
        React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
    );
};

var createProudView = function createProudView() {
    ReactDOM.render(React.createElement(ProudTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ProudForm, null), document.querySelector('#logThought'));
};

var handleProudType = function handleProudType() {
    var proudType = document.querySelector('#proudType');

    proudType.addEventListener('click', function (e) {
        e.preventDefault();
        createProudView();
    });
};
'use strict';

var handleThankfulDrop = function handleThankfulDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#thankfulText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#thankfulForm').attr('action'), $('#thankfulForm').serialize(), function () {});

    return false;
};

var ThankfulTitle = function ThankfulTitle(props) {
    return React.createElement(
        'h2',
        { id: 'thankfulTitle' },
        'I am thankful for...'
    );
};

var ThankfulForm = function ThankfulForm(props) {
    return React.createElement(
        'form',
        { id: 'thankfulForm',
            onSubmit: handleThankfulDrop,
            name: 'thankfulForm',
            action: '/thankYou',
            method: 'POST',
            className: 'thankfulForm' },
        React.createElement(
            'label',
            { htmlFor: 'text' },
            'Text: '
        ),
        React.createElement('input', { id: 'thankfulText', type: 'text', name: 'text', placeholder: '...' }),
        React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
    );
};

var createThankfulView = function createThankfulView() {
    ReactDOM.render(React.createElement(ThankfulTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ThankfulForm, null), document.querySelector('#logThought'));
};

var handleThankfulType = function handleThankfulType() {
    var thankfulType = document.querySelector('#thankfulType');

    thankfulType.addEventListener('click', function (e) {
        e.preventDefault();
        createThankfulView();
    });
};
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
