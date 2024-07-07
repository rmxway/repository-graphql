import { FC } from 'react';

import icons from '@/src/assets/fonts/icofont/icofont.json';
import { colors } from '@/src/theme/defaultTheme';

interface IconProps {
	icon: keyof typeof icons;
	color?: keyof Omit<typeof colors, 'gray'>;
	size?: number;
}

/**
 *
 * @param icon {string} - The name of the icon
 * @param size {number} - The size of the icon in pixels
 * @example <Icon size={20} icon="star" />
 * @returns
 */

export const Icon: FC<IconProps> = ({ icon, size, color }) => (
	<i
		className={`icofont icofont-${icon}`}
		style={{ fontSize: `${size}px`, color: color ? colors[color] : '#222' }}
	/>
);
export default Icon;
