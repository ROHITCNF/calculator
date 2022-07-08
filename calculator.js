// set the value of readme to true
document.querySelector("#answer").readonly=true;
//we will use the output variable to output our value in input tag
//output.value will change the value of our input tag
let output =document.querySelector("#answer");

let value="";

var number_buttons=document.querySelectorAll(".input").length;
//now retrieve the button clicked
for(let i=0;i<number_buttons;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
        buttonAnimation(i);
    if (buttonInnerHTML == 'x') {
      // buttonAnimation(buttonInnerHTML);
          buttonInnerHTML = '*';
          value += buttonInnerHTML;
          output.value = value;

      }
      else if (buttonInnerHTML == 'C') {
          value = "";
          output.value = value;
        //buttonAnimation(buttonInnerHTML);
      }
      else if (buttonInnerHTML == '=') {
        //eval function evaluates the string value
          output.value = eval(value);
      //  buttonAnimation(buttonInnerHTML);
      }
      else {
          value += buttonInnerHTML;
          output.value = value;
        //  buttonAnimation(buttonInnerHTML);
      }

  } );
}
function buttonAnimation(key){
  //now touch the class of the button
var active_key=document.querySelectorAll("button")[key];

  active_key.classList.add("pressed");
  setTimeout(function(){
    active_key.classList.remove("pressed");
  },100);
    //in mili second
}
