import {React} from 'react';
import vector from '../../Assets/Images/vector.svg';
import './PageTemplate.css';


function PageTemplate(){
    return(
        <div className="page-container"> 
      
        <header className='header' >
           <img src={vector} alt="Appraisal Cycle" className="header-img" />        
            <h1>Appraisal Cycle</h1>
        </header>
     
        <main className="content">
          {/* Add  main content here */}
        </main>

        
        <footer>
            <button>Done</button>
        </footer>
        
      </div>
    )
    }

export default PageTemplate;