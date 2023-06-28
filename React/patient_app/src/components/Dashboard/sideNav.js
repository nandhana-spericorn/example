import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Outlet, useNavigate } from 'react-router-dom';
import './index.css';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Footer from '../Footer';
// import { logout } from '../../actions';
import { useDispatch } from 'react-redux';

const SideNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showNav, setShowNav] = useState(true);
  const { role, permission } = useSelector((state) => state.commonReducer);
  const uniquePermission = [
    ...new Set(permission?.map((item) => Object.keys(item)[0])),
  ];
  return (
    <div>
      <div className={`body-area${showNav ? ' body-pd' : ''}`}>
        <header className={`header${showNav ? ' body-pd' : ''}`}>
          <div className="header_toggle">
            <i
              className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
              onClick={() => setShowNav(!showNav)}
            />
            <Navbar.Brand className="logos" href="http://localhost:3000">
              MEDWIN CARE
            </Navbar.Brand>
          </div>
        </header>
        <div className={`l-navbar${showNav ? ' shows' : ''}`}>
          <nav className="nav" style={{ flex: '1 1 0%' }}>
            <div>
              <a
                onClick={() => navigate('/dashboard')}
                target="_blank"
                className="nav_logo"
                rel="noopener"
              >
                <i className="fa-solid fa-house-user"></i>
                <span className="nav_logo-name">Dashboard</span>
              </a>
              <div className="nav_list">
                <a
                  onClick={() => navigate('/consultation')}
                  target="_blank"
                  className="nav_link"
                  rel="noopener"
                >
                  <i className="fa-solid fa-photo-film"></i>
                  <span className="nav_name">Consultation</span>
                </a>

                <a
                  onClick={() => navigate('/vaccination')}
                  target="_blank"
                  className="nav_link"
                  rel="noopener"
                >
                  <i className="fa-solid fa-truck"></i>
                  <span className="nav_name">Vaccination</span>
                </a>

                <a
                  onClick={() => navigate('/profile')}
                  target="_blank"
                  className="nav_link"
                  rel="noopener"
                >
                  <i className="fa-solid fa-address-card"></i>
                  <span className="nav_name">Profile</span>
                </a>
                <a
                  onClick={() => navigate('/changePassword')}
                  target="_blank"
                  className="nav_link"
                  rel="noopener"
                >
                  <i className="fa-solid fa-key"></i>
                  <span className="nav_name">ChangePassword</span>
                </a>
              </div>
            </div>
            <a
              // onClick={() => dispatch(logout(navigate))}
              target="_blank"
              className="nav_link"
              rel="noopener"
            >
              <i className="bi bi-box-arrow-left nav_icon" />
              <span className="nav_name">logout</span>
            </a>
          </nav>
        </div>
        <div style={{ flex: '1 1 0%' }}>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default SideNav;
