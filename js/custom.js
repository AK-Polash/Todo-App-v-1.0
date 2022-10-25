let input = document.querySelector(".input");
let addButton = document.querySelector(".button");
let ul = document.querySelector(".ul");
let mainArr = [];

addButton.addEventListener("click", () => {
  mainArr.push(input.value);
  todo();
  input.value = "";
});

function todo() {
  ul.innerHTML = "";
  mainArr.map((item) => {
    ul.innerHTML += `<li class="list"> <span class="todo__title"> ${item} </span> <button class="delete"> Delete </button> <button class="edit"> Edit Task </button> </li>`;
  });

  let removeButton = document.querySelectorAll(".delete");
  let removeButtonArray = Array.from(removeButton);
  removeButtonArray.map((button, index) => {
    button.addEventListener("click", () => {
      mainArr.splice(index, 1);
      todo();
    });
  });

  // Edit Button:
  let editButton = document.querySelectorAll(".edit");
  let editButtonArray = Array.from(editButton);
  editButtonArray.map((editItem, index) => {
    editItem.addEventListener("click", () => {
      input.value = mainArr[index];
      todo();
      nothing(index);
      // Save Button:
      let saveTask = document.querySelectorAll(".save");
      let saveTaskArray = Array.from(saveTask);
      saveTaskArray.map((saveItem) => {
        saveItem.addEventListener("click", () => {
          mainArr.splice(index, 1, input.value);
          todo();
        });
      });
    });
  });

  function nothing(a) {
    ul.children[
      a
    ].outerHTML = `<li class="list"> <span class="todo__title"> ${input.value} </span> <button class="delete"> Delete </button> <button class="edit"> Edit Task </button> <button class="save"> Save </button> </li>`;
  }
}
