export const getGlobalData = () => {
  const name = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Jay Doe';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Next.js Blog Theme';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.HOT_PRO)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
