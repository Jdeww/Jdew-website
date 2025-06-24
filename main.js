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

    function hideModal(){
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 250);
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

            const clonedContent = template.content.cloneNode(true);
            const titleElement = clonedContent.querySelector('h3');
            modalTitle.textContent = titleElement ? titleElement.textContent : 'No Title';

            modalBody.innerHTML = '';
            modalBody.appendChild(clonedContent);

            modal.style.display = 'flex';
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });
        });
    });


    modalClose.addEventListener('click', hideModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth'});
            }
        });
    });
});