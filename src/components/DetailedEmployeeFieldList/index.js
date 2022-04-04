import React, { useState } from 'react'
import {FieldListContainer, FormForEmployeeDetails, FieldsetForEmployeeDetails, TextFieldContainer, TextFieldInput, TextFieldLabelContainer,
TextFieldLabel, ParentButtonContainer, ChildButtonContainer, ButtonCancel, ButtonUpdate, ButtonAdd} from './fieldListElements';
import {Link } from 'react-router-dom';
import { SweetAlert } from '../../classes/SweetAlert'

const DetailedEmployeeFieldList = () => {

  const windowUrl = window.location.href;
  const urlIsAddingEmployee = windowUrl === "http://localhost:3000/detailedEmployeeView/add"
  const urlIsEditingEmployee = windowUrl.slice(0,47) === "http://localhost:3000/detailedEmployeeView/edit"
  const querySearch = window.location.search
  const urlWithoutParameters = window.location.href.split('?')[0]
  const urlParameterForEmployeeId = parseInt(urlWithoutParameters.charAt(urlWithoutParameters.length - 1))
  const urlParams = new URLSearchParams(querySearch)

  const employeeName = urlParams.get('employeeName')
  const employeeEmail = urlParams.get('employeeEmail')
  const employeeDepartment = urlParams.get('employeeDepartment')
  const employeePosition = urlParams.get('employeePosition')

// declare the default states for validation

// declare the default states for input fields/vars

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [department,setDepartment] = useState('')
const [position,setPosition] = useState('')
// function to submit the entered information
// submit new task, takes in the event parameter

// function to submit the entered information and create a new employee, has an event parameter
const onSubmit = (e) =>{
    e.preventDefault()

  setName(document.getElementById("txtFieldInputEmployeeName").value)
  setEmail(document.getElementById("txtFieldInputEmployeeEmail").value)
  setDepartment(document.getElementById("txtFieldInputEmployeeDepartment").value)
  setPosition(document.getElementById("txtFieldInputEmployeePosition").value)

	// validation
	if(!name,!email,!department,!position){
    let warningMessage = new SweetAlert("Field validation errors", "Please input text into all of the text fields presented on the screen", "error", "Ok")
    warningMessage.generateSweetAlert();
    return
  }
	
  if (document.activeElement.id === "btnUpdateEmployeeRecord") {
    getUpdateEmployeeById(urlParameterForEmployeeId)
    setName(document.getElementById("txtFieldInputEmployeeName").value)
    setEmail(document.getElementById("txtFieldInputEmployeeEmail").value)
    setDepartment(document.getElementById("txtFieldInputEmployeeDepartment").value)
	  setPosition(document.getElementById("txtFieldInputEmployeePosition").value)
    //addEmployee({name, email, department, position})
    return
  } 
  //create the employee object using the state and add it to my server/mock db
  
  setName('')
  setEmail('')
  setDepartment('')
	setPosition('')
}
const getUpdateEmployeeById = async (employeeId) => {
  const res = await fetch(` http://localhost:5000/employee/${employeeId}`, {
  method:"GET",
  })

  if (res.status === 200) {
    const data = await res.json()
    deleteEmployee(data.id)
  } else {
    return
  }
}

const deleteEmployee = async (employeeId) => {
  console.log("delete")
 // grab the specific employee by the entered id
 const res = await fetch(` http://localhost:5000/employee/${employeeId}`,{
   // define what we are doing to the db
   method:"DELETE"
 })
 // Check if the delete worked, if it did delete employee else tell user there was a problem
 res.status === 200 ? setEmployees(employees.filter((employee)=> employee.employeeId !== employeeId)) : alert("A problem occured when deleting this employee.")
}


// useState is used to handle the employee objects
const [employees, setEmployees] = useState([])

  return (
    // Begining of the form for employee details
    <FormForEmployeeDetails onSubmit={onSubmit}>

      <FieldListContainer>

        {/* Start of the employee name form */}
        <FieldsetForEmployeeDetails>

          <TextFieldLabelContainer>
            {/* Label */}
            <TextFieldLabel>Employee name:</TextFieldLabel>
          </TextFieldLabelContainer>

          <TextFieldContainer>
            {/* Input */}
			{/* grab the info from input and set the name of the employee for the state */}
            <TextFieldInput type='text' onChange={(e) => setName(e.target.value)} defaultValue={employeeName} id="txtFieldInputEmployeeName"></TextFieldInput>
          </TextFieldContainer>

        </FieldsetForEmployeeDetails>
         {/* End of employee name form */}
       

        {/* Start of the employee email form */}
        <FieldsetForEmployeeDetails>

          <TextFieldLabelContainer>
            <TextFieldLabel>Employee email:</TextFieldLabel>
          </TextFieldLabelContainer>

          <TextFieldContainer>
             {/* Input */}
            <TextFieldInput type='text' onChange={(e) => setEmail(e.target.value)} defaultValue={employeeEmail} id="txtFieldInputEmployeeEmail"></TextFieldInput>
          </TextFieldContainer>

        </FieldsetForEmployeeDetails>
        {/* End of the employee email form */}


        {/* Start of the employee department Form */}
        <FieldsetForEmployeeDetails>

         <TextFieldLabelContainer>
            {/* Label */}
            <TextFieldLabel>Employee department:</TextFieldLabel>
          </TextFieldLabelContainer>
          
          <TextFieldContainer>
             {/* Input */}
            <TextFieldInput type='text' onChange={(e) => setDepartment(e.target.value)} defaultValue={employeeDepartment} id="txtFieldInputEmployeeDepartment"></TextFieldInput>
          </TextFieldContainer>

        </FieldsetForEmployeeDetails>
        {/* End of the employee department Form */}
        

        {/* Start of the employee postion Form */}
        <FieldsetForEmployeeDetails>
        <TextFieldLabelContainer>

            {/* Label */}
            <TextFieldLabel>Employee position:</TextFieldLabel>
          </TextFieldLabelContainer>
          <TextFieldContainer>

             {/* Input */}
            <TextFieldInput type='text' onChange={(e) => setPosition(e.target.value)} defaultValue={employeePosition} id="txtFieldInputEmployeePosition"></TextFieldInput>
          </TextFieldContainer>

        </FieldsetForEmployeeDetails>
        {/* End of the employee postion form */}

      </FieldListContainer>

    {/* All the buttons are below */}
      <ParentButtonContainer>
		{/* If cancel btn is pressed go back to the employee list view page */}
    <ChildButtonContainer>
      <Link to="/">
            <ButtonCancel id="btnCancelEmployeeEdits">Cancel</ButtonCancel>	
      </Link>
    </ChildButtonContainer>
     
     {/* Submit btn will submit the form and add a new employee to the db */}
     {/* Compressed ternary operator that renders the add employee button on the screen if an employee is not currently being edited  */}
     {!urlIsEditingEmployee ? ( 
      null
     ) : (
        null
     )}

      {/* Compressed ternary operator that renders the edit employee button on the screen if an employee if an employee is not currently being added */}
      {!urlIsAddingEmployee ? (
        <ChildButtonContainer>
          <ButtonUpdate type='submit' id="btnUpdateEmployeeRecord">Update employee record</ButtonUpdate>
        </ChildButtonContainer>
      ) : (
        null
      )}
    </ParentButtonContainer>
	{/* End of the buttons */}
  
    </FormForEmployeeDetails>
    // End of the entire form 
  );
}


export default DetailedEmployeeFieldList