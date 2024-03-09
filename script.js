//---to get input form user---//
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//----function in html addTask define here to add input---//
function addTask(){
    if(inputBox.value === ''){
        alert("You Must Write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //---for add the cross sign--//
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        //--for showing the cross sign ---/
        li.appendChild(span);
    }

    //---for clearing input fild---//
    inputBox.value = " ";

    //whenever we call new task it save the new data--//
    saveData();
}

//-----for task will be checked or unchecked and delete---//
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//----after refresh the page the content remains same or save data---//

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

//----display the save data when we open the app----//
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
