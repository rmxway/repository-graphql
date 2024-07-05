import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { ButtonUI, ButtonUIProps } from './styled';

type ButtonProps = ButtonHTMLAttributes<
	HTMLButtonElement & PropsWithChildren> & ButtonUIProps;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
	<ButtonUI {...props}>{children}</ButtonUI>
);
export default Button;
