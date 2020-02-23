"use strict";
'use strict';

var handleExcitedDrop = function handleExcitedDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#excitedText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#excitedForm').attr('action'), $('#excitedForm').serialize(), redirect);

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
        'div',
        null,
        React.createElement(
            'form',
            { id: 'excitedForm',
                onSubmit: handleExcitedDrop,
                name: 'excitedForm',
                action: '/excitedThankYou',
                method: 'POST',
                className: 'excitedForm' },
            React.createElement('input', { id: 'excitedText', type: 'text', name: 'answer', placeholder: '...' }),
            React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
        ),
        React.createElement(
            'button',
            { id: 'excitedBackBtn' },
            'Go back'
        ),
        React.createElement(BackModal, null)
    );
};

var ExcitedList = function ExcitedList(props) {
    if (props.excitedResponses.length === 0) {
        return React.createElement(
            'h3',
            null,
            'No Excited Thoughts'
        );
    }

    var excitedNodes = props.excitedResponses.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    }).map(function (excitedThought) {
        return React.createElement(
            'div',
            { key: excitedThought._id },
            React.createElement(
                'h3',
                null,
                ' ',
                excitedThought.answer,
                ' '
            ),
            React.createElement(
                'span',
                null,
                excitedThought._id
            )
        );
    });

    return React.createElement(
        'div',
        null,
        excitedNodes,
        React.createElement(
            'p',
            null,
            props.excitedResponses.length,
            ' thoughts'
        )
    );
};

var loadExcitedFromServer = function loadExcitedFromServer() {
    sendAjax('GET', '/getExcited', null, function (data) {
        ReactDOM.render(React.createElement(ExcitedList, { excitedResponses: data.excitedResponses }), document.querySelector('#error'));
    });
};

var createExcitedView = function createExcitedView() {
    ReactDOM.render(React.createElement(ExcitedTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ExcitedForm, null), document.querySelector('#logThought'));
};

var handleExcitedClick = function handleExcitedClick(excitedID) {
    var excitedType = document.querySelector('#excitedWrite');

    excitedType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(excitedID);
        createExcitedView();
        triggerBackModal();
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

    sendAjax('POST', $('#happiestForm').attr('action'), $('#happiestForm').serialize(), redirect);

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
        'div',
        null,
        React.createElement(
            'form',
            { id: 'happiestForm',
                onSubmit: handleHappiestDrop,
                name: 'happiestForm',
                action: '/happiestThankYou',
                method: 'POST',
                className: 'happiestForm' },
            React.createElement('input', { id: 'happiestText', type: 'text', name: 'answer', placeholder: '...' }),
            React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
        ),
        React.createElement(
            'button',
            { id: 'happiestBackBtn' },
            'Go back'
        ),
        React.createElement(BackModal, null)
    );
};

var HappiestList = function HappiestList(props) {
    if (props.happiestResponses.length === 0) {
        return React.createElement(
            'h3',
            null,
            'No Happy Thoughts'
        );
    }

    var happiestNodes = props.happiestResponses.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    }).map(function (happiestThought) {
        return React.createElement(
            'div',
            { key: happiestThought._id },
            React.createElement(
                'h3',
                null,
                ' ',
                happiestThought.answer,
                ' '
            ),
            React.createElement(
                'span',
                null,
                happiestThought._id
            )
        );
    });

    return React.createElement(
        'div',
        null,
        happiestNodes,
        React.createElement(
            'p',
            null,
            props.happiestResponses.length,
            ' thoughts'
        )
    );
};

var loadHappiestFromServer = function loadHappiestFromServer() {
    sendAjax('GET', '/getHappiest', null, function (data) {
        ReactDOM.render(React.createElement(HappiestList, { happiestResponses: data.happiestResponses }), document.querySelector('#error'));
    });
};

var createHappiestView = function createHappiestView() {
    ReactDOM.render(React.createElement(HappiestTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(HappiestForm, null), document.querySelector('#logThought'));
};

var handleHappiestClick = function handleHappiestClick(happiestID) {
    var happiestType = document.querySelector('#happiestWrite');

    happiestType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(happiestID);
        createHappiestView();
        triggerBackModal();
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

    sendAjax('POST', $('#inspiredForm').attr('action'), $('#inspiredForm').serialize(), redirect);

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
        'div',
        null,
        React.createElement(
            'form',
            { id: 'inspiredForm',
                onSubmit: handleInspiredDrop,
                name: 'inspiredForm',
                action: '/inspiredThankYou',
                method: 'POST',
                className: 'inspiredForm' },
            React.createElement('input', { id: 'inspiredText', type: 'text', name: 'answer', placeholder: '...' }),
            React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
        ),
        React.createElement(
            'button',
            { id: 'inspiredBackBtn' },
            'Go back'
        ),
        React.createElement(BackModal, null)
    );
};

