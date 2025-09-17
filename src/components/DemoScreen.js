import Button from './Button';
import BottomNavigation from './BottomNavigation'
import { View, Text} from 'react-native';
import { ScrollView } from 'react-native';
import ProductSlider from './ProductSlider';
import Slider from './ProductCaraousal'
import useRegister from '../register/hooks/useRegister';
import { useMemo } from 'react';

const DemoScreen = () => {
  const register = useRegister(); 
  const MainBanner = useMemo(()=>(register.getComponent('MainBanner')));
  const Header = useMemo(()=>(register.getComponent('Header')));
  const BottomNavigation = useMemo(()=>(register.getComponent('BottomNavigation')));

  return (
  <>
    <Header label='HELLO' />
      <ScrollView 
        style={{ backgroundColor: 'white' }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
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


export default  DemoScreen;
