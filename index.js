
function submit(email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const object = document.querySelector('.email');

    if(object.value.match(validRegex)){
        alert("Submitted!")
    }else{
        alert("Invalid email address!");
    }
    
}