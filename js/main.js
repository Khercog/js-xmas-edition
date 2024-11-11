const $form = document.querySelector('#carta-a-santa');

const name = $form.name.value;
const city = $form.city.value;
const behaviour = $form.behaviour.value;
const giftDescription = $form['gift-description'].value;

function validateName(name) {
    if (name.length === 0) {
        return 'This field has to have at least 1 character.';
    }

    if (name.length >= 50) {
        return 'This field has to have less than 50 characters.'
    }

    return '';
}

function validateCity(city) {
    if (city.length === 0) {
        return 'This field has to have at least 1 character.';
    }

    if (city.length >= 50) {
        return 'This field has to have less than 50 characters.';
    }

    return '';
}

function validateBehaviour(behaviour) {
    if (behaviour.length === 0) {
        return 'This field has to have have selected at least 1 option.';
    }

    return '';
}

function validateGiftDescription(giftDescription) {
    if (giftDescription.length === 0) {
        return 'This field has to have at least 1 character.';
    }

    if (giftDescription.length >= 50) {
        return 'This field has to have less than 50 characters.'
    }

    return '';
}

console.log(validateName(name));
console.log(validateCity(city));
console.log(behaviour);
console.log(validateGiftDescription(giftDescription));