// function alerta() {
//     alert("pokemon cadastrado com sucesso")
// }


const closeAlert = () => {
    const close = document.querySelector("#close-message");
    const message = document.querySelector("#message");

    close.addEventListener("click", () => {
        message.getElementsByClassName.display = "nome";
    });

    setTimeout(() => {
        message.style.display = "none";
    }, 5000);
};

closeAlert();