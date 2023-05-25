const backdrop = document.querySelector('.backdrop')

const sidebar = document.querySelector('.sidebar')
const contactModal = document.querySelector('.contact-modal')
const callModal = document.querySelector('.call-modal')

document.querySelector('.tablet-header__menu-button').addEventListener('click', () => {
    sidebar.classList.add('sidebar_opened')
    backdrop.classList.add('backdrop_visible')
})

document.querySelector('.backdrop').addEventListener('click', () => {
    contactModal.classList.remove('modal_opened')
    sidebar.classList.remove('sidebar_opened')
    callModal.classList.remove('modal_opened')
    backdrop.classList.remove('backdrop_visible')
})

document.querySelector('.sidebar__close-button').addEventListener('click', () => {
    sidebar.classList.remove('sidebar_opened')
    backdrop.classList.remove('backdrop_visible')
})

document.querySelectorAll('.contact-buttons__open-contact-modal-button').forEach(button => {
    button.addEventListener('click', () => {
        sidebar.classList.remove('sidebar_opened')
        
        contactModal.classList.add('modal_opened')
        backdrop.classList.add('backdrop_visible')
    })
})

document.querySelectorAll('.contact-buttons__open-call-modal-button').forEach(button => {
    button.addEventListener('click', () => {
        sidebar.classList.remove('sidebar_opened')

        callModal.classList.add('modal_opened')
        backdrop.classList.add('backdrop_visible')
    })
})

document.querySelector('.contact-modal__close-button').addEventListener('click', () => {
    contactModal.classList.remove('modal_opened')
    backdrop.classList.remove('backdrop_visible')
})

document.querySelector('.call-modal__close-button').addEventListener('click', () => {
    callModal.classList.remove('modal_opened')
    backdrop.classList.remove('backdrop_visible')
})