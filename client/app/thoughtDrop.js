const prompts = document.querySelector('#promptSlot');

const PromptSetup = (props) =>{
    return(
        <div classname="promptList">
            <h1>Prompt:1</h1>
            <h1>Prompt:2</h1>
            <h1>Prompt:3</h1>
            <h1>Prompt:4</h1>
        </div>
     );
};

const setup = () => {
    ReactDOM.render(
        PromptSetup, document.querySelector("promptSlot");
    )
}