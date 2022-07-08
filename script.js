const [input0,  input1] = document.querySelectorAll("input");

const btn = document.querySelector ("button");

function mudanca(){
  
    if(input0.value && input1.value.length >= 8) {
      btn.removeAttribute("disabled");
      btn.classList.add("ativo");
    }else{
      btn.setAttribute("disabled", "disabled");
    }
    
  }

  input0.addEventListener("input", mudanca);
  input1.addEventListener("input", mudanca);

