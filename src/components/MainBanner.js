import { View, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import Button from './Button'
import { useAssets } from 'expo-asset';

const MainBanner = () => {

  const [bannerAsset, error] = useAssets([require('../../assets/images/main-banner.jpg')]);
  
  // Don't render until the asset is loaded
  if (!bannerAsset || bannerAsset.length === 0) {
    return null; 
  }
  
  return (
    <ImageBackground
      source={bannerAsset[0]}
      resizeMode="cover"
      style={{
        position: "relative",
        justifyContent: "flex-end",
        paddingBottom: 40,
        paddingLeft: 20,
        width: '100%',
        height: 300,  
        overflow: 'hidden'    
      }}
    
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