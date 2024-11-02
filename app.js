// js for text text area

const textarea = document.querySelector("textarea");

textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = `${textarea.scrollHeight}px`; // Set to full height
});

// js for checkboxes

let query = document.querySelectorAll(".query");
let check_boxes = document.querySelectorAll(".styled-checkbox");

query.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.cursor = "pointer";
    check_boxes[index].checked = !check_boxes[index].checked;
    if (check_boxes[index].checked) {
      element.style.backgroundColor = "#E0F1E7";
      element.style.border = "2px solid green";
      element.style.transition = "0.2s all"; // Set to red when checked
    } else {
      element.style.backgroundColor = ""; // Reset to default when unchecked
      element.style.border = "2px solid gray";
      element.style.transition = "0.2s all"; // Set to red when checked
    }
  });
});

// js for input fields validation
function validateInputFields() {
  let input_fields = document.querySelectorAll(".input-fields");
  input_fields.forEach((item) => {
    if (item.value === "") {
      item.style.border = "2px solid red"; // Apply red border if empty
    } else {
      item.style.border = "2px solid gray"; // Set to gray border if not empty
    }
  });
}

// Validate fields on page load
window.addEventListener("load", validateInputFields);

// Validate fields on keydown
window.addEventListener("keydown", (e) => {
  validateInputFields();
});
