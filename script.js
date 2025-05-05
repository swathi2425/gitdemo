document.getElementById('scholarshipForm').addEventListener('submit', function(event) {
    // event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const reason = document.getElementById('reason').value;
  
    if (name && email && phone && dob && address && reason) {
      alert('Application submitted successfully!');
      // You can add code here to send the data to a server
    } else {
      alert('Please fill out all fields.');
      event.preventDefault();
    }
  });