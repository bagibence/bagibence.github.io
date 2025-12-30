export const profile = {
  fullName: 'Bence Bagi',
  title: '',
  institute: '',
  author_name: 'Bagi', // Author name to be highlighted in the papers section
  research_areas: [
    // { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
  ],
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: '',
  linkedin: 'https://www.linkedin.com/in/bence-bagi-99b495257',
  x: '',
  bluesky: '',
  github: 'https://github.com/bagibence',
  gitlab: '',
  scholar: 'https://scholar.google.com/citations?user=k5XkYVsAAAAJ&hl=en',
  inspire: '',
  arxiv: '',
  orcid: '',
};

export const template = {
  website_url: 'https://www.bencebagi.com', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
  darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
  excerptLength: 200,
  postPerPage: 5,
  base: '', // Repository name starting with /
};

export const seo = {
  default_title: 'Bence Bagi',
  default_description:
    'Research software engineer and computational neuroscientist',
  default_image: '/images/astro-academia.png',
};
