import "./styles.css";

const input = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  //data set puts all the elements that contain "data" in their name and put them in an object
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

input.forEach((input) => input.addEventListener("change", handleUpdate));
input.forEach((input) => input.addEventListener("mousemove", handleUpdate));
