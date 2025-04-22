"use client";
import React from "react";
import { FiBarChart2, FiTwitter, FiLinkedin, FiGrid } from "react-icons/fi";

const Footer = () => {
  const styles = {
    footer: {
      background: "linear-gradient(145deg, #0F172A, #1E293B)",
      color: "#E2E8F0",
      padding: "5rem 2rem 2rem",
      textAlign: "center",
      fontFamily: "'Inter', sans-serif",
      borderTop: "1px solid rgba(255,255,255,0.05)",
    },
    logo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "900",
      fontSize: "2.25rem",
      color: "#A78BFA",
      gap: "0.6rem",
      marginBottom: "1rem",
      letterSpacing: "0.5px",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    description: {
      color: "#CBD5E1",
      maxWidth: "700px",
      margin: "0 auto 2.5rem",
      fontSize: "1.1rem",
      lineHeight: "1.9rem",
    },
    icons: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
      marginBottom: "2.5rem",
    },
    iconCircle: {
      backgroundColor: "#1E293B",
      borderRadius: "50%",
      width: "55px",
      height: "55px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      color: "#F8FAFC",
      transition: "transform 0.3s ease, background 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    },
    bottomRow: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "0.75rem",
      alignItems: "center",
      borderTop: "1px solid #334155",
      paddingTop: "1.75rem",
      color: "#94A3B8",
      fontSize: "0.95rem",
    },
    rowText: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "0.5rem",
      alignItems: "center",
    },
    highlight: {
      color: "#F43F5E",
      fontWeight: "600",
    },
    name: {
      color: "#38BDF8",
      fontWeight: "600",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.logo}>
        <FiBarChart2 style={{ color: "#FBBF24" }} />
        <span>CryptoTracker</span>
      </div>
      <p style={styles.description}>
        The complete platform for cryptocurrency tracking and portfolio
        management.
      </p>
      <div style={styles.icons}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.iconCircle}>
          <FiTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconCircle}>
          <FiLinkedin />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" style={styles.iconCircle}>
          <FiGrid />
        </a>
      </div>
      <div style={styles.bottomRow}>
        <div style={styles.rowText}>
          <span>
            Made with <span style={styles.highlight}>❤️</span> by <span style={styles.name}>Om Shukla</span>
          </span>
          <span>•</span>
          <span>© 2025 CryptoTracker. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;