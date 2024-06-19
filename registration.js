function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const tickets = document.getElementById('tickets').value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;

    // -------FORM VALIDATION------

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name with letters and spaces only.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number in the format 250 788 888 888.');
        return false;
    }

    if (isNaN(tickets) || tickets < 1 || tickets > 10) {
        alert('Please enter a number of tickets between 1 and 10.');
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    // ------VALIDATOR FOR NAME INPUT-----------

    const nameRegex = /^[A-Za-z\s]*$/;

    nameInput.addEventListener('input', () => {
        let value = nameInput.value;
        if (!nameRegex.test(value)) {
            nameInput.setCustomValidity('Only letters and spaces are supported by this field.');
        } else {
            nameInput.setCustomValidity('');
        }
        nameInput.reportValidity();
        // Filter out invalid characters
        nameInput.value = value.replace(/[^A-Za-z\s]/g, '');
    });

    // ------- VALIDATOR FOR PHONE NUMBER INPUT ------------------

    const phoneRegex = /^\d{10}$/;

    phoneInput.addEventListener('input', () => {
        let value = phoneInput.value;

        if (!phoneRegex.test(value)) {
            phoneInput.setCustomValidity('Phone number must be 10 digits.');
        } else {
            phoneInput.setCustomValidity('');
        }
        phoneInput.reportValidity();

        // Filter out invalid characters
        phoneInput.value = value.replace(/[^0-9]/g, '');
    });

});
