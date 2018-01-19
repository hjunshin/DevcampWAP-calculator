var calNum = [],
    total = 0,
    plus = "+",
    minus = "-",
    clear = "C",
    equal = "=";

//
function btnNum(e){
  var num = Number(e.textContent),
      iptNum = document.getElementById("ipt_num");

      iptNum.value = iptNum.value + num;
}

function btnCal(e){
  var cal = e.textContent,
      proNum = document.getElementById("process_num"),
      iptNum = document.getElementById("ipt_num");

  switch(cal){
    case plus:
        calProcess(cal);
        break;
    case minus:
        calProcess(cal);
        break;
    case clear:
        calProcess(cal);
        console.log("지움");
        break;
    case equal:

        console.log("계산");
        break;
    default:
        return;
  }

}

function calProcess(c){
  var proNum = document.getElementById("process_num"),
      iptNum = document.getElementById("ipt_num");

  if(c === plus || c === minus){



    iptNum.value = "";

  }else if(c === clear){
    calNum = [];
    proNum.innerText = "";
    iptNum.value = "";
  }else if(c === equal){
    proNum.innerText = "";
  }

}


function onlyNumber(event){
  event = event || window.event;
  var keyID =(event.which) ? event.which : event.keyCode;

  if((keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 110){
    return;
  }else if(keyID == 107 || keyID == 109 ){

    switch(keyID){
      case 107:
          c = plus;
          calProcess(c);
          break;
      case 109:
          c = minus;
          calProcess(c);
          break;
      default:
          return;
    }

  }else{
    return false;
  }

}

function removeChar(event){
  event = event || window.event;
  var keyID =(event.which) ? event.which : event.keyCode;
  var numReg = /[^0-9]/g;

  if( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 110){
    return;
  }else if(keyID == 107 || keyID == 109){
    event.target.value = event.target.value.replace(numReg, "");
    return;
  }else{
    event.target.value = event.target.value.replace(numReg, "");
  }



}
