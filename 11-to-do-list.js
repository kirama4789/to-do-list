let toDoList = [];

renderToDoList();

function renderToDoList() {
  let toDoListhtml = '';

  for (let index = 0; index < toDoList.length; index++) {
    const tasksObj = toDoList[index];
    const { name, dueDate } = tasksObj;

    const html = `
    <p class='p'>
      ${name} ${dueDate}
      <button class='delete' onclick="
        toDoList.splice(${index}, 1);
        renderToDoList()
      ">delete</button>
     </p>`;

    toDoListhtml += html;
  }

  document.querySelector('.js-div').innerHTML = toDoListhtml;
}

function addTask() {
   const inputElem = document.querySelector('.js-name-input');
   const inputDate = document.querySelector('.js-date');

   const name = inputElem.value;
   const dueDate = inputDate.value;

   toDoList.push({ name, dueDate });

   console.log(toDoList);

   inputElem.value = '';
   inputDate.value = ''; 
   
   renderToDoList();
}
function checkIfClear(event) {
  if (event.key ==='Enter') {
    addTask();
  }
}



