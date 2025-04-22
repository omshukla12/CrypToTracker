"use client";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import { FiBarChart2, FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };

  const styles = {
    colors: {
      royalPurple: "#6D28D9",
      gold: "#F59E0B",
      white: "#FFFFFF",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    header: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #E2E8F0",
      padding: "1rem 0",
    },
    headerContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      fontWeight: "700",
      fontSize: "1.5rem",
      color: "#6D28D9",
      textDecoration: "none",
    },
    navMenu: {
      display: "flex",
      gap: "2rem",
    },
    navLink: {
      color: "#0F172A",
      fontWeight: "500",
      textDecoration: "none",
      transition: "all 0.3s ease",
    },
    authButtons: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    loginLink: {
      fontWeight: "600",
      color: "#6D28D9",
      textDecoration: "none",
    },
    button: {
      primary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1.5rem",
        borderRadius: "0.5rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: "none",
        fontSize: "0.875rem",
        gap: "0.5rem",
        backgroundColor: "#6D28D9",
        color: "#FFFFFF",
        boxShadow: "0 4px 6px rgba(109, 40, 217, 0.25)",
      },
    },
  };

  return (
    <header style={styles.header}>
      <div style={{ ...styles.container, ...styles.headerContainer }}>
        <Link to="/" style={styles.logo}>
          <FiBarChart2 style={{ fontSize: "1.75rem", color: styles.colors.gold }} />
          <span>CrypTo<span style={{ color: styles.colors.royalPurple }}>Tracker</span></span>
        </Link>

        {!isMobile && user === "logged in" && (
          <nav style={styles.navMenu}>
            <Link to="/top10" style={styles.navLink}>Top10</Link>
            <Link to="/trending" style={styles.navLink}>Trending</Link>
            <Link to="/watchlist" style={styles.navLink}>Watchlist</Link>
          </nav>
        )}

        <div style={styles.authButtons}>
          {isMobile ? (
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                color: styles.colors.royalPurple,
              }}
            >
              <FiMenu />
            </button>
          ) : user === "logged in" ? (
            <button onClick={handleLogout} style={styles.button.primary}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" style={styles.loginLink}>Login</Link>
              <button
                style={styles.button.primary}
                onClick={() => navigate("/signin")}
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
