function AdminUsers() {
  const users = [
    {
      id: 1,
      name: "Jatin Sharma",
      email: "jatin@gmail.com",
      education: "BCA",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      education: "B.Tech",
    },
  ];

  return (
    <div className="container-fluid p-4">
      <h1 className="fw-bold">ManageUsers</h1>

      <p className="text-muted">View registered StudyNest users</p>

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Education</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.education}</td>

                    <td>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;
