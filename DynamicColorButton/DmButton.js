function AddBtnColor(color){
    debugger;
    document.getElementById("createBtn").addEventListener("click", function(){
        let color = document.getElementById("txt").value;

        let btn = document.createElement("button");
        console.log(btn)
        btn.onclick = function(){
            window.document.body.style.backgroundColor = color;
            alert("Color Changed");
        };

        btn.innerHTML = color;
        btn.style.backgroundColor = color;
        btn.style.color = "white";
        document.getElementById("buttonContainer").appendChild(btn);
        btn = null;
    });
}