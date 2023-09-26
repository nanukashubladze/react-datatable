
import './App.css';
import DataTable from './DataTable';


function App() {
  return <div className="App">
     <table>
     <thead>
          <tr>
            <th><h3>Name</h3></th>
            <th><h3>Age</h3></th>
            <th><h3>Image</h3></th>
          </tr>
        </thead>
        <tbody>
        <DataTable />
        </tbody>
     </table>
    
    </div>
  
}

export default App;
