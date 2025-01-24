import Head from 'next/head';
import type { TypeMetaTagsProps } from '../@types';

const MetaTags = (props: TypeMetaTagsProps) => {
  const { title, description, url, image, children } = props;
  const fullUrl = url
    ? process.env.NEXT_PUBLIC_BASE_URL + url
    : process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <Head>
      <title>{title}</title>

      {description && (
        <meta name="description" content={description} />
      )}

      {children}
    </Head>
  );
};

export default MetaTags;
