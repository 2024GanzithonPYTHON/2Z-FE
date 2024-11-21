import logo from './logo.svg';
import './App.css';
import Test from './pages/Test';
import Chat from './pages/Chat';
import { Helmet } from 'react-helmet';
import Main from './pages/Main';
import Goal from './pages/Goal';
import GoalEl from './components/GoalEl';
function App() {
  return (
    <>
    <Helmet>
    
    </Helmet>
    <div className="App">
      {/* <Test/> */}
      {/* <Chat/> */}
      {/* <Main/> */}
      <Goal/>
    </div>
    </>
  );
}

export default App;
