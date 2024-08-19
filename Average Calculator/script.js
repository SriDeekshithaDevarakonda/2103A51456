let numbers = [];

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = parseFloat(input.value);

    if (!isNaN(number)) {
        numbers.push(number);
        document.getElementById('numbersList').textContent = `Numbers: ${numbers.join(', ')}`;
        input.value = '';
        document.getElementById('result').textContent = 'Average: --';
    } else {
        alert('Please enter a valid number.');
    }
}

function calculateAverage() {
    if (numbers.length === 0) {
        document.getElementById('result').textContent = 'Average: --';
        return;
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    document.getElementById('result').textContent = `Average: ${average.toFixed(2)}`;
}
