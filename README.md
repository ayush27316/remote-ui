# Remote UI Rendering

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://68ca1fcb325feba206aa9afc--superb-cassata-f42657.netlify.app/)

A revolutionary React Native application that demonstrates **Remote UI Rendering** - the ability to dynamically transform your app's interface using JSON schemas without requiring app store updates.

Initial implmentation was motivated by proeject at https://github.com/fodori/jsonui .
## 🚀 Live Demo

**Experience the magic:** [https://68ca1fcb325feba206aa9afc--superb-cassata-f42657.netlify.app/](https://68ca1fcb325feba206aa9afc--superb-cassata-f42657.netlify.app/)

## 🎯 What is Remote UI Rendering?

Remote UI Rendering revolutionizes how we build and update user interfaces. Instead of hardcoding layouts and components into your application, this approach allows you to define UI structures using JSON schemas that can be interpreted and rendered dynamically at runtime.

Your app becomes a rendering engine that receives component definitions from a remote source and translates them into native interface elements, eliminating the traditional bottleneck of app store deployments for UI changes.

## ✨ Key Features

- **🔄 Dynamic UI Updates**: Transform your app's interface in real-time
- **📱 Cross-Platform**: Built with React Native and Expo for iOS, Android, and Web
- **🎨 JSON Schema Driven**: Define complex UI layouts using simple JSON structures
- **⚡ No App Store Updates**: Change themes, layouts, and components without deployments
- **🎪 Interactive Demo**: Live demonstration of Christmas theme transformation
- **🛠️ Component Registry**: Extensible system for registering custom components
- **📊 Real-time Rendering**: Instant UI updates based on remote schemas

## 🏗️ Architecture

### Core Components

- **Register System**: Manages component registration and remote schema loading
- **Renderer**: Interprets JSON schemas and renders React Native components
- **Component Library**: Pre-built components (Button, Header, Product, etc.)
- **Schema Engine**: Handles JSON-to-UI transformation logic

### Technology Stack

- **React Native 0.79.1** - Cross-platform mobile development
- **Expo 53.0.4** - Development platform and tools
- **React Navigation 7.x** - Navigation library
- **TypeScript** - Type safety and better development experience
- **Lottie React Native** - Animation support
- **Native Base** - UI component library

## 🎮 Interactive Demo

The application includes a comprehensive demo that showcases:

1. **Christmas Header Transformation** - Dynamic header with Santa icon and festive colors
2. **Festive Main Banner** - Christmas-themed banner with sale messaging and countdown timer
3. **Christmas Navigation** - Bottom navigation with holiday color scheme
4. **Real-time Schema Updates** - See JSON schemas applied instantly to the UI

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button.js
│   ├── Header.js
│   ├── Product.js
│   ├── MockEmulator.js
│   └── ...
├── register/            # Remote UI rendering system
│   ├── core/
│   │   ├── Register.js      # Component registry
│   │   ├── Renderer.js      # JSON schema renderer
│   │   └── RegisterProvider.js
│   └── hooks/
├── schemas/             # JSON schema definitions
│   ├── ChristmasDemo.js    # Demo schemas
│   ├── MainBanner.js       # Banner schemas
│   └── schema.js           # Test schemas
├── pages/               # Application pages
│   └── LandingPage.js      # Main landing page
└── navigation/          # Navigation configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayush27316/remote-ui.git
   cd remote-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Run on different platforms**
   ```bash
   # Web
   npm run web
   
   # iOS
   npm run ios
   
   # Android
   npm run android
   ```

### Development Commands

```bash
# Start development server
npm start

# Build for web
npm run build:web

# Deploy to Vercel
npm run deploy:vercel

# Run on specific platforms
npm run ios
npm run android
```

## 🎨 JSON Schema Format

The application uses a custom JSON schema format to define UI components:

```json
{
  "v:name": "View",
  "style": {
    "flex": 1,
    "padding": 20,
    "backgroundColor": "#f5f5f5"
  },
  "v:children": [
    {
      "v:name": "Text",
      "style": {
        "fontSize": 28,
        "fontWeight": "bold",
        "color": "#333"
      },
      "v:children": "Hello from JSON UI!"
    },
    {
      "v:name": "Button",
      "title": "Press Me",
      "onPress": {
        "action": {
          "name": "handleClick",
          "msg": "Button pressed!"
        }
      }
    }
  ]
}
```

### Schema Properties

- `v:name`: Component type (View, Text, Button, etc.)
- `style`: React Native style properties
- `v:children`: Child components or text content
- Custom properties: Component-specific props

## 🔧 Component Registration

Components are registered through the Register system:

```javascript
// Register a new component
register.registerComponent({
  name: 'CustomButton',
  type: 'component',
  component: CustomButtonComponent,
  properties: {}
});

// Register a remote component from JSON schema
await register.registerRemoteComponent({
  name: 'RemoteHeader',
  schema: jsonSchema,
  type: 'remote',
  properties: {}
});
```

## 🌟 Use Cases

- **A/B Testing**: Test different UI layouts without app updates
- **Seasonal Themes**: Apply holiday themes dynamically
- **Feature Flags**: Enable/disable UI features remotely
- **Personalization**: Customize UI based on user preferences
- **Rapid Prototyping**: Quickly test new UI concepts
- **Multi-tenant Apps**: Different UI themes for different clients

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ayush Srivastava**
- LinkedIn: [@ayush-srivastava-4b92a122b](https://www.linkedin.com/in/ayush-srivastava-4b92a122b/)
- GitHub: [@ayush27316](https://github.com/ayush27316)

## 🙏 Acknowledgments

- Built with [React Native](https://reactnative.dev/)
- Powered by [Expo](https://expo.dev/)
- UI components from [Native Base](https://nativebase.io/)
- Animations by [Lottie](https://lottiefiles.com/)

---

**⭐ Star this repository if you found it helpful!**

*Building the future of dynamic user interfaces* 🚀