import RegisterContext from './RegisterContext';
import Register from './Register';
import c from './constants'
import {Text, View} from 'react-native'
import { Button } from '../../components';
import { useMemo } from 'react';
import Wrapper from './Wrapper'

const RegisterProvider = ( {children}) => {

  const register = useMemo(()=>{
    
    const register = Register.getInstance();
    register.Wrapper = Wrapper;
    ( async ()=>(await register.init()))();
    
    return register;
  },[]);
 
  return (
    <RegisterContext.Provider value={register}>
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
