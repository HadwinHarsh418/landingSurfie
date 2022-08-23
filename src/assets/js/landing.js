function gotoLink(url) {
    setTimeout(() => {
        window.open(url, '_blank')
    }, 500);
}



function userAction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(() => { x.className = x.className.replace("show", ""); }, 3000);
    let email = document.getElementById('emailSubs').value;
    if (!email) {
        alert('Please enter email.')
        return
    }
    else {
        fetch('https://api.surfie.pt/newsLetter', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email }),
        }).then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        )
    }
}