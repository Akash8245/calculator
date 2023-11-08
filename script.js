let display = document.getElementById("input").value;

console.log(display);



function change(button){
    document.getElementById("input").value += button.innerHTML  ;
}


function ev(){
 
    let input = document.getElementById("input").value;
    let result = eval(input);
    document.getElementById("input").value=result;

}


function clr(){
    document.getElementById("input").value = "";
}