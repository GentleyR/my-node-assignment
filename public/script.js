const apiUrl = 'http://localhost:3000';  

function createUser() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email })
    })
    .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
    })
    .then(data => {
        // Handle success logic here. Maybe display the user data or a success message.
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
    });
}



function retrieveUser() {
    const username = document.getElementById('search-username').value;
    fetch(`${apiUrl}/retrieveUser/${username}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('search-result').innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function updateUser() {
    const id = document.getElementById('update-id').value;
    const email = document.getElementById('new-email').value;
    fetch(`${apiUrl}/updateUser`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('update-result').innerText = 'User updated successfully!';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function deleteUser() {
    const id = document.getElementById('delete-id').value;
    fetch(`${apiUrl}/deleteUser/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('delete-result').innerText = 'User deleted successfully!';
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function navigateTo(path) {
    
}
