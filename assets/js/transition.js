document.addEventListener("DOMContentLoaded", () => {
    const roles = [
        "Full Stack Developer",
        "Application Developer",
        "Software Developer",
        "Web Developer",
        "Backend Developer"
    ];
    
    const elements = [
        document.getElementById("role1"),
    ];

    let index = 0;

    function updateRoles() {
        elements.forEach((element, i) => {
            element.classList.add("hidden");
        });

        setTimeout(() => {
            elements.forEach((element, i) => {
                element.textContent = roles[(index + i) % roles.length];
                element.classList.remove("hidden");
            });
            index++;
        }, 1000); // Match this delay with the transition duration
    }

    setInterval(updateRoles, 4000); // Change text every 4 seconds
});