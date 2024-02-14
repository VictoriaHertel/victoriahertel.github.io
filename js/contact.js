// CONTACT PAGE BEGINNING

window.onload = function() {
    var user = 'v.hertel';
    var domain = 'gmx.de';
    var element = document.createElement('a');
    
    element.href = 'mailto:' + user + '@' + domain;
    element.innerHTML = 'v.hertel@gmx.de';
    element.className = 'email-link';

    document.getElementById('email').appendChild(element);
};

// CONTACT PAGE END








