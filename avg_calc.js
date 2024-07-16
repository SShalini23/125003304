function calavg()
{
  const numInput = document.getElementById('numInput').value;
  const resultDiv = document.getElementById('result');
  const numbers = numInput.split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num));

  if (numbers.length === 0) {
      resultDiv.textContent = 'enter numbers.';
      return;
  }
  const average = convertarray(numbers);
  resultDiv.innerHTML = `
      <p>Numbers: ${numbers.join(', ')}</p>
      <p>Avg: ${average.toFixed(2)}</p>
  `;
}

function convertarray(numbers) 
{
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
