import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/headerFile';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default App;
