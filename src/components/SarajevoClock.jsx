import { useState, useEffect } from "react";

const SarajevoClock = ({ className = "" }) => {
  const [timeData, setTimeData] = useState({
    time: "",
    timeZoneName: "",
  });

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Sarajevo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
      hour12: false,
    });

    const updateTime = () => {
      const parts = formatter.formatToParts(new Date());

      const getPart = (type) =>
        parts.find((part) => part.type === type)?.value || "";

      setTimeData({
        time: `${getPart("hour")}:${getPart("minute")}:${getPart("second")}`,
        timeZoneName: getPart("timeZoneName"),
      });
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`sarajevo-clock ${className}`}>
      <span className="clock-digits">{timeData.time}</span>
      <span className="clock-zone">{timeData.timeZoneName}</span>
      <span className="clock-city">Sarajevo, BA</span>
    </div>
  );
};

export default SarajevoClock;
