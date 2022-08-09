const x = document.getElementById("main") 

  
    x.remove(main)
   // const newHeader = document.body.append(<h1 id ="victory"></h1>)
var newHeader = document.createElement("h1")
newHeader.setAttribute('id','victory')
newHeader.textContent += "YOUR-NAME is the champion"
