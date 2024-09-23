const kun = document.querySelector(".in1");
const tun = document.querySelector(".in2");
const con = document.querySelector(".cont");
const body = document.querySelector("body");


con.addEventListener( "click" , () => {
    kun.classList.toggle("in1_a");
    tun.classList.toggle("in2_a");
    body.classList.toggle("body");
})

