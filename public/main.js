const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  showNewMessageForm();
});

showNewMessageForm = () => {
  const newMessageForm = document.getElementsByClassName("form")[0];
  console.log(newMessageForm);

  console.log("btn clicked");
  newMessageForm.style.visibility = "visible";
};
