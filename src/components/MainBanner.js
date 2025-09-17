import { View, Text } from 'react-native';
import mainBanner from "../assets/images/main-banner.jpg"
import { ImageBackground } from 'react-native';
import Button from './Button'
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const MainBanner = () => {
  return (
    <ImageBackground
      source={mainBanner}
      style={{
        position: "relative",
        width: width,
        height: 300,
        justifyContent: "flex-end",
        padding: 20,
        paddingBottom: 40,
      }}
      resizeMode="cover"
    >
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: 1,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        padding: 5,
        marginBottom: 7,
      }}>JUST FOR YOU</Text>

      <View style={{
        alignSelf: "flex-start",
        paddingBottom: 20
      }}>
        <Button
          iconAlign="left"
          type='link'
          href='Shop'
          style="clear"
          iconName="arrow-forward"
          color='black'
          title='SHOP ALL'
          buttonStyle={{ backgroundColor: 'white' }}
          contentStyle={{
            fontSize: 12,
            padding: 12,
            fontWeight: 'bold',
            color: 'black',
            letterSpacing: 1.5,
          }}
          elevated
          borderColor='white'
          height={40}
        />
      </View>
    </ImageBackground>
  );
}

export default MainBanner;