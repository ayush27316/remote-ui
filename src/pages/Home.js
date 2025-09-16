import Button from '../components/Button';
import BottomNavigation from '../components/BottomNavigation'
import { View, Text} from 'react-native';
import { ScrollView } from 'react-native';
import ProductSlider from '../components/ProductSlider';
import Slider from '../components/ProductCaraousal'
import useRegister from '../register/hooks/useRegister';
import { useMemo } from 'react';

const HomeScreen = () => {

  const register = useRegister(); 
  //use components from the register as server might have replaced 
  //native components with remote ones 
  const MainBanner = useMemo(()=>(register.getComponent('MainBanner')));
  //const Banner = useMemo(()=>(register.getComponent('ChristmasBanner')),[]);
  const Header = useMemo(()=>(register.getComponent('Header')));

  return (
  <>
    <Header label='HELLO' />
      <ScrollView style={{ backgroundColor: 'white' }}>
        <MainBanner/>      
          <View style={{ marginTop: -50 }}>
            <ProductSlider />
          </View>
        <View style={{
          paddingHorizontal:15,
          paddingTop: 25,
        }}>
            <Text style={{
                    fontSize: 16,
                    paddingVertical:10,
                    fontWeight: 'bold',
                    color: 'black',
                    letterSpacing: 1.5,
                  }}>
                    NEW ARRIVALS
              </Text>
              <Button
                  iconAlign="left"
                  style="outline"
                  iconName="arrow-forward"
                  title='SHOP NEW IN'
                  contentStyle={{
                    fontWeight: 'bold',
                    color: 'black',
                    letterSpacing: 1.5,
                  }}
                />   
              <Slider/>
        </View>
{/* <Banner/> */}
        <View style={{
          paddingHorizontal:15,
          paddingTop: 25,
          marginBottom:100,
        }}>
            <Text style={{
                    fontSize: 16,
                    paddingTop:10,
                    fontWeight: 'bold',
                    color: 'black',
                    letterSpacing: 1.5,
                  }}>
                    SHOP SUGGESTED LOOKS
              </Text>
              <Text style={{
                    fontSize: 12,
                    paddingVertical:10,
                    color: '#808080',
                    letterSpacing: 1.5,
                  }}>
                   Select your faviorite for more details
              </Text>
              <Button
                  
                  iconAlign="left"
                  style="outline"
                  iconName="arrow-forward"
                  title='SHOP NEW IN'
                  contentStyle={{
                    fontWeight: 'bold',
                    color: 'black',
                    letterSpacing: 1.5,
                  }}
              
                />   
              <Slider/>
        </View>
        </ScrollView>
        <BottomNavigation/>
</>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white'
//   },
//   baseText: {
//     fontWeight: 'bold',
//   },
//   innerText: {
//     color: 'red',
//   },
// });
// const bgStyles = StyleSheet.create({
//   backgroundImage: {
//     width: width,
//     height: 300, // Adjust as needed
//     justifyContent: 'flex-end',
//     padding: 20,
//     paddingBottom: 40,

//   },
//   buttonContainer: {
//     alignSelf: 'flex-start',
//     paddingBottom: 20,
//   },
// });

export default HomeScreen;
