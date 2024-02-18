import { useEffect, useRef, useState } from "react";

interface CountdownProps {
  time: number;
  onTimerEnd: () => void;
}

const Countdown: React.FC<CountdownProps> = ({ time, onTimerEnd }) => {
    const [seconds, setSeconds] = useState(() => {
        const storedTime = localStorage.getItem("countdownTime");
        return storedTime ? parseInt(storedTime, 10) : time;
      });
    
      const timerRef = useRef<number | undefined>(undefined);
    
      useEffect(() => {
        localStorage.setItem("countdownTime", seconds.toString());
      }, [seconds]);
    
      useEffect(() => {
        if (seconds > 0) {
          timerRef.current = window.setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }, 1000);
        }
    
        return () => {
          if (timerRef.current !== undefined) {
            window.clearInterval(timerRef.current);
          }
        };
      }, [seconds]);
    
      useEffect(() => {
        if (seconds === 0) {
          onTimerEnd();
          window.clearInterval(timerRef.current!);
        }
      }, [seconds, onTimerEnd]);

  return (
    <div className="heading-5 font-semibold bg-accent p-5 rounded-full aspect-square text-center">
        {seconds}
    </div>
  );
};

export default Countdown;
