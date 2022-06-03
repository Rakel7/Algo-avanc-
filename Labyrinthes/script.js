const displayMaze = (width, way) => {
    // debugger;
    const root = document.documentElement;
    root.style.setProperty('--maze-width', width);
    root.style.setProperty('--maze-ex', way);

    let maze = mazes[width][way]
    const cont = document.getElementById('base')
    cont.innerHTML = '';
    for (let i = 0; i < maze.length; i++){
        const cell = maze[i];
        let div = document.createElement('div');
        div.className = 'little';
        cont.appendChild(div);

       cell.entrance === true && (div.style.background = 'orange');
       cell.exit === true && (div.style.background = 'green');
       cell.walls[0] === true && (div.style.borderTop = 'solid 1px red');
       cell.walls[1] === true && (div.style.borderRight = 'solid 1px red');
       cell.walls[2] === true && (div.style.borderBottom = 'solid 1px red');
       cell.walls[3] === true && (div.style.borderLeft = 'solid 1px red');
    }
}

let selectSize = document.getElementById("sizeSelect");
let selectWay = document.getElementById("waySelect");

for (let i in mazes) {
    let option = document.createElement('option');
    option.textContent = i;
    option.value = i;
    selectSize.appendChild(option);
}

let way = "ex-0", size = 3;
displayMaze(size, way);

selectSize.addEventListener('change', function (){
    size = selectSize.value;
    displayMaze(size, way);
})

selectWay.addEventListener('change', function (){
    way = selectWay.value;
    displayMaze(size,way);
})