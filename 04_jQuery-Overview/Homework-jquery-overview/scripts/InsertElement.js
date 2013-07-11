var AddElement = (function () {
  function AddElementBefore (elementInDOM, elementToBeAdded) {
  	var element=$('<'+elementToBeAdded+"/>");
  	element.insertBefore($(elementInDOM));
  	return element;
  }

  function AddElementAfter (elementInDOM, elementToBeAdded) {
  	var element=$('<'+elementToBeAdded+"/>");
  	element.insertAfter($(elementInDOM));
  	return element;
  }

  return{
   
  Before: AddElementBefore,
  After: AddElementAfter
  }
  
}());

var addedElement=AddElement.Before("#holder","div");
addedElement.css("color","blue");
addedElement.css("border","solid");
addedElement.html("I am a new DIV before Holder Div");
var anotherAddedElement=AddElement.After("#holder","p");
anotherAddedElement.html("I am a new paragraph after Holder Div");
anotherAddedElement.css("color","red");

