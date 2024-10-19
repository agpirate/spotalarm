import React from 'react';
import layout1Store from '../store/app1/store_a';
import { Provider } from 'react-redux';

/* inside child components we can use the store_ now :_ 
import { useSelector, useDispatch } from 'react-redux';


const data = useSelector((state: any) => state.layout1.data);

import { setData, addItem } from '../store/layout1/layout1Slice';
const dispatch = useDispatch();
const handleAddItem = () => {
    dispatch(addItem('New Item'));
  };

*/
const Layout: React.FC = () => {
    return (
        <Provider store={layout1Store}>  
        <header className="app-header">
            <h1>My React App</h1>
        </header>
        </Provider>
    );
};

export default Layout;
