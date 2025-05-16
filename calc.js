function bclick(val)
{
    console.log(val)
    document.getElementById("screen").value+=val
}
function bclear()
{
    document.getElementById("screen").value=""
}
function eqclick(){
    var text =document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
function dclear() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}
