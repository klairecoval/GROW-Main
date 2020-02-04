"use strict";
"use strict";
"use strict";

var prompts = document.querySelector('#promptSlot');

var PromptSetup = function PromptSetup(props) {
    return React.createElement(
        "div",
        { classname: "promptList" },
        React.createElement(
            "h1",
            null,
            "Prompt:1"
        ),
        React.createElement(
            "h1",
            null,
            "Prompt:2"
        ),
        React.createElement(
            "h1",
            null,
            "Prompt:3"
        ),
        React.createElement(
            "h1",
            null,
            "Prompt:4"
        )
    );
};

var setup = function setup() {
    ReactDOM.render(PromptSetup, document.querySelector("promptSlot"));
};
"use strict";
