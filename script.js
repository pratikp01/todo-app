//body-div
const root=document.querySelector("#root");

//body-div-div
const titleSection=document.createElement("div");
titleSection.id="titleSection";
//body-div-div-img
const logo=document.createElement("img");
logo.setAttribute("src","./assets/favicon/favicon-96x96.png");
// logo.src="./assets/favicon/web-app-manifest-512x512"

//body-div-div-h1
const mainTitle= document.createElement('h1');
mainTitle.innerText= "My ToDo List";

titleSection.append(logo,mainTitle)
//------------------------------------------------------------------------------
//body-div-h3
const subTitle= document.createElement("h3");
let date= Date().slice(0,15).toString();
subTitle.innerText= "My Tasks - "+ date.slice(0,3) + " (" +date.slice(4,15)+")";

//-------------------------------------------------------------------------------
//body-div-div
const addTaskSection= document.createElement("div");

//body-div-div-form
const addForm= document.createElement("form");
addForm.className="addForm";

// addForm.addEventListener('submit',function(event){
//     const taskLi= document.createElement("li");
//     taskLi.innerText = event.target.elements.task.value;
// })

//body-div-div-form-input
const addInput= document.createElement("input");
addInput.type="text";
addInput.id="inputText";
addInput.className="add-input";

//body-div-div-form-button
const addMainBtn= document.createElement("button");
addMainBtn.htmlFor="input-text";
addMainBtn.className="addMain";

//body-div-div-form-button-img
const bImg= document.createElement("img");
bImg.setAttribute("src","./assets/add-button.png");


addMainBtn.append(bImg);
addForm.append(addInput,addMainBtn);
addTaskSection.append(addForm);
//-------------------------------------------------------------------------------
//body-div-header
const header= document.createElement("header");
const headerTitle= document.createElement("ul");
const checkBoxTitle= document.createElement("li");
checkBoxTitle.innerText="Check";
const descriptionTitle=document.createElement("li");
descriptionTitle.innerText="Tasks Description";
const priorityTitle=document.createElement("li");
priorityTitle.innerText="Priority";
const deleteTitle=document.createElement("li");
//body-div-header Appenders
headerTitle.append(checkBoxTitle, descriptionTitle,priorityTitle,deleteTitle);
header.append(headerTitle);

//-------------------------------------------------------------------------------
//Task List Section
//body-div-div
const taskListSec= document.createElement("div");

//body-div-div-ul
const ulTaskList=document.createElement("ul");

taskListSec.append(ulTaskList);
//body-div-div-ul-li
//logic here to add li based on input

addForm.addEventListener("submit",function(event){
    //console.dir(addForm.inputText.value);
    if(!event.target.elements.inputText.value){
        return;
    }
    // console.dir(event);
    event.preventDefault();
    const liTaskList=document.createElement("li");
    liTaskList.innerText=event.target.elements.inputText.value;
    liTaskList.className="task-list";
    liTaskList.style.cursor="pointer";

    liTaskList.addEventListener("click",function(){
       liTaskList.classList.toggle("done"); 
    })

    const delBtn= document.createElement("button");
    delBtn.className="delBtn"
    const delBtnImg= document.createElement("img");
    delBtnImg.setAttribute("src","./assets/delete-button.jpg");
    
    delBtn.addEventListener("click",function(){
        liTaskList.remove();
    })


    liTaskList.append(delBtn);
    delBtn.append(delBtnImg);
    ulTaskList.append(liTaskList);
    event.target.elements.inputText.value="";
})



//-------------------------------------------------------------------------------
//body-div Appenders
root.append(titleSection,subTitle,addTaskSection,header,taskListSec);