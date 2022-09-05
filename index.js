
//Fuction to display and close first modal content
$("#OpenBtn").click(function() {
$("#staticBackdrop").modal('show');


});  

$(".btn-close").click(function() {
$("#staticBackdrop").modal('hide');


});       


//second modal content
$("#OpenBtn2").click(function() {
$("#staticBackdrop2").modal('show');


});  

$("#btn-close2").click(function() {
$("#staticBackdrop2").modal('hide');


});  


//Third modal content
$("#OpenBtn3").click(function() {
$("#staticBackdrop3").modal('show');


});  

$("#btn-close3").click(function() {
$("#staticBackdrop3").modal('hide');


}); 



//Function to display loader 
var myVar;

function myloader() {
myVar = setTimeout(showPage, 4000);
}

function showPage() {
document.querySelector(".lds-ellipsis").style.display = "none";
document.getElementById("myDiv").style.display = "block";
}


//Scroll up



//Get the button
var mybutton = document.getElementById("myUpBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
