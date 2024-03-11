const cajaPricipal = document.querySelector("#caja");
    const nodeListBtn = document.querySelectorAll("button");
    console.log(nodeListBtn);

    let btnReset = document.querySelector("#btn-reset")

    nodeListBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btnColor = btn.style.backgroundColor;
        cajaPricipal.style.backgroundColor = btnColor;
    });
});