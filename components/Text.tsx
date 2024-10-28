import React from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import { Colors, fontSizes } from '@/constants';

interface Props {
    value: string;
    color?: string;
    style?: TextStyle | ViewStyle | Array<ViewStyle | TextStyle> | Array<TextStyle | undefined>;
    small?: boolean;
    caption?: boolean;
    button?: boolean;
    body?: boolean;
    title?: boolean;
    h3?: boolean;
    h2?: boolean;
    h1?: boolean;
    mega?: boolean;
    primary?: boolean;
    secondary?: boolean;
    customFontSize?: number;
    customLineHeight?: number;
}

const TextComponent: React.FC<Props> = ({
    value,
    color,
    style,
    small,
    caption,
    button,
    body,
    title,
    h3,
    h2,
    h1,
    mega,
    primary,
    secondary,
    customFontSize,
    customLineHeight
}) => {
    const stylesArray: Array<TextStyle | undefined> = [
        { fontSize: fontSizes.body, color: color || Colors.text.primary },
    ];

    if (color) stylesArray.push({ color });

    if (small) stylesArray.push({ fontSize: fontSizes.small });
    if (caption) stylesArray.push({ fontSize: fontSizes.caption });
    if (button) stylesArray.push({ fontSize: fontSizes.button });
    if (body) stylesArray.push({ fontSize: fontSizes.body });
    if (title) stylesArray.push({ fontSize: fontSizes.title });
    if (h3) stylesArray.push({ fontSize: fontSizes.h3 });
    if (h2) stylesArray.push({ fontSize: fontSizes.h2 });
    if (h1) stylesArray.push({ fontSize: fontSizes.h1 });
    if (mega) stylesArray.push({ fontSize: fontSizes.mega });

    if (primary) stylesArray.push({ color: Colors.text.primary });
    if (secondary) stylesArray.push({ color: Colors.text.secondary });

    if (customFontSize) stylesArray.push({ fontSize: customFontSize });
    if (customLineHeight) stylesArray.push({ lineHeight: customLineHeight });

    return (
        <Text style={[...stylesArray, style]}>
            {value}
        </Text>
    );
};

export default TextComponent;