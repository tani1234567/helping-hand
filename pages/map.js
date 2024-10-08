import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MyMapApp = () => {
  const [customerLocation, setCustomerLocation] = useState(null);
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Location Permissions",
            "Location permissions are required to use this app.",
            [{ text: "OK", onPress: () => {} }]
          );
          return;
        }

        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced, // Adjust accuracy as needed
        });

        setCustomerLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        // Set initial region based on the obtained location
        setInitialRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        console.error("Error getting location:", error);
      }
    };

    getLocation();
  }, []);

  const onRegionChange = (region) => {
    setCustomerLocation({
      latitude: region.latitude,
      longitude: region.longitude,
    });
  };

  const exportCoordinates = () => {
    const { latitude, longitude } = customerLocation;
    // Export coordinates to another file or function here
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onRegionChangeComplete={onRegionChange}
      >
        {customerLocation && (
          <Marker
            coordinate={customerLocation}
            draggable={true}
            title="Customer Location"
            description="Drag the marker to adjust the location."
          />
        )}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Set Location" onPress={exportCoordinates} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20, // Adjust this value to set the distance from the bottom
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyMapApp;
