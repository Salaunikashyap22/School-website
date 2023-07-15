// Nama validation
function hello() {
    var name = document.getElementById("name").value;
    {
        if (name == "") {
            document.getElementById("err1").innerHTML = "please enter the user name";
            return false;
        }

        var pattern = /^[a-zA-Z]/;
        if (!name.match(pattern)) {
            document.getElementById("err1").innerHTML = "*Enter only charechter";
            return false;
        }
        if (name.length < 4 || name.length > 22) {
            document.getElementById("err1").innerHTML = "*Length must be in between 4 to 22";
            return false;
        }
    }


    // Email validation

    var email = document.getElementById("email").value;
    {
        if (email == "") {
            document.getElementById("err2").innerHTML = "please enter your email address name";
            return false;
        }
        if (email.indexOf('@') <= 0) {
            document.getElementById("err2").innerHTML = "*Enter valid email";
            return false;

        }
        if (email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.') {
            document.getElementById("err2").innerHTML = "*Enter valid email";
            return false;
        }
    }


    // contact validation


    var contact = document.getElementById("contact").value;
    {
        if (contact == "") {
            document.getElementById("err3").innerHTML = "please enter your contact number";
            return false;
        }
        if (contact.length != 10) {
            document.getElementById("err3").innerHTML = "please enter only ten digit of number";
            return false;

        }
    }

    var comment= document.getElementById("comment").value;
    {
        if (comment== "") {
            document.getElementById("err4").innerHTML = "please enter your comment";
            return false;
        }

        var pattern = /^[a-zA-Z]/;
        if (!comment.match(pattern)) {
            document.getElementById("err4").innerHTML = "*Enter only charechter";
            return false;
        }
        if (comment.length<10) {
            document.getElementById("err4").innerHTML = "Your comment should at least 10 words";
            return false;
        }
    }


}