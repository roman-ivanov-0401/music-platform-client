export interface InputProps {
  label?: string;
  password?: boolean;
  placeholder?: string;
  className?: string;
  width?: string;
  error?: {
    type: string;
    message: string;
    ref: Element;
  };
  [x: string]: any;
}
