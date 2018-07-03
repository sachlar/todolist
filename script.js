//variables

var button = document.getElementById("enter");
var input = document.getElementById("userinput");

//functions
function inputLength() {
  return input.value.length;
}

function addListAfterClick() {
  if (inputLength() > 0) {
      createListElement();
  }
}

function createListElement() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var deleteButton = document.createElement("button");
  deleteButton.appendChild(document.createTextNode("delete"));
  li.appendChild(deleteButton);
  deleteButton.onclick=removeParent;

  var doneButton = document.createElement("button");
  doneButton.appendChild(document.createTextNode("done"));
  li.appendChild(doneButton);
  doneButton.onclick=toggleDone;

}

function addListAfterClick() {
  if (inputLength() > 0) {
      createListElement();
  }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
  }
}

function removeParent(event) {
  event.target.parentNode.remove();
}

function toggleDone(event) {
  event.target.parentNode.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
