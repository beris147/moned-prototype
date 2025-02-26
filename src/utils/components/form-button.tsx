import React from 'react';

type Props = {
  label: string;
  onClick?: () => void | undefined;
  type?: 'submit' | 'reset' | 'button' | undefined;
  disabled?: boolean | undefined;
};

export default function FormButton({ label, onClick, type, disabled }: Props) {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {label}
    </button>
  );
}
