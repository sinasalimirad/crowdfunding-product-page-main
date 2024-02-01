let menuToggle = document.querySelector('[menuToggle]'),
    menu = document.querySelector('[menu]'),
    bookmark = document.querySelector('[bookmark]'),
    bookmarkText = document.querySelector('[bookmark] p'),
    statesModal = document.querySelectorAll('[statesModal]'),
    modals = document.querySelector('[modals]'),
    success = document.querySelectorAll('[success]'),
    closeModals = document.querySelector('[closeModals]'),
    completed = document.querySelector('[completed]'),
    popUp = document.querySelector('[popUp]');

// =============== Menu ====================
menuToggle.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menuToggle.src = 'images/icon-hamburger.svg';
        menu.classList.remove('open');
    } else {
        menuToggle.src = 'images/icon-close-menu.svg';
        menu.classList.add('open');
    }
});

// =============== Bookmark ====================
bookmark.addEventListener("click", () => {
    if (bookmark.classList.contains('bookmark')) {
        bookmark.classList.remove('bookmark');
        bookmarkText.innerHTML = 'Bookmark';
    } else {
        bookmark.classList.add('bookmark');
        bookmarkText.innerHTML = 'Bookmarked';
    }
});

// =============== States Modal ====================
statesModal.forEach(stateModal => {
    stateModal.addEventListener('click', () => {
        modals.classList.add('show');
    });
});

closeModals.addEventListener('click', () => {
    modals.classList.remove('show');
});

success.forEach(element => {
    element.addEventListener('click', () => {
        completed.classList.add('show');
        modals.classList.remove('show');
    });
});

// =============== Modal Completed ====================
popUp.addEventListener("click", () => {
    completed.classList.remove('show');
});