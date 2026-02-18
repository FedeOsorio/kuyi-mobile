import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { useFontScale } from '@/hooks/useFontScale';

type StyledTextProps = TextProps & {
  variant?: 'default' | 'title' | 'subtitle' | 'caption';
  children: React.ReactNode;
};

export function StyledText({ variant = 'default', style, children, ...props }: StyledTextProps) {
  const fontScale = useFontScale();
  const getFontSize = () => {
    switch (variant) {
      case 'title':
        return 22 / fontScale;
      case 'subtitle':
        return 18 / fontScale;
      case 'caption':
        return 10 / fontScale;
      default:
        return 14 / fontScale;
    }
  };

  const textStyle = styles[variant];

  return (
    <Text style={[textStyle, { fontSize: getFontSize() }, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Poppins_400Regular',
    color: '#451a03',
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#78350f',
  },
  subtitle: {
    fontFamily: 'Poppins_500Medium',
    color: '#78350f',
  },
  caption: {
    fontFamily: 'Poppins_400Regular',
    color: '#6b7280',
  },
});
