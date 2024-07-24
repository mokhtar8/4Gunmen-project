const inputs = document.querySelectorAll("input"); //get inputs
const addBtn = document.getElementById("Addbtn"); //get button
const Box = document.getElementById("box");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let empty = false;
  inputs.forEach((e) => {
    if (e.value === "") {
      empty = true;
    }
  });
  if (empty) {
    alert("Please fill out all inputs");
  } else {
    inputs.forEach((value) => {
      const inputValue = value.value;
      const newLi = document.createElement("span");
      newLi.innerHTML = inputValue;
      Box.appendChild(newLi);
      console.log(inputValue);
      value.value = "";
    });

    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");
    btn1.innerText = "حذف";
    btn2.innerText = "ویرایش";
    btn3.innerText = "جزییات";

    btn1.classList.add("delete");
    btn2.classList.add("edit");
    btn3.classList.add("detials");
    Box.appendChild(btn1);
    Box.appendChild(btn2);
    Box.appendChild(btn3);
  }
});

// https://stackoverflow.com/questions/72591283/creating-an-edit-buttonto-do-app-javascript

//-----------------------------------------------------------------------------------------------
