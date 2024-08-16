document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent page reload
            
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active-category'));
            
            // Add active class to the clicked button
            button.classList.add('active-category');

            const category = button.getAttribute('data-category');

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
