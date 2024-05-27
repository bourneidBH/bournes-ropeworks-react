import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  buttonType: 'button' | 'link',
  buttonText: string,
  linkUrl?: string,
  onClick?: () => void,
  classNames?: string,
  children?: ReactNode,
}

const Button = ({ buttonType, buttonText, linkUrl, onClick, classNames, children }: ButtonProps) => {
  const btnClasses = `btn ${classNames ? classNames : ''}`
  return buttonType === 'button' 
    ? 
      <button className={btnClasses} onClick={onClick}>{children? children : buttonText}</button>
    : 
      linkUrl && linkUrl.includes('http') 
      ? <a href={linkUrl} target="_blank" rel="noopener" className={btnClasses}>{buttonText}</a>
      : <NavLink to={linkUrl ? linkUrl : "#"} className={btnClasses}>{children? children : buttonText}</NavLink>
}

export default Button