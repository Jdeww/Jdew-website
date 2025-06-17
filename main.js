document.addEventListener("DOMContentLoaded", () => {
    const about_template = document.getElementById('about_info');
    const about_container = document.getElementById('about_me'); 

    if (about_template && about_container){
        const about_clone = about_template.content.cloneNode(true);
        about_container.appendChild(about_clone);
    }

    const contact_template = document.getElementById('contact_info');
    const contact_container = document.getElementById('contact_me');

    if (contact_container && contact_template){
        const contact_clone = contact_template.content.cloneNode(true);
        contact_container.appendChild(contact_clone);
    }


    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
            const templateId = button.getAttribute('data-template');
            const template = document.getElementById(templateId);

            if(!template) {
                console.error(`Template with id "${templateId}" not found`);
                return;
            }

            modalTitle.textContent = 'Class Information';

            modalBody.innerHTML = '';
            modalBody.appendChild(template.content.cloneNode(true));

            modal.style.display = 'flex';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});