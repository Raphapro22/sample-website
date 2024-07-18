const signInForm = document.getElementById('signInForm');
const userInfoTable = document.getElementById('userInfoTable');
let userInfos = [];

signInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();

    
    if (!name || !email || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.includes('.') || !email.includes('@')) {
        alert("Please enter a valid email address.");
        return;
    }
    
    userInfos.push({ name: name, email: email, phone: phone });

    
    createUserInfoTable();

    
    document.getElementById('nameInput').value = "";
    document.getElementById('emailInput').value = "";
    document.getElementById('phoneInput').value = "";
});

function createUserInfoTable() {
    
    const title = document.createElement('h2');
    title.textContent = "Users Information";

   
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const emailHeader = document.createElement('th');
    const phoneHeader = document.createElement('th');

    nameHeader.textContent = 'Name';
    emailHeader.textContent = 'Email';
    phoneHeader.textContent = 'Phone';

    headerRow.appendChild(nameHeader);
    headerRow.appendChild(emailHeader);
    headerRow.appendChild(phoneHeader);

    thead.appendChild(headerRow);

    userInfos.forEach(userInfo => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const phoneCell = document.createElement('td');

        nameCell.textContent = userInfo.name;
        emailCell.textContent = userInfo.email;
        phoneCell.textContent = userInfo.phone;

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(phoneCell);

        tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

   
    userInfoTable.innerHTML = ''; 
    userInfoTable.appendChild(title);
    userInfoTable.appendChild(document.createElement('br'));
    userInfoTable.appendChild(table);

    userInfoTable.style.display = 'block'; 
}
