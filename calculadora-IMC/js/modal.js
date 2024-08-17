export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  buttonClose: document.querySelector(".modal button"),
  message: document.querySelector(".modal h2"),

  open() {
    this.wrapper.classList.add("open");
  },
  close() {
    this.wrapper.classList.remove("open");
  },
};

Modal.buttonClose.onclick = () => {
  Modal.close();
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Modal.close();
  }
});
