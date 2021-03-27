const fs = require('fs');
const path = require('path');

let model = function(tableName) {
    return {

        filePath: path.join(__dirname, '../data/' + tableName + '.json'),

        readFile() {
            let file = fs.readFileSync(this.filePath, 'utf8');

            if(file) {
                return JSON.parse(file);
            }        
            return [];
        },

        writeFile(contents) {
            let file = JSON.stringify(contents, null, 2);
            fs.writeFileSync(this.filePath, file);
        },

        generateId() {
            let file = this.readFile();
            let row = file.pop();

            if (row) {
                return ++row.id;
            }

            return 1;
        },

        all() {
            return this.readFile();
        },

        find(id) {
            let file = this.readFile();
            return file.find(row => row.id == id)
        },

        create(row) {
            let file = this.readFile();
            row.id = this.generateId();
            file.push(row);

            this.writeFile(file);

            return row.id;
        },
        

    }
}
module.exports = model;