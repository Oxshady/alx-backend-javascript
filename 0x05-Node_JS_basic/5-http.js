const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, content) => {
      let final = '';
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

        final += `Number of students: ${helper.numberOfStudents}\n`;
        if (helper.csStudentsCounts > 0) {
          final += `Number of students in CS: ${helper.csStudentsCounts}. List: ${helper.csStudents.join(', ')}\n`;
        }
        if (helper.sweStudentsCounts > 0) {
          final += `Number of students in SWE: ${helper.sweStudentsCounts}. List: ${helper.sweStudents.join(', ')}`;
        }
      }
      return resolve(final);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2]).then((data) => {
      res.write('This is the list of our students\n');
      res.end(data);
    });
  }
});
app.listen(1245);
