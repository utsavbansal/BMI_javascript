function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDisplay = document.getElementById("result");
  
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Convert height to meters
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultDisplay.textContent = "Please enter valid weight and height.";
      return;
    }
  
    var bmi = weight / (height * height);
    resultDisplay.textContent = "Your BMI is " + bmi.toFixed(2);
  }
  