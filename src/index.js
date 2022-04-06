import "./index.css"
let img=document.createElement("img");
img.setAttribute("id","mainlogo")
img.src="https://imgs.search.brave.com/ZXJm9X1afrZDKefPcwLIKBvJQRr6lKkdXOwQmDYRYug/rs:fit:900:900:1/g:ce/aHR0cHM6Ly95dDMu/Z2dwaHQuY29tL2Ev/QUFUWEFKeHBxYTNy/T09HSDVVd1RRQjda/Yy1MenFlU2M4ZzF4/bDlxYW9nPXM5MDAt/Yy1rLWMweGZmZmZm/ZmZmLW5vLXJqLW1v"

let div=document.getElementById("logo")
div.append(img)

document.getElementById("btn").addEventListener("click",data);
let arr = JSON.parse(localStorage.getItem("todo")) || [];
window.addEventListener("load",()=>{
    save(arr);
})
function data(event) {
  event.preventDefault();
  let text = document.getElementById("area").value;
  arr.push(text);
  localStorage.setItem("todo", JSON.stringify(arr));
  save(arr);
}

function save(elem) {
    document.getElementById("root").innerHTML=""
  arr.forEach((elem,i) => {
    var div1 = document.createElement("div");
    var p = document.createElement("p");
   p.innerText=elem
   console.log(elem)
   div1.append(p);
   document.getElementById("root").append(div1)
   
  });
}
