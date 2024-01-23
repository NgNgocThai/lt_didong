import React,{useState, useEffect}  from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, } from 'react-native';

const GoogleMap = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 10.830690422264185,
        longitude:106.77504037770449,
        latitudeDelta:0.0092, //0.00009204731556711442
        longitudeDelta:0.0029, //0.0002927946937478011
        
    })
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      region={mapRegion}
      >
      <Marker coordinate={mapRegion}title='Marker'/>
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
export default GoogleMap
