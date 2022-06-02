let img = document.querySelector("#disp")
let btn_0 = document.querySelector(".st_0")
btn_0.onclick = () => {
    img.style.height = "350px"
    btn_0.style.border = "3px solid #0071E3"
    btn_01.style.border = "1px solid gray"
}

let btn_01 = document.querySelector(".st_01")
btn_01.onclick = () => {
    img.style.height = "492px"
    btn_01.style.border = "3px solid #0071E3"
    btn_0.style.border = "1px solid gray"
}

let btn_1 = document.querySelectorAll(".st_1")
let btn_st2 = document.querySelector(".st_2")
btn_1.forEach(i => {
    i.onclick = () => {
        btn_1.forEach(clr => {
            clr.classList.remove('act')
        });
        img.src = i.getAttribute("data-info")
        i.classList.add("act")
    }
});

let h1 = document.querySelector("h1")
let p = document.querySelector("p")
btn_st2.onclick = () => {
    if (btn_st2.innerText == "Корзина") {
        btn_st2.innerHTML = "<b>Отменить Заказ</b>"
        btn_st2.style.border = "3px solid #0071E3"
    } else {
        btn_st2.innerHTML = "<b>Корзина</b>"
        btn_st2.style.border = "1px solid gray"
    }
}