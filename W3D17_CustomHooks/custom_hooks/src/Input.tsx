
import  useID from './useID';

export default function Input({ id }: { id?: string }) {
  const uuid = useID(id || '');
  // console.log("input is re-rendering" + uuid);
  return (
    <>
      <label htmlFor={uuid}>Input ID: {uuid}</label>
      <input type="text" id={uuid} />
    </>
  );
}

// // input and label will have id 'my-id'
// const withId = <Input id="my-id" />;

// // input and label will have random id 'mantine-fZMoF'
// const withoutId = <Input />;