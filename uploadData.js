function startDataUpload() {
alert ("start data upload"); 
//Adds data to function-takes values from form and sends to database
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var module = document.getElementById("module").value;
var postString = "name="+name +"&surname="+surname+"&module="+module;
alert (postString);
}