import { useState } from 'react';

export default function useToggle(defaultValue) {
  const [toggle, setToggle] = useState(defaultValue || false);

  return {
    toggle,
    onToggle: () => setToggle(!toggle),
    onOpen: () => setToggle(true),
    onClose: () => setToggle(false),
    setToggle,
  };
}
