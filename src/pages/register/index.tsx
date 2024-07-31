import React from "react";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "white",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "600px",
        height: "80%",
        padding: "20px",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.5)",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          display: "flex",
          padding: "10px",
          flex: "1",
          minWidth: "200px",
        }}
      >
        <label style={{ marginBottom: "10px", color: "#696969" }}>
          Name
          <input
            style={{
              width: "100%",
              marginBottom: "10px",
              borderRadius: "4px",
              borderWidth: "1px",
              padding: "6px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px", color: "#696969" }}>
          Birthday
          <input
            type="date"
            style={{
              width: "100%",
              marginBottom: "10px",
              borderColor: "#696969",
              borderRadius: "4px",
              borderWidth: "1px",
              padding: "6px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px", color: "#696969" }}>
          E-Mail
          <input
            type="email"
            style={{
              width: "100%",
              marginBottom: "10px",
              borderRadius: "4px",
              borderWidth: "1px",
              padding: "6px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px", color: "#696969" }}>
          Password
          <input
            type="password"
            style={{
              width: "100%",
              marginBottom: "10px",
              borderRadius: "4px",
              borderWidth: "1px",
              padding: "6px",
            }}
          />
        </label>
        <label style={{ marginBottom: "10px", color: "#696969" }}>
          Confirm Password
          <input
            type="password"
            style={{
              width: "100%",
              marginBottom: "10px",
              borderRadius: "4px",
              borderWidth: "1px",
              padding: "6px",
            }}
          />
        </label>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "1px",
          backgroundColor: "#9A9A89",
          margin: "0 20px",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flex: "1",
          minWidth: "200px",
          textAlign: "center",
        }}
      >
        <img
          src={"/images/register.png"}
          alt="Register"
          style={{ width: "100%", height: "auto", maxWidth: "200px" }}
        />
        <a
          // href="/login"
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "20px",
            fontWeight: "bold",
            textDecoration: "underline",
            color: "black",
            cursor: "pointer",
            fontSize: "11px",
          }}
        >
          <text style={{ textAlign: "center" }}>I already have an account</text>
        </a>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            gap: "3px",
            textAlign: "center",
          }}
        >
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" style={{ fontSize: "11px" }}>
            I agree to the
          </label>

          <a
            href="#"
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              fontWeight: "bold",
              textDecoration: "underline",
              color: "black",
              cursor: "pointer",
              fontSize: "10px",
            }}
          >
            <text style={{ fontSize: "11px" }}>Terms of Service</text>
          </a>
        </div>

        <button
          style={{
            fontWeight: "bold",
            borderWidth: "1px",
            borderColor: "#333333",
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#9A9A89",
            color: "white",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
