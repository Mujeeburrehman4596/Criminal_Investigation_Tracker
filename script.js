// Get elements from the DOM
const crimeReportForm = document.getElementById('crimeReportForm');
const reportMessage = document.getElementById('reportMessage');
const predictionCard = document.getElementById('predictionCard');
const predictedSuspects = document.getElementById('predictedSuspects');

// Dummy suspect database for predictions (in a real application, this would be replaced with actual data)
const suspectDatabase = [
    { name: "John Doe", crimeType: "Robbery", location: "Downtown" },
    { name: "Jane Smith", crimeType: "Theft", location: "Mall" },
    { name: "Michael Brown", crimeType: "Assault", location: "Park" },
];

// Function to predict suspects based on reported crime
function predictSuspects(crimeType, crimeLocation) {
    return suspectDatabase.filter(suspect => 
        suspect.crimeType.toLowerCase() === crimeType.toLowerCase() && 
        suspect.location.toLowerCase() === crimeLocation.toLowerCase()
    );
}

// Crime Report Form Submit Event
crimeReportForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const crimeType = document.getElementById('crimeType').value;
    const crimeLocation = document.getElementById('crimeLocation').value;

    // Predict suspects based on the reported crime
    const suspects = predictSuspects(crimeType, crimeLocation);

    if (suspects.length > 0) {
        predictedSuspects.innerHTML = `Predicted Suspects:<br>${suspects.map(s => s.name).join(', ')}`;
        predictionCard.style.display = 'block';
        reportMessage.style.display = 'none';
    } else {
        predictedSuspects.innerHTML = 'No suspects found for the reported crime.';
        predictionCard.style.display = 'block';
        reportMessage.style.display = 'none';
    }

    reportMessage.style.display = 'block';
    reportMessage.className = 'alert alert-success';
    reportMessage.textContent = 'Crime report submitted successfully!';

    crimeReportForm.reset(); // Clear the form
});
