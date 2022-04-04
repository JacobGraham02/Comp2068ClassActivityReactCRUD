import React from 'react'
import {EmployeeTableContainer, EmployeeTable, EmployeeTableRow, EmployeeTableRowHeading, 
  EmployeeTableRowData, EmployeeTableHead, EmployeeTableBody} from './listElements'
  import SweetAlert from '../../classes/SweetAlert'

  // view has one prop called employees which is the employees from the mock db
export const EmployeeListView = ({employees}) => {

  return (
    <>

      <EmployeeTableContainer>
          
      <EmployeeTable>
        <EmployeeTableHead>
          <EmployeeTableRow>
            <EmployeeTableRowHeading>First and last name</EmployeeTableRowHeading>          
            <EmployeeTableRowHeading>Email</EmployeeTableRowHeading>
            <EmployeeTableRowHeading>Department</EmployeeTableRowHeading>
            <EmployeeTableRowHeading>Position</EmployeeTableRowHeading>
          </EmployeeTableRow>
          {/* Loop through the employee prop sent from employeeListView */}
          {employees.map((employee) =>(
            // Display all employee info in the db and set the unique key value to each new table row 
              <EmployeeTableRow key={employee.id}>
                <EmployeeTableRowData>{employee.name}</EmployeeTableRowData>
                <EmployeeTableRowData>{employee.email}</EmployeeTableRowData>
                <EmployeeTableRowData>{employee.department}</EmployeeTableRowData>
                <EmployeeTableRowData>{employee.position}</EmployeeTableRowData>
               
                {/* Button to go to detailedEmployeeView/edit/employeeID */}
                 <EmployeeTableRowData><a href={`/detailedEmployeeView/edit/${employee.id}?employeeName=${employee.name.trim()}
                                              &employeeEmail=${employee.email.trim()}&employeeDepartment=${employee.department.trim()}
                                              &employeePosition=${employee.position.trim()}`}><button>Edit</button></a></EmployeeTableRowData>
              </EmployeeTableRow>
          ))}
        </EmployeeTableHead>

        <EmployeeTableBody>
          
        </EmployeeTableBody>
      </EmployeeTable>
    
    </EmployeeTableContainer>
    </>
  )
}

export default EmployeeListView