import React from 'react'
import { ButtonProps } from '@/interfaces'

const base = 'inline-flex items-center justify-center font-medium transition-colors '
const sizeMap: Record<string, string> = {
  small: 'px-3 py-1 text-sm rounded-sm',
  medium: 'px-4 py-2 text-base rounded-md',
  large: 'px-6 py-3 text-lg rounded-full'
}

const Button: React.FC<ButtonProps> = ({ title, className, onClick, size = 'medium' }) => {
  const sizeClass = sizeMap[size] || sizeMap.medium
  return (
    <button onClick={onClick} className={`${base} ${sizeClass} ${className}`}>
      {title}
    </button>
  )
}
export default Button