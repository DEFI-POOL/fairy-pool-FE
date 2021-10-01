import { useState, useEffect } from "react";

export default function Countdown({ countDownDate }) {
  const [countDownNumbers, setCountDownNumbers] = useState(Array(4).fill(0));

  const getDigitCount = (number) => {
    return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
  };

  const getDigit = (number, n, fromLeft) => {
    const location = fromLeft ? getDigitCount(number) + 1 - n : n;
    return Math.floor((number / Math.pow(10, location - 1)) % 10);
  };

  const updateDigits = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
      setCountDownNumbers(Array(4).fill(0));
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountDownNumbers([days, hours, minutes, seconds]);
  };

  useEffect(() => {
    const interval = setInterval(updateDigits, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderDigits = (number, unit) => {
    const digitsArr = [getDigit(number, 2, false), getDigit(number, 1, false)];

    return (
      <div className="mr-2">
        <div>
          {digitsArr.map((digit) => (
            <span className="text-accent font-black text-lg bg-gray-50 bg-opacity-25 px-2 py-1 mx-px rounded">
              {digit}
            </span>
          ))}
        </div>
        <div className="text-center text-secondary text-xs font-thin mt-2">
          {unit}
        </div>
      </div>
    );
  };

  return (
    <div className="flex">
      {renderDigits(countDownNumbers[0], "DAY")}
      {renderDigits(countDownNumbers[1], "HR")}
      <div className="text-accent font-black text-lg mr-2">:</div>
      {renderDigits(countDownNumbers[2], "MIN")}
      <div className="text-accent font-black text-lg mr-2">:</div>
      {renderDigits(countDownNumbers[3], "SEC")}
    </div>
  );
}
