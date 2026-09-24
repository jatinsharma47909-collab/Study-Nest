import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("userName", data.name);

    alert("Registration Successful!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef6ff, #f8f5ff)",
        padding: "50px 20px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div
              className="card border-0 shadow"
              style={{
                borderRadius: "18px",
                padding: "35px",
                backgroundColor: "#ffffff",
              }}
            >
              {/* Heading */}
              <div className="text-center mb-4">
                <h1
                  style={{
                    color: "#172554",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  📚 Create Your Account
                </h1>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "16px",
                  }}
                >
                  Join StudyNest and start learning
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    style={{
                      padding: "11px",
                      borderRadius: "8px",
                    }}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />

                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email</label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    style={{
                      padding: "11px",
                      borderRadius: "8px",
                    }}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />

                  {errors.email && (
                    <small className="text-danger">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                {/* Country + Mobile */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Mobile Number
                  </label>

                  <div className="d-flex gap-2">
                    <select
                      className="form-control"
                      style={{
                        padding: "11px",
                        borderRadius: "8px",
                        width: "170px",
                      }}
                      {...register("countryCode", {
                        required: "Please select country",
                      })}
                    >
                      <option value="">Country</option>
                      <option value="+91">🇮🇳 India (+91)</option>
                      <option value="+1">🇺🇸 USA (+1)</option>
                      <option value="+44">🇬🇧 UK (+44)</option>
                      <option value="+971">🇦🇪 UAE (+971)</option>
                      <option value="+61">🇦🇺 Australia (+61)</option>
                      <option value="+81">🇯🇵 Japan (+81)</option>
                      <option value="+49">🇩🇪 Germany (+49)</option>
                      <option value="+33">🇫🇷 France (+33)</option>
                    </select>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter mobile number"
                      style={{
                        padding: "11px",
                        borderRadius: "8px",
                      }}
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10 digit mobile number",
                        },
                      })}
                    />
                  </div>

                  {errors.countryCode && (
                    <small className="text-danger d-block">
                      {errors.countryCode.message}
                    </small>
                  )}

                  {errors.mobile && (
                    <small className="text-danger">
                      {errors.mobile.message}
                    </small>
                  )}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    style={{
                      padding: "11px",
                      borderRadius: "8px",
                    }}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />

                  {errors.password && (
                    <small className="text-danger">
                      {errors.password.message}
                    </small>
                  )}
                </div>

                {/* Education */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Education</label>

                  <select
                    className="form-control"
                    style={{
                      padding: "11px",
                      borderRadius: "8px",
                    }}
                    {...register("education", {
                      required: "Please select your education",
                    })}
                  >
                    <option value="">Select Education</option>
                    <option value="10th">10th</option>
                    <option value="12th">12th</option>
                    <option value="Diploma">Diploma</option>
                    <option value="BCA">BCA</option>
                    <option value="BSc IT">BSc IT</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="MCA">MCA</option>
                    <option value="Other">Other</option>
                  </select>

                  {errors.education && (
                    <small className="text-danger">
                      {errors.education.message}
                    </small>
                  )}
                </div>

                {/* Gender */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Gender</label>

                  <select
                    className="form-control"
                    style={{
                      padding: "11px",
                      borderRadius: "8px",
                    }}
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>

                  {errors.gender && (
                    <small className="text-danger">
                      {errors.gender.message}
                    </small>
                  )}
                </div>

                {/* Register Button */}
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    padding: "12px",
                    fontSize: "17px",
                    borderRadius: "10px",
                    backgroundColor: "#2563eb",
                    color: "white",
                    fontWeight: "600",
                    border: "none",
                  }}
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
