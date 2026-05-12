<<<<<<< HEAD
3function Output (){
    console.log("Hi Team , You are")
=======
function Output (){
    //console.log("Hi Team , You are")
>>>>>>> f10cc97cf6c1da0d3ad4cc57598a7a478300625d

    let aa: number = 44;
        if (aa==100)
        {            //console.log("Excellent");
        }else if (aa>=75){
            //console.log("Good Marks");
         } else if (aa>=50){
            //console.log("Average");
         }else {
            //console.log("Failed in Exam");
         }

    
        }


Output()
Output()

function Result (Mark:number){

if (Mark<=35){
   return("Failed")
}else if (Mark>=35 && Mark<=50){
   return("Average")
}else if (Mark>=51 && Mark<=80){
   return("Good")
}else {return("Excellent")}

}

//console.log(Result(83));

function chocolate (price: Number){
if (price <= 10){
   return"Kitkat";
}else if (price >=11 && price <=50 ){
   return "Milky bar";
}else if (price >=51 && price <=100){
   return "Dairy milk";
}else {
   return"No chocolate available";
}
} console.log (chocolate(102))