import React, {useContext} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import RegisterContext from './RegisterContext'
/** Constants */
const V_COMP_NAME = 'v:name';
const V_CHILDREN_NAME = 'v:children';
const ACTION_KEY = 'action';
const PARENT_PROP_NAME = 'v:parent';
const PRIMITIVE_COMP_NAME = '_Primitive';
const FRAGMENT_COMP_NAME = '_Fragment';


/** Utils */
const traverse = (obj, visit, path = []) => {
  if (typeof obj !== 'object' || obj === null) return;

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const currentPath = [...path, key];
      visit({ key, value, path: currentPath });

      if (typeof value === 'object' && value !== null) {
        traverse(value, visit, currentPath);
      }
    }
  }
};
const getFilteredPath = (data, filterFn) => {
  const result = [];
  traverse(data, (info) => {
    if (filterFn(info)) result.push(info);
  });
  return result;
};


const actionBuilder = (props, register) => {
    const actionPropPaths = getFilteredPath(props, ({ value }) =>
      typeof value === 'object' && value !== null && !Array.isArray(value) && ACTION_KEY in value
    );
  
    actionPropPaths.forEach(({ path }) => {
      const actionDataContainer = path.reduce((o, k) => o[k], props);
      const { name, ...rest } = actionDataContainer[ACTION_KEY];
  
      const fn = (...args) => register.callFunction(name, rest, props, args);
      let target = props;
      const targetKey = path[path.length - 1];
      for (let i = 0; i < path.length - 1; i++) {
        target = target[path[i]];
      }
      target[targetKey] = fn;
    });
};

const removeTechnicalProps = (props) => {
    const copy = { ...props };
    delete copy[V_COMP_NAME];
    delete copy[V_CHILDREN_NAME];
    delete copy[PARENT_PROP_NAME];
    delete copy[ACTION_KEY];
  
    if (typeof copy.style === 'string') {
      try {
        copy.style = JSON.parse(copy.style);
      } catch (e) {
        console.warn('Invalid JSON string in style:', copy.style);
        copy.style = {};
      }
    }
  
    return copy;
  };
  
export const normalisePrimitives = (val, parent) => {
  if (Array.isArray(val)) {
    return {
      [V_COMP_NAME]: FRAGMENT_COMP_NAME,
      [V_CHILDREN_NAME]: val,
      [PARENT_PROP_NAME]: parent,
    };
  }

  if (val === null || typeof val !== 'object') {
    return {
      [V_COMP_NAME]: PRIMITIVE_COMP_NAME,
      [V_CHILDREN_NAME]: val,
      [PARENT_PROP_NAME]: parent,
    };
  }

  return {
    ...val,
    [PARENT_PROP_NAME]: parent,
  };
};

const getChildrensForRoot = (props, children, Wrapper) => {
  if (Array.isArray(children)) {
    return children.map((child, i) => (
      <Wrapper key={i} props={normalisePrimitives(child, props)} />
    ));
  }
  if (children) {
    return <Wrapper props={normalisePrimitives(children, props)} />;
  }
  return null;
};

const generateChildren = (props, Wrapper) => {
  if (props[V_COMP_NAME] !== PRIMITIVE_COMP_NAME) {
    return getChildrensForRoot(props, props[V_CHILDREN_NAME], Wrapper);
  }
  return props[V_CHILDREN_NAME];
};

const Wrapper = ({ props }) => {
  const register = useContext(RegisterContext);

  if (register) {
  } else {
    return <View><Text>Error: register not found.</Text></View>;
  }

  actionBuilder(props, register);

  const componentName = props[V_COMP_NAME];
  const Component = register.getComponent(componentName);


  if (!Component) {
    // This is the final check before the app crashes.
    console.error(`[Wrapper] FATAL: The component for '${componentName}' resolved to UNDEFINED. This is the source of the error.`);
    // We'll render a visible error instead of crashing
    return <Text>FATAL ERROR: Component '{componentName}' is undefined.</Text>;
  }
  
  const children = generateChildren(props, register.Wrapper);
  const cleanedProps = removeTechnicalProps(props);
  return (<Component {...cleanedProps}>{children}</Component>);
};

export default Wrapper;
  


  
