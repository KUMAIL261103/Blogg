
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from './Create'
import BloggDetails from './BloggDetail';
import NotFound from './NotFound';
function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}>
                
            </Route>
              <Route  exact path="/Create" element={<Create/>}>
               
            </Route>
            <Route  exact path="/blogs/:id" element={<BloggDetails/>}>
               
            </Route>
            <Route exact path="*" element={<NotFound/>}>
              
            </Route>
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
