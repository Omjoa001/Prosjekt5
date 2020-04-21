import { pool } from './mysql_pool';

class StudentService {
  getStudents(success) {
    pool.query('SELECT * FROM Students', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getStudent(id, success) {
    pool.query('SELECT * FROM Scoreboard WHERE id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  getStudentsFromStudieprogram(id, success) {
    pool.query('SELECT * FROM Studieprogram JOIN Students ON Studieprogram.id = Students.studieprogramId WHERE Studieprogram.id = ?', [id],  (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  updateStudent(student, success) {
    pool.query(
      'UPDATE Students SET name=?, email=?, studieprogramId=? WHERE id=?',
      [student.name, student.email, student.studieprogramId, student.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }

  deleteStudent(student, success) {
    pool.query(
      'DELETE FROM Students WHERE id=?',
      [student.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }

  addStudent(student, success) {
    pool.query(
      'INSERT INTO Students (name, email, studieprogramId) VALUES (?,?,?)',
      [student.name, student.email, student.studieprogramId],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }

}
class StudieprogramService {
  getStudieprogramer(success) {
    pool.query('SELECT * FROM Studieprogram', (error, results) => {
      if (error) return console.error(error);

      success(results);
    });
  }

  getStudieprogram(id, success) {
    pool.query('SELECT * FROM Studieprogram WHERE id=?', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  getStudentsStudieprogram(id, success) {
    pool.query('SELECT Studieprogram.name FROM Students JOIN Studieprogram ON Students.studieprogramId = Studieprogram.id WHERE Students.id = ?;', [id], (error, results) => {
      if (error) return console.error(error);

      success(results[0]);
    });
  }

  updateStudieprogram(subject, success) {
    pool.query(
      'UPDATE Studieprogram SET name=?, kode=? WHERE id=?',
      [subject.name, subject.kode, subject.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }

  deleteStudieprogram(subject, success) {
    pool.query(
      'DELETE FROM Studieprogram WHERE id=?',
      [subject.id],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }

  addStudieprogram(subject, success) {
    pool.query(
      'INSERT INTO Studieprogram (name, kode) VALUES (?,?)',
      [subject.name, subject.kode],
      (error, results) => {
        if (error) return console.error(error);

        success();
      }
    );
  }

}

class ScoreBoardService {
  getScoreBoard(success) {
    pool.query("select * from Scoreboard ORDER BY poeng DESC LIMIT 20", (error, results) => {
      if (error) return console.error(error);
      success(results);
    });
  }
  //"select * from Scoreboard ORDER BY poeng DESC LIMIT 20"
}

export let scoreBoardService = new ScoreBoardService();
export let studentService = new StudentService();
export let studieprogramService = new StudieprogramService();
