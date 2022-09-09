let button = document.querySelectorAll(".action");

console.log(typeof button)


    button.addEventListener("click", action)


``



function action(){

    let a = this.parentNode.parentNode;

    let b = a.querySelector("td .unit")

    let c = b.value;
    console.log(c)

    let d = a.querySelector("td .quan")

    let e = d.value;



    console.log(c);

    console.log(e);

    let m=c*e;

    console.log(m)

    let result = this.parentNode.nextElementSibling.firstChild 

    result.innerText=m;

}

