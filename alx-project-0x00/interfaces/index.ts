export interface PillProps {
  title: string
  className?: string
}

export interface ButtonProps {
  title: string;
  styles: string;
  className?: string;
  onClick?: () => void;
  size?: 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-full';
}

