"use client"
import { toast } from "react-hot-toast"
import {
  FiBarChart2,
  FiBell,
  FiGlobe,
  FiLock,
  FiZap,
  FiDollarSign,
  FiChevronRight,
  FiArrowRight,
  FiCheck,
  FiShield,
  FiTrendingUp,
  FiCpu,
  FiPieChart,
} from "react-icons/fi"

const Home = () => {
  const handleStartTrial = () => {
    toast.success("Free trial activated! Welcome aboard!")
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    toast.success("Thanks for subscribing! Check your email for updates.")
  }

  // Minimal design styles
  const styles = {
    // Minimal color palette
    colors: {
      primary: "#3A1078", // Deep purple as primary
      primaryLight: "#5B21B6", // Lighter purple
      accent: "#D4AF37", // Gold accent (used sparingly)
      dark: "#1A1A1A", // Almost black
      gray: "#717171", // Medium gray
      lightGray: "#E5E5E5", // Light gray
      white: "#FFFFFF",
      offWhite: "#F9F9F9",
    },
    // Typography
    h1: {
      fontSize: "3.5rem",
      fontWeight: "700",
      lineHeight: "1.1",
      marginBottom: "1.5rem",
      color: "#1A1A1A",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "700",
      lineHeight: "1.2",
      marginBottom: "1.5rem",
      color: "#1A1A1A",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
      lineHeight: "1.3",
      marginBottom: "1rem",
      color: "#1A1A1A",
    },
    p: {
      marginBottom: "1rem",
      color: "#717171",
      lineHeight: "1.7",
      fontSize: "1.125rem",
    },
    // Components
    badge: {
      display: "inline-block",
      padding: "0.5rem 1rem",
      backgroundColor: "#F0F0F0",
      color: "#3A1078",
      borderRadius: "2rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      marginBottom: "1.5rem",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1.5rem",
    },
    button: {
      primary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.875rem 1.75rem",
        borderRadius: "0.25rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "none",
        fontSize: "1rem",
        gap: "0.5rem",
        backgroundColor: "#3A1078",
        color: "#FFFFFF",
        boxShadow: "none",
      },
      secondary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.875rem 1.75rem",
        borderRadius: "0.25rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "none",
        fontSize: "1rem",
        gap: "0.5rem",
        backgroundColor: "#F0F0F0",
        color: "#1A1A1A",
        boxShadow: "none",
      },
      outline: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.875rem 1.75rem",
        borderRadius: "0.25rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontSize: "1rem",
        gap: "0.5rem",
        backgroundColor: "transparent",
        color: "#3A1078",
        border: "1px solid #3A1078",
        boxShadow: "none",
      },
      outlineLight: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.875rem 1.75rem",
        borderRadius: "0.25rem",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.2s ease",
        fontSize: "1rem",
        gap: "0.5rem",
        backgroundColor: "transparent",
        color: "#FFFFFF",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "none",
      },
    },
    // Sections
    section: {
      padding: "6rem 0",
    },
    sectionHeader: {
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto 4rem",
    },
    // Hero Section
    heroSection: {
      padding: "8rem 0",
      backgroundColor: "#FFFFFF",
      color: "#1A1A1A",
      position: "relative",
    },
    heroContent: {
      display: "flex",
      flexDirection: "column",
      gap: "4rem",
      position: "relative",
      zIndex: 1,
    },
    heroText: {
      maxWidth: "650px",
    },
    heroButtons: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      marginTop: "2rem",
    },
    heroFeatures: {
      display: "flex",
      gap: "2rem",
      marginTop: "2rem",
    },
    heroFeature: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      color: "#717171",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    heroFeatureIcon: {
      color: "#3A1078",
    },
    // Dashboard Visualization (CSS-only, no images)
    dashboardVisualization: {
      width: "100%",
      height: "400px",
      backgroundColor: "#F9F9F9",
      borderRadius: "0.5rem",
      position: "relative",
      overflow: "hidden",
      border: "1px solid #E5E5E5",
    },
    dashboardHeader: {
      height: "50px",
      width: "100%",
      borderBottom: "1px solid #E5E5E5",
      display: "flex",
      alignItems: "center",
      padding: "0 1.5rem",
      justifyContent: "space-between",
    },
    dashboardTitle: {
      color: "#1A1A1A",
      fontSize: "1rem",
      fontWeight: "500",
    },
    dashboardControls: {
      display: "flex",
      gap: "0.75rem",
    },
    dashboardControl: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#F0F0F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#717171",
    },
    dashboardContent: {
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    dashboardRow: {
      display: "flex",
      gap: "1.5rem",
    },
    dashboardCard: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderRadius: "0.25rem",
      padding: "1.25rem",
      border: "1px solid #E5E5E5",
    },
    dashboardCardTitle: {
      color: "#717171",
      fontSize: "0.875rem",
      marginBottom: "0.5rem",
    },
    dashboardCardValue: {
      color: "#1A1A1A",
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    dashboardChart: {
      height: "180px",
      backgroundColor: "#FFFFFF",
      borderRadius: "0.25rem",
      padding: "1.25rem",
      border: "1px solid #E5E5E5",
      position: "relative",
      overflow: "hidden",
    },
    dashboardChartLine: {
      position: "absolute",
      bottom: "30px",
      left: 0,
      width: "100%",
      height: "1px",
      backgroundColor: "#E5E5E5",
    },
    dashboardChartBar: {
      position: "absolute",
      bottom: "30px",
      width: "6px",
      borderRadius: "2px 2px 0 0",
      backgroundColor: "#3A1078",
    },
    // Features Section
    featuresSection: {
      backgroundColor: "#F9F9F9",
      position: "relative",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "2rem",
      position: "relative",
      zIndex: 1,
    },
    featureCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "0.5rem",
      padding: "2rem",
      border: "1px solid #E5E5E5",
      textAlign: "left",
      transition: "all 0.3s ease",
    },
    featureIcon: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      backgroundColor: "#F0F0F0",
      color: "#3A1078",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
    },
    // Crypto Prices Section
    cryptoSection: {
      backgroundColor: "#FFFFFF",
      position: "relative",
    },
    cryptoGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "2rem",
      position: "relative",
      zIndex: 1,
      marginBottom: "3rem",
    },
    cryptoCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      border: "1px solid #E5E5E5",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      transition: "all 0.3s ease",
    },
    cryptoInfo: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    cryptoIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#F0F0F0",
      color: "#3A1078",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.25rem",
    },
    cryptoPrice: {
      textAlign: "right",
    },
    priceUp: {
      color: "#10B981",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      justifyContent: "flex-end",
    },
    priceDown: {
      color: "#EF4444",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      justifyContent: "flex-end",
    },
    viewAll: {
      textAlign: "center",
      marginTop: "3rem",
    },
    // Portfolio Section
    portfolioSection: {
      backgroundColor: "#F9F9F9",
      position: "relative",
    },
    portfolioContent: {
      display: "flex",
      flexDirection: "column",
      gap: "4rem",
      position: "relative",
      zIndex: 1,
    },
    portfolioText: {
      maxWidth: "600px",
    },
    portfolioFeatures: {
      margin: "2rem 0",
      listStyle: "none",
    },
    portfolioFeatureItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    portfolioFeatureIcon: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#F0F0F0",
      color: "#3A1078",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "0.875rem",
      flexShrink: 0,
      marginTop: "0.25rem",
    },
    // Portfolio Visualization (CSS-only, no images)
    portfolioVisualization: {
      width: "100%",
      height: "400px",
      backgroundColor: "#FFFFFF",
      borderRadius: "0.5rem",
      position: "relative",
      overflow: "hidden",
      border: "1px solid #E5E5E5",
    },
    portfolioHeader: {
      height: "50px",
      width: "100%",
      borderBottom: "1px solid #E5E5E5",
      display: "flex",
      alignItems: "center",
      padding: "0 1.5rem",
      justifyContent: "space-between",
    },
    portfolioTitle: {
      color: "#1A1A1A",
      fontSize: "1rem",
      fontWeight: "500",
    },
    portfolioControls: {
      display: "flex",
      gap: "0.75rem",
    },
    portfolioControl: {
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      backgroundColor: "#F0F0F0",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#717171",
    },
    portfolioContent: {
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    portfolioRow: {
      display: "flex",
      gap: "1.5rem",
    },
    portfolioCard: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      borderRadius: "0.25rem",
      padding: "1.25rem",
      border: "1px solid #E5E5E5",
    },
    portfolioCardTitle: {
      color: "#717171",
      fontSize: "0.875rem",
      marginBottom: "0.5rem",
    },
    portfolioCardValue: {
      color: "#1A1A1A",
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    portfolioChart: {
      height: "180px",
      backgroundColor: "#FFFFFF",
      borderRadius: "0.25rem",
      padding: "1.25rem",
      border: "1px solid #E5E5E5",
      position: "relative",
      overflow: "hidden",
    },
    portfolioChartLine: {
      position: "absolute",
      bottom: "30px",
      left: 0,
      width: "100%",
      height: "1px",
      backgroundColor: "#E5E5E5",
    },
    portfolioChartBar: {
      position: "absolute",
      bottom: "30px",
      width: "6px",
      borderRadius: "2px 2px 0 0",
      backgroundColor: "#3A1078",
    },
    // Pricing Section
    pricingSection: {
      backgroundColor: "#FFFFFF",
      position: "relative",
    },
    pricingGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
      gap: "2rem",
      position: "relative",
      zIndex: 1,
    },
    pricingCard: {
      backgroundColor: "#FFFFFF",
      borderRadius: "0.5rem",
      padding: "3rem 2rem",
      border: "1px solid #E5E5E5",
      position: "relative",
      transition: "all 0.3s ease",
    },
    pricingCardPopular: {
      border: "1px solid #3A1078",
    },
    popularBadge: {
      position: "absolute",
      top: 0,
      right: "2rem",
      transform: "translateY(-50%)",
      backgroundColor: "#3A1078",
      color: "#FFFFFF",
      fontSize: "0.75rem",
      fontWeight: "500",
      padding: "0.5rem 1rem",
      borderRadius: "1rem",
    },
    price: {
      margin: "2rem 0",
      display: "flex",
      alignItems: "baseline",
    },
    amount: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#1A1A1A",
      lineHeight: 1,
    },
    period: {
      color: "#717171",
      marginLeft: "0.5rem",
      fontSize: "1rem",
    },
    description: {
      color: "#717171",
      marginBottom: "2rem",
      fontSize: "1rem",
    },
    featuresList: {
      margin: "2rem 0",
      listStyle: "none",
    },
    featuresListItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "1rem",
      color: "#717171",
      fontSize: "1rem",
    },
    // CTA Section
    ctaSection: {
      backgroundColor: "#3A1078",
      color: "#FFFFFF",
      position: "relative",
      padding: "6rem 0",
    },
    ctaContent: {
      textAlign: "center",
      maxWidth: "700px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    ctaButtons: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
      marginTop: "3rem",
    },
    // Newsletter Section
    newsletterSection: {
      backgroundColor: "#FFFFFF",
      padding: "6rem 0",
      position: "relative",
    },
    newsletterContent: {
      textAlign: "center",
      maxWidth: "500px",
      margin: "0 auto",
      position: "relative",
      zIndex: 1,
    },
    newsletterForm: {
      display: "flex",
      gap: "0.75rem",
      margin: "3rem 0 1.5rem",
      position: "relative",
    },
    newsletterInput: {
      flex: 1,
      padding: "0.875rem 1.25rem",
      border: "1px solid #E5E5E5",
      borderRadius: "0.25rem",
      fontSize: "1rem",
      backgroundColor: "#FFFFFF",
      transition: "all 0.2s ease",
      outline: "none",
    },
    disclaimer: {
      fontSize: "0.875rem",
      color: "#717171",
    },
  }

  // Responsive styles based on window width
  const isMobile = window.innerWidth < 768
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 992

  // Function to create dashboard chart bars with random heights
  const createChartBars = (count, color) => {
    const bars = []
    for (let i = 0; i < count; i++) {
      const height = Math.floor(Math.random() * 100) + 20
      bars.push(
        <div
          key={i}
          style={{
            ...styles.dashboardChartBar,
            left: `${(i * 100) / count + 5}%`,
            height: `${height}px`,
            backgroundColor: color,
          }}
        />,
      )
    }
    return bars
  }

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div
            style={{
              ...styles.container,
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              style={{
                ...styles.heroContent,
                flexDirection: isMobile || isTablet ? "column" : "row",
                alignItems: isMobile || isTablet ? "center" : "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div style={styles.heroText}>
                <div style={styles.badge}>Crypto Analytics</div>
                <h1
                  style={{
                    ...styles.h1,
                    fontSize: isMobile ? "2.5rem" : isTablet ? "3rem" : "3.5rem",
                  }}
                >
                  Track your crypto portfolio with precision
                </h1>
                <p
                  style={{
                    ...styles.p,
                    fontSize: isMobile ? "1rem" : "1.125rem",
                    lineHeight: 1.7,
                    marginTop: "1.5rem",
                  }}
                >
                  Real-time tracking, analytics, and alerts. Everything you need to make informed decisions in the
                  cryptocurrency market.
                </p>
                <div style={styles.heroButtons}>
                  <button
                    style={{
                      ...styles.button.primary,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#5B21B6"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#3A1078"
                    }}
                    onClick={handleStartTrial}
                  >
                    Start free trial <FiArrowRight style={{ marginLeft: "0.25rem" }} />
                  </button>
                  <button
                    style={{
                      ...styles.button.outline,
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#F9F9F9"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent"
                    }}
                  >
                    View demo
                  </button>
                </div>
                <div
                  style={{
                    ...styles.heroFeatures,
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "1rem" : "2rem",
                  }}
                >
                  <div style={styles.heroFeature}>
                    <FiLock style={styles.heroFeatureIcon} />
                    <span>Secure & encrypted</span>
                  </div>
                  <div style={styles.heroFeature}>
                    <FiCheck style={styles.heroFeatureIcon} />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              {!isMobile && (
                <div style={styles.dashboardVisualization}>
                  <div style={styles.dashboardHeader}>
                    <div style={styles.dashboardTitle}>Portfolio Overview</div>
                    <div style={styles.dashboardControls}>
                      <div style={styles.dashboardControl}>
                        <FiPieChart size={14} />
                      </div>
                      <div style={styles.dashboardControl}>
                        <FiBarChart2 size={14} />
                      </div>
                    </div>
                  </div>
                  <div style={styles.dashboardContent}>
                    <div style={styles.dashboardRow}>
                      <div style={styles.dashboardCard}>
                        <div style={styles.dashboardCardTitle}>Portfolio Value</div>
                        <div style={styles.dashboardCardValue}>$1,245,678</div>
                      </div>
                      <div style={styles.dashboardCard}>
                        <div style={styles.dashboardCardTitle}>24h Change</div>
                        <div style={styles.dashboardCardValue}>+5.8%</div>
                      </div>
                      <div style={styles.dashboardCard}>
                        <div style={styles.dashboardCardTitle}>Assets</div>
                        <div style={styles.dashboardCardValue}>16</div>
                      </div>
                    </div>
                    <div style={styles.dashboardChart}>
                      <div style={styles.dashboardChartLine}></div>
                      {createChartBars(12, styles.colors.primary)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Crypto Prices Section */}
        <section style={{ ...styles.section, ...styles.cryptoSection }}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <div style={styles.badge}>Market Data</div>
              <h2 style={styles.h2}>Live Cryptocurrency Prices</h2>
              <p style={styles.p}>Stay updated with real-time prices and market movements of top cryptocurrencies.</p>
            </div>
            <div
              style={{
                ...styles.cryptoGrid,
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                    ? "repeat(2, 1fr)"
                    : "repeat(auto-fill, minmax(350px, 1fr))",
              }}
            >
              {[
                { name: "Bitcoin", symbol: "BTC", price: "$68,750.25", change: "+3.8%" },
                { name: "Ethereum", symbol: "ETH", price: "$3,985.60", change: "+2.4%" },
                { name: "Solana", symbol: "SOL", price: "$158.32", change: "+7.5%" },
                { name: "Cardano", symbol: "ADA", price: "$0.62", change: "-0.9%" },
                { name: "Polkadot", symbol: "DOT", price: "$8.15", change: "+4.2%" },
                { name: "Ripple", symbol: "XRP", price: "$0.75", change: "+1.3%" },
              ].map((crypto, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.cryptoCard,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#F9F9F9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#FFFFFF"
                  }}
                >
                  <div style={styles.cryptoInfo}>
                    <div style={styles.cryptoIcon}>
                      <FiDollarSign size={18} />
                    </div>
                    <div>
                      <h3 style={{ ...styles.h3, marginBottom: "0.25rem", fontSize: "1.25rem" }}>{crypto.name}</h3>
                      <p style={{ ...styles.p, marginBottom: 0, fontSize: "0.875rem", color: styles.colors.gray }}>
                        {crypto.symbol}
                      </p>
                    </div>
                  </div>
                  <div style={styles.cryptoPrice}>
                    <p
                      style={{
                        ...styles.p,
                        marginBottom: "0.25rem",
                        fontWeight: "600",
                        color: styles.colors.dark,
                        fontSize: "1.25rem",
                      }}
                    >
                      {crypto.price}
                    </p>
                    <p style={crypto.change.startsWith("+") ? styles.priceUp : styles.priceDown}>
                      {crypto.change.startsWith("+") ? (
                        <FiTrendingUp size={14} />
                      ) : (
                        <FiTrendingUp style={{ transform: "rotate(180deg)" }} size={14} />
                      )}
                      {crypto.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.viewAll}>
              <button
                style={{
                  ...styles.button.outline,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#F9F9F9"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                View all cryptocurrencies <FiChevronRight style={{ marginLeft: "0.25rem" }} />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" style={{ ...styles.section, ...styles.featuresSection }}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <div style={styles.badge}>Features</div>
              <h2 style={styles.h2}>Everything You Need</h2>
              <p style={styles.p}>
                Our platform offers powerful tools to help you make informed decisions and maximize your returns.
              </p>
            </div>
            <div
              style={{
                ...styles.featuresGrid,
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                    ? "repeat(2, 1fr)"
                    : "repeat(auto-fill, minmax(350px, 1fr))",
              }}
            >
              {[
                {
                  icon: <FiBarChart2 />,
                  title: "Advanced Analytics",
                  description:
                    "Gain insights with detailed charts, technical indicators, and historical data analysis.",
                },
                {
                  icon: <FiBell />,
                  title: "Smart Alerts",
                  description: "Set custom price alerts and receive notifications when market conditions change.",
                },
                {
                  icon: <FiGlobe />,
                  title: "Global Market Data",
                  description: "Access real-time data from exchanges worldwide for comprehensive market coverage.",
                },
                {
                  icon: <FiCpu />,
                  title: "AI-Powered Insights",
                  description:
                    "Leverage machine learning algorithms that analyze data to provide actionable recommendations.",
                },
                {
                  icon: <FiShield />,
                  title: "Bank-Level Security",
                  description: "Rest assured with enterprise-grade encryption protecting your valuable data.",
                },
                {
                  icon: <FiZap />,
                  title: "Lightning Fast",
                  description: "Experience real-time updates with our high-performance infrastructure.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.featureCard,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#F9F9F9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#FFFFFF"
                  }}
                >
                  <div style={styles.featureIcon}>{feature.icon}</div>
                  <h3 style={{ ...styles.h3 }}>{feature.title}</h3>
                  <p style={{ ...styles.p, marginBottom: 0 }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section style={{ ...styles.section, ...styles.portfolioSection }}>
          <div style={styles.container}>
            <div
              style={{
                ...styles.portfolioContent,
                flexDirection: isMobile || isTablet ? "column" : "row",
                alignItems: isMobile || isTablet ? "center" : "center",
                justifyContent: "space-between",
                gap: "4rem",
              }}
            >
              {!isMobile && (
                <div style={{ flex: 1, order: isMobile || isTablet ? 1 : 2 }}>
                  <div style={styles.portfolioVisualization}>
                    <div style={styles.portfolioHeader}>
                      <div style={styles.portfolioTitle}>Portfolio Analysis</div>
                      <div style={styles.portfolioControls}>
                        <div style={styles.portfolioControl}>
                          <FiPieChart size={14} />
                        </div>
                        <div style={styles.portfolioControl}>
                          <FiBarChart2 size={14} />
                        </div>
                      </div>
                    </div>
                    <div style={styles.portfolioContent}>
                      <div style={styles.portfolioRow}>
                        <div style={styles.portfolioCard}>
                          <div style={styles.portfolioCardTitle}>Total Assets</div>
                          <div style={styles.portfolioCardValue}>$2,458,932</div>
                        </div>
                        <div style={styles.portfolioCard}>
                          <div style={styles.portfolioCardTitle}>Monthly Return</div>
                          <div style={styles.portfolioCardValue}>+12.4%</div>
                        </div>
                      </div>
                      <div style={styles.portfolioChart}>
                        <div style={styles.portfolioChartLine}></div>
                        {createChartBars(12, styles.colors.primary)}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                style={{
                  ...styles.portfolioText,
                  flex: 1,
                  order: isMobile || isTablet ? 2 : 1,
                  textAlign: isMobile ? "center" : "left",
                  paddingRight: isMobile || isTablet ? 0 : "4rem",
                }}
              >
                <div style={styles.badge}>Portfolio Management</div>
                <h2 style={styles.h2}>Take Control of Your Investments</h2>
                <p style={styles.p}>
                  Track all your crypto assets in one place. Monitor performance, analyze trends, and make data-driven
                  decisions.
                </p>
                <ul
                  style={{
                    ...styles.portfolioFeatures,
                    padding: 0,
                    textAlign: "left",
                  }}
                >
                  {[
                    "Automatic portfolio tracking across multiple exchanges and wallets",
                    "Performance analytics with profit/loss calculations",
                    "Tax reporting tools to simplify compliance",
                    "Custom watchlists for potential investments",
                  ].map((item, index) => (
                    <li key={index} style={styles.portfolioFeatureItem}>
                      <div style={styles.portfolioFeatureIcon}>
                        <FiCheck size={12} />
                      </div>
                      <span style={{ lineHeight: 1.6, fontSize: "1rem", color: styles.colors.gray }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    ...styles.button.primary,
                    marginTop: "2rem",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#5B21B6"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#3A1078"
                  }}
                >
                  Start tracking now <FiArrowRight style={{ marginLeft: "0.25rem" }} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ ...styles.section, ...styles.pricingSection }}>
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <div style={styles.badge}>Pricing</div>
              <h2 style={styles.h2}>Choose Your Plan</h2>
              <p style={styles.p}>Flexible options to suit traders of all levels, from beginners to professionals.</p>
            </div>
            <div
              style={{
                ...styles.pricingGrid,
                gridTemplateColumns: isMobile
                  ? "1fr"
                  : isTablet
                    ? "repeat(2, 1fr)"
                    : "repeat(auto-fill, minmax(350px, 1fr))",
              }}
            >
              {[
                {
                  name: "Basic",
                  price: "$0",
                  description: "Essential tracking for casual investors",
                  features: [
                    "Portfolio tracking (up to 5 assets)",
                    "Basic price alerts",
                    "Daily market summaries",
                    "Limited historical data",
                  ],
                  cta: "Start Free",
                  popular: false,
                },
                {
                  name: "Pro",
                  price: "$19",
                  period: "/month",
                  description: "Advanced tools for active traders",
                  features: [
                    "Unlimited portfolio tracking",
                    "Advanced technical analysis",
                    "Custom price alerts",
                    "Full historical data",
                    "Tax reporting tools",
                    "Priority support",
                  ],
                  cta: "Start 7-Day Free Trial",
                  popular: true,
                },
                {
                  name: "Enterprise",
                  price: "$49",
                  period: "/month",
                  description: "Complete solution for professional traders",
                  features: [
                    "Everything in Pro",
                    "API access",
                    "Multi-user accounts",
                    "Advanced security features",
                    "Dedicated account manager",
                    "Custom integrations",
                  ],
                  cta: "Contact Sales",
                  popular: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.pricingCard,
                    ...(plan.popular ? styles.pricingCardPopular : {}),
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#F9F9F9"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#FFFFFF"
                  }}
                >
                  {plan.popular && <div style={styles.popularBadge}>Most Popular</div>}
                  <h3 style={{ ...styles.h3, fontSize: "1.75rem" }}>{plan.name}</h3>
                  <div style={styles.price}>
                    <span style={styles.amount}>{plan.price}</span>
                    {plan.period && <span style={styles.period}>{plan.period}</span>}
                  </div>
                  <p style={styles.description}>{plan.description}</p>
                  <ul
                    style={{
                      ...styles.featuresList,
                      padding: 0,
                    }}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} style={styles.featuresListItem}>
                        <FiCheck style={{ color: styles.colors.primary }} size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    style={{
                      ...(plan.popular ? styles.button.primary : styles.button.outline),
                      width: "100%",
                      marginTop: "2rem",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (plan.popular) {
                        e.target.style.backgroundColor = "#5B21B6"
                      } else {
                        e.target.style.backgroundColor = "#F9F9F9"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.popular) {
                        e.target.style.backgroundColor = "#3A1078"
                      } else {
                        e.target.style.backgroundColor = "transparent"
                      }
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ ...styles.section, ...styles.ctaSection }}>
          <div style={styles.container}>
            <div style={styles.ctaContent}>
              <h2 style={{ ...styles.h2, color: styles.colors.white, fontSize: "2.5rem" }}>
                Ready to Transform Your Crypto Trading?
              </h2>
              <p style={{ ...styles.p, color: "rgba(255, 255, 255, 0.8)", fontSize: "1.125rem" }}>
                Join thousands of traders who are making smarter decisions with CryptoTracker.
              </p>
              <div
                style={{
                  ...styles.ctaButtons,
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <button
                  style={{
                    ...styles.button.secondary,
                    ...(isMobile ? { width: "100%" } : {}),
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#E5E5E5"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#F0F0F0"
                  }}
                  onClick={handleStartTrial}
                >
                  Start free trial <FiArrowRight style={{ marginLeft: "0.25rem" }} />
                </button>
                <button
                  style={{
                    ...styles.button.outlineLight,
                    ...(isMobile ? { width: "100%" } : {}),
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                  }}
                >
                  Schedule demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section style={{ ...styles.section, ...styles.newsletterSection }}>
          <div style={styles.container}>
            <div style={styles.newsletterContent}>
              <h2 style={styles.h2}>Stay Updated</h2>
              <p style={styles.p}>Subscribe to our newsletter for market insights and platform updates.</p>
              <form
                onSubmit={handleSubscribe}
                style={{
                  ...styles.newsletterForm,
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  style={{
                    ...styles.newsletterInput,
                    marginBottom: isMobile ? "1rem" : 0,
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#3A1078"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E5E5E5"
                  }}
                />
                <button
                  type="submit"
                  style={{
                    ...styles.button.primary,
                    ...(isMobile ? { width: "100%" } : {}),
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#5B21B6"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#3A1078"
                  }}
                >
                  Subscribe
                </button>
              </form>
              <p style={styles.disclaimer}>We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home;
