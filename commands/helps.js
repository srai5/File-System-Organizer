//Help implemented
function helpFn(dirPath) {
  console.log(`List of All the commands :
                 node main.js tree "directory path"
                 node main.js organize "directory path"
                 node main.js help
  `);
}
module.exports={
    helpKey=helpFn
}
