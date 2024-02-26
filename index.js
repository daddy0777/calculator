// let btn = document.getElementById("btn");

// btn.addEventListener("click",()=>{
//     let div  = document.createElement("div");
//     let label1 = document.createElement("label");
//     let input1 = document.createElement("input")
//     input1.setAttribute("type","text")
//     label1.innerHTML= "Networking"
//    div.append(label1)
//    div.append(input1)

//     let label2 = document.createElement("label");
//     let input2 = document.createElement("input")
//     input1.setAttribute("type","text")
//     label2.innerHTML= "FrontEnd"
//    div.append(label2)
//    div.append(input2)

//     let label3 = document.createElement("label");
//     let input3 = document.createElement("input")
//     input3.setAttribute("type","text")
//     label3.innerHTML= "OOPS"
//    div.append(label3)
//    div.append(input3)

//    let arr = Array.from(input);
//    arr.forEach((i)=>{
//     parseInt(i.value)
//    })
// document.body.append(div)
// })

let input = document.getElementById('inpBox');
let button = document.querySelectorAll('button');
let btnArray = Array.from(button);
 let str = ' ';
 btnArray.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
         if(e.target.innerHTML == " = "){
            str = eval(str)
            input.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
             str = str.substring(0,str.length-1)
            input.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = " ";
            input.value = str;
        }
        else{
        str += e.target.innerHTML;
        console.log(e.target.innerHTML)
        input.value = str;
      }
    })
})
