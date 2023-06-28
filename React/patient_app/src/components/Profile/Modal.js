import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Joi from 'joi';
import Button from 'react-bootstrap/Button';
import './index.css';

function ProfileModal(props) {
  const bloodgroup = ['A+', 'B+', 'A-', 'AB+', 'AB-', 'O+', 'O-'];
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState({
    blood: '',
    height: '',
    weight: '',
    gender: '',
  });
  const schema = Joi.object({
    blood: Joi.string().required().messages({
      'string.empty': `blood group is required `,
    }),
    height: Joi.string().required().messages({
      'string.empty': `height is required `,
      'any.required': `height is a required`,
    }),
    weight: Joi.string().required().messages({
      'string.empty': `Weight is required `,
      'any.required': `Weight is a required field`,
    }),
    gender: Joi.string().required().messages({
      'string.empty': `gender is required `,
      'any.required': `gender is a required`,
    }),
  });

  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const { error } = schema.validate(formState, { abortEarly: false });
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.context.label] = detail.message;
      });
      setErrors(validationErrors);
    } else {
      console.log(formState);
    }
  };
  console.log(formState);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Health Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div class="grids">
            <div class="form-group a">
              <label for="blood">Blood</label>
              <select name="blood" id="cars" value={formState.blood}>
                <option value="volvo">select one</option>
                {bloodgroup.map((e) => {
                  return <option value={e}>{e}</option>;
                })}
              </select>
              {errors.blood && (
                <small style={{ color: 'red' }}>{errors.blood}</small>
              )}
            </div>

            <div class="form-group b">
              <label for="height">Height</label>
              <input
                id="height"
                type="text"
                value={formState.height}
                name="height"
              />
              {errors.height && (
                <small style={{ color: 'red' }}>{errors.height}</small>
              )}
            </div>

            <div class="form-group email-group">
              <label for="weight">Weight</label>
              <input
                id="weight"
                type="text"
                value={formState.weight}
                name="weight"
              />
              {errors.weight && (
                <small style={{ color: 'red' }}>{errors.weight}</small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div className="radio-group">
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) =>
                    setFormState({ ...formState, gender: e.target.value })
                  }
                />
                <label htmlFor="male">Male</label>
              </div>

              <div className="radio-group">
                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) =>
                    setFormState({ ...formState, gender: e.target.value })
                  }
                />
                <label htmlFor="female">Female</label>
              </div>

              <div className="radio-group">
                <input
                  id="other"
                  type="radio"
                  name="gender"
                  value="other"
                  onChange={(e) =>
                    setFormState({ ...formState, gender: e.target.value })
                  }
                />
                <label htmlFor="other">Other</label>
              </div>

              {errors.gender && (
                <small style={{ color: 'red' }}>{errors.gender}</small>
              )}
            </div>

            <div class="button-container">
              <button
                type="button"
                className="button"
                style={{ marginRight: '50px' }}
                onClick={() => {
                  props.onHide();
                  setErrors({});
                }}
              >
                Close
              </button>
              <button type="submit" class="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default ProfileModal;
