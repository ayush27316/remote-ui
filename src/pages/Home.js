
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Dimensions,
  Animated,
  Image,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import MockEmulator from '../components/MockEmulator';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showMobileMessage, setShowMobileMessage] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;
  const scrollViewRef = useRef(null);

  // Add animation on mount and check screen size
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    // Show mobile message if screen is too small
    if (screenWidth < 768) {
      setShowMobileMessage(true);
    }
  }, []);


  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setIsScrolled(scrollY > 50);
    
    // Update active section based on scroll position
    if (scrollY < 300) {
      setActiveSection('hero');
    } else if (scrollY < 800) {
      setActiveSection('demo');
    } else {
      setActiveSection('future');
    }
  };

  const scrollToSection = (section) => {
    let yPosition = 0;
    switch (section) {
      case 'demo':
        yPosition = screenHeight;
        break;
      case 'future':
        yPosition = screenHeight + 600;
        break;
      default:
        yPosition = 0;
    }
    
    scrollViewRef.current?.scrollTo({
      y: yPosition,
      animated: true,
    });
  };

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      
      {/* Mobile Message Overlay */}
      {showMobileMessage && (
        <View style={styles.mobileMessageOverlay}>
          <View style={styles.mobileMessage}>
            <MaterialIcons name="laptop" size={48} color="#6366f1" />
            <Text style={styles.mobileMessageTitle}>Better Experience on Desktop</Text>
            <Text style={styles.mobileMessageText}>
              For the best experience with our interactive demo, please switch to a laptop or desktop screen.
            </Text>
            <TouchableOpacity
              style={styles.mobileMessageButton}
              onPress={() => setShowMobileMessage(false)}
            >
              <Text style={styles.mobileMessageButtonText}>Continue Anyway</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      
      {/* Fixed Navigation Header */}
      <Animated.View style={[
        styles.navHeader,
        isScrolled && styles.navHeaderScrolled
      ]}>
        <View style={styles.navContent}>
          <View style={styles.logo}>
            <MaterialIcons name="dynamic-form" size={24} color="#ffffff" />
            <Text style={styles.logoText}>Remote UI</Text>
          </View>
          
          <View style={styles.navLinks}>
            <TouchableOpacity
              style={[styles.navLink, activeSection === 'demo' && styles.activeNavLink]}
              onPress={() => scrollToSection('demo')}
            >
              <Text style={styles.navLinkText}>Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navLink, activeSection === 'future' && styles.activeNavLink]}
              onPress={() => scrollToSection('future')}
            >
              <Text style={styles.navLinkText}>Future</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <Animated.View 
          style={[
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }
          ]}
        >
          <LinearGradient
            colors={['#1a1a2e', '#16213e', '#0f3460']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroSection}
          >
          <View style={styles.heroContent}>
            <View style={styles.heroText}>
              <Text style={styles.heroTitle}>Remote UI Rendering</Text>
              <Text style={styles.heroSubtitle}>
                Transform your app's interface dynamically with JSON schemas. 
                No app store updates required.
              </Text>
              <Text style={styles.heroDescription}>
                Remote UI Rendering revolutionizes how we build and update user interfaces. Instead of hardcoding layouts and components into your application, this approach allows you to define UI structures using JSON schemas that can be interpreted and rendered dynamically at runtime. Your app becomes a rendering engine that receives component definitions from a remote source and translates them into native interface elements, eliminating the traditional bottleneck of app store deployments for UI changes.
              </Text>
              <View style={styles.heroButtons}>
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => scrollToSection('demo')}
                >
                  <Text style={styles.primaryButtonText}>Try Live Demo</Text>
                  <MaterialIcons name="play-arrow" size={20} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => scrollToSection('introduction')}
                >
                  <Text style={styles.secondaryButtonText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            <View style={styles.heroVisual}>
              <View style={styles.phoneMockup}>
                <View style={styles.phoneFrame}>
                  <View style={styles.phoneScreen}>
                    <View style={styles.phoneHeader}>
                      <View style={styles.phoneNotch} />
                    </View>
                    <View style={styles.phoneContent}>
                      <View style={styles.mockComponent}>
                        <View style={styles.mockHeader} />
                        <View style={styles.mockBody}>
                          <View style={styles.mockLine} />
                          <View style={styles.mockLine} />
                          <View style={styles.mockLineShort} />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          </LinearGradient>
        </Animated.View>


        {/* Demo Section */}
        <View style={styles.section} id="demo">
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>Interactive Demo</Text>
            <Text style={styles.sectionSubtitle}>
              Experience how Remote UI Rendering transforms your app's interface in real-time.
            </Text>
            
            <View style={styles.demoContainer}>
              <MockEmulator />
            </View>
          </View>
        </View>

        {/* Future & Applications Section */}
        <View style={styles.section} id="future">
          <View style={styles.sectionContent}>
            <Text style={styles.sectionTitle}>The Future is Dynamic</Text>
            <Text style={styles.sectionSubtitle}>
              Imagine apps that adapt in real-time. Here's what's possible today.
            </Text>
            
            <View style={styles.futureText}>
              <Text style={styles.futureParagraph}>
                We're moving toward a future where applications transform themselves based on real-world context, user preferences, and business needs—all without traditional update cycles.
              </Text>
              <Text style={styles.futureParagraph}>
                This technology represents more than innovation—it's the foundation for responsive, adaptive digital experiences that evolve with users.
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.footerProfile}>
              <View style={styles.footerProfileImage}>
                <Image 
                  source={require('../../assets/images/ayush.png')} 
                  style={styles.profileImage}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.footerProfileInfo}>
                <Text style={styles.footerProfileName}>Ayush Srivastava</Text>
                <Text style={styles.footerProfileTitle}>Full Stack Engineer</Text>
                <Text style={styles.footerProfileDescription}>
                  Building the future of dynamic user interfaces
                </Text>
              </View>
            </View>
            
            <View style={styles.footerSocial}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => openLink("https://www.linkedin.com/in/ayush-srivastava-4b92a122b/")}
              >
                <AntDesign name="linkedin-square" size={24} color="#0077b5" />
                <Text style={styles.socialButtonText}>LinkedIn</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => openLink("https://github.com/ayush27316/remote-ui")}
              >
                <AntDesign name="github" size={24} color="#333333" />
                <Text style={styles.socialButtonText}>GitHub</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.footerBottom}>
            <Text style={styles.footerText}>
              © 2024 Remote UI Rendering Demo. Built with React Native & Expo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  
  // Navigation Header
  navHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  navHeaderScrolled: {
    backgroundColor: 'rgba(26, 26, 46, 0.95)',
    backdropFilter: 'blur(10px)',
    paddingTop: 20,
  },
  navContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 32,
  },
  navLink: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  activeNavLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  navLinkText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  
  // Scroll View
  scrollView: {
    flex: 1,
  },
  
  // Hero Section
  heroSection: {
    minHeight: screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  heroContent: {
    flexDirection: screenWidth > 768 ? 'row' : 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1200,
    width: '100%',
    gap: 60,
  },
  heroText: {
    flex: 1,
    maxWidth: screenWidth > 768 ? 500 : '100%',
  },
  heroTitle: {
    fontSize: screenWidth > 768 ? 56 : 42,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: screenWidth > 768 ? 64 : 48,
    marginBottom: 24,
    letterSpacing: -1,
  },
  heroSubtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 32,
    marginBottom: 24,
    fontWeight: '400',
  },
  heroDescription: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: 30,
    marginBottom: 40,
    fontWeight: '400',
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#6366f1',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  secondaryButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  secondaryButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  
  // Hero Visual
  heroVisual: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneMockup: {
    width: 280,
    height: 560,
  },
  phoneFrame: {
    width: '100%',
    height: '100%',
    backgroundColor: '#2d3748',
    borderRadius: 40,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 20,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 32,
    overflow: 'hidden',
  },
  phoneHeader: {
    height: 40,
    backgroundColor: '#f7fafc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNotch: {
    width: 120,
    height: 4,
    backgroundColor: '#2d3748',
    borderRadius: 2,
  },
  phoneContent: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  mockComponent: {
    flex: 1,
  },
  mockHeader: {
    height: 40,
    backgroundColor: '#6366f1',
    borderRadius: 8,
    marginBottom: 16,
  },
  mockBody: {
    flex: 1,
    gap: 12,
  },
  mockLine: {
    height: 16,
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
  },
  mockLineShort: {
    height: 16,
    width: '60%',
    backgroundColor: '#e2e8f0',
    borderRadius: 4,
  },
  
  // Section Styles
  section: {
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  sectionContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  },
  sectionTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: '#1a202c',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -1,
  },
  sectionSubtitle: {
    fontSize: 20,
    color: '#4a5568',
    textAlign: 'center',
    marginBottom: 60,
    lineHeight: 32,
    maxWidth: 600,
    alignSelf: 'center',
  },
  
  
  // Demo Container
  demoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 600,
  },
  
  // Future Text
  futureText: {
    gap: 24,
  },
  futureParagraph: {
    fontSize: 20,
    color: '#2d3748',
    lineHeight: 34,
    textAlign: 'justify',
  },
  
  
  // Footer
  footer: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  footerContent: {
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
    flexDirection: screenWidth > 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
    marginBottom: 40,
  },
  footerProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  footerProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  footerProfileInfo: {
    gap: 4,
  },
  footerProfileName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
  footerProfileTitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
  footerProfileDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 4,
  },
  footerSocial: {
    flexDirection: 'row',
    gap: 16,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
    paddingTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.6)',
  },

  // Mobile Message Styles
  mobileMessageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 2000,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mobileMessage: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    maxWidth: 400,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  mobileMessageTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a202c',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 16,
  },
  mobileMessageText: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  mobileMessageButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  mobileMessageButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Home;
