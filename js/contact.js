// CONTACT PAGE BEGINNING

window.onload = function() {
    var user = 'victoria.hertel.velasco';
    var domain = 'gmail.com';
    var element = document.createElement('a');
    
    element.href = 'mailto:' + user + '@' + domain;
    element.innerHTML = 'victoria.hertel.velasco@gmail.com';
    element.className = 'email-link';

    document.getElementById('email').appendChild(element);
};

// CONTACT PAGE END








