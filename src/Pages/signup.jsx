function Signup() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center"
        style={{ width: "100vw", height: "100vh", alignItems: "center" }}
      >
        <div
          className="card d-flex"
          style={{
            flexDirection: "column",
            width: "500px",
            height: "500px",
            alignItems: "center",
          }}
        >
          <h1 className="mt-5" style={{ fontFamily: "monospace" }}>
            Sign Up
          </h1>
          <form
            style={{
              flexDirection: "column",
              display: "flex",
              marginTop: "10px",
            }}
          >
            <label for="email" style={{ fontWeight: "bold" }}>
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              style={{ width: "400px", height: "50px", marginBottom: "20px" }}
            />
            <label for="name" style={{ fontWeight: "bold" }}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              style={{ width: "400px", height: "50px", marginBottom: "20px" }}
            />
            <label for="password" style={{ fontWeight: "bold" }}>
              Password:
            </label>
            <input
              type="text"
              name="password"
              style={{ width: "400px", height: "50px", marginBottom: "20px" }}
            />
            <input
              style={{
                width: "400px",
                height: "50px",
                backgroundColor: "#007498",
                color: "white",
                fontWeight: "bold",
              }}
              type="button"
              value="Sign Up"
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