var InspiredList = function InspiredList(props) {
    if (props.inspiredResponses.length === 0) {
        return React.createElement(
            'h3',
            null,
            'No Inspired Thoughts'
        );
    }

    var inspiredNodes = props.inspiredResponses.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    }).map(function (inspiredThought) {
        return React.createElement(
            'div',
            { key: inspiredThought._id },
            React.createElement(
                'h3',
                null,
                ' ',
                inspiredThought.answer,
                ' '
            ),
            React.createElement(
                'span',
                null,
                inspiredThought._id
            )
        );
    });

    return React.createElement(
        'div',
        null,
        inspiredNodes,
        React.createElement(
            'p',
            null,
            props.inspiredResponses.length,
            ' thoughts'
        )
    );
};

var loadInspiredFromServer = function loadInspiredFromServer() {
    sendAjax('GET', '/getInspired', null, function (data) {
        ReactDOM.render(React.createElement(InspiredList, { inspiredResponses: data.inspiredResponses }), document.querySelector('#error'));
    });
};

var createInspiredView = function createInspiredView() {
    ReactDOM.render(React.createElement(InspiredTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(InspiredForm, null), document.querySelector('#logThought'));
};

var handleInspiredClick = function handleInspiredClick(inspiredID) {
    var inspiredType = document.querySelector('#inspiredWrite');

    inspiredType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(inspiredID);
        createInspiredView();
        triggerBackModal();
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

    sendAjax('POST', $('#loveForm').attr('action'), $('#loveForm').serialize(), redirect);

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
        'div',
        null,
        React.createElement(
            'form',
            { id: 'loveForm',
                onSubmit: handleLoveDrop,
                name: 'loveForm',
                action: '/loveThankYou',
                method: 'POST',
                className: 'loveForm' },
            React.createElement('input', { id: 'loveText', type: 'text', name: 'answer', placeholder: '...' }),
            React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
        ),
        React.createElement(
            'button',
            { id: 'loveBackBtn' },
            'Go back'
        ),
        React.createElement(BackModal, null)
    );
};

var LoveList = function LoveList(props) {
    if (props.loveResponses.length === 0) {
        return React.createElement(
            'h3',
            null,
            'No Happy Thoughts'
        );
    }

    var loveNodes = props.loveResponses.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    }).map(function (loveThought) {
        return React.createElement(
            'div',
            { key: loveThought._id },
            React.createElement(
                'h3',
                null,
                ' ',
                loveThought.answer,
                ' '
            ),
            React.createElement(
                'span',
                null,
                loveThought._id
            )
        );
    });

    return React.createElement(
        'div',
        null,
        loveNodes,
        React.createElement(
            'p',
            null,
            props.loveResponses.length,
            ' thoughts'
        )
    );
};

var loadLoveFromServer = function loadLoveFromServer() {
    sendAjax('GET', '/getLove', null, function (data) {
        ReactDOM.render(React.createElement(LoveList, { loveResponses: data.loveResponses }), document.querySelector('#error'));
    });
};

var createLoveView = function createLoveView() {
    ReactDOM.render(React.createElement(LoveTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(LoveForm, null), document.querySelector('#logThought'));
};

var handleLoveClick = function handleLoveClick(loveID) {
    var loveType = document.querySelector('#loveWrite');

    loveType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(loveID);
        createLoveView();
        triggerBackModal();
    });
};
"use strict";

var id = void 0;

var PromptTitle = function PromptTitle(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "a",
            { href: "/logout", target: "_parent", id: "startBtn" },
            React.createElement(
                "button",
                null,
                "Back"
            )
        ),
        React.createElement(
            "h1",
            { id: "promptPageTitle" },
            "Select a prompt:"
        ),
        React.createElement(
            "p",
            null,
            "Which one of these speaks to you? Choose one ",
            React.createElement("br", null),
            "that you want to write about."
        )
    );
};

