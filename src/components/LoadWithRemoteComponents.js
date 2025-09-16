import { useMemo } from "react";
import useRegister from "../register/hooks/useRegister";

const LoadWithRemoteComponent = ({name, schema, target})=>{

    const register = useRegister();
    
    useMemo(() => {
      if(name && schema){
        console.log('LoadWithRemoteComponent: Registering remote component', name);
        console.log('Schema:', schema);
        register.registerRemoteComponent({
          name,
          schema,
          type: "component",
          properties: {},
        });
      }
      }, [name, schema, register]);

    const Target = target;
    return <Target />;
}

export default LoadWithRemoteComponent;