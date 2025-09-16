import { store } from "../store";
import Renderer from "./Renderer";
import {Text, View} from 'react-native'
import c from './constants'
import { Image } from 'react-native';
import {
  BottomNavigation,
  Button,
  Header,
  Icon,
  Message,
  Product,
  ProductCaraousal,
  ProductList,
  MainBanner,
  Timer,
  FlickerText,
  ImageBackground
} from '../../components'; 

const components = {
  BottomNavigation,
  Button,
  Header,
  Icon,
  Message,
  Product,
  ProductCaraousal,
  ProductList,
  MainBanner,
  Timer,
  FlickerText,
  ImageBackground
};

class Register {
  
  // components is a map with name: String as keys and an object as value, 
  //   object: {
  //   component: React.Component,
  //   type: String,
  //   properties: Object
  // }
  components = {};

  functions = {};

  constructor({ components = {}, functions = {} } = {}, Wrapper = null) {
    if (Register.instance) {
      return Register.instance;
    }

    this.components = components;
    this.functions = functions;
    this.Wrapper = Wrapper;
    Register.instance = this;
  }

  getComponent = (name) => {
    return this.components[name].component || this.components._Undefined;
  };

  callFunction = (name, attr, props, callerArgs) => {
    if (name in this.functions) {
      return this.functions[name](attr, props, callerArgs, this);
    }
    return null;
  };

  registerComponent = ({name, component, type, properties}) => {
    
    if (!this.components[name]) {
      this.components[name] = {component, type, properties};
  
    }
  };
  async registerRemoteComponent({ name, schema, type, properties }) {
    
    this.components[name] = {
      component: () => <Renderer model={schema} />, 
      type, 
      properties};
  
    console.log('remote component registered.')
    console.log('Registration Ready For Use: Available reosureces', components, this.functions)
 
    // let configRaw = await store.read('config');
    // let config = configRaw ? JSON.parse(configRaw) : {schemas:[]};
    
    // const index = config.schemas.findIndex(entry => entry.name === name);
    // const schemaEntry = { name, type, schema, properties };

    // if (index !== -1) {
    //   config.schemas[index] = schemaEntry; // update existing
    // } else {
    //   config.schemas.push(schemaEntry); // insert new
    // }

    // await store.save('config', config);
  }

  
  async init(){

    //native and primitive components
    this.registerComponent({name : 'View',component: View,type: 'component',properties: {}});
    this.registerComponent({name : 'Text',component: Text,type: 'component',properties: {}});
    this.registerComponent({name: c.PRIMITIVE_COMP_NAME, component: ({ children }) => <Text>{children}</Text>,type: 'primitive',properties: {}});
    this.registerComponent({name : c.FRAGMENT_COMP_NAME,component: ({ children }) => <>{children}</>,type: 'primitive',properties: {}});
    this.registerComponent({name: '_Undefined', component: ({...props}) => <Text>Unknown: {props['v:name']}</Text>,type: 'component',properties:{}});
    this.registerComponent({name:'Image', component: Image, type:'component', properties:{}});
    //register components in ../compenents/
    Object.entries(components).forEach(([name, Component]) => {
      this.registerComponent({
        name,
        type: 'component',
        component: Component,
        properties: {}
      });
    });
    //read app config-> load existing schemas 
    //register and initiate pre-render 
    // const configRaw = await store.read('config');
    // if (!configRaw) {
    //   await store.save('config', { schemas: [] });
    // }
    // const config = configRaw ? configRaw : {};

    // if (!Array.isArray(config.schemas)) return;
  
    // for (const { name, schema, type, properties } of config.schemas) {
    //   this.registerComponent({
    //     name,
    //     component: () => <Renderer model={schema} />,
    //     type,
    //     properties,
    //   });
    // }

    console.log('Registration Ready For Use: Available reosureces', components, this.functions)
  }

  registerFunction = (name, fn) => {
    this.functions[name] = fn;
  };


  static getInstance(initArgs = {}, Wrapper = null) {
    if (!Register.instance) {
      Register.instance = new Register(initArgs, Wrapper);
    }
    return Register.instance;
  }

  getComponentsByType(_type) {
    return Object.entries(this.components)
      .filter(([_, { type }]) => type === _type)
      .map(([name, { component, properties }]) => ({
        name,
        component,
        properties,
      }));
  }
  
  getComponentsByProperty(name, value) {
    return Object.entries(this.components)
      .filter(([_, { properties }]) => properties && properties[name] === value)
      .map(([key, { component, properties, type }]) => ({
        name: key,
        component,
        properties,
        type,
      }));
  }
  
}

export default Register;
