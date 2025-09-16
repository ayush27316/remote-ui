
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import MockPhone from '../components/MockPhone';
import LoadWithRemoteComponent from '../components/LoadWithRemoteComponents';
import DemoScreen from '../components/DemoScreen';
import { demoSteps } from '../schemas/ChristmasDemo';

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `Remote UI Rendering represents a paradigm shift in how we build and update user interfaces. Instead of hardcoding layouts and components into your application, this approach allows you to define UI structures using JSON schemas that can be interpreted and rendered dynamically at runtime.

The core concept is simple yet powerful: your app becomes a rendering engine that receives component definitions from a remote source and translates them into native interface elements. This eliminates the traditional bottleneck of app store deployments for UI changes.

Why does this matter? Consider the typical development cycle where a simple color change or layout adjustment requires code modifications, testing, building, and distribution through app stores. Users must download updates, and adoption is gradual. Remote UI rendering bypasses this entirely.

The technology enables real-time A/B testing, personalized interfaces, seasonal themes, emergency updates, and context-aware designs that respond to user behavior, location, or external conditions. It's particularly valuable for e-commerce, content platforms, and applications requiring frequent visual updates.`
  },
  { 
    id: "demo",
    title: "Demo",
    isDemo: true
  },
  {
    id: "conclusion",
    title: "Future & Applications",
    content: `Remote UI rendering opens unprecedented possibilities for adaptive, intelligent interfaces. We're moving toward a future where applications can transform themselves based on real-world context, user preferences, and business needs without requiring traditional update cycles.

Imagine e-commerce apps that instantly reflect seasonal campaigns, news applications that adjust layouts based on story importance, or productivity tools that reorganize themselves according to user workflow patterns. The technology enables continuous optimization through data-driven design decisions.

The implications extend beyond convenience. Emergency services could deploy critical interface updates instantly. Global applications could adapt to local regulations or cultural preferences in real-time. Educational platforms could personalize learning interfaces based on individual progress patterns.

Security and performance considerations are crucial. Schemas must be validated, cached intelligently, and designed with fallbacks. The rendering engine needs to be robust enough to handle malformed data gracefully while maintaining smooth user experiences.

As we advance, we'll likely see standardized schema formats, visual editors for non-technical teams, and AI-assisted interface generation that learns from user interactions to suggest optimal layouts and components.

This technology represents more than technical innovation—it's a foundation for responsive, adaptive digital experiences that evolve with users rather than against them.`
  },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  
  // Demo state
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const handleNext = () => {
    if (currentStep < demoSteps.length) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const currentStepData = currentStep > 0 ? demoSteps[currentStep - 1] : null;
  const isComplete = currentStep >= demoSteps.length;

  return (
    <View style={styles.container}>
         {/* Header */}
         <View style={styles.headerWrapper}>
        <Text style={styles.header}>Remote UI Rendering</Text>

        {/* Profile Top-Right */}
        <View style={styles.profile}>
        <View style={styles.profileImage}>
          <Text style={styles.profileInitial}>A</Text>
        </View>

          <Text style={styles.profileName}>Ayush Srivastava</Text>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://linkedin.com/in/your-linkedin")}
            >
              <Text style={styles.linkText}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://github.com/your-github")}
            >
              <Text style={styles.linkText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        {/* Index Menu */}
        <View style={styles.index}>
          {sections.map((section) => (
            <TouchableOpacity
              key={section.id}
              style={[
                styles.indexItem,
                activeSection.id === section.id && styles.activeIndexItem,
              ]}
              onPress={() => setActiveSection(section)}
            >
              <Text
                style={[
                  styles.indexText,
                  activeSection.id === section.id && styles.activeIndexText,
                ]}
              >
                {section.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <View style={styles.sectionContent}>
          <View style={styles.textBlock}>
            {activeSection.isDemo ? (
              <View style={styles.demoContent}>
              
                <View style={styles.demoLayout}>
                  <View style={styles.phoneSection}>
                    {currentStepData ? (
                      <MockPhone 
                        component={LoadWithRemoteComponent} 
                        name={currentStepData.componentName}
                        schema={currentStepData.schema}
                        target={DemoScreen}
                      />
                    ) : (
                      <MockPhone 
                        component={DemoScreen}
                      />
                    )}
                  </View>

                  <View style={styles.controlsSection}>
                    {/* Progress Dots */}
                    <View style={styles.progressDots}>
                      {demoSteps.map((_, index) => (
                        <View 
                          key={index}
                          style={[
                            styles.dot,
                            completedSteps.includes(index) && styles.dotCompleted,
                            currentStep === index + 1 && styles.dotActive
                          ]}
                        />
                      ))}
                    </View>

                    {/* Step Description */}
                    <Text style={styles.stepDescription}>
                      {!isComplete ? (
                        currentStep === 0 ? 
                          "Click next to begin applying Christmas themes to different components." :
                          demoSteps[currentStep - 1]?.description || ""
                      ) : (
                        "Demo complete! The app has been transformed using remote JSON schemas."
                      )}
                    </Text>

                    {/* JSON Schema */}
                    {currentStepData && (
                      <View style={styles.schemaSection}>
                        <Text style={styles.schemaLabel}>Applied Schema:</Text>
                        <ScrollView style={styles.schemaScrollView}>
                          <Text style={styles.schemaText}>
                            {JSON.stringify(JSON.parse(currentStepData.schema), null, 2)}
                          </Text>
                        </ScrollView>
                      </View>
                    )}

                    {/* Next Button */}
                    <TouchableOpacity 
                      style={styles.demoButton}
                      onPress={isComplete ? handleReset : handleNext}
                    >
                      <Text style={styles.demoButtonText}>
                        {isComplete ? 'Reset Demo' : (currentStep === 0 ? 'Start Demo' : 'Next Step')}
                      </Text>
                      <Text style={styles.demoArrow}>
                        {isComplete ? '↻' : '→'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ) : (
              <Text style={styles.sectionBody}>
                {activeSection.content}
              </Text>
            )}
          </View>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBlock: {
    maxWidth: 600, // limit width of the text block
  },

  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 200, // consistent left margin for header + index
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginLeft: 100,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingRight: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
  },
  profile: {
    alignItems: "center",

    marginRight: 350,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 6,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  links: {
    flexDirection: "row",
    gap: 12,
  },
  linkText: {
    fontSize: 14,
    color: "#007AFF",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
  },
  index: {
    width: 150,
    justifyContent: "center", // vertically center
    paddingRight: 20,
  },
  indexItem: {
    paddingVertical: 14,
  },
  indexText: {
    fontSize: 16,
    color: "#555",
  },
  activeIndexItem: {
    borderLeftWidth: 3,
    borderLeftColor: "#007AFF",
    paddingLeft: 8,
  },
  activeIndexText: {
    fontWeight: "bold",
    color: "#007AFF",
  },
  sectionContent: {
    flex: 1,
    justifyContent: "center", // vertically center content
    paddingLeft: 350, // gap between index and content
    paddingRight: 60,
    width: 100,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 14,
  },
  sectionBody: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  demoText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "500",
  },

  // Demo-specific styles
  demoContent: {
    width: '100%',
  },
  demoDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 40,
  },
  demoLayout: {
    flexDirection: 'row',
    gap: 40,
    alignItems: 'flex-start',
    maxWidth: '100%',
  },
  phoneSection: {
    width: 350,
    alignItems: 'center',
    flexShrink: 0,
    marginLeft: -250,
    marginBottom: 50,
  },
  controlsSection: {
    flex: 1,
    minWidth: 0,
    paddingLeft: 20,
  },
  progressDots: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#e0e0e0',
  },
  dotActive: {
    backgroundColor: '#000000',
  },
  dotCompleted: {
    backgroundColor: '#666666',
  },
  stepDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 30,
  },
  schemaSection: {
    marginBottom: 30,
    flex: 1,
  },
  schemaLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  schemaScrollView: {
    maxHeight: 300,
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  schemaText: {
    fontFamily: 'SF Mono, Monaco, Consolas, monospace',
    fontSize: 11,
    color: '#666',
    lineHeight: 16,
    padding: 16,
  },
  demoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#000000',
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignSelf: 'flex-start',
    minWidth: 140,
  },
  demoButtonText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
  },
  demoArrow: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Home;
