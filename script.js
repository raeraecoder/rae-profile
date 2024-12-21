let emailElement=document.querySelector("#email");
let messageElement=document.querySelector('#message')
let submitButton=document.querySelector("#submit-button")
 submitButton.addEventListener('click', function (e){
    e.preventDefault()
    alert("hello")
    let emailValue=emailElement.value;
    let messageValue=messageElement.value;
    console.log("email:"+messageValue)
    console.log("message:"+emailValue)
})