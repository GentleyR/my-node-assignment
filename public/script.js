function fetchData(value) {
    fetch(`/api/number/${value}`)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `Original Number: ${data.originalNumber}, Doubled Number: ${data.doubledNumber}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function navigateTo(path) {
    window.location.href = path;
}
