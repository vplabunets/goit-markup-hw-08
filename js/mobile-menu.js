(() => {
  const refs = {
    openMobileBtn: document.querySelector("[data-mobile-open]"),
    closeMobileBtn: document.querySelector("[data-mobile-close]"),
    modal: document.querySelector("[data-mobile]"),
    body: document.querySelector("body"),
  };

  refs.openMobileBtn.addEventListener("click", toggleModal);
  refs.closeMobileBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
    refs.body.classList.toggle("no-scroll");
  }
})();
