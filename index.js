document.addEventListener("DOMContentLoaded", function() {
submit.addEventListener("click", (e)=>{
        e.preventDefault();
        let title=document.getElementById("title").value;
        let desc=document.getElementById("description").value;
        let todolist=[];
        localStorage.setItem("todo",JSON.stringify({title,desc}));
        todolist.push({title,desc});
        displayArea.innerHTML=`
        <h1>${title}</h1>
        <h4>${desc}</desc>
        `
})
delete1.addEventListener("click", (e)=>{
         e.preventDefault();
         localStorage.removeItem("todo");
         displayArea.innerHTML="";
})
});
