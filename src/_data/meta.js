export const url = process.env.URL || 'http://localhost:8080';
// Extract domain from `url`
export const domain = new URL(url).hostname;
export const siteName = 'Cornstruct';
export const siteDescription =
  'Product designer. Science nerd, mediocre developer, average baker, and rogue teacher.';
export const siteType = 'Person'; // schema
export const locale = 'en_EN';
export const lang = 'en';
export const skipContent = 'Skip to content';
export const author = {
  name: 'Lee Wei', // page / blog author's name. Must be set.
  avatar: '/icon-512x512.png', // path to the author's avatar. In this case just using a favicon.
  email: 'leewei@live.com.sg',
  website: 'https://www.cornstruct.com'
};
export const creator = {
  name: 'Lee Wei', // creator's (developer) name.
  email: 'leewei@live.com.sg  ',
  website: 'https://www.cornstruct.com'
};
export const pathToSvgLogo = 'src/assets/svg/misc/logo.svg'; // used for favicon generation
export const themeColor = '#ffbb44'; // used in manifest, for example primary color value
export const themeLight = '#f8f8f8'; // used for meta tag theme-color, if light colors are prefered. best use value set for light bg
export const themeDark = '#2e2e2e'; // used for meta tag theme-color, if dark colors are prefered. best use value set for dark bg
export const opengraph_default =
  '/assets/images/template/opengraph-default.jpg'; // fallback/default meta image
export const opengraph_default_alt =
  'Product designer. Science nerd, mediocre developer, average baker, and rogue teacher.'; // alt text for default meta image"
export const blog = {
  // RSS feed
  name: 'Cornstruct',
  description:
    '"Product designer. Science nerd, mediocre developer, average baker, and rogue teacher.',
  // feed links are looped over in the head. You may add more to the array.
  feedLinks: [
    {
      title: 'Atom Feed',
      url: '/feed.xml',
      type: 'application/atom+xml'
    },
    {
      title: 'JSON Feed',
      url: '/feed.json',
      type: 'application/json'
    }
  ],
  // Tags
  tagSingle: 'Tag',
  tagPlural: 'Tags',
  tagMore: 'More tags:',
  // pagination
  paginationLabel: 'Blog',
  paginationPage: 'Page',
  paginationPrevious: 'Previous',
  paginationNext: 'Next',
  paginationNumbers: true
};
export const details = {
  aria: 'section controls',
  expand: 'expand all',
  collapse: 'collapse all'
};
export const dialog = {
  close: 'Close',
  next: 'Next',
  previous: 'Previous'
};
export const navigation = {
  navLabel: 'Menu',
  ariaTop: 'Main',
  ariaBottom: 'Complementary',
  ariaPlatforms: 'Platforms',
  drawerNav: false,
  subMenu: false
};
export const themeSwitch = {
  title: 'Theme',
  light: 'light',
  dark: 'dark'
};
export const greenweb = {
  // https://carbontxt.org/
  disclosures: [
    {
      docType: 'sustainability-page',
      url: `${url}/sustainability/`,
      domain: domain
    }
  ],
  services: [{domain: 'netlify.com', serviceType: 'cdn'}]
};
export const viewRepo = {
  // this is for the view/edit on github link. The value in the package.json will be pulled in.
  allow: true,
  infoText: 'View this page on GitHub'
};
export const easteregg = true;
