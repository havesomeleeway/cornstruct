import plugin from 'tailwindcss/plugin';
import postcss from 'postcss';
import postcssJs from 'postcss-js';

import clampGenerator from './public/css-utils/clamp-generator.js';
import tokensToTailwind from './public/css-utils/tokens-to-tailwind.js';

// Raw design tokens
import colorTokens from './public/design-tokens/colors.json' assert { type: 'json' };
import fontTokens from './public/design-tokens/fonts.json' assert { type: 'json' };
import spacingTokens from './public/design-tokens/spacing.json' assert { type: 'json' };
import textSizeTokens from './public/design-tokens/text-sizes.json' assert { type: 'json' };
import textLeadingTokens from './public/design-tokens/text-leading.json' assert { type: 'json' };
import textWeightTokens from './public/design-tokens/text-weights.json' assert { type: 'json' };
import viewportTokens from './public/design-tokens/viewports.json' assert { type: 'json' };

// Process design tokens
const colors = tokensToTailwind(colorTokens.items);
console.log('\n=== DESIGN TOKEN PROCESSING ===');
console.log('Raw color tokens:', colorTokens.items);
console.log('Processed colors:', colors);
console.log('===============================\n');

const fontFamily = tokensToTailwind(fontTokens.items);
const fontWeight = tokensToTailwind(textWeightTokens.items);
const fontSize = tokensToTailwind(clampGenerator(textSizeTokens.items));
const fontLeading = tokensToTailwind(textLeadingTokens.items);
const spacing = tokensToTailwind(clampGenerator(spacingTokens.items));

export default {
  content: [
    './public/**/*.{html,js,jsx,mdx,njk,twig,vue,json}',
    './_includes/**/*.{html,js,jsx,mdx,njk,twig,vue,json}',
    './content/**/*.{html,js,jsx,mdx,njk,twig,vue,json}',
    './_config/**/*.{html,js,jsx,mdx,njk,twig,vue,json}'
  ],
  // Add color classes to safe list so they are always generated
  safelist: [],
  presets: [],
  theme: {
    screens: {
      sm: `${viewportTokens.min}px`,
      md: `${viewportTokens.mid}px`,
      lg: `${viewportTokens.large}px`,
      xl: `${viewportTokens.max}px`
    },
    colors,
    spacing,
    fontSize,
    fontLeading,
    fontFamily,
    fontWeight,
    backgroundColor: ({theme}) => theme('colors'),
    textColor: ({theme}) => theme('colors'),
    margin: ({theme}) => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    padding: ({theme}) => theme('spacing')
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],

  // Disables Tailwind's reset and usage of rgb/opacity
  corePlugins: {
    preflight: false,
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false
  },

  // Prevents Tailwind's core components
  blocklist: ['container'],

  // Prevents Tailwind from generating that wall of empty custom properties
  experimental: {
    optimizeUniversalDefaults: true
  },

  plugins: [
    // Generates custom property values from tailwind config
    plugin(function ({addComponents, config}) {
      let result = '';

      const currentConfig = config();

      const groups = [
        {key: 'colors', prefix: 'color'},
        {key: 'spacing', prefix: 'space'},
        {key: 'fontSize', prefix: 'size'},
        {key: 'fontLeading', prefix: 'leading'},
        {key: 'fontFamily', prefix: 'font'},
        {key: 'fontWeight', prefix: 'font'}
      ];

      groups.forEach(({key, prefix}) => {
        const group = currentConfig.theme[key];
        console.log(`\n=== Processing ${key.toUpperCase()} Group ===`);
        console.log('Group contents:', group);

        if (!group) {
          console.log(`No ${key} group found!`);
          return;
        }

        Object.keys(group).forEach(key => {
          console.log(`Creating CSS variable: --${prefix}-${key}: ${group[key]}`);
          result += `--${prefix}-${key}: ${group[key]};`;
        });
        console.log('=====================================\n');
      });

      addComponents({
        ':root': postcssJs.objectify(postcss.parse(result))
      });
    }),

    // Generates custom utility classes
    plugin(function ({addUtilities, config}) {
      const currentConfig = config();
      const customUtilities = [
        {key: 'spacing', prefix: 'flow-space', property: '--flow-space'},
        {key: 'spacing', prefix: 'region-space', property: '--region-space'},
        {key: 'spacing', prefix: 'gutter', property: '--gutter'},
        {key: 'colors', prefix: 'indent-color', property: '--indent-color'}
      ];

      customUtilities.forEach(({key, prefix, property}) => {
        const group = currentConfig.theme[key];

        if (!group) {
          return;
        }

        Object.keys(group).forEach(key => {
          addUtilities({
            [`.${prefix}-${key}`]: postcssJs.objectify(
              postcss.parse(`${property}: ${group[key]}`)
            )
          });
        });
      });
    })
  ]
};
