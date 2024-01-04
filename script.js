// DOM input elements

const firstName = document.querySelector('#first_name')
const lastName = document.querySelector('#last_name')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phone_number')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm_password')

// DOM elements

const errorMessage = document.querySelector('.error-message')
const submitBtn = document.querySelector('#submit_button')

// Functions

function toUpper(input) {
    return input.charAt(0).toUpperCase() + input.slice(1)
}

function validate(element) {
    let isValid = element.checkValidity()

    if (isValid) {
        element.classList.remove('error')
    } else {
        element.classList.add('error')
    }
}

function validatePassword(a, b) {
    a = a.value
    b = b.value

    if (b != a) {
        confirmPassword.classList.add('error')
        errorMessage.textContent = 'Make sure the passwords match!'
    } else {
        confirmPassword.classList.remove('error')
        errorMessage.textContent = ''
    }
}

function validateFormInput() {
    if (!isValid(firstName) ||
        !isValid(lastName) ||
        !isValid(email) || 
        !isValid(password) || 
        !isValid(confirmPassword)) {
            errorMessage.textContent = 'Please fill in all the required fields. '
    } else {
        errorMessage.textContent = 'All the fields are correctly entered!'
    }
    return false
}

function isValid(element) {
    if (element.value === '' || element.checkValidity() === 'false') {
        return false
    } else return true
}

// Event listeners

firstName.addEventListener('input', () => {
    firstName.value = toUpper(firstName.value)
    validate(firstName)
})

lastName.addEventListener('input', () => {
    lastName.value = toUpper(lastName.value)
    validate(lastName)
})

email.addEventListener('input', () => {
    validate(email)
})

password.addEventListener('input', () => {
    validate(password)
})

confirmPassword.addEventListener('input', () => {
    validatePassword(password, confirmPassword)
})

submitBtn.addEventListener('click', (event) => {
    validateFormInput()
    event.preventDefault()
})