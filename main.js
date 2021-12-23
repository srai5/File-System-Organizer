#!/usr/bin/env node
let inputArr = process.argv.slice(2);
console.log(inputArr);
// node main.js tree "directory path"
//node main.js organize "directory path"
//node main.js help
let fs = require("fs");
let path = require("path");
let helpObj=require("./commands/helps");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
let types = {
  media: ["mp4", "mkv"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};
let commnad = inputArr[0];
switch (commnad) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeObj.organizeKey(inputArr[1]);
    break;
  case "help":
    helpObj.helpKey();
    break;
  default:
    console.log("please Input Right command");
    break;
}




