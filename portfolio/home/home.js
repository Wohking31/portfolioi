

const getstarted = document.getElementById("getstartedbtn")
const popup = document.getElementById("popupcontainer")
const closebtn = document.getElementById("close")
const form=document.getElementById("formContainer")
console.log(getstarted)



getstarted.addEventListener('click', function(){
    popup.style.display="flex"
})
closebtn.addEventListener('click',function(){
    popup.style.display="none"
})
// validating the form pasword
form.addEventListener('submit',function(){
    const password=document.getElementById('password').value
    const confirmPassword=document.getElementById('confirm-password').value
    if(password!==confirmPassword){
        alert("password does not match")
        return
    }

})