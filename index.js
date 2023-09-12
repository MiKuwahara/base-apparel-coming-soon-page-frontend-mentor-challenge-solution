
function submit(email) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const object = document.querySelector('.email');

    if(object.value.match(validRegex)){
        alert("Submitted!")
        document.querySelector('.email').value = '';
    }else{
        document.querySelector('.invalid-email-text').innerHTML = "Please provide a valid email";

    }
    
}

function reset(){
    if(document.querySelector('.email').value === ''){
        document.querySelector('.invalid-email-text').innerHTML = '';
    }
    
}
