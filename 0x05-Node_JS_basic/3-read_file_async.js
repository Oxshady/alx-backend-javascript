const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, content) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      if (content) {
        const data = content.split('\n').filter((line) => line !== '');
        data.shift();
        const helper = {
          numberOfStudents: data.length,
          csStudents: [],
          sweStudents: [],
          csStudentsCounts: 0,
          sweStudentsCounts: 0,
        };
        for (let record of data) {
          record = record.split(',');
          if (record[record.length - 1].toLowerCase() === 'swe') {
            helper.sweStudentsCounts += 1;
            helper.sweStudents.push(record[0].trim());
          } else if (record[record.length - 1].toLowerCase() === 'cs') {
            helper.csStudentsCounts += 1;
            helper.csStudents.push(record[0].trim());
          }
        }

        console.log(`Number of students: ${helper.numberOfStudents}`);
        if (helper.csStudentsCounts > 0) {
          console.log(`Number of students in CS: ${helper.csStudentsCounts}. List: ${helper.csStudents.join(', ')}`);
        }
        if (helper.sweStudentsCounts > 0) {
          console.log(`Number of students in SWE: ${helper.sweStudentsCounts}. List: ${helper.sweStudents.join(', ')}`);
        }
      }
      return resolve();
    });
  });
}

module.exports = countStudents;