var LoveModal = function LoveModal() {
    return React.createElement(
        "div",
        { className: "loveModal", id: "loveModal" },
        React.createElement(
            "div",
            { className: "loveModalContent" },
            React.createElement(
                "h1",
                null,
                "I love..."
            ),
            React.createElement(
                "button",
                { id: "loveWrite" },
                "Write response"
            ),
            React.createElement(
                "button",
                { id: "dismissLove" },
                "Select different prompt"
            )
        )
    );
};
var ThankfulModal = function ThankfulModal() {
    return React.createElement(
        "div",
        { className: "thankfulModal", id: "thankfulModal" },
        React.createElement(
            "div",
            { className: "thankfulModalContent" },
            React.createElement(
                "h1",
                null,
                "I'm thankful for..."
            ),
            React.createElement(
                "button",
                { id: "thankfulWrite" },
                "Write response"
            ),
            React.createElement(
                "button",
                { id: "dismissThankful" },
                "Select different prompt"
            )
        )
    );
};
var InspiredModal = function InspiredModal() {
    return React.createElement(
        "div",
        { className: "inspiredModal", id: "inspiredModal" },
        React.createElement(
            "div",
            { className: "inspiredModalContent" },
            React.createElement(
                "h1",
                null,
                "I'm inspired by..."
            ),
            React.createElement(
                "button",
                { id: "inspiredWrite" },
                "Write response"
            ),
            React.createElement(
                "button",
                { id: "dismissInspired" },
                "Select different prompt"
            )
        )
    );
};
var ExcitedModal = function ExcitedModal() {
    return React.createElement(
        "div",
        { className: "excitedModal", id: "excitedModal" },
        React.createElement(
            "div",
            { className: "excitedModalContent" },
            React.createElement(
                "h1",
                null,
                "I'm excited for..."
            ),
            React.createElement(
                "button",
                { id: "excitedWrite" },
                "Write response"
            ),
            React.createElement(
                "button",
                { id: "dismissExcited" },
                "Select different prompt"
            )
        )
    );
};
var HappiestModal = function HappiestModal() {
    return React.createElement(
        "div",
        { className: "happiestModal", id: "happiestModal" },
        React.createElement(
            "div",
            { className: "happiestModalContent" },
            React.createElement(
                "h1",
                null,
                "I'm happiest when..."
            ),
            React.createElement(
                "button",
                { id: "happiestWrite" },
                "Write response"
            ),
            React.createElement(
                "button",
                { id: "dismissHappiest" },
                "Select different prompt"
            )
        )
    );
};
var ProudModal = function ProudModal() {
    return React.createElement(
        "div",
        { className: "proudModal", id: "proudModal" },
        React.createElement(
            "div",
            { className: "proudModalContent" },
            React.createElement(
                "h1",
                null,
                "I'm proud of..."
            ),
            React.createElement(
                "button",
                { id: "proudWrite" },
                "Write response"
            ),
            React.createElement(
                "button",
                { id: "dismissProud" },
                "Select different prompt"
            )
        )
    );
};

var triggerPromptModals = function triggerPromptModals() {
    var loveModal = document.getElementById("loveModal");
    var happiestModal = document.getElementById("happiestModal");
    var proudModal = document.getElementById("proudModal");
    var excitedModal = document.getElementById("excitedModal");
    var thankfulModal = document.getElementById("thankfulModal");
    var inspiredModal = document.getElementById("inspiredModal");

    var excitedPromptBtn = document.getElementById("excitedPrompt");
    var happiestPromptBtn = document.getElementById("happiestPrompt");
    var inspiredPromptBtn = document.getElementById("inspiredPrompt");
    var proudPromptBtn = document.getElementById("proudPrompt");
    var lovePromptBtn = document.getElementById("lovePrompt");
    var thankfulPromptBtn = document.getElementById("thankfulPrompt");

    var dismissLove = document.getElementById("dismissLove");
    var dismissThankful = document.getElementById("dismissThankful");
    var dismissInspired = document.getElementById("dismissInspired");
    var dismissExcited = document.getElementById("dismissExcited");
    var dismissProud = document.getElementById("dismissProud");
    var dismissHappiest = document.getElementById("dismissHappiest");

    excitedPromptBtn.onclick = function () {
        excitedModal.style.display = "block";
    };
    happiestPromptBtn.onclick = function () {
        happiestModal.style.display = "block";
    };
    inspiredPromptBtn.onclick = function () {
        inspiredModal.style.display = "block";
    };
    proudPromptBtn.onclick = function () {
        proudModal.style.display = "block";
    };
    lovePromptBtn.onclick = function () {
        loveModal.style.display = "block";
    };
    thankfulPromptBtn.onclick = function () {
        thankfulModal.style.display = "block";
    };

    dismissLove.onclick = function () {
        loveModal.style.display = "none";
    };
    dismissExcited.onclick = function () {
        excitedModal.style.display = "none";
    };
    dismissHappiest.onclick = function () {
        happiestModal.style.display = "none";
    };
    dismissInspired.onclick = function () {
        inspiredModal.style.display = "none";
    };
    dismissProud.onclick = function () {
        proudModal.style.display = "none";
    };
    dismissThankful.onclick = function () {
        thankfulModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === loveModal) {
            loveModal.style.display = "none";
        } else if (event.target === excitedModal) {
            excitedModal.style.display = "none";
        } else if (event.target === happiestModal) {
            happiestModal.style.display = "none";
        } else if (event.target === inspiredModal) {
            inspiredModal.style.display = "none";
        } else if (event.target === proudModal) {
            proudModal.style.display = "none";
        } else if (event.target === thankfulModal) {
            thankfulModal.style.display = "none";
        }
    };
};

