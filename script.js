const signInForm = document.getElementById('signInForm'); // Get the form element by its ID 'signInForm'
const userInfoTable = document.getElementById('userInfoTable'); // Get the table element by its ID 'userInfoTable'
let userInfos = []; // Initialize an empty array to store user information

// Add event listener to the form 
signInForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior (which would refresh the page)

    // Get the values from the input fields
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();

    // Input Validation
    if (!name || !email || !phone) { // Check if any of the fields are empty
        alert("Please fill in all fields.");
        return; // Stop execution if any field is empty
    }

    if (!email.includes('.') || !email.includes('@')) { // Check if the email is missing a '.' or '@'
        alert("Please enter a valid email address.");
        return; 
    }

    if (name.length > 30) { // Check if the name exceeds 30 characters
        alert("Name cannot exceed 30 characters.");
        return; 
    }
    if (email.length > 35) { // Check if the email exceeds 35 characters
        alert("Email cannot exceed 35 characters.");
        return; 
    }

    if (phone.length > 9) { // Check if the phone number exceeds 9 digits
        alert("Phone number cannot exceed 9 digits.");
        return; 
    }

    // Check for duplicates (email and phone)
    if (userInfos.some(user => user.email === email || user.phone === phone)) { // Check if the entered email or phone exists in the userInfos array
        alert("Email or Phone number already exists in the list.");
        return;
    }

    // If all validations pass, add the user information to the array
    userInfos.push({ name: name, email: email, phone: phone });

    // Update the table with the new user information
    createUserInfoTable();

    // Clear the input fields
    document.getElementById('nameInput').value = "";
    document.getElementById('emailInput').value = "";
    document.getElementById('phoneInput').value = "";
});

// Function to create the table displaying user information
function createUserInfoTable() {
    // Create the title element for the table
    const title = document.createElement('h2');
    title.textContent = "Users Information";

    // Create the table, table head, and table body elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create the header row and header cells
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const emailHeader = document.createElement('th');
    const phoneHeader = document.createElement('th');

    // Set the text content of the header cells
    nameHeader.textContent = 'Name';
    emailHeader.textContent = 'Email';
    phoneHeader.textContent = 'Phone';

    // Append the header cells to the header row
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(emailHeader);
    headerRow.appendChild(phoneHeader);

    // Append the header row to the table head
    thead.appendChild(headerRow);

    // Iterate through the userInfos array and create a table row for each user
    userInfos.forEach(userInfo => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const phoneCell = document.createElement('td');

        // Set the text content of the cells based on user information
        nameCell.textContent = userInfo.name;
        emailCell.textContent = userInfo.email;
        phoneCell.textContent = userInfo.phone;

        // Append the cells to the row
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);

        // Append the row to the table body
        tbody.appendChild(row);
    });

    // Append the table head and body to the table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Clear any previous content of the userInfoTable
    userInfoTable.innerHTML = ''; 

    // Append the title, a line break, and the table to the userInfoTable
    userInfoTable.appendChild(title);
    userInfoTable.appendChild(document.createElement('br'));
    userInfoTable.appendChild(table);

    // Make the userInfoTable visible
    userInfoTable.style.display = 'block'; 
}
