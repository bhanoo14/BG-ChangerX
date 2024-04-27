const btn = document.querySelector('button');

        btn.addEventListener('click', () => {
            const height = parseInt(document.getElementById("height").value);
            const weight = parseInt(document.getElementById("weight").value);
            const message = document.querySelector("h3");

            if (isNaN(height) || height <= 0) {
                message.innerHTML = "Please Enter a Valid Height";
            } else if (isNaN(weight) || weight <= 0) {
                message.innerHTML = "Please Enter a Valid Weight";
            } else {
                const bmi = (weight / ((height * height) / 10000)).toFixed(2);
                message.innerHTML = `Your BMI is: <span>${bmi}</span>`;
            }
        });