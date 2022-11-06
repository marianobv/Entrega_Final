let var_user_menu = document.getElementById("menu_user_2")
let get_ls = localStorage.getItem("text");
console.log(get_ls)
var_user_menu.innerHTML += get_ls

function user_access(){
    if(localStorage.getItem("text") == null || localStorage.getItem("LoginID") == null){
        alert("ACCESS DENIED")
        alert("Debe loggearse con su nombre de usuario")
        alert("Será conducido al login principal")
        window.location = "index.html"

    }
    else{
        alert("ACCESS GRANTED")
    }
    }

function load_mail(){
    document.getElementById("email_profile").value = localStorage.getItem("LoginID")
}

function validData(dato) {
    if (dato.value.length == 0) {
        dato.classList.add("is-invalid")
    }
    else { 
        dato.classList.add("is-valid")
    }
}

function validaDataInput(input) {
    validData(input);
    input.addEventListener("input", () => {
        input.classList.remove("is-valid")
        input.classList.remove("is-invalid")
        validData(input);
    });
}

function general_validation(){
    if(first_name.classList.contains("is-valid") && first_surname.classList.contains("is-valid") && email_profile.classList.contains("is-valid")
    ){
        let success_changes = ""
        success_changes +=
        `  
        <div class="alert alert-success" role="alert" id="alert-success">
    <p>¡Has completado con éxito!</p>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
        `
        document.getElementById("success_changes").innerHTML = success_changes

        localStorage.setItem("first_name",first_name.value)
        localStorage.setItem("second_name",second_name.value)
        localStorage.setItem("first_surname",first_surname.value)
        localStorage.setItem("second_surname",second_surname.value)
        localStorage.setItem("email_profile",email_profile.value)
        localStorage.setItem("contact_number",contact_number.value)
        localStorage.setItem("profile_photo",profile_photo.src)


    } else{
        let success_changes = ""
        success_changes +=
        `  
        <div class="alert alert-danger" role="alert">
        <strong>Atento!</strong> Debes llenar los campos oblgatorios del formulario
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `
        document.getElementById("success_changes").innerHTML = success_changes

    }
}

function already_loaded(){
    if(localStorage.getItem("first_name") !== null){
        first_name.value =localStorage.getItem("first_name") 
        second_name.value =localStorage.getItem("second_name")
        first_surname.value =localStorage.getItem("first_surname")
        second_surname.value =localStorage.getItem("second_surname")
        contact_number.value =localStorage.getItem("contact_number")
        profile_photo.src=localStorage.getItem("profile_photo")
    }else{
    first_name.value =""
        second_name.value =""
        first_surname.value =""
        second_surname.value =""
        contact_number.value =""
        profile_photo.src="descarga.jpg"
    }

}

function change_Photo() {
    profile_photo.removeAttribute("src")
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convierte la imagen a una cadena en base64
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

 

document.addEventListener("DOMContentLoaded", function(){
    
    user_access()
    load_mail()
    already_loaded()

  

    let first_name =document.getElementById("first_name")
    let first_surname =document.getElementById("first_surname")
    let email_profile =document.getElementById("email_profile")

    let save_changes = document.getElementById("save_changes")
   

    save_changes.addEventListener("click",function(){
        validaDataInput(first_name)
        validaDataInput(first_surname)
        validaDataInput(email_profile)
        general_validation()
    })
       

    let myfile = document.getElementById("myfile")
    let profile_photo = document.getElementById("profile_photo");


  

      myfile.addEventListener("change",function(e){
        change_Photo()
      })

    

})