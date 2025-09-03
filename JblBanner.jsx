import React, { useEffect, useMemo, useState } from "react";
import jblImg from "../assets/img/jbl.png";

const MILLISECONDS_IN = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
};

const getTimeLeft = (target) => {
  const diff = Math.max(0, target - Date.now());
  return {
    hours: Math.floor(diff / MILLISECONDS_IN.hour) % 24,
    days: Math.floor(diff / MILLISECONDS_IN.day),
    minutes: Math.floor((diff % MILLISECONDS_IN.hour) / MILLISECONDS_IN.minute),
    seconds: Math.floor(
      (diff % MILLISECONDS_IN.minute) / MILLISECONDS_IN.second
    ),
  };
};

const TimePill = ({ value, label }) => (
  <div className="w-[64px] h-[64px] rounded-full bg-white flex flex-col items-center justify-center">
    <span className="text-[18px] font-semibold leading-[22px]">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] text-[#777] leading-[12px]">{label}</span>
  </div>
);

const JblBanner = () => {
  const targetTime = useMemo(() => Date.now() + 7 * MILLISECONDS_IN.day, []);
  const [time, setTime] = useState(() => getTimeLeft(targetTime));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(targetTime)), 1000);
    return () => clearInterval(id);
  }, [targetTime]);

  return (
    <section className="w-full mt-20 mb-20">
      <div className="container">
        <div className="w-full bg-[#000000] rounded flex items-stretch px-[45px] py-[70px]">
          <div className="flex-1 text-white flex flex-col justify-center">
            <span className="text-[#00D084] font-semibold mb-4">
              Categories
            </span>
            <h3 className="text-5xl font-semibold leading-[60px] mb-6">
              Enhance Your <br /> Music Experience
            </h3>
            <div className="flex items-center gap-4 mb-8 text-[#000]">
              <TimePill value={time.hours} label="Hours" />
              <TimePill value={time.days} label="Days" />
              <TimePill value={time.minutes} label="Minutes" />
              <TimePill value={time.seconds} label="Seconds" />
            </div>
            <button
              type="button"
              className="bg-[#00FF66] text-[#FAFAFA] px-8 py-3 rounded w-[140px] cursor-pointer"
            >
              Buy Now!
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={jblImg}
              alt="JBL"
              className="max-h-[360px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JblBanner;
