function c(val){
	document.getElementById("d").value = val
}
function v(val){
	document.getElementById("d").value += val;
}
function e(){
	c(eval(document.getElementById("d").value))
}