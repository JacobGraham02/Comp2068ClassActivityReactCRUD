import styled from 'styled-components';


export const EmployeeTableContainer = styled.article`
    border: 2px solid white;
    width: 80%;
    height: 80%;
`;

export const EmployeeTable = styled.table`
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-collapse: separate;
    border-spacing: 2em 0;
`;

export const EmployeeTableHead = styled.thead`
    border: 2px solid black;
`;

export const EmployeeTableBody = styled.tbody`
   
`;

export const EmployeeTableRow = styled.tr`
    border: 2px solid black;
`;

export const EmployeeTableRowHeading = styled.th`
    border: 2px solid black;
`;

export const EmployeeTableRowData = styled.td`
padding-top:5px;
padding-bottom:5px;
padding-right:5px;

`;
