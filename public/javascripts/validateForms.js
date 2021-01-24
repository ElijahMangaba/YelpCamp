// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
    
    // This is for the multi-selectable file input in the new campground ejs page. Titles of the images you selected will show up now in the input 
    bsCustomFileInput.init()

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.validated-form')

    // Loop over them and prevent submission
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()