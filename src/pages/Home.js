const Home = () => {
  return (
    <div style={hero}>
      <h1>Premium Shopping Experience</h1>
      <p>Modern. Fast. Beautiful.</p>
      <button className="btn">Shop Now</button>
    </div>
  );
};

const hero = {
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
};

export default Home;
