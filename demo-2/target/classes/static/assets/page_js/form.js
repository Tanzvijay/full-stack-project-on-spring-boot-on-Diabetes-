function colorie()
{


  var nameValue = document.getElementById("user_name").value;
  var pincodeValue = document.getElementById("Pincode").value;
  var addressValue = document.getElementById("Address").value;
  var countryValue = document.getElementById("country").value;
  var ageValue = document.getElementById("Age").value;
  var education = document.getElementById("education").value;
  var educationValue = document.getElementById("education").value;
            
  var maritalStatusElements = document.getElementsByName('maritalStatus');
  var maritalStatusValue;
  for (var i = 0; i < maritalStatusElements.length; i++) {
      if (maritalStatusElements[i].checked) {
          maritalStatusValue = maritalStatusElements[i].value;
          break;
      }
  }

  var householdValue = document.getElementById('household').value;
  var diabetesProviderPhoneValue = document.getElementById('diabetesProviderPhone').value;
  
  var diabetesTypeElements = document.getElementsByName('diabetesType');
            var diabetesTypeValue;
            for (var i = 0; i < diabetesTypeElements.length; i++) {
                if (diabetesTypeElements[i].checked) {
                    diabetesTypeValue = diabetesTypeElements[i].value;
                    break;
                }
            }

            var familyDiabetesValue = document.getElementById('familyDiabetes').value;

            var bloodSugarLevelElements = document.getElementsByName('bloodSugarLevel');
            var bloodSugarLevelValue;
            for (var i = 0; i < bloodSugarLevelElements.length; i++) {
                if (bloodSugarLevelElements[i].checked) {
                    bloodSugarLevelValue = bloodSugarLevelElements[i].value;
                    break;
                }
            }

            var lowBloodSugarSymptomsElements = document.getElementsByName('lowBloodSugarSymptoms');
            var lowBloodSugarSymptomsValue;
            for (var i = 0; i < lowBloodSugarSymptomsElements.length; i++) {
                if (lowBloodSugarSymptomsElements[i].checked) {
                    lowBloodSugarSymptomsValue = lowBloodSugarSymptomsElements[i].value;
                    break;
                }
            }


            console.log( nameValue);
            console.log( pincodeValue);
            console.log(  addressValue);
            console.log( countryValue);
            
            console.log( ageValue);
            console.log( education);
            console.log(  addressValue);
            console.log( countryValue);

            console.log( familyDiabetesValue);


            console.log( educationValue);
            console.log(  maritalStatusValue);
            console.log(  householdValue);
            console.log(  diabetesProviderPhoneValue);
            console.log(  lowBloodSugarSymptomsValue);
            console.log(  bloodSugarLevelValue);




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

    
    
  }



