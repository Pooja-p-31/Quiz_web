document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to each box
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            // Get the id of the clicked box
            const boxId = this.id;

            // Hide all hidden sections
            hideAllSections();

            // Show the corresponding section based on the box id
            const sectionId = `${boxId}-section`;
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.remove('hidden-section');
            }
        });
    });

    function hideAllSections() {
        const sections = document.querySelectorAll('.hidden-section');
        sections.forEach(section => {
            section.classList.add('hidden-section');
        });
    }
});
