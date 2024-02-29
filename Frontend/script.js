      	document.addEventListener('DOMContentLoaded', () => {
    	    const calculateBtn = document.getElementById('calculateBtn');
    	    const heightInput = document.getElementById('height');
    	    const weightInput = document.getElementById('weight');
    	    const resultDiv = document.getElementById('result');
    	
    	    calculateBtn.addEventListener('click', async () => {
    	        const height = parseFloat(heightInput.value);
    	        const weight = parseFloat(weightInput.value);
    	
    	        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    	            resultDiv.textContent = 'Invalid input. Height and weight must be positive numbers.';
    	            return;
    	        }
    	
    	        const response = await fetch('/calculateBMI', {
    	            method: 'POST',
    	            headers: {
    	                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ height, weight })
            });
    	
    	        const data = await response.json();
    	
    	        if (response.ok) {
    	            resultDiv.textContent = `BMI: ${data.bmi.toFixed(2)} - ${data.interpretation}`;
    	        } else {
    	            resultDiv.textContent = `Error: ${data.error}`;
    	        }
    	    });
    	});
    