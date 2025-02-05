import { useState, useEffect } from "react";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";

const Timer = () => {
  const [time, setTime] = useState(1500); 
  const [isRunning, setIsRunning] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(25);

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(inputMinutes * 60);
  };

  const handleInputChange = (e) => {
    const newMinutes = parseInt(e.target.value, 10);
    if (!isNaN(newMinutes) && newMinutes > 0) {
      setInputMinutes(newMinutes);
      setTime(newMinutes * 60);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="p-4 bg-gray-300 text-white rounded-full shadow-md w-[240px] h-[240px] m-auto mt-10 md:mt-4">
      <h3 className="text-lg font-semibold text-center text-black">⏳ Timer</h3>

      <div className="text-center text-black text-3xl font-bold mt-3">
        {formatTime(time)}
      </div>

      <div className="mt-3 bg-gray-700 rounded-full h-3 w-full">
        <div
          className="bg-blue-400 h-3 rounded-full transition-all"
          style={{ width: `${(time / (inputMinutes * 60)) * 100}%` }}
        ></div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={handleStartPause}
          className="p-2 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-all"
        >
          {isRunning ? <FaPause size={20} /> : <FaPlay size={20} />}
        </button>
        <button
          onClick={handleReset}
          className="p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-all"
        >
          <FaRedo size={20} />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-center">
        <input
          type="number"
          min="1"
          value={inputMinutes}
          onChange={handleInputChange}
          className="w-16 p-1 text-center bg-gray-800 text-white rounded-lg focus:outline-none"
        />
        <span className="ml-2 text-black">minutes</span>
      </div>
    </div>
  );
};

export default Timer;
