import React, { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Signing up...");
    console.log(formData);

    // Clear input fields after submission
    setFormData({ email: "", password: "", phone: "" });

    // Show alert
    messageAlert();
  };

  const messageAlert = () => {
    alert("You are registered successfully");
  };

  return (
    <div
      className="container"
      style={{ 
        maxWidth: "450px", margin: "auto", textAlign: "center", borderRadius: '20px',
        marginTop: "2.5rem", backgroundColor: "magenta" 
      }}
    >
      <h2 style={{ backgroundColor: "magenta", borderRadius: '10px' }}>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "magenta" }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-control my-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="form-control my-2"
        />

        {/* Show Phone Number Input ONLY if it's Signup */}
        {!isLogin && (
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-control my-2"
          />
        )}

        <button type="submit" className="btn btn-success w-100">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className="btn btn-link mt-2" style={{ color: "blue" }}>
        {isLogin ? "Create an account" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default AuthForm;
