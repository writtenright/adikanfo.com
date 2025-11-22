import Link from 'next/link'
import SEO from '../../components/SEO'

const posts = [
  {title:'How Cocoa Buying Works', slug:'how-cocoa-buying-works', excerpt:'A short guide on our procurement process.'},
  {title:'Sustainability at Adikanfo', slug:'sustainability-at-adikanfo', excerpt:'Our commitment to farmer welfare and the environment.'},
  {title:'Farmer Success Story: Kwame', slug:'kwame-success-story', excerpt:'How partnership helped improve yields and income.'}
]

export default function Blog(){
  return (
    <>
      <SEO title="Blog" />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">Blog</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {posts.map(p=>(
            <article key={p.slug} className="p-4 border rounded">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm mt-2">{p.excerpt}</p>
              <div className="mt-3"><Link href={'/blog/'+p.slug}
               className="text-cocoa"> Read more → </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
