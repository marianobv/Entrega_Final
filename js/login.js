
//1. Declaro campos vacíos
function emptyfield (){
    let fields = document.getElementsByTagName("input")
    
    for (let field of fields) {
      if (field.value==="") {
        return false
      } 
    }
    return true
    }

  

//2. Declaro funciones de errores y éxitos
    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }

    //3.Combino funciones
    function field_valid () {
        if(emptyfield()){
        showAlertSuccess()
        console.log(showAlertSuccess)
        }
        else
        {
        showAlertError()
        }
        }
        
    //4.Agrego 1 listener 
          enter.addEventListener("click", () => {
            field_valid () 
          })
        