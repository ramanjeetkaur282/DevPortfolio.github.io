document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    // Set the first button as active by default
    if (buttons.length > 0) {
        buttons[0].classList.add('active-category');
        const defaultCategory = buttons[0].getAttribute('data-category');

        // Show or hide projects based on the default category
        projects.forEach(project => {
            if (defaultCategory === 'all' || project.classList.contains(defaultCategory)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent page reload

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active-category'));

            // Add active class to the clicked button
            button.classList.add('active-category');

            const category = button.getAttribute('data-category');

            // Show or hide projects based on the selected category
            projects.forEach(project => {
                if (category === 'all' || project.classList.contains(category)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
