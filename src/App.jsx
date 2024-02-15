import { useState, useEffect } from 'react';
import './App.css';

const ButtonWithLocalStorage = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'den kaydedilen değeri al
    const storedClickCount = localStorage.getItem('clickCount');
    if (storedClickCount) {
      setClickCount(parseInt(storedClickCount));
    }
  }, []); // useEffect sadece bir kez çağrılsın

  const handleClick = () => {
    // Her butona tıklandığında clickCount'u artır ve localStorage'a kaydet
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    localStorage.setItem('clickCount', newClickCount);
  };

  return (
    <div className='container'>
      <p>Tıklama Sayısı: {clickCount}</p>
      <button onClick={handleClick}>Tıkla</button>
    </div>
  );
};

export default ButtonWithLocalStorage;
