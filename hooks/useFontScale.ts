import { useState, useEffect } from 'react';
import { PixelRatio, AccessibilityInfo, AppState } from 'react-native';

export function useFontScale() {
  const [fontScale, setFontScale] = useState(() => PixelRatio.getFontScale());

  useEffect(() => {
    const refresh = () => setFontScale(PixelRatio.getFontScale());

    const boldSub = AccessibilityInfo.addEventListener('boldTextChanged', refresh);
    const motionSub = AccessibilityInfo.addEventListener('reduceMotionChanged', refresh);

    const appStateSub = AppState.addEventListener('change', (state) => {
      if (state === 'active') refresh();
    });

    return () => {
      boldSub.remove();
      motionSub.remove();
      appStateSub.remove();
    };
  }, []);

  return fontScale;
}
