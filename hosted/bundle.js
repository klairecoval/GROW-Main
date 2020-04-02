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

var handleExcitedCount = function handleExcitedCount(e) {
    ReactDOM.render(React.createElement(ExcitedForm, { excitedCount: e.target.value.length }), document.querySelector('#logThought'));
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
            React.createElement("input", { id: "excitedText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleExcitedCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logExcitedSubmit", type: "submit", value: "Submit" }),
            React.createElement(
                "h3",
                { id: "category", name: "excited" },
                "excited"
            )
        ),
        React.createElement(
            "p",
            { id: "excitedCount" },
            props.excitedCount,
            "/60"
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

var handleMasterDrop = function handleMasterDrop(e) {
    e.preventDefault();

    var masterSubmitModal = document.getElementById("masterSubmitModal");
    var submitMasterBtn = document.getElementById("submitMasterBtn");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = function () {
        masterSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === masterSubmitModal) {
            masterSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = function () {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};

var handleMasterCount = function handleMasterCount(e) {
    ReactDOM.render(React.createElement(MasterForm, { masterCount: e.target.value.length }), document.querySelector('#logThought'));
};

var MasterTitle = function MasterTitle(props) {
    return React.createElement(
        "h2",
        { id: "masterTitle" },
        "I am happiest when..."
    );
};

var MasterForm = function MasterForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "masterForm",
                onSubmit: handleMasterDrop,
                name: "masterForm",
                action: "/masterThankYou",
                method: "POST",
                className: "masterForm" },
            React.createElement("input", { id: "masterText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleMasterCount }),
            React.createElement("input", { id: "category", type: "text", name: "category", value: "happiest", placeholder: "happiest", onChange: handleMasterCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logMasterSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "p",
            { id: "masterCount" },
            props.masterCount,
            "/60"
        ),
        React.createElement(
            "button",
            { id: "masterBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(MasterSubmitModal, null)
    );
};

var MasterSubmitModal = function MasterSubmitModal() {
    return React.createElement(
        "div",
        { className: "masterSubmitModal", id: "masterSubmitModal" },
        React.createElement(
            "div",
            { className: "masterSubmitContent" },
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
                { id: "dismissMasterSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitMasterBtn" },
                "Finish"
            )
        )
    );
};

var createMasterView = function createMasterView() {
    ReactDOM.render(React.createElement(MasterTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(MasterForm, null), document.querySelector('#logThought'));

    var logMasterSubmit = document.getElementById("logMasterSubmit");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = function () {
        masterSubmitModal.style.display = "block";
    };
};

var handleHappiestClick = function handleHappiestClick(masterID) {
    var masterType = document.querySelector('#happiestWrite');

    masterType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
        triggerBackModal();
    });
};
"use strict";

var handleMasterDrop = function handleMasterDrop(e) {
    e.preventDefault();

    var masterSubmitModal = document.getElementById("masterSubmitModal");
    var submitMasterBtn = document.getElementById("submitMasterBtn");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = function () {
        masterSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === masterSubmitModal) {
            masterSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = function () {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};

var handleMasterCount = function handleMasterCount(e) {
    ReactDOM.render(React.createElement(MasterForm, { masterCount: e.target.value.length }), document.querySelector('#logThought'));
};

var MasterTitle = function MasterTitle(props) {
    return React.createElement(
        "h2",
        { id: "masterTitle" },
        "I am inspired by..."
    );
};

var MasterForm = function MasterForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "masterForm",
                onSubmit: handleMasterDrop,
                name: "masterForm",
                action: "/masterThankYou",
                method: "POST",
                className: "masterForm" },
            React.createElement("input", { id: "masterText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleMasterCount }),
            React.createElement("input", { id: "category", type: "text", name: "category", value: "inspired", placeholder: "inspired", onChange: handleMasterCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logMasterSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "p",
            { id: "masterCount" },
            props.masterCount,
            "/60"
        ),
        React.createElement(
            "button",
            { id: "masterBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(MasterSubmitModal, null)
    );
};

var MasterSubmitModal = function MasterSubmitModal() {
    return React.createElement(
        "div",
        { className: "masterSubmitModal", id: "masterSubmitModal" },
        React.createElement(
            "div",
            { className: "masterSubmitContent" },
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
                { id: "dismissMasterSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitMasterBtn" },
                "Finish"
            )
        )
    );
};

var createMasterView = function createMasterView() {
    ReactDOM.render(React.createElement(MasterTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(MasterForm, null), document.querySelector('#logThought'));

    var logMasterSubmit = document.getElementById("logMasterSubmit");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = function () {
        masterSubmitModal.style.display = "block";
    };
};

var handleInspiredClick = function handleInspiredClick(masterID) {
    var masterType = document.querySelector('#inspiredWrite');

    masterType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
        triggerBackModal();
    });
};
"use strict";

var handleMasterDrop = function handleMasterDrop(e) {
    e.preventDefault();

    var masterSubmitModal = document.getElementById("masterSubmitModal");
    var submitMasterBtn = document.getElementById("submitMasterBtn");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = function () {
        masterSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === masterSubmitModal) {
            masterSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = function () {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};

var handleMasterCount = function handleMasterCount(e) {
    ReactDOM.render(React.createElement(MasterForm, { masterCount: e.target.value.length }), document.querySelector('#logThought'));
};

var MasterTitle = function MasterTitle(props) {
    return React.createElement(
        "h2",
        { id: "masterTitle" },
        "I love..."
    );
};

var MasterForm = function MasterForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "masterForm",
                onSubmit: handleMasterDrop,
                name: "masterForm",
                action: "/masterThankYou",
                method: "POST",
                className: "masterForm" },
            React.createElement("input", { id: "masterText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleMasterCount }),
            React.createElement("input", { id: "category", type: "text", name: "category", value: "love", placeholder: "love", onChange: handleMasterCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logMasterSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "p",
            { id: "masterCount" },
            props.masterCount,
            "/60"
        ),
        React.createElement(
            "button",
            { id: "masterBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(MasterSubmitModal, null)
    );
};

var MasterSubmitModal = function MasterSubmitModal() {
    return React.createElement(
        "div",
        { className: "masterSubmitModal", id: "masterSubmitModal" },
        React.createElement(
            "div",
            { className: "masterSubmitContent" },
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
                { id: "dismissMasterSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitMasterBtn" },
                "Finish"
            )
        )
    );
};

var createMasterView = function createMasterView() {
    ReactDOM.render(React.createElement(MasterTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(MasterForm, null), document.querySelector('#logThought'));

    var logMasterSubmit = document.getElementById("logMasterSubmit");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = function () {
        masterSubmitModal.style.display = "block";
    };
};

var handleLoveClick = function handleLoveClick(masterID) {
    var masterType = document.querySelector('#loveWrite');

    masterType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
        triggerBackModal();
    });
};
"use strict";

var handleMasterDrop = function handleMasterDrop(e) {
    e.preventDefault();

    var masterSubmitModal = document.getElementById("masterSubmitModal");
    var submitMasterBtn = document.getElementById("submitMasterBtn");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = function () {
        masterSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === masterSubmitModal) {
            masterSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = function () {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};

var handleMasterCount = function handleMasterCount(e) {
    ReactDOM.render(React.createElement(MasterForm, { masterCount: e.target.value.length }), document.querySelector('#logThought'));
};

var MasterTitle = function MasterTitle(props) {
    return React.createElement(
        "h2",
        { id: "masterTitle" },
        "I am excited for..."
    );
};

var MasterForm = function MasterForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "masterForm",
                onSubmit: handleMasterDrop,
                name: "masterForm",
                action: "/masterThankYou",
                method: "POST",
                className: "masterForm" },
            React.createElement("input", { id: "masterText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleMasterCount }),
            React.createElement("input", { id: "category", type: "text", name: "category", value: "excited", placeholder: "excited", onChange: handleMasterCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logMasterSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "p",
            { id: "masterCount" },
            props.masterCount,
            "/60"
        ),
        React.createElement(
            "button",
            { id: "masterBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(MasterSubmitModal, null)
    );
};

var MasterSubmitModal = function MasterSubmitModal() {
    return React.createElement(
        "div",
        { className: "masterSubmitModal", id: "masterSubmitModal" },
        React.createElement(
            "div",
            { className: "masterSubmitContent" },
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
                { id: "dismissMasterSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitMasterBtn" },
                "Finish"
            )
        )
    );
};

var createMasterView = function createMasterView() {
    ReactDOM.render(React.createElement(MasterTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(MasterForm, null), document.querySelector('#logThought'));

    var logMasterSubmit = document.getElementById("logMasterSubmit");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = function () {
        masterSubmitModal.style.display = "block";
    };
};

var handleMasterClick = function handleMasterClick(masterID) {
    var masterType = document.querySelector('#masterWrite');

    masterType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
        triggerBackModal();
    });
};
"use strict";

var handleMasterDrop = function handleMasterDrop(e) {
    e.preventDefault();

    var masterSubmitModal = document.getElementById("masterSubmitModal");
    var submitMasterBtn = document.getElementById("submitMasterBtn");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = function () {
        masterSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === masterSubmitModal) {
            masterSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = function () {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};

var handleMasterCount = function handleMasterCount(e) {
    ReactDOM.render(React.createElement(MasterForm, { masterCount: e.target.value.length }), document.querySelector('#logThought'));
};

var MasterTitle = function MasterTitle(props) {
    return React.createElement(
        "h2",
        { id: "masterTitle" },
        "I am thankful for..."
    );
};

var MasterForm = function MasterForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "masterForm",
                onSubmit: handleMasterDrop,
                name: "masterForm",
                action: "/masterThankYou",
                method: "POST",
                className: "masterForm" },
            React.createElement("input", { id: "masterText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleMasterCount }),
            React.createElement("input", { id: "category", type: "text", name: "category", value: "thankful", placeholder: "thankful", onChange: handleMasterCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logMasterSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "p",
            { id: "masterCount" },
            props.masterCount,
            "/60"
        ),
        React.createElement(
            "button",
            { id: "masterBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(MasterSubmitModal, null)
    );
};

var MasterSubmitModal = function MasterSubmitModal() {
    return React.createElement(
        "div",
        { className: "masterSubmitModal", id: "masterSubmitModal" },
        React.createElement(
            "div",
            { className: "masterSubmitContent" },
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
                { id: "dismissMasterSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitMasterBtn" },
                "Finish"
            )
        )
    );
};

var createMasterView = function createMasterView() {
    ReactDOM.render(React.createElement(MasterTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(MasterForm, null), document.querySelector('#logThought'));

    var logMasterSubmit = document.getElementById("logMasterSubmit");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = function () {
        masterSubmitModal.style.display = "block";
    };
};

var handleThankfulClick = function handleThankfulClick(masterID) {
    var masterType = document.querySelector('#thankfulWrite');

    masterType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
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

var MasterModal = function MasterModal() {
    return React.createElement(
        "div",
        { className: "masterModal", id: "masterModal" },
        React.createElement(
            "div",
            { className: "masterModalContent" },
            React.createElement(
                "h1",
                null,
                "I'm excited for..."
            ),
            React.createElement(
                "button",
                { id: "masterWrite" },
                "Write response"
            ),
            React.createElement(
                "button",
                { id: "dismissMaster" },
                "Select different prompt"
            )
        )
    );
};

var triggerPromptModals = function triggerPromptModals() {
    var loveModal = document.getElementById("loveModal");
    var happiestModal = document.getElementById("happiestModal");
    var proudModal = document.getElementById("proudModal");
    var thankfulModal = document.getElementById("thankfulModal");
    var inspiredModal = document.getElementById("inspiredModal");
    var masterModal = document.getElementById("masterModal");

    var happiestPromptBtn = document.getElementById("happiestPrompt");
    var inspiredPromptBtn = document.getElementById("inspiredPrompt");
    var proudPromptBtn = document.getElementById("proudPrompt");
    var lovePromptBtn = document.getElementById("lovePrompt");
    var thankfulPromptBtn = document.getElementById("thankfulPrompt");
    var masterPromptBtn = document.getElementById("masterPrompt");

    var dismissLove = document.getElementById("dismissLove");
    var dismissThankful = document.getElementById("dismissThankful");
    var dismissInspired = document.getElementById("dismissInspired");
    var dismissProud = document.getElementById("dismissProud");
    var dismissHappiest = document.getElementById("dismissHappiest");
    var dismissMaster = document.getElementById("dismissMaster");

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
    masterPromptBtn.onclick = function () {
        masterModal.style.display = "block";
    };

    dismissLove.onclick = function () {
        loveModal.style.display = "none";
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
    dismissMaster.onclick = function () {
        masterModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === loveModal) {
            loveModal.style.display = "none";
        } else if (event.target === happiestModal) {
            happiestModal.style.display = "none";
        } else if (event.target === inspiredModal) {
            inspiredModal.style.display = "none";
        } else if (event.target === proudModal) {
            proudModal.style.display = "none";
        } else if (event.target === thankfulModal) {
            thankfulModal.style.display = "none";
        } else if (event.target === masterModal) {
            masterModal.style.display = "none";
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

    var happiestBtn = document.getElementById("happiestBackBtn");
    var inspiredBtn = document.getElementById("inspiredBackBtn");
    var proudBtn = document.getElementById("proudBackBtn");
    var loveBtn = document.getElementById("loveBackBtn");
    var thankfulBtn = document.getElementById("thankfulBackBtn");
    var masterBtn = document.getElementById("masterBackBtn");

    var stay = document.getElementById("stayBtn");

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
        thankfulBtn.onlick = function () {
            backModal.style.display = "block";
        };
    } else if (masterBtn) {
        masterBtn.onclick = function () {
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
        React.createElement(
            "button",
            { id: "masterPrompt" },
            "I'm excited for..."
        ),
        React.createElement(ThankfulModal, null),
        React.createElement(InspiredModal, null),
        React.createElement(LoveModal, null),
        React.createElement(HappiestModal, null),
        React.createElement(ProudModal, null),
        React.createElement(MasterModal, null)
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
    // loadHappiestFromServer();
    // loadInspiredFromServer();
    // loadLoveFromServer();
    // loadProudFromServer();
    // loadThankfulFromServer();

    // handle button prompt clicks
    if (document.getElementById('inspiredPrompt') && document.getElementById('happiestPrompt') && document.getElementById('lovePrompt') && document.getElementById('proudPrompt') && document.getElementById('thankfulPrompt') && document.getElementById('masterPrompt')) {
        handleInspiredClick(id);
        handleHappiestClick(id);
        handleLoveClick(id);
        handleProudClick(id);
        handleThankfulClick(id);
        handleMasterClick(id);
    }
};

// instantiate above
$(document).ready(function () {
    if (document.querySelector('#promptTitle') && document.querySelector('#logThought')) {
        setup();
    }
});
"use strict";

var handleMasterDrop = function handleMasterDrop(e) {
    e.preventDefault();

    var masterSubmitModal = document.getElementById("masterSubmitModal");
    var submitMasterBtn = document.getElementById("submitMasterBtn");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = function () {
        masterSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === masterSubmitModal) {
            masterSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = function () {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};

var handleMasterCount = function handleMasterCount(e) {
    ReactDOM.render(React.createElement(MasterForm, { masterCount: e.target.value.length }), document.querySelector('#logThought'));
};

var MasterTitle = function MasterTitle(props) {
    return React.createElement(
        "h2",
        { id: "masterTitle" },
        "I proud..."
    );
};

var MasterForm = function MasterForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "masterForm",
                onSubmit: handleMasterDrop,
                name: "masterForm",
                action: "/masterThankYou",
                method: "POST",
                className: "masterForm" },
            React.createElement("input", { id: "masterText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleMasterCount }),
            React.createElement("input", { id: "category", type: "text", name: "category", value: "proud", placeholder: "proud", onChange: handleMasterCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logMasterSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "p",
            { id: "masterCount" },
            props.masterCount,
            "/60"
        ),
        React.createElement(
            "button",
            { id: "masterBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(MasterSubmitModal, null)
    );
};

var MasterSubmitModal = function MasterSubmitModal() {
    return React.createElement(
        "div",
        { className: "masterSubmitModal", id: "masterSubmitModal" },
        React.createElement(
            "div",
            { className: "masterSubmitContent" },
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
                { id: "dismissMasterSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitMasterBtn" },
                "Finish"
            )
        )
    );
};

var createMasterView = function createMasterView() {
    ReactDOM.render(React.createElement(MasterTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(MasterForm, null), document.querySelector('#logThought'));

    var logMasterSubmit = document.getElementById("logMasterSubmit");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = function () {
        masterSubmitModal.style.display = "block";
    };
};

var handleProudClick = function handleProudClick(masterID) {
    var masterType = document.querySelector('#proudWrite');

    masterType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
        triggerBackModal();
    });
};
"use strict";

var handleMasterDrop = function handleMasterDrop(e) {
    e.preventDefault();

    var masterSubmitModal = document.getElementById("masterSubmitModal");
    var submitMasterBtn = document.getElementById("submitMasterBtn");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    dismissMasterModal.onclick = function () {
        masterSubmitModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === masterSubmitModal) {
            masterSubmitModal.style.display = "none";
        }
    };

    $('#errorMessage').animate({ width: 'hide' }, 350);
    if ($('#masterText').val() == '') {
        handleError('Input required');
        return false;
    }

    submitMasterBtn.onclick = function () {
        sendAjax('POST', $('#masterForm').attr('action'), $('#masterForm').serialize(), redirect);
    };

    return false;
};

var handleMasterCount = function handleMasterCount(e) {
    ReactDOM.render(React.createElement(MasterForm, { masterCount: e.target.value.length }), document.querySelector('#logThought'));
};

var MasterTitle = function MasterTitle(props) {
    return React.createElement(
        "h2",
        { id: "masterTitle" },
        "I am thankful for..."
    );
};

var MasterForm = function MasterForm(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "form",
            { id: "masterForm",
                onSubmit: handleMasterDrop,
                name: "masterForm",
                action: "/masterThankYou",
                method: "POST",
                className: "masterForm" },
            React.createElement("input", { id: "masterText", type: "text", name: "answer", maxLength: "60", placeholder: "...", onChange: handleMasterCount }),
            React.createElement("input", { id: "category", type: "text", name: "category", value: "thankful", placeholder: "thankful", onChange: handleMasterCount }),
            React.createElement("input", { className: "logThoughtSubmit", id: "logMasterSubmit", type: "submit", value: "Submit" })
        ),
        React.createElement(
            "p",
            { id: "masterCount" },
            props.masterCount,
            "/60"
        ),
        React.createElement(
            "button",
            { id: "masterBackBtn" },
            "Go back"
        ),
        React.createElement(BackModal, null),
        React.createElement(MasterSubmitModal, null)
    );
};

var MasterSubmitModal = function MasterSubmitModal() {
    return React.createElement(
        "div",
        { className: "masterSubmitModal", id: "masterSubmitModal" },
        React.createElement(
            "div",
            { className: "masterSubmitContent" },
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
                { id: "dismissMasterSubmit" },
                "Go back"
            ),
            React.createElement(
                "button",
                { id: "submitMasterBtn" },
                "Finish"
            )
        )
    );
};

var createMasterView = function createMasterView() {
    ReactDOM.render(React.createElement(MasterTitle, null), document.querySelector('#promptTitle'));

    ReactDOM.render(React.createElement(MasterForm, null), document.querySelector('#logThought'));

    var logMasterSubmit = document.getElementById("logMasterSubmit");
    var dismissMasterModal = document.getElementById("dismissMasterSubmit");

    logMasterSubmit.onclick = function () {
        masterSubmitModal.style.display = "block";
    };
};

var handleThankfulClick = function handleThankfulClick(masterID) {
    var masterType = document.querySelector('#thankfulWrite');

    masterType.addEventListener('click', function (e) {
        e.preventDefault();
        clearTimeout(masterID);
        createMasterView();
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
