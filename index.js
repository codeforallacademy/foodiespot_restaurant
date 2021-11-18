const contact = () => {
    var fName = document.getElementById('fname');
    var lName = document.getElementById('lname');
    var emailId = document.getElementById('emailid');
    var message = document.getElementById('message');

    Email.send({
        Host: "smtp.gmail.com",
        // Give the mail id created with less security access
        Username: "",
        // Give the password of the mail id created with less security access
        Password: "",
        // Give the mail id created with less security access
        From: "",
        // Give the mail id of the bussiness management admin
        To: "",
        Subject: "Request Alert",
        Body: `<h4>We have a new request from ${fName.value}</h4><br /> 
                Details: <b>${fName.value} ${lName.value}</b><br />
                Email id: <b>${emailId.value}</b><br />
                Message: <b>${message.value}</b> <br />
                `,

    })
        .then((responseData) => {
            alert("Your message is delivered successfully");
            fName.value = '';
            lName.value = '';
            emailId.value = '';
            message.value = '';
        }).catch(err => {
            alert(`something went wrong! Please try later`);
        });
}

