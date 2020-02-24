"use strict";
"use strict";

var handleExcitedDrop = function handleExcitedDrop(e) {
    e.preventDefault();

    var excitedSubmitModal = document.getElementById("excitedSubmitModal");
    var submitExcitedBtn = document.getElementById("submitExcitedBtn");
    var dismissExcitedModal = document.getElementById("dismissExcitedSubmit");

    dismissExcitedModal.onclick = function () {
        excitedSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === excitedSubmitModal) {
            excitedSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#excitedText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitExcitedBtn.onclick = function () {
        sendAjax('POST', $('#excitedForm').attr('action'), $('#excitedForm').serialize(), redirect);
    };

    return false;
};

var ExcitedTitle = function ExcitedTitle(props) {
    return React.createElement(
        "h2",
        { id: "excitedTitle" },
        "I am excited for..."
    );
};

var ExcitedForm = function ExcitedForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "excitedForm",
                onSubmit: handleExcitedDrop,
                name: "excitedForm",
                action: "/excitedThankYou",
                method: "POST",
                className: "excitedForm" },
            React.createElement("input", { id: "excitedText", type: "text", name: "answer", maxLength: "60", placeholder: "..." }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logExcitedSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "button",
            { id: "excitedBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(ExcitedSubmitModal, null)
    );
};

var ExcitedSubmitModal = function ExcitedSubmitModal() {
    return React.createElement(
        "div",
        { className: "excitedSubmitModal", id: "excitedSubmitModal" },
        React.createElement(
            "div",
            { className: "excitedSubmitContent" },
            React.createElement(
                "h1",
                null,
                "All finished?"
            ),
            React.createElement(
                "p",
                null,
                "This will submit your response to your card.",
                React.createElement("br", null),
                "Don\u2019t worry, they\u2019re all anonymous."
            ),
            React.createElement(
                "button",
                { id: "dismissExcitedSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitExcitedBtn" },
                "Finish"
            )
        )
    );
};

var createExcitedView = function createExcitedView() {
    ReactDOM.render(React.createElement(ExcitedTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ExcitedForm, null), document.querySelector('#logThought'));

    var logExcitedSubmit = document.getElementById("logExcitedSubmit");
    var dismissExcitedModal = document.getElementById("dismissExcitedSubmit");

    logExcitedSubmit.onclick = function () {
        excitedSubmitModal.style.display = "block";
    };
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
"use strict";

var handleHappiestDrop = function handleHappiestDrop(e) {
    e.preventDefault();

    var happiestSubmitModal = document.getElementById("happiestSubmitModal");

    var submitHappiestBtn = document.getElementById("submitHappiestBtn");
    var dismissHappiestModal = document.getElementById("dismissHappiestSubmit");

    dismissHappiestModal.onclick = function () {
        happiestSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === happiestSubmitModal) {
            happiestSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#happiestText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitHappiestBtn.onclick = function () {
        sendAjax('POST', $('#happiestForm').attr('action'), $('#happiestForm').serialize(), redirect);
    };

    return false;
};

var HappiestTitle = function HappiestTitle(props) {
    return React.createElement(
        "h2",
        { id: "happiestTitle" },
        "I feel happiest when..."
    );
};

var HappiestForm = function HappiestForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "happiestForm",
                onSubmit: handleHappiestDrop,
                name: "happiestForm",
                action: "/happiestThankYou",
                method: "POST",
                className: "happiestForm" },
            React.createElement("input", { id: "happiestText", type: "text", name: "answer", maxLength: "60", placeholder: "..." }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logHappiestSubmit", type: "submit", value: "Log" })
        ),
        React.createElement(
            "button",
            { id: "happiestBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(HappiestSubmitModal, null)
    );
};

var HappiestSubmitModal = function HappiestSubmitModal() {
    return React.createElement(
        "div",
        { className: "happiestSubmitModal", id: "happiestSubmitModal" },
        React.createElement(
            "div",
            { className: "happiestSubmitContent" },
            React.createElement(
                "h1",
                null,
                "All finished?"
            ),
            React.createElement(
                "p",
                null,
                "This will submit your response to your card.",
                React.createElement("br", null),
                "Don\u2019t worry, they\u2019re all anonymous."
            ),
            React.createElement(
                "button",
                { id: "dismissHappiestSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitHappiestBtn" },
                "Finish"
            )
        )
    );
};

