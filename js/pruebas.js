function testValidateName() {
  console.assert(
      validateName('') === 'This field has to have at least 1 character.',
      "validateName hasn't validated that the name is not empty",
  );

  console.assert(
      validateName(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'This field has to have less than 50 characters.',
      "validateName hasn't validated that the name is less than 50 characters.",
  );

  console.assert(
      validateName('Kevin') === '',
      "validateName hasn't worked with a valid name.",
  );
}

function testValidateCity() {
  console.assert(
      validateCity('') === 'This field has to have at least 1 character.',
      "validateCity hasn't validated that the name is not empty",
  );

  console.assert(
      validateCity(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'This field has to have less than 50 characters.',
      "validateCity hasn't validated that the name is less than 50 characters.",
  );

  console.assert(
      validateCity('Buenos Aires') === '',
          "validateCity hasn't worked with a valid city.",
  )
}

function testValidateBehaviour() {
  console.assert(
      validateBehaviour('') === 'This field has to have have selected at least 1 option.',
      "validateBehaviour hasn't validated that the name is not empty"
  );

  console.assert(
      'Muy bueno' === '',
      "validateBehaviour hasn't worked with a valid option.",
  )
}

function testValidateGiftDescription() {
  console.assert(
      validateGiftDescription('') === 'This field has to have at least 1 character.',
      "validateGiftDescription hasn't validated that the name is not empty",
  );

  console.assert(
      validateGiftDescription(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'This field has to have less than 50 characters.',
      "validateGiftDescription hasn't validated that the name is less than 50 characters.",
  );

  console.assert(
      'Gift' === '',
      "validateGiftDescription hasn't worked with a valid description.",
  )
}

testValidateName();
testValidateCity()
testValidateBehaviour()
testValidateGiftDescription();