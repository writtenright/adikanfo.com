import Head from 'next/head';
export default function SEO({title, description}:{title?:string, description?:string}){
  const base = "Adikanfo Commodities";
  return (
    <Head>
      <title>{title ? `${title} | ${base}` : base}</title>
      <meta name="description" content={description || "Licensed cocoa buying company in Ghana"} />
      <meta property="og:title" content={title || base} />
      <meta property="og:description" content={description || "Licensed cocoa buying company in Ghana"} />
    </Head>
  );
}
