import '../build/css/tokens.css';
import '../build/css/tokens.dark.css';
import '../build/css/tokens.weighteasy-light.css';

export const parameters = { layout: 'fullscreen' };

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Semantic color theme',
    defaultValue: 'weighteasy-light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'weighteasy-light', title: 'WeightEasy Light' },
      ],
      dynamicTitle: true,
    },
  },
};

const withTheme = (Story, context) => {
  if (typeof document !== 'undefined') {
    const t = context.globals.theme;
    document.documentElement.setAttribute('data-theme', t === 'light' ? '' : t);
    // Also set on body so style selectors on either element resolve vars.
    document.body.setAttribute('data-theme', t === 'light' ? '' : t);
  }
  return Story();
};

export const decorators = [withTheme];
