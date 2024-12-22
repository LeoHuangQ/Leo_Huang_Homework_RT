import {  useRef, useState } from "react";

export default function useDisclosure(
  flag: boolean,
  callback?: { onOpen?: () => void; onClose?: () => void }
) {
  const [opened, setOpened] = useState(flag);
  const openNot = useRef(flag);

  const open = () => {
    if (!openNot.current) {
      openNot.current = true;
      setOpened(true);
      callback?.onOpen?.();
    }
  };
  const close = () => {
    if (openNot.current) {
      openNot.current = false;
      setOpened(false);
      callback?.onClose?.();
    }
  };
  const toggle = () => {
    if (openNot.current) {
      close();
    } else {
      open();
    }
    // setOpened(opened ? false : true);
  };
  const handlers = {
    open,
    close,
    toggle,
  };

  return [opened, handlers];
}
