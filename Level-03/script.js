// This is a closure function https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
(function() {
 function initialize() {
    /*
      1. Add all your event bindings here. Please avoid binding events inline and add your event listeners here.

      onSubmit callback
      disableDuplicateSecondaryDepartment callback,...
    */
 //  document.getElementById("nam").focus();
   document.getElementById("but").addEventListener("click",onSubmit);
   document.querySelector("#department2").addEventListener("change",disableDuplicateSecondaryDepartment);
  };
  function disableDuplicateSecondaryDepartment(event) {
   // alert("HO");
  // 2. in department2, Should disable the option selected in department1
  var y;
  var department3=document.querySelector("#department2");
  y=department3.options[department3.selectedIndex].value; 
  var department3=document.getElementById("department2");
  y=department3.options[department3.selectedIndex].value;
  var x= document.getElementById("department3");
var i;
var g="EEE";
if(y!=g)
{
(x.options[0]).disabled=false;
}
(x.options[0]).disabled=false;
(x.options[1]).disabled=false;
(x.options[2]).disabled=false;
(x.options[3]).disabled=false;
for(i=0; i<x.options.length;i++){
if(x.options[i].value==y)
{
(x.options[i]).disabled=true;
}
}
}

  var constructData = function() {
    var sel=document.getElementById("department2");
    var sel1=document.getElementById("department3");
    var data = {
      "phno":document.getElementById("phono").value,
      "name":document.getElementById("nam").value,
      "emailaddress":document.getElementById("mail").value,
      "department1":sel.options[sel.selectedIndex].value,
      "department2":sel1.options[sel1.selectedIndex].value
    };
   
    // 3. Construct data from the form here. Please ensure that the keys are the names of input elements

    return data;
  }

  var validateResults = function(data) {
    var isValid = true;
    //phn  no validation
    var regx=/^[0-9]\d{0,9}$/;
    var phn =document.getElementById("phono").value;
    // var integer=parseInt(phn.value,10);
     if(!regx.test(phn)){
      // alert("Enter valid number");
      isValid=false;
      }
      //name validation
var na=document.getElementById("nam").value;
if(na.length>100)
{
  isValid=false;
}
    // 4. Check if the data passes all the validations here
    //mail id validation
var mil=document.getElementById("mail").value;
var regx=/^[a-zA-Z0-9.@]+(@college.edu)$/;
if(!regx.test(mil))
{
  isValid=false;
}
var dep3=document.querySelector("#department2");
  y=dep3.options[dep3.selectedIndex].value; 
  var x= document.getElementById("department3");
  var g=x.options[x.selectedIndex].value;
  
  if(y==g)
  {
   // alert("false");
    isValid=false;
  }
    return isValid;
  };

  var onSubmit = function(event) {
    // 5. Figure out how to avoid the redirection on form submit
   // alert("OnSubmit");
   event.preventDefault();
    var data = constructData();

    if (validateResults(data)) {
      printResults(data);
    } else {
      var resultsDiv = document.getElementById("results");
      resultsDiv.innerHTML = '';
      resultsDiv.classList.add("hide");
    }
  };

  var printResults = function(data) {
    var constructElement = function([key, value]) {
      return `<p class='result-item'>${key}: ${value}</p>`;
    };

    var resultHtml = (Object.entries(data) || []).reduce(function(innerHtml, keyValuePair) {
      debugger
      return innerHtml + constructElement(keyValuePair);
    }, '');
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = resultHtml;
    resultsDiv.classList.remove("hide");
  };

  /*
    Initialize the javascript functions only after the html DOM content has loaded.
    This is to ensure that the elements are present in the DOM before binding any event listeners to them.
  */
  document.addEventListener('DOMContentLoaded', initialize);
})();
