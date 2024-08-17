export const AlertError = {
  alertError: document.querySelector(".alert-error"),
  open() {
    this.alertError.classList.add("open");
  },
  close() {
    this.alertError.classList.remove("open");
  },
};
