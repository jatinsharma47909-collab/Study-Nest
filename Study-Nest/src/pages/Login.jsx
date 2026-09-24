import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import users from "../data/users";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password,
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef6ff, #f8f5ff)",
        padding: "60px 20px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div
              className="card border-0 shadow"
              style={{
                borderRadius: "18px",
                padding: "35px",
              }}
            >
              {/* Heading */}
              <div className="text-center mb-4">
                <h1
                  style={{
                    color: "#172554",
                    fontWeight: "700",
                  }}
                >
                  📚 Welcome Back
                </h1>

                <p style={{ color: "#64748b" }}>Login to continue learning</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Password</label>

                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Enter your password"
                      style={{
                        paddingRight: "50px",
                      }}
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />

                    {/* Only Eye Icon */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        border: "none",
                        background: "transparent",
                        fontSize: "22px",
                        cursor: "pointer",
                        padding: "5px",
                      }}
                    >
                      👁️
                    </button>
                  </div>

                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                {/* Login Button */}
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Login
                </button>
              </form>

              {/* Register */}
              <p className="text-center mt-4 mb-0">
                Don't have an account?{" "}
                <Link to="/register">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
