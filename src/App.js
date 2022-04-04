import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import DetailedEmployeeView from './pages/detailedEmployeeView'
import EmployeeListView from './pages/employeeListView'

// This is where the entire application is render/defined
function App() {
  return (
    // Routing for the project
      <Router>
        <Switch>
          {/* Display this page when the application launches */}
          <Route path="/" component={EmployeeListView} exact></Route>

          {/* The path for adding a new employee */}
          <Route path="/detailedEmployeeView/add" component={DetailedEmployeeView} exact></Route>
          
          {/* The path for editing a new employee */}
          <Route path="/detailedEmployeeView/edit/:id" component={DetailedEmployeeView} exact></Route>
          {/* The path for deleting an existing employee */}
          <Route path="/detailedEmployeeView/delete/:id" component={DetailedEmployeeView} exact></Route>
        </Switch>
      </Router>
  );
}

export default App;

