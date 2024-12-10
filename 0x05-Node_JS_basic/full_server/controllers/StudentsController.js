import readDatabase from '../utils.js';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2]).then((obj) => {
      let response = 'This is the list of our students\n';
      if (obj.csStudentsCounts > 0) {
        response += `Number of students in CS: ${obj.csStudentsCounts}. List: ${obj.csStudents.join(', ')}\n`;
      }
      if (obj.sweStudentsCounts > 0) {
        response += `Number of students in SWE: ${obj.sweStudentsCounts}. List: ${obj.sweStudents.join(', ')}`;
      }
      res.send(response);
    }).catch((err) => res.status(500).send(err.message));
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major.toLowerCase();
    if (major !== 'cs' && major !== 'swe') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2]).then((obj) => {
      if (major === 'cs') {
        return res.send(`List: ${obj.csStudents.join(', ')}`);
      } if (major === 'swe') {
        return res.send(`List: ${obj.sweStudents.join(', ')}`);
      }
    }).catch((err) => res.status(500).send(err.message));
  }
}
