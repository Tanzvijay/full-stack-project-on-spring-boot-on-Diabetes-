function colorie() {



  var nameValue = document.getElementById("user_name").value;
  var pincodeValue = document.getElementById("Pincode").value;
  var addressValue = document.getElementById("Address").value;
  var countryValue = document.getElementById("country").value;
  var ageValue = document.getElementById("Age").value;
  var education = document.getElementById("education").value;
  const lowSugarRadio = document.getElementById("lowBloodSugarYes");
  const highSugarRadio = document.getElementById("lowBloodSugarNo");

  // Get the download links for the PDF files
  const lowSugarPDFLink = document.getElementById("lowSugarPDFLink");
  const highSugarPDFLink = document.getElementById("highSugarPDFLink");

  if (lowSugarRadio.checked) {
    // If the "Yes" option is selected (low blood sugar), trigger the download for the low sugar PDF
    lowSugarPDFLink.click();
  } else if (highSugarRadio.checked) {
    // If the "No" option is selected (high blood sugar), trigger the download for the high sugar PDF
    highSugarPDFLink.click();
  }

  // Move the data object creation outside the function


}

function getSelectedRadioValue(name) {
  var elements = document.getElementsByName(name);
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      return elements[i].value;
    }
  }
  return null; // If no radio button is selected, you can set a default value or handle it accordingly
}

function collectFormData() {
  var data = {
    username: document.getElementById('user_name').value,
    Age: document.getElementById('Age').value,
    Pincode: document.getElementById('Pincode').value,
    diabetesProviderPhone: document.getElementById('diabetesProviderPhone').value,
    country: document.getElementById('country').value,
    address: document.getElementById('Address').value,
    maritalStatus: getSelectedRadioValue('maritalStatus'),
    household: document.getElementById('household').value,
    diabetesType: getSelectedRadioValue('diabetesType'),
    familyDiabetes: document.getElementById('familyDiabetes').value,
    lowBloodSugarSymptoms: getSelectedRadioValue('bloodSugarLevel'),
    hospitalizedLowBloodSugar: getSelectedRadioValue('hospitalizedLowBloodSugar'),
    diabetesUnderstanding: getSelectedRadioValue('diabetesUnderstanding')
  };

  $.ajax({
    url: '/your-endpoint',
    type: 'POST',
    contentType: "application/json",
    data: JSON.stringify(data), // Convert the JavaScript object to a JSON string
    success: function () {
      console.log('Data saved successfully');
    },
    error: function () {
      console.log('Failed to save data');
    }
  });

}


function validateAndSubmit() {

  var mail = document.getElementById('user_name').value;
  var country = document.getElementById('country').value;
  var Pincode = document.getElementById('Pincode').value;

  // Check if any of the required fields are empty
  if (mail === "" || country === "" || Pincode === "") {
    Swal.fire({
 	  position: 'top-end',
      icon: 'error',
      title: 'Missing values',
      text: 'Please fill in all required fields.',
      showConfirmButton: true,
      timer: 1500
    });
  } else {
    var diabetesType = getSelectedRadioValue('diabetesType');
    var familyDiabetes = document.getElementById('familyDiabetes').value;
    var lowBloodSugarSymptoms = getSelectedRadioValue('bloodSugarLevel');
    var hospitalizedLowBloodSugar = getSelectedRadioValue('hospitalizedLowBloodSugar');

    // Check if any of the additional required fields are empty
    if (diabetesType === null || familyDiabetes === "" || lowBloodSugarSymptoms === null || hospitalizedLowBloodSugar === null) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Missing values',
        text: 'Please fill in all required fields.',
        showConfirmButton: true,
        timer: 1500
      });
    } else {
      Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully registered',
            showConfirmButton: true,
            timer: 1500
        });
      colorie();
      collectFormData();
    }
  }
}




