function calculate() {
  const num = parseFloat(document.getElementById("numberInput").value);
  const result = document.getElementById("result");

  if (isNaN(num)) {
    result.textContent = "❗ Please enter a valid number.";
    return;
  }

  const square = num * num;
  const cube = num * num * num;

  result.textContent = `Square: ${square} | Cube: ${cube}`;
}
