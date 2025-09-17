
import Table from './components/Table';
import './App.css';

function App() {
  const students = [
    { id: '2021ict01', name: 'Alice', grade: 'A' },
    { id: '2021ict02', name: 'Bob', grade: 'B' },
    { id: '2021ict03', name: 'Charlie', grade: 'C' },
  ];
  return (
    <div className="App">
      <h1>Student Table</h1>
      <Table studata={students} />
    </div>
  );
}

export default App;
