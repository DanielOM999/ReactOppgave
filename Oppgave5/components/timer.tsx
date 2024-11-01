import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import tzlookup from "tz-lookup";
import moment from "moment-timezone";

interface LatAndLon {
  placeData: [string, string] | null;
  setLocalTime: (text: string) => void;
}

function Timer({ placeData, setLocalTime }: LatAndLon) {
  useEffect(() => {
    if (!placeData) return;

    const [lat, lon] = placeData;
    const timeZone = tzlookup(Number(lat), Number(lon));

    const updateTime = () => {
      const localTime = moment().tz(timeZone).format("HH:mm");
      setLocalTime(localTime);
    };

    const clockInterval = setInterval(updateTime, 1000);

    return () => clearInterval(clockInterval);
  }, [placeData, setLocalTime]);

  return null;
}

export default Timer;

const styles = StyleSheet.create({
  WText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});
