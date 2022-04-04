import React from 'react'
import EmployeeManagementList from '../components/EmployeeList'
// import from react useState and useEffect
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import { SweetAlert } from '../classes/SweetAlert'

const EmployeeListView = () => {
    
  // This function grabs the employees from the json server and puts them into the state
  useEffect (() =>{
    // func to get employees
     const fetchEmployees = async () =>{
       // grab the employees from json server
       const employeesFromServer = await getEmployees()
       // add the employees from the json response into the sate
       setEmployees(employeesFromServer)
     }
     // call fetch employees function
     fetchEmployees()
  },[])

// useState is used to handle the employee objects
const [employees, setEmployees] = useState([])

  // grab the employees from the json server response
const getEmployees = async () =>{    const res = await fetch('http://localhost:5000/employee')
    const data = await res.json()
  
    return data
}
 // function to delete and employee
 const deleteEmployee = async (id) => {
  const warningMessage = new SweetAlert("Employee deletion error", "There was an error when deleting an employee record from the list. Please try again", "error", "Ok")
  // grab the specific employee by the entered id
  const res = await fetch(` http://localhost:5000/employee/${id}`,{
    // define what we are doing to the db
    method:"DELETE"
  })
  // Check if the delete worked, if it did delete employee else tell user there was a problem
  res.status === 200 ? setEmployees(employees.filter((employee)=> employee.id !== id)) : warningMessage.generateSweetAlert();
}

  return (

    <>
        {/* Router sorrounds everything for routing to different pages */}
        <Router>
            <Switch>
                {/* send the employees prop to the employee management list view */}
                <EmployeeManagementList employees={employees} onDelete={deleteEmployee}/>
            </Switch>
        </Router>
       
      
    </>
    
  )
}

export default EmployeeListView