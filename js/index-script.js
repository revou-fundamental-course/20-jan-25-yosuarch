// Trigger to open modal and close modal
var modal = document.getElementById("myModal");
var button = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close-modal")[0];

button.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Calculation logic
function calculateBMI() {
    // Get the input values
    var genderElement = document.querySelector('input[name="gender"]:checked');
    var weight = document.getElementById("Weight").value;
    var height = document.getElementById("Height").value;
    var age = document.getElementById("Age").value;

    // Check if gender, weight, or height is blank
    if (!genderElement || !weight || !height) {
        showNotificationModal("Gender, Weight, and Height are mandatory to be filled.");
        return;
    }

    // Extract gender value
    var gender = genderElement.value;

    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    var bmi = weight / (height * height);

    // Determine BMI category, color, and message
    var bmiCategory, colorClass, bmiMessage;
    if (bmi < 18.49) {
        bmiCategory = "Underweight";
        colorClass = "underweight";
        bmiMessage = "Well, it seems you're practically a feather. Time to see a healthcare professional and bulk up a bit for your health's sake!";
    } else if (bmi < 24.9) {
        bmiCategory = "Ideal";
        colorClass = "ideal";
        bmiMessage = "Bravo! You've managed to hit the sweet spot. Keep doing whatever magic you're doing!";
    } else if (bmi < 29.9) {
        bmiCategory = "Overweight";
        colorClass = "overweight";
        bmiMessage = "Uh-oh, someone's been enjoying life a bit too much! Let's dial it back with a healthier diet and some exercise before things get serious.";
    } else {
        bmiCategory = "Obesity";
        colorClass = "obesity";
        bmiMessage = "Yikes! You're in the obesity range. Immediate action is necessary. Consult a healthcare provider to start reversing this trend ASAP.";
    }
    
    // Display the result with color scaling
    var resultDiv = document.getElementById("bmiresult-1");
    resultDiv.innerHTML = `<h2>Your Body Mass Index is</h2>${bmi.toFixed(2)}<br><span>${bmiCategory}</span>`;
    resultDiv.className = colorClass;  // Apply the color class

    // Summarize the input data into the result
    var summary = `
        Gender: ${gender}<br>
        Weight: ${weight} kg<br>
        Height: ${(height * 100).toFixed(2)} cm<br>
        ${age ? `Age: ${age} years<br>` : ""}
    `;

    // Mitigation plan based on result
    var resultActionDiv = document.querySelector(".result-action");
    resultActionDiv.innerHTML = `<span>${summary}</span><br><span class="bmiMessage ${colorClass}">${bmiMessage}</span>`;
    
    // Reset the input fields
    document.getElementById("Weight").value = "";
    document.getElementById("Height").value = "";
    document.getElementById("Age").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;

    // Show the result modal
    var resultModal = document.getElementById("resultmodal");
    resultModal.style.display = "block";
}

// Add event listener to the calculate button
document.getElementById("calculate").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    calculateBMI();
});

// Close result modal
var resultModalCloseBtn = document.getElementsByClassName("close-modal")[1];
resultModalCloseBtn.onclick = function() {
    var resultModal = document.getElementById("resultmodal");
    resultModal.style.display = "none";
}

// Close input warning
var notificationModalCloseBtn = document.getElementsByClassName("close-modal")[2];
notificationModalCloseBtn.onclick = function() {
    var notificationModal = document.getElementById("notificationmodal");
    notificationModal.style.display = "none";
}

window.onclick = function(event) {
    var resultModal = document.getElementById("resultModal");
    var notificationModal = document.getElementById("notificationmodal");
    if (event.target == resultModal) {
        resultModal.style.display = "none";
    } else if (event.target == notificationModal) {
        notificationModal.style.display = "none";
    }
}

// Trigger to blank form input
function showNotificationModal(message) {
    var notificationModal = document.getElementById("notificationmodal");
    var notificationMessage = document.getElementById("notificationmessage");
    notificationMessage.innerText = message;
    notificationModal.style.display = "block";
}
