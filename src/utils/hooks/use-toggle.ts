import { useState } from 'react';

export default function useToggle(initial: boolean): [boolean, () => void] {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = () => {
    setValue(!value);
  };
  return [value, toggle];
}
