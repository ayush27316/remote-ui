import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MockPhone from './MockPhone';
import LoadWithRemoteComponent from './LoadWithRemoteComponents';
import DemoScreen from './DemoScreen';
import { demoSteps } from '../schemas/ChristmasDemo';
import ResponsiveBlocker from './ResponsiveBlocker';

const { width: screenWidth } = Dimensions.get('window');

const MockEmulator = () => {
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
  const isCompact = screenWidth < 1200;

  return (
    <ResponsiveBlocker minWidth={900}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>UI</Text>
            </View>
            <View>
              <Text style={styles.title}>Remote UI Demo</Text>
              <Text style={styles.subtitle}>Dynamic Theme Transformation</Text>
            </View>
          </View>
          <View style={styles.status}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Live</Text>
          </View>
        </View>

        {/* Main Layout */}
        <View style={styles.main}>
          {/* Phone Preview */}
          <View style={[styles.phoneSection, isCompact && styles.phoneSectionCompact]}>
            <View style={styles.phoneHeader}>
              <Text style={styles.sectionTitle}>Device Preview</Text>
              <Text style={styles.deviceLabel}>iPhone 14 Pro</Text>
            </View>
            <View style={styles.phoneContainer}>
              {currentStepData ? (
                <MockPhone 
                  component={LoadWithRemoteComponent} 
                  name={currentStepData.componentName}
                  schema={currentStepData.schema}
                  target={DemoScreen}
                />
              ) : (
                <MockPhone component={DemoScreen} />
              )}
            </View>
          </View>

          {/* Controls */}
          <View style={[styles.controlsSection, isCompact && styles.controlsSectionCompact]}>
            <View style={styles.controlsHeader}>
              <Text style={styles.sectionTitle}>Demo Controls</Text>
              <Text style={styles.progressLabel}>Progress</Text>
            </View>

            <ScrollView style={styles.controlsContent} showsVerticalScrollIndicator={false}>
              {/* Progress */}
              <View style={styles.progressSection}>
                <View style={styles.progressBar}>
                  {demoSteps.map((_, index) => (
                    <View 
                      key={index} 
                      style={[
                        styles.progressDot,
                        completedSteps.includes(index) && styles.progressDotCompleted,
                        currentStep === index + 1 && styles.progressDotActive
                      ]}
                    >
                      {completedSteps.includes(index) && (
                        <MaterialIcons name="check" size={10} color="#ffffff" />
                      )}
                    </View>
                  ))}
                </View>
              </View>

              {/* Current Step */}
              <View style={styles.stepSection}>
                <Text style={styles.stepTitle}>
                  {!isComplete ? (
                    currentStep === 0 ? "Ready to Start" : demoSteps[currentStep - 1]?.title || ""
                  ) : "Demo Complete! ✨"}
                </Text>
                <Text style={styles.stepDescription}>
                  {!isComplete ? (
                    currentStep === 0 ? 
                      "Click 'Start Demo' to begin applying Christmas themes to different components." :
                      demoSteps[currentStep - 1]?.description || ""
                  ) : "The app has been successfully transformed using remote JSON schemas."}
                </Text>

                {currentStepData && (
                  <View style={styles.changesSection}>
                    <Text style={styles.changesTitle}>Changes Applied</Text>
                    {currentStepData.changes.map((change, index) => (
                      <View key={index} style={styles.changeItem}>
                        <View style={styles.changeDot} />
                        <Text style={styles.changeText}>{change}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </View>

              {/* Schema */}
              {currentStepData && (
                <View style={styles.schemaSection}>
                  <Text style={styles.schemaTitle}>JSON Schema</Text>
                  <View style={styles.codeContainer}>
                    <ScrollView showsVerticalScrollIndicator={true}>
                      <Text style={styles.codeText}>
                        {JSON.stringify(JSON.parse(currentStepData.schema), null, 2)}
                      </Text>
                    </ScrollView>
                  </View>
                </View>
              )}
            </ScrollView>

            {/* Action Button */}
            <View style={styles.actionSection}>
              <TouchableOpacity 
                style={[styles.actionButton, isComplete && styles.actionButtonReset]}
                onPress={isComplete ? handleReset : handleNext}
              >
                <Text style={styles.actionButtonText}>
                  {isComplete ? 'Reset Demo' : (currentStep === 0 ? 'Start Demo' : 'Next Step')}
                </Text>
                <MaterialIcons 
                  name={isComplete ? "refresh" : "arrow-forward"} 
                  size={20} 
                  color="#ffffff" 
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ResponsiveBlocker>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    width: '130vh',
    height:'90vh',
    borderRadius: 20,
    overflow: 'hidden',
  },
  
  // Header
  header: {
    height: 60,
    backgroundColor: '#1e293b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#334155',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 36,
    height: 36,
    backgroundColor: '#6366f1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  logoText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#f1f5f9',
  },
  subtitle: {
    fontSize: 16,
    color: '#94a3b8',
    fontWeight: '500',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#064e3b',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#10b981',
    borderRadius: 5,
  },
  statusDot: {
    width: 6,
    height: 6,
    backgroundColor: '#10b981',
  },
  statusText: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: '600',
  },

  // Main Layout
  main: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 0,
  },

  // Phone Section
  phoneSection: {
    width: '40%',
    backgroundColor: '#1e293b',
    borderRightWidth: 1,
    borderRightColor: '#334155',
    minHeight: 0,
  },
  phoneSectionCompact: {
    width: '40%',
  },
  phoneHeader: {
    height: 50,
    backgroundColor: '#334155',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#475569',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f1f5f9',
  },
  deviceLabel: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '500',
    backgroundColor: '#475569',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  phoneContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  // Controls Section
  controlsSection: {
    flex: 1,
    backgroundColor: '#1e293b',
    minHeight: 0,
  },
  controlsSectionCompact: {
    minWidth: '60%',
  },
  controlsHeader: {
    height: 50,
    backgroundColor: '#334155',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#475569',
    borderRadius: 5,
  },
  progressLabel: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '600',
    backgroundColor: '#1e1b4b',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#6366f1',
  },
  controlsContent: {
    flex: 1,
    padding: 20,
  },

  // Progress Section
  progressSection: {
    marginBottom: 20,
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  progressDot: {
    width: 20,
    height: 20,
    backgroundColor: '#475569',
    borderWidth: 2,
    borderColor: '#64748b',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressDotActive: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
  progressDotCompleted: {
    backgroundColor: '#10b981',
    borderColor: '#10b981',
  },

  // Step Section
  stepSection: {
    marginBottom: 20,
  },
  stepTitle: {
    fontSize: 20,
    color: '#f1f5f9',
    fontWeight: '600',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 16,
    color: '#94a3b8',
    lineHeight: 24,
    marginBottom: 12,
  },
  changesSection: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#475569',
  },
  changesTitle: {
    fontSize: 14,
    color: '#f1f5f9',
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  changeItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 4,
  },
  changeDot: {
    width: 4,
    height: 4,
    backgroundColor: '#6366f1',
    marginTop: 6,
  },
  changeText: {
    flex: 1,
    fontSize: 15,
    color: '#cbd5e1',
    lineHeight: 22,
  },

  // Schema Section
  schemaSection: {
    marginBottom: 20,
  },
  schemaTitle: {
    fontSize: 14,
    color: '#f1f5f9',
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  codeContainer: {
    backgroundColor: '#0f172a',
    maxHeight: 350,
    borderWidth: 1,
    borderColor: '#334155',
  },
  codeText: {
    fontFamily: 'Monaco, Consolas, monospace',
    fontSize: 13,
    color: '#e2e8f0',
    lineHeight: 20,
    padding: 16,
  },

  // Action Section
  actionSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#475569',
    backgroundColor: '#334155',
  },
  actionButton: {
    backgroundColor: '#6366f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 5,
  },
  actionButtonReset: {
    backgroundColor: '#10b981',
    shadowColor: '#10b981',
  },
  actionButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default MockEmulator;