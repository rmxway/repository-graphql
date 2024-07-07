import { forwardRef, InputHTMLAttributes } from 'react';

import { InputWrapper } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// add props
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ id, ...props }, ref) => (
		<InputWrapper htmlFor={id}>
			<input ref={ref} id={id} {...props} />
		</InputWrapper>
	),
);
export default Input;
