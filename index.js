document.addEventListener('DOMContentLoaded', function () {
  const msgAlertSuccess = document.getElementById('msgAlertSuccess');
  const form = document.getElementById('contactForm');
  const buttonSubmit = document.getElementById('buttonSubmit');
  const inputs = form.querySelectorAll('input', 'textarea');
  buttonSubmit.disabled = true;

  function checkFieldValidity(field) {
    if (field.type === 'checkbox')
      return field.checked;

    return field.value.trim() !== '';
  }

  function checkFormValidity() {
    let isValid = true;

    inputs.forEach(input => {
      if (!checkFieldValidity(input))
        return isValid = false;

      return isValid
    });

    buttonSubmit.disabled = !isValid;
  }

  inputs.forEach(input => {
    input.addEventListener('input', function () {
      if (checkFieldValidity(input)) {
        input.classList.add('is-valid');
        input.classList.remove('is-invalid');
      } else {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
      }

      checkFormValidity();
    });

    if (input.type === 'checkbox') {
      input.addEventListener('change', function () {
        if (checkFieldValidity(input)) {
          input.classList.add('is-valid');
          input.classList.remove('is-invalid');
        } else {
          input.classList.add('is-invalid');
          input.classList.remove('is-valid');
        }

        checkFormValidity();
      });
    }
  });

  checkFormValidity();

  form.addEventListener('submit', function ($event) {
    $event.preventDefault();
    let formIsValid = true;

    inputs.forEach(input => {
      input.classList.remove('is-valid')
    })

    if (formIsValid) {
      msgAlertSuccess.style.top = '10px';
      buttonSubmit.disabled = true;
      form.reset();
    }
  })

});

const alertClose = () => {
  msgAlertSuccess.style.top = '-200px';
}