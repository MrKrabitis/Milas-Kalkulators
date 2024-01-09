function calculate() {
    let score = Math.floor(Math.random() * 101) + "%";

    let p1 = document.querySelector("#p1").value;
    let p2 = document.querySelector("#p2").value;

    if(p1 == "" || p2 == ""){
        alert("Visiem laukiem jābūt aizpildītiem 😡")
        document.querySelector("#score").style.visibility = "hidden";
    }else if(p1 == "Alkohols" || p2 == "Alkohols"){
        document.querySelector("#score").style.visibility = "visible";
        document.querySelector("#score").innerText = "😍100%😍";
    } else {
    document.querySelector("#score").style.visibility = "visible";
    document.querySelector("#score").innerText = score;
    }
} 