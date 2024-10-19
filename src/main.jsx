import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import './styles/index.css'
import store from './store'; //calling the index.js(file)
import { Provider } from 'react-redux';
/*
/* inside child components we can use the store_ now :_ 
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../store'; //import all(index.js store_states)
const data1 = useSelector((state: RootState) => state.cart.items);
const data2 = useSelector((state: RootState) => state.products.products);

import { addItemToCart } from '../store/cartSlice';//import store_slice for action
const dispatch = useDispatch();
const handleAddItem = () => {
    dispatch(addItemToCart({ id: product.id, name: product.name...));
  };
*/
createRoot(document.getElementById('root')).render(
  //  wrap all store_names(state,actions_func) and provided in all components/pages
    <Provider store={store}> 
    {/* //detect potential issues with your React code */}
    <StrictMode>
          <App />
          {/* All Routes Entry point */}
    </StrictMode>
    </Provider>
  ,
)
