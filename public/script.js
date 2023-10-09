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

function createUser() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('create-result').textContent = `User Created with ID: ${data.id}`;
    })
    .catch(error => {
        console.error('Error creating user:', error);
    });
}

function retrieveUser() {
    const username = document.getElementById('search-username').value;
    
    fetch(`/api/users?username=${username}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('search-result').textContent = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });
}

function updateUser() {
    const id = document.getElementById('update-id').value;
    const email = document.getElementById('new-email').value;
    
    fetch(`/api/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('update-result').textContent = "User updated successfully!";
        } else {
            throw new Error('Update failed');
        }
    })
    .catch(error => {
        console.error('Error updating user:', error);
    });
}

function deleteUser() {
    const id = document.getElementById('delete-id').value;
    
    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('delete-result').textContent = "User deleted successfully!";
        } else {
            throw new Error('Deletion failed');
        }
    })
    .catch(error => {
        console.error('Error deleting user:', error);
    });
}
