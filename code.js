
let Value = document.getElementsByTagName("input");
let btn = document.getElementsByTagName("button")[0];
let arr =[];


btn.addEventListener("click", ()=>{
          if(fillCheck(Value) == 0){
        alert("KV лучший");
    }
    else{
        let user = new User(Value[0].value,Value[1].value,Value[2].value,Value[3].value,Value[4].value,Value[5].value,Value[6].value,Value[7].value,Value[8].value,Value[9].value,);
        arr.push(user);
        user.print();
    } 

})



  

class User {
    constructor(fullName1, BDate1, grade1, activity1, fee1, fullName2, BDate2, grade2, activity2, fee2) {
        this.id = fullName1 +""+ count();
        this.fullName1 = fullName1;
        this.BDate1 = BDate1;
        this.grade1 = grade1;
        this.activity1 = activity1;
        this.fee1 = fee1;
        this.fullName2 = fullName2;
        this.BDate2 = BDate2;
        this.grade2 = grade2;
        this.activity2 = activity2;
        this.fee2 = fee2;
        this.interface = `
        <p >User ${this.id}:</p> 
        <p id="little">Participiant 1: </p>
        <p id="little">name is ${this.fullName1},</p>
        <p id="little">Birdth date is ${this.BDate1},</p>
        <p id="little">grade ${this.grade1},</p>
        <p id="little">Activity - ${activity1},</p>
        <p > fee: ${this.fee1}.</p>
        <pid="little"></p>
        <p id="little">Participiant 2: </p>
        <p id="little">name is ${this.fullName2},</p>
        <p id="little">Birdth date is ${this.BDate2},</p>
        <p id="little">grade ${this.grade2},</p>
        <p id="little">Activity - ${activity1},</p>
        <p> fee: ${this.fee2}.</p>
        <hr>
    `; 
    }

    print(){
        let container = document.getElementsByClassName("reg")[0];
        let elem = document.createElement("div");
        elem.classList.add("user");
        elem.innerHTML = this.interface;
        container.appendChild(elem);
       

    }
}



    const count = c();

    function c(){
        let i = 0;
        return function(){return i++}
    }



    function fillCheck(array){
        for (let index = 0; index < 9; index++) {
            if(array[index].value != ""){}
            else{
                return(0);  
            }
        }   
         return(1);
    }
   
