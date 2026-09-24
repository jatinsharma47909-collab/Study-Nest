function AdminMaterial() {
  return (
    <div className="container-fluid p-4">
      <h1 className="fw-bold">Add New Material</h1>

      <p className="text-muted">Add study material for students</p>

      <div className="card shadow-sm border-0 p-4 mt-4">
        <div className="mb-3">
          <label className="form-label fw-bold">Material Title</label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter material title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Subject</label>

          <select className="form-select">
            <option>Select Subject</option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
            <option>React</option>
            <option>Java</option>
            <option>Database</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Upload PDF</label>

          <input type="file" className="form-control" accept=".pdf" />
        </div>

        <button className="btn btn-primary">➕ Add Material</button>
      </div>
    </div>
  );
}

export default AdminMaterial;
