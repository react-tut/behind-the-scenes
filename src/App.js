import { useState, useCallback } from 'react';
import "./App.css";
import DemoList from './components/Demo/DemoList';
import DemoOutput from './components/Demo/DemoOutput';

const LIST = [5,3,1,10,9];
const App = () => {
  console.log('APP RUNNING');

  // state gets updated in batch
  const [showPara, setShowPara] = useState(false);
  const [listTitle, setlLstTitle] = useState(false);
  
  const toggleParaHandler = useCallback(() => {
    setShowPara(prevState => !prevState);
    setlLstTitle('new title');
  }, []);

  return (
    <div className="App">
      <h1>Hi There!</h1>
      <DemoOutput show={showPara}/>
      <hr/>
      <DemoList title={listTitle} items={LIST} />
      <button onClick={toggleParaHandler}>Show Paragarph</button>
    </div>
  );
}

export default App;
