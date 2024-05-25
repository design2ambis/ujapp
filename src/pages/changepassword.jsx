import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Changepassword = () => {
  const [formData, setFormData] = useState({
    prepass: '',
    newpass: '',
    connewpass: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.prepass) newErrors.prepass = 'Old password is required';
    if (!formData.newpass) newErrors.newpass = 'New password is required';
    if (!formData.connewpass) newErrors.connewpass = 'Confirm new password is required';
    if (formData.newpass && formData.connewpass && formData.newpass !== formData.connewpass) {
      newErrors.connewpass = 'Passwords do not match';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch('https://utsarvajewels.com/api/crud', {
        method: 'POST',
        body: JSON.stringify({
          changepassword: "changepassword",
          oldPassword: formData.prepass,
          newPassword: formData.newpass,
          token: localStorage.getItem("token")
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to change password');
      }

      const data = await response.json();
      if (data.status === true) {
        Swal.fire({
          icon: "success",
          title: "Welcome",
          text: data.message
        }).then(() => {
          window.location.href = '/home';
        });
      } else {
        Swal.fire({
          icon: "failed",
          title: "warning",
          text: data.message
        })
      }

    } catch (error) {
      // Handle error (e.g., show an error message to the user)
      alert('Error changing password: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
        <div className="font-weight-normal mb-0 d-flex align-items-center">
          <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
            <a className="text-dark me-3 fs-4" href="#!" onClick={() => history.back()}>
              <i className="bi bi-chevron-left" />
            </a>
            Change Password
          </h6>
        </div>
      </div>
      <div className="p-4">
        <form name="changepass" id="changepass" autoComplete="off" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label text-muted small mb-1">Old Password</label>
            <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hidden">
              <span className="input-group-text bg-white">
                <i className="bi bi-lock text-muted" />
              </span>
              <input
                type="password"
                name="prepass"
                id="prepass"
                className="form-control"
                placeholder="Enter Previous Password"
                value={formData.prepass}
                onChange={handleChange}
              />
            </div>
            {errors.prepass && <span className="text-danger small">{errors.prepass}</span>}
          </div>
          <div className="mb-4">
            <label className="form-label text-muted small mb-1">New Password</label>
            <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hidden">
              <span className="input-group-text bg-white">
                <i className="bi bi-lock text-muted" />
              </span>
              <input
                type="password"
                name="newpass"
                id="newpass"
                className="form-control"
                placeholder="Enter New password"
                value={formData.newpass}
                onChange={handleChange}
              />
            </div>
            {errors.newpass && <span className="text-danger small">{errors.newpass}</span>}
          </div>
          <div className="mb-4">
            <label className="form-label text-muted small mb-1">Confirm New Password</label>
            <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hidden">
              <span className="input-group-text bg-white">
                <i className="bi bi-lock text-muted" />
              </span>
              <input
                type="password"
                name="connewpass"
                id="connewpass"
                className="form-control"
                placeholder="Re-Enter New password"
                value={formData.connewpass}
                onChange={handleChange}
              />
            </div>
            {errors.connewpass && <span className="text-danger small">{errors.connewpass}</span>}
          </div>
          <div className="osahan-footer fixed-bottom p-3 text-center">
            <button
              type="submit"
              className="btn btn-outline-success btn-load btn-lg w-100 shadow"
              id="submit"
              name="submit"
              disabled={loading}
            >
              Change Password&nbsp;&nbsp;
              {loading && (
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Changepassword;
