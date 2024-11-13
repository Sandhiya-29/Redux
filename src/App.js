 import { Provider } from 'react-redux';
import './App.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
 import { store } from './Store';


function App() {

  return (
     <Provider store={store} >
    <div className="App">
    <CustomerAdd />
    <CustomerView />
    </div>
     </Provider>
  );
}

export default App;
