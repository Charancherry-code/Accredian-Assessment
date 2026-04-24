interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-primary-500 text-white hover:bg-primary-400',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    white: 'bg-white text-primary-600 hover:bg-primary-50',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
