function todoElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let value = document.createTextNode(inputValue);
  li.appendChild(value);

  if (inputValue === '') {
    alert("Not this way");

  } else {
    document.getElementById("idUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

}
