function formValidate(){
    var name = document.getElementById('formname').value;
    var email = document.getElementById('formemail').value;
    var title = document.getElementById('formtitle').value;
    var message = document.getElementById('formmessage').value;
    var regex = /[0-9]/;
    var regexx;
    if (name.length < 4) {
        alert ('Your Name shouldn\'t be less than 4 words');
        return false;
    } else if (message.length < 20) {
        alert('Your messsage shouldn\'t be less than 20 words');
        return false;
    } else if (name.match(regex)) {
        alert('Name can\'t contain numbers');
         return false;
    } else if (title.match(regex)) {
        alert('Title can\'t contain numbers');
         return false;
    } else if (message.match(regex)) {
        alert('Messages can\'t contain numbers');
         return false;
    } else {
        return true;
    }
    
}

