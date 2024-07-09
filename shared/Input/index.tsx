import { forwardRef, InputHTMLAttributes } from 'react';

import { InputWrapper } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	isFilled?: boolean;
	clear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ id, isFilled, clear, ...props }, ref) => (
		<InputWrapper htmlFor={id}>
			{isFilled && <span onClick={clear}>&times;</span>}
			<input {...{ ref, id }} {...props} autoComplete="off" />
		</InputWrapper>
	),
);
export default Input;
