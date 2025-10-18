export interface PillProps {
  title: string
  className?: string
}

export interface ButtonProps {
  title: string;
  styles: string;
  className?: string;
  onClick?: () => void;
    size?: 'small' | 'medium' | 'large';
}

