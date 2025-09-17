import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useResponsive = () => {
  const [screenData, setScreenData] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    isCompact: Dimensions.get('window').width < 1200,
    isMobile: Dimensions.get('window').width < 768,
    isTablet: Dimensions.get('window').width >= 768 && Dimensions.get('window').width < 1200,
    isDesktop: Dimensions.get('window').width >= 1200,
  });

  useEffect(() => {
    const onChange = (result) => {
      const { width, height } = result.window;
      setScreenData({
        width,
        height,
        isCompact: width < 1200,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1200,
        isDesktop: width >= 1200,
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    
    return () => subscription?.remove();
  }, []);

  return screenData;
};

export default useResponsive;
