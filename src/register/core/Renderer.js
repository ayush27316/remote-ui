import { normalisePrimitives } from './Wrapper';
import RegisterProvider from './RegisterProvider';
import Wrapper from './Wrapper'
const Renderer = ({ model }) => {

  const schemaObject = JSON.parse(model);
  const props = normalisePrimitives(schemaObject, null);

  return (
    <RegisterProvider>
      <Wrapper props={props} />
    </RegisterProvider>
  );
};

export default Renderer;
