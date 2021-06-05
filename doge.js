

var sourch = "t";

  function change(){
      var doge_change = document.getElementById('doge_img1');

      switch(sourch){
          case "t":
              doge_change.src = "doge_img/doge2.jpg";
              sourch = "f";
              break;
          case "f" :
            doge_change.src = "doge_img/doge3.jpg";
            sourch = "d3";
            break;  
           case "d3":
            doge_change.src = "doge_img/doge4.jpg";
            sourch = "d4";
            break; 
           case "d4":
            doge_change.src = "doge_img/doge5.jpg";
            sourch = "d5";
            break;    
            case "d5":
                doge_change.src = "doge_img/doge6.jpg";
                sourch = "d6";
                break;
             case "d6":
                doge_change.src = "doge_img/doge1.jpg";
                sourch = "t";
                break;   
      }
  }

  setInterval("change()",1000);