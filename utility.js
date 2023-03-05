document.getElementByDataId = (id) => {
  return document.querySelector(`[data-id="${id}"]`);
};
document.getElementsByDataId = (id) => {
  return document.querySelectorAll(`[data-id="${id}"]`);
};
