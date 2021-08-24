
showtask()
let addtaskinput = document.querySelector(".addtaskinput");
let addtaskbtn = document.querySelector(".addtaskbtn");

addtaskbtn.addEventListener("click", function () {
  addtaskinputval = addtaskinput.value;
  if(addtaskinputval .trim()!=0){

  
  let webtask = localStorage.getItem("localtask");
  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }
  taskObj.push(addtaskinputval);
  
  localStorage.setItem("localtask", JSON.stringify(taskObj));
  addtaskinput.value = "";
  }
  showtask()
})

function showtask() {
  let webtask = localStorage.getItem("localtask");
  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }
  let html = "";
  let addedtasklist = document.getElementById("addedtasklist");
  taskObj.forEach((item, index) => {

  

    html += `<div class="todo">
           
            <li class="todo-list todo-item">${item}</li>
            <button type="button" onclick="edittask(${index})" class="update-btn"><i class="fas fa-edit" ></i></button>
            <button type="button" onclick="deleteitem(${index})" class="delete-btn"><i class="fas fa-trash"></i></button>
          </div>`;
   
  })
  addedtasklist.innerHTML = html;
}

//edittask
function edittask(index){
    let saveindex = document.querySelector(".saveindex");
    let addtaskbtn = document.querySelector(".addtaskbtn");
    let savetaskbtn = document.querySelector(".savetaskbtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    
    addtaskinput.value = taskObj[index];
    addtaskbtn.style.display ="none";
    savetaskbtn.style.display = "block";
    
}

//savetask
let savetaskbtn = document.querySelector(".savetaskbtn");
savetaskbtn.addEventListener("click",function(){
    let addtaskinput = document.querySelector(".addtaskinput");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);  
    let saveindex = document.querySelector(".saveindex").value;
    taskObj[saveindex] = addtaskinput.value;

    
    savetaskbtn.style.display="none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    addtaskinput.value = "";
    showtask();

})

//delete item

function deleteitem(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    taskObj.splice(index,1);
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    showtask();
}

//delete all
let deleteallbtn = document.querySelector(".deleteallbtn");
deleteallbtn.addEventListener("click",function(){
    let savetaskbtn = document.querySelector(".savetaskbtn");
    let addtaskbtn = document.querySelector(".addtaskbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    if (webtask == null) {
        taskObj = [];
      } else {
        taskObj = JSON.parse(webtask);
        taskObj = [];
      }
      savetaskbtn.style.display ="none";
      addtaskbtn.style.display ="block";
      localStorage.setItem("localtask",JSON.stringify(taskObj));
      showtask();
})

