
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewEmployee from './components/ViewEmployee';
import AddEmployee from './components/AddEmployee';
import ViewinTable from './components/ViewinTable';
function App() {
  return (
    <>
    <Navbar/>
    <ViewinTable/>
    <Routes>
      <Route path='/' element={<ViewEmployee/>}/>
      <Route path='/add' element={<AddEmployee/>} />
      <Route path='/view' element={<ViewinTable/>} />
    </Routes>
    </>
  );
}

export default App;
