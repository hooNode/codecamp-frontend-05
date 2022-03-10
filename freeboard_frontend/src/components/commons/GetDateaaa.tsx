import React, { useEffect, useState } from "react";

export default function GetDate({ data }) {
  const [getDate, setGetDate] = useState("");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const Pyear = Number(data.slice(0, 4));
  const Pmonth = Number(data.slice(5, 7));
  const Pday = Number(data.slice(8, 10));

  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  let Phour = Number(data.slice(11, -5).split(":")[0]) + 9;
  if (Phour >= 24) {
    Phour = Phour - 24;
  }
  const Pmin = Number(data.slice(11, -5).split(":")[1]);
  const Psec = Number(data.slice(11, -5).split(":")[2]);

  const createClock = () => {
    if (year !== Pyear) {
      setGetDate(`${Math.abs(year - Pyear)}년 전`);
    } else if (month !== Pmonth) {
      setGetDate(`${Math.abs(month - Pmonth)}달 전`);
    } else if (day !== Pday) {
      setGetDate(`${Math.abs(day - Pday)}일 전`);
    } else if (hour !== Phour) {
      setGetDate(`${Math.abs(hour - Phour)}시간 전`);
    } else if (min !== Pmin) {
      setGetDate(`${Math.abs(min - Pmin)}분 전`);
    } else if (sec !== Psec) {
      setGetDate(`${Math.abs(sec - Psec)}초 전`);
    }
  };
  useEffect(() => {
    createClock();
  }, []);
  return <div>{getDate}</div>;
}
