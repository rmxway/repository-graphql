import { FC, InputHTMLAttributes } from 'react';

import { InputWrapper } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// add props
}

export const Input: FC<InputProps> = ({ id,...props }) => (
	<InputWrapper htmlFor={id}>
		<input id={id} {...props} />
	</InputWrapper>
);
export default Input;
