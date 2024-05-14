import React from 'react'

const Changepassword = () => {
  return (
    <>
  <div className="p-3 shadow-sm bg-warning danger-nav osahan-home-header">
    <div className="font-weight-normal mb-0 d-flex align-items-center">
      <h6 className="fw-normal mb-0 text-dark d-flex align-items-center">
        <a className="text-dark me-3 fs-4" href="#!">
          <i className="bi bi-chevron-left" />
        </a>
        Change Password
      </h6>
    </div>
  </div>
  <div className="p-4">
    <form name="changepass" id="changepass" autocoplete="off">
      <div className="mb-4">
        <label className="form-label text-muted small mb-1">Old Password</label>
        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
          <span className="input-group-text bg-white">
            <i className="bi bi-lock text-muted" />
          </span>
          <input
            type="password"
            name="prepass"
            id="prepass"
            className="form-control"
            placeholder="Enter Previous Password"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label text-muted small mb-1">New Password</label>
        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
          <span className="input-group-text bg-white">
            <i className="bi bi-lock text-muted" />
          </span>
          <input
            type="password"
            name="newpass"
            id="newpass"
            className="form-control"
            placeholder="Enter New password"
          />
        </div>
        <span className="message" />
      </div>
      <div className="mb-4">
        <label className="form-label text-muted small mb-1">
          Confirm New Password
        </label>
        <div className="input-group input-group-lg bg-white shadow-sm rounded overflow-hiddem">
          <span className="input-group-text bg-white">
            <i className="bi bi-lock text-muted" />
          </span>
          <input
            type="password"
            name="connewpass"
            id="connewpass"
            className="form-control"
            placeholder="Re-Enter New password"
          />
        </div>
        <span className="message" />
      </div>
      <div className="osahan-footer fixed-bottom p-3 text-center">
        <button
          type="submit"
          className="btn btn-outline-success btn-load btn-lg w-100 shadow"
          id="submit"
          name="submit"
        >
          Change Password&nbsp;&nbsp;
          <span
            style={{ display: "none" }}
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
        </button>
      </div>
    </form>
  </div>
</>

  )
}

export default Changepassword