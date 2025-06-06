function submitFeedback() {
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value; // Fixed typo!
    const feedback = document.getElementById('feedbackText').value;
    const userExperience = document.getElementById('userExperince').value

    console.log("line12: before the alert");
    alert('Thank you for your valuable feedback');
    console.log("line14: After the alert");

    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('experiance').innerHTML = userExperience;

    document.getElementById('userInfo').style.display = 'block';
    
}

// Attach submitFeedback to the button ONCE
document.getElementById('submitBtn').onclick = submitFeedback;

// Attach Enter key handler ONCE
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
