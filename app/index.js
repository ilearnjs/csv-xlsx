var fs = require('fs');
var xlsx = require('xlsx')

var inputFileCsv = './app/files/layout.csv';
var inputFileXlsx = './app/files/layout.xlsx';

var workbook = xlsx.readFile(inputFileXlsx)
var first_sheet_name = workbook.SheetNames[0];
var worksheet = workbook.Sheets[first_sheet_name];
var csv1 = xlsx.utils.sheet_to_csv(worksheet);

var csv2 = fs.readFileSync(inputFileCsv).toString();

console.log(csv1)
console.log(csv2)