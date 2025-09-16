import useRegister from "../register/hooks/useRegister";

const LoadWithRemoteComponent = ({name, schema, target})=>{

    const register = useRegister();

    useMemo(() => {
        register.registerComponent({
          name,
          schema,
          type: "component",
          properties: {},
        });
      }, [name, schema, register]);

    return <target/>;
}

export default LoadWithRemoteComponent;