const promptTitle = document.querySelector('#promptTitle');

const PromptSetup = (props) =>{
    return(
        <div className="promptList">
        </div>
     );
};

const setup = () => {
    ReactDOM.render(
        PromptSetup, document.querySelector("promptSlot")
    )
};