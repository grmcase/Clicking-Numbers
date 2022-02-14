function box (color){
    let boxref = this;
    this.number=0;
    this.ele=document.createElement("div");
    this.ele.style.backgroundColor = color;
    this.ele.style.borderRadius = "10px";
    this.ele.style.width = "200px";
    this.ele.style.height ="100px";
    this.ele.style.display = "flex";
    this.ele.style.justifyContent = "center";
    this.ele.style.alignItems = "center";
    this.ele.style.color = "white";
    this.ele.style.fontSize = "18px";
    this.ele.addEventListener("click", function (){
        boxref.numberUP(1);
    })

    this.eleNum=document.createElement("div")
    this.eleNum.innerHTML=this.number;


    this.ele.appendChild(this.eleNum);

    document.body.appendChild(this.ele);
}


box.prototype.numberUP = function (nm){
    this.number=this.number+nm;
    this.eleNum.innerHTML=this.number;
}


let list=["red", "blue", "purple"];
let elements=[];

for (obj in list){
    elements.push(new box(list [obj]));

}

