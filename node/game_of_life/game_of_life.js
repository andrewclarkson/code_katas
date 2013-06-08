var os = require('os');
var fs = require('fs');
var path = require('path');

var argv = process.argv;
var stdin = process.stdin;

var usage = [
    "game_of_life.js [-g] file",
    "game_of_life takes as arguments:",
    " * an optional flag '-g [number]' to set the number of generations run",
    " * a file path to export the data to"
].join(os.EOL);

var export_path,
    generations = 10;

/* argument parsing */
if(argv.length < 3) {
    throw new Error(usage);

} else if (argv[2] == '-g') {
    if(argv.length < 5) {
        throw new Error(usage);
    }

    if(isNaN(parseInt(argv[3], 10))) {
        throw typeError('-g must be followed by an integer');
    }

    generations = argv[3];
    export_path = argv[4];

} else {
    export_path = path.join(process.cwd(), argv[2]);
}


var grid = [],
    grid_width;

console.log('Please enter your grid:');
stdin.resume();

stdin.on('data', function(data) {

    data = data.toString('ascii');

    /* If the user just return run the program */
    if(data === os.EOL) {

        if(grid.length < 3) {
            var error = new Error('Cannot create a grid less than 3 rows tall');
            throw error;
        }

        stdin.pause();
       
        var ws = fs.createWriteStream(export_path);

        for(var i = 0; i < 10; i++) {
            grid = nextGeneration(grid);
            var buffer = gridToString(grid);
            ws.write(buffer);
        }

        ws.end();

        return;
    } 

    /* slice the newline off, then split into array of characters */
    data = data.slice(0, -1).split('');

    /* if the grid width hasn't been set yet set it */
    if(grid_width === undefined) {
        /* we can't build a grid less than 4 columns wide */
        if(data.length < 3) {
            var error = new Error('Cannot create a grid less than 4 columns wide');
            throw error;
        }

        grid_width = data.length;
    
    } else if(data.length !== grid_width) {
        var error = new Error('Grid has inconsistent width!');
        throw error;
    }

    grid.push(data);

});








var sumNearby = function(grid, row, col) {

    var sum = 0;
    
    for(var y = -1; y <= 1; y += 1) {
        if(grid[row + y]) {
            for(var x = -1; x <= 1; x += 1) {
                var cell = grid[row + y][col + x];
                if(cell && cell === '*' && !(y === 0 && x === 0)) {
                    sum += 1;
                }
            }
        }
    }

    return sum;
};


var nextGeneration = function(grid) {
    
    var newGrid = [];

    grid.forEach(function(row, y) {
        var newRow = [];
        row.forEach(function(col, x) {
            var sum = sumNearby(grid, y, x);
            var cell = col;
            if(col === '*') {    
                if(sum !== 2 && sum !== 3) {
                    cell = '.';
                }
            } else if (col === '.') {
                debugger;
                if(sum === 3) {
                    cell = '*';
                }
            } else {
                throw new Error('unknown character');
            }
            newRow.push(cell);
        });
        newGrid.push(newRow);
    });

    return newGrid;
};

var gridToString = function(grid) {
    
    var buffer = '';

    grid.forEach(function(row, row_num){
        row.forEach(function(col, col_num) {
            buffer += grid[row_num][col_num];
        });
        buffer += '\n';
    });

    buffer += '\n';

    return buffer;
};
