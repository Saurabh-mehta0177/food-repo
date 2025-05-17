import React, { useState, useEffect } from "react";
import AuthForm from "./AuthForm.jsx";
import Footer from "./Footer.jsx";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setarea] = useState("Indian");
  const [inputData, setInputData] = useState("");
  const [showAuthForm, setShowAuthForm] = useState(false); // Toggle popup
  const [footer, setFooter] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      setMealData(data.meals);
    };
    fetchDataFromApi();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();
    setMealData(data.meals ? data.meals : []);
    setInputData("");
  };
  return (
    <>
      <div className="mx-3 mx-auto text-center nav">
        <div
          className="my-3 nav-1 btn-list"
          style={{ width: "800px", margin: "auto" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
            className="mx-auto text-center my-3 form nav-1 container-tab"
          >
            {/* Icons */}
            <i
              className="fa-solid fa-utensils"
              style={{ color: "#f00000", fontSize: "30px" }}
            ></i>
            <i
              className="fa-solid fa-store"
              style={{ color: "#f5a051", fontSize: "30px" }}
            ></i>
            <i
              className="fa-solid fa-burger"
              style={{ color: "#FFD43B", fontSize: "30px" }}
            ></i>
            <i
              className="fa-solid fa-mug-hot"
              style={{ color: "#B197FC", fontSize: "30px" }}
            ></i>
            <i
              className="fa-solid fa-font-awesome"
              style={{ color: "#FFD43B", fontSize: "30px" }}
            ></i>
            <i
              className="fa-solid fa-truck-fast"
              style={{ color: "#94928f", fontSize: "30px" }}
            ></i>

            {/* Search Form */}
            <form
              onSubmit={submitHandler}
              className="mx-auto text-center my-3 form nav-1"
            >
              <i
                className="fa-solid fa-magnifying-glass search"
                style={{ fontSize: "30px", marginBottom: "-10px", color: "white" }}
              ></i>
              <input
                onChange={(e) => setInputData(e.target.value)}
                type="text"
                placeholder="Search"
                className="search-bar"
              />
            </form>

            {/* User Profile Icon - Toggle Login/Signup Popup */}
            <i
              className="fa-solid fa-circle-user"
              style={{
                color: "#74C0FC",
                fontSize: "40px",
                cursor: "pointer",
              }}
              onClick={() => setShowAuthForm(true)}
            ></i>
          </div>

          {/* Meal Selection Buttons */}
          <div
            className="mx-auto text-center"
            style={{
              backgroundColor: "skyblue",
              padding: "10px",
              borderRadius: "25px",
              outline: "2px solid yellow",
            }}
          >
            <button
              onClick={() => setarea("Indian")}
              type="button"
              className="btn btn-outline-primary mx-3 rounded-pill"
            >
              Indian
            </button>
            <button
              onClick={() => setarea("Canadian")}
              type="button"
              className="btn btn-outline-success mx-3 rounded-pill"
            >
              Canadian
            </button>
            <button
              onClick={() => setarea("Thai")}
              type="button"
              className="btn btn-outline-dark mx-3 rounded-pill"
            >
              Thai
            </button>
            <button
              onClick={() => setarea("British")}
              type="button"
              className="btn btn-outline-danger mx-3 rounded-pill"
            >
              British
            </button>
            <button
              onClick={() => setarea("Russian")}
              type="button"
              className="btn btn-outline-warning mx-3 rounded-pill"
            >
              Russian
            </button>
            <button
              onClick={() => setarea("German")}
              type="button"
              className="btn btn-outline-info mx-3 rounded-pill"
            >
              German
            </button>
            <button
              onClick={() => setarea("Austrian")}
              type="button"
              className="btn btn-outline-light mx-3 rounded-pill"
            >
              Austrian
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal for AuthForm */}

      {showAuthForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              textAlign: "center",
              position: "relative",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => setShowAuthForm(false)}
            >
              ✖
            </button>
            <AuthForm />
          </div>
        </div>
      )}
      {/* Meal Display */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {mealData.length > 0 ? (
          mealData.map((data) => (
            <div key={data.idMeal} style={{ textAlign: "center" }}>
              <div className="hover_effect">
                <img
                  src={data.strMealThumb}
                  alt={data.strMeal}
                  style={{
                    width: "220px",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <a className="name" href="#">
                <h5>{data.strMeal}</h5>
              </a>
            </div>
          ))
        ) : (
          <h3 style={{ textAlign: "center", color: "red" }}>
            Oop'S <br />
            No meals found, try another search.
            <br />
            <div className="refresh">
              <button
                onClick={() => window.location.reload()}
                className="btn btn-warning my-3"
              >
                Refresh Page
              </button>
            </div>
          </h3>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Meal;
