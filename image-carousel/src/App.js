import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

function App() {
  const [current, setCurrent] = useState(0);
  
  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }
  return (
    <div className="App bg-sky-900 h-full flex flex-col justify-center">
      <h1 className="text-4xl text-sky-600 my-4 font-bold">carousel.</h1>
      <div className="slider">
        <button className="mx-3 px-2 py-1 text-2xl bg-sky-500 opacity-50 rounded-full hover:animate-bounce"  onClick={prevSlide}>
          &larr;
        </button>
          {
            images.map( (img, i) => 
              current === i && (<div key={img}>
                <img src={img} alt="images"/>
              </div>)
            ) 
          }

        <button className="mx-3 px-2 py-1 text-2xl bg-sky-500 opacity-50 rounded-full hover:animate-bounce" onClick={nextSlide}>
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default App;
