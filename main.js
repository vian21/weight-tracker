/**
 * @returns array of weight data
 */
function getData() {
  if (localStorage.getItem("weightData")) {
    try {
      return JSON.parse(localStorage.getItem("weightData"));
    } catch {
      return JSON.parse("[]");
    }
  } else {
    localStorage.setItem("weightData", "");
    return JSON.parse("[]");
  }
}

/**
 *
 * Save array to localstorage
 * @param data array
 */
function updateStorage(data) {
  localStorage.setItem("weightData", JSON.stringify(data));
}
