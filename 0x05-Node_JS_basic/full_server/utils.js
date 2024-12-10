import { readFile } from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf8' }, (err, content) => {
      let helper = null;
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      if (content) {
        const data = content.split('\n').filter((line) => line !== '');
        data.shift();
        helper = {
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
      }
      return resolve(helper);
    });
  });
}
