/* const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer); */

function MeuComponente(){
    return React.createElement(
        "button",
        {
            onClick: () => alert("ok"),
            style: {
                backgroundColor: "purple",
            },
        },
        "Pressione"
    );
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(MeuComponente());