var BackModal = function BackModal() {
    return React.createElement(
        "div",
        { id: "backModal", className: "backModal" },
        React.createElement(
            "div",
            { className: "backModalContent" },
            React.createElement(
                "h1",
                null,
                "Are you sure you ",
                React.createElement("br", null),
                "want to go back?"
            ),
            React.createElement(
                "p",
                null,
                "Going back now will lose your progress."
            ),
            React.createElement(
                "button",
                { id: "stayBtn" },
                "Stay"
            ),
            React.createElement(
                "a",
                { href: "/promptPage", target: "_parent", id: "continueBtn" },
                React.createElement(
                    "button",
                    null,
                    "Continue"
                )
            )
        )
    );
};

var triggerBackModal = function triggerBackModal() {
    var backModal = document.getElementById("backModal");

    var excitedBtn = document.getElementById("excitedBackBtn");
    var happiestBtn = document.getElementById("happiestBackBtn");
    var inspiredBtn = document.getElementById("inspiredBackBtn");
    var proudBtn = document.getElementById("proudBackBtn");
    var loveBtn = document.getElementById("loveBackBtn");
    var thankfulBtn = document.getElementById("thankfulBackBtn");

    var stay = document.getElementById("stayBtn");

    if (excitedBtn) {
        excitedBtn.onclick = function () {
            backModal.style.display = "block";
        };
    }
    if (happiestBtn) {
        happiestBtn.onclick = function () {
            backModal.style.display = "block";
        };
    }
    if (inspiredBtn) {
        inspiredBtn.onclick = function () {
            backModal.style.display = "block";
        };
    } else if (proudBtn) {
        proudBtn.onclick = function () {
            backModal.style.display = "block";
        };
    } else if (loveBtn) {
        loveBtn.onclick = function () {
            backModal.style.display = "block";
        };
    } else if (thankfulBtn) {
        thankfulBtn.onclick = function () {
            backModal.style.display = "block";
        };
    }

    stay.onclick = function () {
        backModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === backModal) {
            backModal.style.display = "none";
        }
    };
};

var PromptButtons = function PromptButtons() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { id: "inspiredPrompt" },
            "I'm inspired by..."
        ),
        React.createElement(
            "button",
            { id: "excitedPrompt" },
            "I'm excited for..."
        ),
        React.createElement(
            "button",
            { id: "happiestPrompt" },
            "I'm happiest when..."
        ),
        React.createElement(
            "button",
            { id: "proudPrompt" },
            "I'm proud of..."
        ),
        React.createElement(
            "button",
            { id: "lovePrompt" },
            "I love..."
        ),
        React.createElement(
            "button",
            { id: "thankfulPrompt" },
            "I'm thankful for..."
        ),
        React.createElement(ThankfulModal, null),
        React.createElement(InspiredModal, null),
        React.createElement(LoveModal, null),
        React.createElement(ExcitedModal, null),
        React.createElement(HappiestModal, null),
        React.createElement(ProudModal, null)
    );
};

var idTimeout = function idTimeout() {
    id = setTimeout(function () {
        location.replace("/logout");
    }, 90000);
};

var setup = function setup() {
    ReactDOM.render(React.createElement(PromptTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(PromptButtons, null), document.querySelector('#logThought'));

    triggerPromptModals();
    idTimeout();

    // load thoughts for testing
    // loadExcitedFromServer();
    // loadHappiestFromServer();
    // loadInspiredFromServer();
    // loadLoveFromServer();
    // loadProudFromServer();
    // loadThankfulFromServer();

    // handle button prompt clicks
    if (document.getElementById('inspiredPrompt') && document.getElementById('excitedPrompt') && document.getElementById('happiestPrompt') && document.getElementById('lovePrompt') && document.getElementById('proudPrompt') && document.getElementById('thankfulPrompt')) {
        handleExcitedClick(id);
        handleHappiestClick(id);
        handleInspiredClick(id);
        handleLoveClick(id);
        handleProudClick(id);
        handleThankfulClick(id);
    }
};

// instantiate above
$(document).ready(function () {
    if (document.querySelector('#promptTitle') && document.querySelector('#logThought')) {
        setup();
    }
});
'use strict';

var handleProudDrop = function handleProudDrop(e) {
    e.preventDefault();

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#proudText').val() == '') {
        handleError('Input required');
        return false;
    }

    sendAjax('POST', $('#proudForm').attr('action'), $('#proudForm').serialize(), redirect);

    return false;
};

