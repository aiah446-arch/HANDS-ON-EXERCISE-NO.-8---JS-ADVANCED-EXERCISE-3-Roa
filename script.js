const loadBtn = document.getElementById('loadBtn');
const clearBtn = document.getElementById('clearBtn');
const todoTable = document.getElementById('todoTable');
const tableBody = document.getElementById('tableBody');

let isDataLoaded = false;

async function loadApiData() {
    if (isDataLoaded) return; 

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data = await response.json();

        tableBody.innerHTML = '';

        data.forEach(item => {
            const row = document.createElement('tr');

            const statusText = item.completed ? 'Completed' : 'Not yet Completed';
            const statusColor = item.completed ? 'green' : 'red';

            row.innerHTML = `
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td style="color: ${statusColor}; font-weight: bold;">${statusText}</td>
            `;

            tableBody.appendChild(row);
        });

        todoTable.style.display = 'table';
        isDataLoaded = true;

    } catch (error) {
        console.error('Error:', error);
    }
}

function clearTable() {
    tableBody.innerHTML = '';
    todoTable.style.display = 'none';
    isDataLoaded = false;
}

loadBtn.addEventListener('click', loadApiData);
clearBtn.addEventListener('click', clearTable);