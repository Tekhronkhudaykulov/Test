export const optimizeCommands = (commands: string): string => {
    let result = '';
    let count = 1;
  
    for (let i = 1; i <= commands.length; i++) {
      if (commands[i] === commands[i - 1]) {
        count++;
      } else {
        result += count > 1 ? `${count}${commands[i - 1]}` : commands[i - 1];
        count = 1;
      }
    }
  
    return result;
  };
  



  export const applyCommandsToGrid = (grid: number[][], commands: string[]): number[][] => {
   
  
    const newGrid = JSON.parse(JSON.stringify(grid)); 
    let position = { x: 0, y: 0 }; 
  
    commands.forEach((command) => {
      switch (command) {
        case 'Л': 
          if (position.x > 0) position.x--;
          break;
        case 'П': 
          if (position.x < newGrid[0].length - 1) position.x++;
          break;
        case 'В': 
          if (position.y > 0) position.y--;
          break;
        case 'Н': 
          if (position.y < newGrid.length - 1) position.y++;
          break;
        case 'О':
          if (newGrid[position.y][position.x] === 1) {
            newGrid[position.y][position.x] = 0; 
          }
          break;
        case 'Б': 
          if (newGrid[position.y][position.x] === 0) {
            newGrid[position.y][position.x] = 1; 
          }
          break;
        default:
          break;
      }
    });
  
    return newGrid; 
  };