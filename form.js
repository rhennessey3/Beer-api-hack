const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const options = {
        method: 'POST',
        body: formData
    };

    
    fetch("https://submit-form.com/your-form-id", options, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            message: "Hello, World",
        }),
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        });

});