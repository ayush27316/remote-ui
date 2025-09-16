import React from "react";
import { Platform, View } from "react-native";

// Try to import DeviceFrameset at the top level, with fallback
let DeviceFrameset = null;
try {
  if (Platform.OS === "web") {
    DeviceFrameset = require("react-device-frameset").default;
  }
} catch (error) {
  console.warn("DeviceFrameset failed to import:", error);
}

const MockPhone = ({ component: Child, ...props }) => {
  if (Platform.OS === "web") {
    // Use DeviceFrameset if available, otherwise fallback
    if (DeviceFrameset) {
      try {
        return (
          <DeviceFrameset
            device="iPhone X"
            color="black"
            width="400px"
            height="800px"
            zoom={0.8}
          >
            <View style={{ flex: 1 }}>
              <Child {...props} />
            </View>
          </DeviceFrameset>
        );
      } catch (error) {
        console.warn("DeviceFrameset failed to render, using fallback:", error);
      }
    }
    
    // Fallback UI for web
    return (
      <View style={{ 
        width: 320, 
        height: 640, 
        margin: 'auto', 
        border: '2px solid #333',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#000',
        padding: 2
      }}>
        <View style={{ 
          flex: 1, 
          backgroundColor: 'white',
          borderRadius: 18,
          overflow: 'hidden'
        }}>
          <Child {...props} />
        </View>
      </View>
    );
  }

  return <Child {...props} />;
};

export default MockPhone;
