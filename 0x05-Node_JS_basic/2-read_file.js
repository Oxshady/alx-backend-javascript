const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    let data = fs.readFileSync(path, { encoding: 'utf8' });
    if (!data) {
      return;
    }
    data = data.split('\n');
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
        helper.sweStudents.push(record[0]);
      } else if (record[record.length - 1].toLowerCase() === 'cs') {
        helper.csStudentsCounts += 1;
        helper.csStudents.push(record[0]);
      }
    }

    console.log(`Number of students: ${helper.numberOfStudents}`);
    if (helper.csStudentsCounts > 0) {
      console.log(`Number of students in CS: ${helper.csStudentsCounts}. List: ${helper.csStudents.join(', ')}`);
    }
    if (helper.sweStudentsCounts > 0) {
      console.log(`Number of students in SWE: ${helper.sweStudentsCounts}. List: ${helper.sweStudents.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
