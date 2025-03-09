import React from 'react';

import Image from 'next/image';

type Props = {
  width: number;
  height: number;
  icon: 'facebook' | 'twitter' | 'github' | 'instagram';
};

const ICONS_PATH = '/icons/';

export default function Icon({ icon, ...props }: Props) {
  return (
    <Image priority src={`${ICONS_PATH}${icon}.svg`} {...props} alt={icon} />
  );
}
