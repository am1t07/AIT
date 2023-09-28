// JavaScript code to handle form switching
function showLoginForm(userType) {
    const loginForm = document.getElementById('login-form');
    loginForm.innerHTML = `<h2>${userType} Login</h2>
                            <form>
                                <!-- Add input fields for username and password -->
                                <input type="text" placeholder="Username">
                                <input type="password" placeholder="Password">
                                <button type="submit">Login</button>
                            </form>`;
}

// JavaScript code for button actions (e.g., About Us, Help & Support)
document.getElementById('about-us').addEventListener('click', function() {
    // Add code to show the About Us page
});

document.getElementById('help-support').addEventListener('click', function() {
    // Add code to show the Help & Support page
});

document.getElementById('library').addEventListener('click', function() {
    // Add code to navigate to the Library page
});

document.getElementById('fine').addEventListener('click', function() {
    // Add code to navigate to the Fine page
});

document.getElementById('attendance').addEventListener('click', function() {
    // Add code to navigate to the Attendance page
});
