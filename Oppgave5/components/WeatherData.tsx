import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface LatAndLon {
  placeData: [string, string] | null;
  setLocalTime: (text: string) => void;
  localTime: string;
}

function WeatherData({ placeData, setLocalTime, localTime }: LatAndLon) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLocalTime("");
    const fetchWeather = async () => {
      try {
        const response = placeData
          ? await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(
                placeData[0]
              )}&longitude=${encodeURIComponent(
                placeData[1]
              )}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
            )
          : null;
        if (response) {
          const data = await response.json();
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 3600000);

    return () => clearInterval(intervalId);
  }, [placeData]);

  const getWeatherIcons = (temperature: number, windSpeed: number) => {
    const icons = [];

    if (temperature > 30) {
      icons.push(
        <MaterialCommunityIcons
          key="hot"
          name="weather-sunny-alert"
          size={50}
          color="#FF4500"
        />
      );
    } else if (temperature > 25) {
      icons.push(
        <MaterialCommunityIcons
          key="sunny"
          name="weather-sunny"
          size={50}
          color="#FFA500"
        />
      );
    } else if (temperature < 5) {
      icons.push(
        <MaterialCommunityIcons
          key="cold"
          name="snowflake"
          size={50}
          color="#00BFFF"
        />
      );
    } else if (temperature >= 5 && temperature < 15) {
      icons.push(
        <MaterialCommunityIcons
          key="cool"
          name="weather-cloudy"
          size={50}
          color="#A9A9A9"
        />
      );
    }

    if (windSpeed > 20) {
      icons.push(
        <MaterialCommunityIcons
          key="strong-wind"
          name="weather-hurricane"
          size={50}
          color="#00BFFF"
        />
      );
    } else if (windSpeed > 10) {
      icons.push(
        <MaterialCommunityIcons
          key="windy"
          name="weather-windy"
          size={50}
          color="#87CEEB"
        />
      );
    }

    if (icons.length === 0) {
      icons.push(
        <MaterialCommunityIcons
          key="clear"
          name="weather-partly-cloudy"
          size={50}
          color="#D3D3D3"
        />
      );
    }

    return icons;
  };

  const {
    filteredTemperatureData,
    filteredHumidityData,
    filteredWindSpeedData,
    filteredLabels,
  } = useMemo(() => {
    if (!weatherData) {
      return {
        filteredTemperatureData: [],
        filteredHumidityData: [],
        filteredWindSpeedData: [],
        filteredLabels: [],
      };
    }

    const temperatureData = weatherData.hourly.temperature_2m || [];
    const humidityData = weatherData.hourly.relative_humidity_2m || [];
    const windSpeedData = weatherData.hourly.wind_speed_10m || [];
    const timeData = weatherData.hourly.time || [];

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDateString = tomorrow.toISOString().split("T")[0];

    const filteredTimeData = timeData.filter((time: string) =>
      time.startsWith(tomorrowDateString)
    );

    const filteredTemperatureData = temperatureData.filter(
      (_: number, index: number) =>
        timeData[index].startsWith(tomorrowDateString)
    );
    const filteredHumidityData = humidityData.filter(
      (_: number, index: number) =>
        timeData[index].startsWith(tomorrowDateString)
    );
    const filteredWindSpeedData = windSpeedData.filter(
      (_: number, index: number) =>
        timeData[index].startsWith(tomorrowDateString)
    );

    const filteredLabels = filteredTimeData.map((time: string) => {
      const date = new Date(time);
      return `${date.getHours()}:${
        date.getMinutes() < 10 ? "0" : ""
      }${date.getMinutes()}`;
    });

    return {
      filteredTemperatureData,
      filteredHumidityData,
      filteredWindSpeedData,
      filteredLabels,
    };
  }, [weatherData]);

  if (loading || !localTime) {
    return (
      <ActivityIndicator
        style={styles.ActivityIndicator}
        size="large"
        color="#fff"
      />
    );
  }

  const temperature = weatherData.current.temperature_2m;
  const windSpeed = weatherData.current.wind_speed_10m;
  const icons = getWeatherIcons(temperature, windSpeed);

  return (
    <View>
      <View style={styles.container}>
        <Text style={[styles.WText, { fontSize: 45, fontWeight: "900" }]}>
          {temperature} °C
        </Text>
        <Text style={styles.WText}>Wind Speed: {windSpeed} km/h</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={[
              styles.WText,
              {
                fontSize: 24,
                lineHeight: 30,
              },
            ]}
          >
            {localTime ? localTime : null}
          </Text>
          <View style={{ marginLeft: 5, flexDirection: "row" }}>{icons}</View>
        </View>
      </View>

      <ScrollView style={styles.scroller} horizontal={true}>
        <View>
          <Text
            style={[
              styles.WText,
              { textAlign: "left", marginTop: 15, marginBottom: 10 },
            ]}
          >
            Tomorrows temrature:{" "}
          </Text>
          <LineChart
            data={{
              labels: filteredLabels,
              datasets: [
                {
                  data: filteredTemperatureData,
                },
              ],
            }}
            width={filteredLabels.length * 50}
            height={220}
            chartConfig={{
              backgroundColor: "#444455",
              backgroundGradientFrom: "#444455",
              backgroundGradientTo: "#222",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chart}
          />
        </View>

        <View>
          <Text
            style={[
              styles.WText,
              { textAlign: "left", marginTop: 15, marginBottom: 10 },
            ]}
          >
            Tomorrows humidity:{" "}
          </Text>
          <LineChart
            data={{
              labels: filteredLabels,
              datasets: [
                {
                  data: filteredHumidityData,
                },
              ],
            }}
            width={filteredLabels.length * 50}
            height={220}
            chartConfig={{
              backgroundColor: "#444455",
              backgroundGradientFrom: "#444455",
              backgroundGradientTo: "#222",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chart}
          />
        </View>

        <View>
          <Text
            style={[
              styles.WText,
              { textAlign: "left", marginTop: 15, marginBottom: 10 },
            ]}
          >
            Tomorrows Wind Speed in km/h:{" "}
          </Text>
          <LineChart
            data={{
              labels: filteredLabels,
              datasets: [
                {
                  data: filteredWindSpeedData,
                },
              ],
            }}
            width={filteredLabels.length * 50}
            height={220}
            chartConfig={{
              backgroundColor: "#444455",
              backgroundGradientFrom: "#444455",
              backgroundGradientTo: "#222",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={styles.chart}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default WeatherData;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#444455",
    borderRadius: 10,
    padding: 20,
    paddingHorizontal: "10%",
  },
  WText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
  chart: {
    borderRadius: 10,
    marginRight: 50,
  },
  scroller: {
    marginVertical: 10,
    height: 150,
  },
  ActivityIndicator: {
    paddingVertical: "50%",
    transform: [{ scale: 1.8 }],
  },
});
