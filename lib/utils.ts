import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const translateDirection = (direction: number) => {
  switch (direction) {
    case 0:
      return 'North';
    case 90:
      return 'East';
    case 180:
      return 'South';
    case 270:
      return 'West;';
  }
};
