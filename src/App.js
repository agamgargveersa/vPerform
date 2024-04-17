import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Sidebar from './components/common/sidebar/Sidebar.tsx';
import Dashboard from './pages/Dashboard.tsx';
import AppraisalCycle from './pages/AppraisalCycle.tsx';
import AppraiseeView from './pages/AppraiseeView.tsx';
import PerformanceModule from './pages/PerformanceModule.tsx';
import Settings from './pages/Settings.tsx';
import ConfirmationPopup from './Common/ConfirmationPopup/ConfirmationPopup';
import PageTemplate from './Common/PageTemplate/PageTemplate';


function App() {
  return (
  
  
      <div className="App">
        <BrowserRouter>
          <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/appraisalCycle' element={<AppraisalCycle/>}/>
          <Route path='/appraiseeView' element={<AppraiseeView/>}/>
          <Route path='/performanceModule' element={<PerformanceModule/>}/>
          <Route path='/settings' element={<Settings/>}/>

        </Routes>
        </BrowserRouter>
        
       {/* <PageTemplate/>  */}
      </div>
  
  );
}

export default App;
