const input = document.querySelector("input");

const button = document.querySelector("button");

const unOrderList = document.querySelector("ul");

const output = document.querySelector("#message");



const printOutput = () => {
    let checkedItem = document.querySelectorAll("ul li.checked");
    let allList = document.querySelectorAll("ul li");
    if(allList.length > 0 && checkedItem.length === allList.length) {
        output.innerText = "Congratulation! You have finished all taskes for today";
    }
}

unOrderList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.style.textDecoration = "line-through";
        e.target.classList.toggle("checked");
        printOutput();
    }
});

const addList = (inputText) => {
    let list = document.createElement("li");
    list.innerText = inputText;
    unOrderList.appendChild(list);
}


button.addEventListener("click", () => {
    let inputText = input.value;
    if(inputText === "") {
        alert("please add something");
    } else {
        addList(inputText);
        input.value = "";
    }
});