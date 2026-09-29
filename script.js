// ================= DARK / LIGHT MODE =================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});


// ================= PROJECT BUTTON =================

function showMessage(message) {

    alert(message);

}


// ================= MOVIE SELECTION =================

function showMovie() {

    const selectedMovie =
        document.querySelector(
            'input[name="movie"]:checked'
        );

    const result =
        document.getElementById("movieResult");


    if (selectedMovie) {

        result.textContent =
            "You selected: " +
            selectedMovie.value;

    } else {

        result.textContent =
            "Please select a movie first.";

    }

}


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value;

        alert(
            "Thank you, " +
            username +
            "! Your message has been received."
        );

        contactForm.reset();

    }
);