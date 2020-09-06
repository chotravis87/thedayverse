var fs = require('fs');
var path = require('path');
const { ENGINE_METHOD_NONE } = require('constants');

/*
    Usage:
    If file_names is string:
        Read: file_names + '.tsv' in files folder
        Return: Random Quote in .tsv (Array)
    If file_names is array:
        Read: Given file_names + '.tsv' in files folder
        Return: Random Quote from given files (Array)
    '.tsv' will be added automatically
*/
module.exports = function Extractor(file_names)
{
    var path_ = [];
    var quotes = []
    if(typeof file_names === 'string') {path_.push(path.join(path.join(file_names + '.tsv')));}
    else if(typeof file_names === 'object') {file_names.forEach(file_name => path_.push(file_name + '.tsv'));}
    else {throw 'Wrong Data Type (Function: Extractor)';}
    try {for (const file_name of path_) {quotes.push(fs.readFileSync(path.join(__dirname + '/../files', file_name), "utf-8").split('\n').map(function(row){return row.replace('\r', '').split('\t');}))}}
    catch (err) {if(err.code == 'ENOENT') {return null;}}
    return quotes[0][Math.floor(Math.random() * Math.floor(quotes[0].length))]
}