var ProudTitle = function ProudTitle(props) {
    return React.createElement(
        'h2',
        { id: 'proudTitle' },
        'I am proud of...'
    );
};

var ProudForm = function ProudForm(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { id: 'proudForm',
                onSubmit: handleProudDrop,
                name: 'proudForm',
                action: '/proudThankYou',
                method: 'POST',
                className: 'proudForm' },
            React.createElement('input', { id: 'proudText', type: 'text', name: 'answer', placeholder: '...' }),
            React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
        ),
        React.createElement(
            'button',
            { id: 'proudBackBtn' },
            'Go back'
        ),
        React.createElement(BackModal, null)
    );
};

var ProudList = function ProudList(props) {
    if (props.proudResponses.length === 0) {
        return React.createElement(
            'h3',
            null,
            'No Happy Thoughts'
        );
    }

    var proudNodes = props.proudResponses.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    }).map(function (proudThought) {
        return React.createElement(
            'div',
            { key: proudThought._id },
            React.createElement(
                'h3',
                null,
                ' ',
                proudThought.answer,
                ' '
            ),
            React.createElement(
                'span',
                null,
                proudThought._id
            )
        );
    });

    return React.createElement(
        'div',
        null,
        proudNodes,
        React.createElement(
            'p',
            null,
            props.proudResponses.length,
            ' thoughts'
        )
    );
};

var loadProudFromServer = function loadProudFromServer() {
    sendAjax('GET', '/getProud', null, function (data) {
        ReactDOM.render(React.createElement(ProudList, { proudResponses: data.proudResponses }), document.querySelector('#error'));
    });
};

var createProudView = function createProudView() {
    ReactDOM.render(React.createElement(ProudTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ProudForm, null), document.querySelector('#logThought'));
};

var handleProudClick = function handleProudClick(proudID) {
    var proudType = document.querySelector('#proudWrite');

    proudType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(proudID);
        createProudView();
        triggerBackModal();
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

    sendAjax('POST', $('#thankfulForm').attr('action'), $('#thankfulForm').serialize(), redirect);

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
        'div',
        null,
        React.createElement(
            'form',
            { id: 'thankfulForm',
                onSubmit: handleThankfulDrop,
                name: 'thankfulForm',
                action: '/thankfulThankYou',
                method: 'POST',
                className: 'thankfulForm' },
            React.createElement('input', { id: 'thankfulText', type: 'text', name: 'answer', placeholder: '...' }),
            React.createElement('input', { className: 'logThoughtSubmit', type: 'submit', value: 'Log' })
        ),
        React.createElement(
            'button',
            { id: 'thankfulBackBtn' },
            'Go back'
        ),
        React.createElement(BackModal, null)
    );
};

var ThankfulList = function ThankfulList(props) {
    if (props.thankfulResponses.length === 0) {
        return React.createElement(
            'h3',
            null,
            'No Happy Thoughts'
        );
    }

    var thankfulNodes = props.thankfulResponses.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    }).map(function (thankfulThought) {
        return React.createElement(
            'div',
            { key: thankfulThought._id },
            React.createElement(
                'h3',
                null,
                ' ',
                thankfulThought.answer,
                ' '
            ),
            React.createElement(
                'span',
                null,
                thankfulThought._id
            )
        );
    });

    return React.createElement(
        'div',
        null,
        thankfulNodes,
        React.createElement(
            'p',
            null,
            props.thankfulResponses.length,
            ' thoughts'
        )
    );
};

var loadThankfulFromServer = function loadThankfulFromServer() {
    sendAjax('GET', '/getThankful', null, function (data) {
        ReactDOM.render(React.createElement(ThankfulList, { thankfulResponses: data.thankfulResponses }), document.querySelector('#error'));
    });
};

var createThankfulView = function createThankfulView() {
    ReactDOM.render(React.createElement(ThankfulTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ThankfulForm, null), document.querySelector('#logThought'));
};

var handleThankfulClick = function handleThankfulClick(thankfulID) {
    var thankfulType = document.querySelector('#thankfulWrite');

    thankfulType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(thankfulID);
        createThankfulView();
        triggerBackModal();
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
