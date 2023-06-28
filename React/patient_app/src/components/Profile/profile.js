import React, { useEffect, useState } from 'react';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile } from '../../action';
import Button from 'react-bootstrap/Button';
import ProfileModal from './Modal';

const Profile = () => {
  const dispatch = useDispatch();
  const { profileData } = useSelector((state) => state.commonReducer);
  const [modalShow, setModalShow] = useState(false);
  console.log(profileData);
  useEffect(() => {
    dispatch(setProfile());
  }, []);
  return (
    <div>
      <div className="card">
        <h3 style={{ textAlign: 'center' }}>Profile</h3>
        <div className="imgs">
          {/* <img src={`http://localhost:5000/${profileData?.photo?.slice(6)}`} /> */}
        </div>
        <div className="infos">
          <div className="name">
            <h2>Name:{profileData?.name}</h2>
            <h2>Email:{profileData?.login?.email}</h2>
            <h2>Address:{profileData?.address}</h2>
            <h2>Aadhar Number:{profileData?.aadharNumber}</h2>
            <h2>pinCode:{profileData?.pinCode}</h2>
            <h2>State:{profileData?.state}</h2>
            <h2>Role:{profileData?.login?.role}</h2>
            <h2>Phone Number:{profileData?.phoneNumber}</h2>
          </div>
        </div>
      </div>
      <div>
        <div class="containers">
          <h1 class="title d-flex">
            Health Information
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Edit
            </Button>
            <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
