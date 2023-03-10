import { pool } from '../config/mysql-config.js'
export async function getEmployees() {
  const [rows] = await pool.query(`select * from employees limit 10`)
  console.log(rows)
  return rows
}

export async function getMaxNo() {
  const [rows] = await pool.query(`select max(emp_no) as max from employees`)
  return rows[0]
}

export async function addUser(
  empNo,
  birthDate,
  firstName,
  lastName,
  gender,
  hireDate
) {
  const query = `INSERT INTO employees VALUES (?,?,?,?,?,?)`
  // const query = `INSERT INTO employees VALUES (@max_emp_id+1, '1990-01-01', 'Turu','Bay', 'M','2022-02-02')`
  const [rows] = await pool.query(query, [
    empNo,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate,
  ])
  return rows
}

export async function updateUser(empNo, lastName, gender) {
  const query = `UPDATE employees SET last_name=?, gender=? where emp_no=?;`
  //    UPDATE employees SET gender='F' where emp_no= 500002;
  const [rows] = await pool.query(query, [lastName, gender, empNo])
  return rows
}

export async function deleteUser(empNo) {
  const query = `DELETE FROM employees where emp_no= ${empNo};`
  const [rows] = await pool.query(query)

  return rows
}
