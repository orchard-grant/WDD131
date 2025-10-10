const menuButton = document.querySelector('#menuButton');
const nav = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('hide');
  menuButton.setAttribute('aria-expanded', String(!nav.classList.contains('hide')));
});

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 800) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide")
    }
}

handleResize();
window.addEventListener("resize", handleResize);

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') return;
    const sm = e.target.getAttribute('src');
    const full = sm.replace('-sm', '-full');
    modalImage.src = full;
    modalImage.alt = e.target.alt || '';
    modal.showModal();  
    
}

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});