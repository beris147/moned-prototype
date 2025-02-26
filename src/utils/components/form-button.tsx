import React from 'react';

type Props = {
  label: string;
  onClick?: () => void | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
};

export default function FormButton({ label, onClick, type }: Props) {
  return (
    <button onClick={onClick} type={type}>
      {label}
    </button>
  );
}
