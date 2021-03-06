import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware,} from 'redux';
import reducers from "./reducer/index"


const store = createStore(reducers, applyMiddleware(thunk)); 

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('root'));

