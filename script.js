let table = document.createElement('table');
let Numbers = 1;
for (let i = 0; i < 10; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let cell = document.createElement('td');
        cell.textContent = Numbers;
        row.appendChild(cell);
        Numbers++;
    }
    table.appendChild(row);
}
let container = document.getElementById('container');
container.appendChild(table);
