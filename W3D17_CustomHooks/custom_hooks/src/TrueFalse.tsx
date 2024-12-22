
import  useDisclosure  from './useDisclosure';

export default function TrueFalse() {
  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => console.log('Opened'),
    onClose: () => console.log('Closed'),
  });



  return <div>
    <label>The flag is: {opened? 'True': 'False'}</label>
    <button onClick={handlers.open}>open</button>
    <button onClick={handlers.close}>close</button>
    <button onClick={handlers.toggle}>toggle</button>
  </div>
}