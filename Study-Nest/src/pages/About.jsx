function About() {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-primary">📚 About StudyNest</h1>

          <p className="text-secondary">Learn Smarter, Achieve Bigger</p>
        </div>

        {/* About Content */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold text-dark">Your Learning Partner</h2>

            <p className="text-secondary mt-3">
              StudyNest is a learning platform designed to help students learn
              technical skills in a simple and organized way.
            </p>

            <p className="text-secondary">
              Explore different courses, understand topics step by step and
              improve your knowledge with practical learning.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <div className="card border-0 shadow-sm p-5">
              <h1>🎓</h1>

              <h4 className="fw-bold mt-3">Learn • Practice • Grow</h4>

              <p className="text-secondary mb-0">
                Start your learning journey with StudyNest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
