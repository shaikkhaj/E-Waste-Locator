// Popup Functions
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Form Display Functions
function login() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('Register').style.display = 'none';
}

function signup() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('Register').style.display = 'none';
}

function register() {
    document.getElementById('Register').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
}

function Logout() {
    // Add logout functionality here
    alert('Logged out successfully');
    document.getElementById('login').style.display = 'block';
    document.getElementById('Register').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
}

// Initial state
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('Register').style.display = 'none';
    document.getElementById('logout-btn').style.display = 'none';
});

// Basic form submission handlers (you'll need to add proper backend integration)
document.getElementById('submit-login').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email && password) {
        alert('Login successful!');
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('register-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'inline';
        document.getElementById('login').style.display = 'none';
    }
});

document.getElementById('submit-sign').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name-sign').value;
    const email = document.getElementById('email-sign').value;
    const password = document.getElementById('password-sign').value;
    const confirmPass = document.getElementById('confirm-pass').value;
    
    if (password === confirmPass && name && email) {
        alert('Account created successfully!');
        signup();
    } else {
        alert('Please check your inputs!');
    }
});

function openNearbyFacilities() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const query = `https://www.google.com/maps/search/E-waste+facility/@${lat},${lon},14z`;
        window.open(query, '_blank');
      }, function() {
        // Fallback if permission denied
        window.open("https://www.google.com/maps/search/E-waste+facility+near+me/", '_blank');
      });
    } else {
      // Geolocation not supported
      window.open("https://www.google.com/maps/search/E-waste+facility+near+me/", '_blank');
    }
  }