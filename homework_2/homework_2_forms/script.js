const btn = document.getElementById("submit");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const formInfo = document.querySelector(".form_info");
const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");
const largeDiv = document.querySelector(".large_div");
const tableInfo = document.querySelector(".table_info");
const name_ = document.querySelector("#name");
const email_ = document.querySelector("#email");
const phone_ = document.querySelector("#phone");
const file_ = document.querySelector("#choose-file");
const birthday_ = document.querySelector("#birthday");
const gender_ = document.querySelector("#gender");
const address_ = document.querySelector("#address");
const city_ = document.querySelector("#city");
const state_ = document.querySelector("#state");
const country_ = document.querySelector("#country");

window.onload = validation;
function validation () {
    name_.addEventListener("input",() =>{
        if(name_.value === ""){
            document.querySelector(".error_name").textContent = "Please enter name"
        }else{
            document.querySelector(".error_name").textContent = ""
        }
    })
    email_.addEventListener("input",() =>{
        var email_reg = /\S+@\S+\.\S+/;
        if(email_.value === ""){
            document.querySelector(".error_email").textContent = "Please enter email"
        }else if(!email_reg.test(email_.value)){
            document.querySelector(".error_email").textContent = "Email is invalid"
        }else{
            document.querySelector(".error_email").textContent = ""
        }
    })
    phone_.addEventListener("input",() =>{
        let phone_reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        if(phone_.value === ""){
            document.querySelector(".error_phone").textContent = "Please enter phone number"
        }else if(!phone_reg.test(phone_.value)){
            document.querySelector(".error_phone").textContent = "Phone number is invalid"
        }else{
            document.querySelector(".error_phone").textContent = ""
        }
    })
    address_.addEventListener("input",() =>{
        if(address_.value === ""){
            document.querySelector(".error_address").textContent = "Please enter address"
        }else{
            document.querySelector(".error_address").textContent = ""
        }
    })
    city_.addEventListener("input",() =>{
        if(city_.value === ""){
            document.querySelector(".error_city").textContent = "Please enter city"
        }else{
            document.querySelector(".error_city").textContent = ""
        }
    })
    state_.addEventListener("input",() =>{
        if(state_.value === ""){
            document.querySelector(".error_state").textContent = "Please enter state"
        }else{
            document.querySelector(".error_state").textContent = ""
        }
    })
    country_.addEventListener("input",() =>{
        if(country_.value === ""){
            document.querySelector(".error_country").textContent = "Please enter country"
        }else{
            document.querySelector(".error_country").textContent = ""
        }
    })
}

btn.addEventListener("click", (e) => {
    e.preventDefault()
    getImgData();
    if(name_.value === "" || email_.value === "" || phone_.value === "" || address_.value === "" || city_.value === "" || state_.value === "" || country_.value === ""){
        alert("please fill in the fields")
        return false
    }
    var formData = new FormData(document.querySelector('#formData'))
    tableInfo.textContent = " "
    for(let [key, value] of formData) {
        let span = document.createElement("span");
        span.setAttribute("class","span_info")
        span.textContent = `${key} : ${value} `
        tableInfo.appendChild(span)
    }
    largeDiv.style.display = "none"
    modal.style.display = "block";        
    span.onclick = function() {
        largeDiv.style.display = "flex"
        modal.style.display = "none";
        document.querySelector(".dataContainer").textContent = " "
        }        
        window.onclick = function(event) {
        if (event.target == modal) {
            largeDiv.style.display = "flex"
            modal.style.display = "none";
        }        
    }
})
  function getImgData() {
    const files = chooseFile.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        imgPreview.innerHTML = '<img src="' + this.result + '" class="image" />';
      });    
    }
  }


