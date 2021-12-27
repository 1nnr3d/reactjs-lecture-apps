import { useNavigate } from 'react-router-dom'

import { useFormik } from 'formik';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: ""
    },

    onSubmit: values => {
      formik.resetForm();

      navigate(`/chat`, {
        state: {
          username: values.username
        }
      })
    }
  });

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card text-center"
        style={{ "width": '28rem', "height": '20rem' }}>
        <div className="card-header bg-transparent">
          <h1>Login Chat</h1>
        </div>
        <div className="card-body py-5 px-5">
          <form className="form" onSubmit={formik.handleSubmit}>
            <input
              className="form-control mb-3"
              name="username"
              placeholder="Username"
              onChange={formik.handleChange}
              value={formik.values.username} />
            <button type="submit" className="btn btn-primary w-50">Login</button>
          </form>
        </div>
        <div className="card-footer bg-transparent">
          <span className="fw-bold">Developed by 1nnr3d</span>
        </div>
      </div>
    </div >
  )
}

export default Login