var createHappiestView = function createHappiestView() {
    ReactDOM.render(React.createElement(HappiestTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(HappiestForm, null), document.querySelector('#logThought'));

    var logHappiestSubmit = document.getElementById("logHappiestSubmit");
    var dismissHappiestModal = document.getElementById("dismissHappiestSubmit");

    logHappiestSubmit.onclick = function () {
        happiestSubmitModal.style.display = "block";
    };
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
"use strict";

var handleInspiredDrop = function handleInspiredDrop(e) {
    e.preventDefault();

    var inspiredSubmitModal = document.getElementById("inspiredSubmitModal");

    var submitInspiredBtn = document.getElementById("submitInspiredBtn");
    var dismissInspiredModal = document.getElementById("dismissInspiredSubmit");

    dismissInspiredModal.onclick = function () {
        inspiredSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === inspiredSubmitModal) {
            inspiredSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#inspiredText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitInspiredBtn.onclick = function () {
        sendAjax('POST', $('#inspiredForm').attr('action'), $('#inspiredForm').serialize(), redirect);
    };

    return false;
};

var InspiredTitle = function InspiredTitle(props) {
    return React.createElement(
        "h2",
        { id: "inspiredTitle" },
        "I am inspired by..."
    );
};

var InspiredForm = function InspiredForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "inspiredForm",
                onSubmit: handleInspiredDrop,
                name: "inspiredForm",
                action: "/inspiredThankYou",
                method: "POST",
                className: "inspiredForm" },
            React.createElement("input", { id: "inspiredText", type: "text", name: "answer", maxLength: "60", placeholder: "..." }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logInspiredSubmit", type: "submit", value: "Log" })
        ),
        React.createElement(
            "button",
            { id: "inspiredBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(InspiredSubmitModal, null)
    );
};

var InspiredSubmitModal = function InspiredSubmitModal() {
    return React.createElement(
        "div",
        { className: "inspiredSubmitModal", id: "inspiredSubmitModal" },
        React.createElement(
            "div",
            { className: "inspiredSubmitContent" },
            React.createElement(
                "h1",
                null,
                "All finished?"
            ),
            React.createElement(
                "p",
                null,
                "This will submit your response to your card.",
                React.createElement("br", null),
                "Don\u2019t worry, they\u2019re all anonymous."
            ),
            React.createElement(
                "button",
                { id: "dismissInspiredSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitInspiredBtn" },
                "Finish"
            )
        )
    );
};

var createInspiredView = function createInspiredView() {
    ReactDOM.render(React.createElement(InspiredTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(InspiredForm, null), document.querySelector('#logThought'));

    var logInspiredSubmit = document.getElementById("logInspiredSubmit");
    var dismissInspiredModal = document.getElementById("dismissInspiredSubmit");

    logInspiredSubmit.onclick = function () {
        inspiredSubmitModal.style.display = "block";
    };
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
"use strict";

var handleLoveDrop = function handleLoveDrop(e) {
    e.preventDefault();

    var loveSubmitModal = document.getElementById("loveSubmitModal");
    var submitLoveBtn = document.getElementById("submitLoveBtn");
    var dismissLoveModal = document.getElementById("dismissLoveSubmit");

    dismissLoveModal.onclick = function () {
        loveSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === loveSubmitModal) {
            loveSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#loveText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitLoveBtn.onclick = function () {
        sendAjax('POST', $('#loveForm').attr('action'), $('#loveForm').serialize(), redirect);
    };

    return false;
};

var LoveTitle = function LoveTitle(props) {
    return React.createElement(
        "h2",
        { id: "loveTitle" },
        "I love..."
    );
};

var LoveForm = function LoveForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "loveForm",
                onSubmit: handleLoveDrop,
                name: "loveForm",
                action: "/loveThankYou",
                method: "POST",
                className: "loveForm" },
            React.createElement("input", { id: "loveText", type: "text", name: "answer", maxLength: "60", placeholder: "..." }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logLoveSubmit", type: "submit", value: "Log" })
        ),
        React.createElement(
            "button",
            { id: "loveBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(LoveSubmitModal, null)
    );
};

var LoveSubmitModal = function LoveSubmitModal() {
    return React.createElement(
        "div",
        { className: "loveSubmitModal", id: "loveSubmitModal" },
        React.createElement(
            "div",
            { className: "loveSubmitContent" },
            React.createElement(
                "h1",
                null,
                "All finished?"
            ),
            React.createElement(
                "p",
                null,
                "This will submit your response to your card.",
                React.createElement("br", null),
                "Don\u2019t worry, they\u2019re all anonymous."
            ),
            React.createElement(
                "button",
                { id: "dismissLoveSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitLoveBtn" },
                "Finish"
            )
        )
    );
};

var createLoveView = function createLoveView() {
    ReactDOM.render(React.createElement(LoveTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(LoveForm, null), document.querySelector('#logThought'));

    var logLoveSubmit = document.getElementById("logLoveSubmit");
    var dismissLoveModal = document.getElementById("dismissLoveSubmit");

    logLoveSubmit.onclick = function () {
        loveSubmitModal.style.display = "block";
    };
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
"use strict";

var handleProudDrop = function handleProudDrop(e) {
    e.preventDefault();

    var proudSubmitModal = document.getElementById("proudSubmitModal");
    var submitProudBtn = document.getElementById("submitProudBtn");
    var dismissProudModal = document.getElementById("dismissProudSubmit");

    dismissProudModal.onclick = function () {
        proudSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === proudSubmitModal) {
            proudSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#proudText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitProudBtn.onclick = function () {
        sendAjax('POST', $('#proudForm').attr('action'), $('#proudForm').serialize(), redirect);
    };

    return false;
};

var ProudTitle = function ProudTitle(props) {
    return React.createElement(
        "h2",
        { id: "proudTitle" },
        "I am proud of..."
    );
};

var ProudForm = function ProudForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "proudForm",
                onSubmit: handleProudDrop,
                name: "proudForm",
                action: "/proudThankYou",
                method: "POST",
                className: "proudForm" },
            React.createElement("input", { id: "proudText", type: "text", name: "answer", maxLength: "60", placeholder: "..." }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logProudSubmit", type: "submit", value: "Log" })
        ),
        React.createElement(
            "button",
            { id: "proudBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(ProudSubmitModal, null)
    );
};

var ProudSubmitModal = function ProudSubmitModal() {
    return React.createElement(
        "div",
        { className: "proudSubmitModal", id: "proudSubmitModal" },
        React.createElement(
            "div",
            { className: "proudSubmitContent" },
            React.createElement(
                "h1",
                null,
                "All finished?"
            ),
            React.createElement(
                "p",
                null,
                "This will submit your response to your card.",
                React.createElement("br", null),
                "Don\u2019t worry, they\u2019re all anonymous."
            ),
            React.createElement(
                "button",
                { id: "dismissProudSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitProudBtn" },
                "Finish"
            )
        )
    );
};

var createProudView = function createProudView() {
    ReactDOM.render(React.createElement(ProudTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ProudForm, null), document.querySelector('#logThought'));

    var logProudSubmit = document.getElementById("logProudSubmit");
    var dismissProudModal = document.getElementById("dismissProudSubmit");

    logProudSubmit.onclick = function () {
        proudSubmitModal.style.display = "block";
    };
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
"use strict";

var handleThankfulDrop = function handleThankfulDrop(e) {
    e.preventDefault();

    var thankfulSubmitModal = document.getElementById("thankfulSubmitModal");
    var submitThankfulBtn = document.getElementById("submitThankfulBtn");
    var dismissThankfulModal = document.getElementById("dismissThankfulSubmit");

    dismissThankfulModal.onclick = function () {
        thankfulSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === thankfulSubmitModal) {
            thankfulSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);

    if ($('#thankfulText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitThankfulBtn.onclick = function () {
        sendAjax('POST', $('#thankfulForm').attr('action'), $('#thankfulForm').serialize(), redirect);
    };

    return false;
};

var ThankfulTitle = function ThankfulTitle(props) {
    return React.createElement(
        "h2",
        { id: "thankfulTitle" },
        "I am thankful for..."
    );
};

var ThankfulForm = function ThankfulForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "thankfulForm",
                onSubmit: handleThankfulDrop,
                name: "thankfulForm",
                action: "/thankfulThankYou",
                method: "POST",
                className: "thankfulForm" },
            React.createElement("input", { id: "thankfulText", type: "text", name: "answer", maxLength: "60", placeholder: "..." }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logThankfulSubmit", type: "submit", value: "Log" })
        ),
        React.createElement(
            "button",
            { id: "thankfulBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(ThankfulSubmitModal, null)
    );
};

var ThankfulSubmitModal = function ThankfulSubmitModal() {
    return React.createElement(
        "div",
        { className: "thankfulSubmitModal", id: "thankfulSubmitModal" },
        React.createElement(
            "div",
            { className: "thankfulSubmitContent" },
            React.createElement(
                "h1",
                null,
                "All finished?"
            ),
            React.createElement(
                "p",
                null,
                "This will submit your response to your card.",
                React.createElement("br", null),
                "Don\u2019t worry, they\u2019re all anonymous."
            ),
            React.createElement(
                "button",
                { id: "dismissThankfulSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitThankfulBtn" },
                "Finish"
            )
        )
    );
};

var createThankfulView = function createThankfulView() {
    ReactDOM.render(React.createElement(ThankfulTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(ThankfulForm, null), document.querySelector('#logThought'));

    var logThankfulSubmit = document.getElementById("logThankfulSubmit");
    var dismissThankfulModal = document.getElementById("dismissThankfulSubmit");

    logThankfulSubmit.onclick = function () {
        thankfulSubmitModal.style.display = "block";
    };
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
