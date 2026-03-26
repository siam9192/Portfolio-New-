import "./App.css";
import HomePage from "./components/HomePage";
import StarsCanvas from "./components/StarBackground";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      
      {/* ⭐ Background */}
      <StarsCanvas />

      {/* 🌐 Main Content */}
      <div className="relative z-10">
        <HomePage />
      </div>

    </div>
  );
}

export default App;
