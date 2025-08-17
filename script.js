document.getElementById("chefLoginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop default form submission

    let name = document.getElementById("chefName").value.trim();
    let email = document.getElementById("chefEmail").value.trim();
    let password = document.getElementById("chefPassword").value.trim();

    if (name && email ) {
        alert(`Welcome, Chef ${name}! Your registration is successful.`);

        // redirect to chef dashboard
        window.location.href = "chef-profile.html";
    } else {
        alert("Please fill all fields before submitting.");
    }
});
