import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { RocketToMoonLoadingScreen } from './components/BlackHoleLoadingScreen';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleComplete = () => {
    setLoading(false);
  };

  return (
    <>
    
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`max-h-screen max-w-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} className="w-full" />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </>
  )
}

export default App
