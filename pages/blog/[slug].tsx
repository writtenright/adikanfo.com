import { useRouter } from 'next/router'
import SEO from '../../components/SEO'

const CONTENT: Record<string,any> = {
  'how-cocoa-buying-works': {title:'How Cocoa Buying Works', body:'<p>Our procurement process is transparent. Farmers register, deliver to collection points, undergo grading, and receive payment.</p>'},
  'sustainability-at-adikanfo': {title:'Sustainability at Adikanfo', body:'<p>We invest in farmer welfare and environmental responsibility.</p>'},
  'kwame-success-story': {title:'Farmer Success Story: Kwame', body:'<p>Kwame increased yield after partnering with Adikanfo.</p>'}
}

export default function Post(){
  const r = useRouter()
  const slug = r.query.slug as string
  const post = slug && CONTENT[slug] ? CONTENT[slug] : null
  if(!post) return <div className="max-w-4xl mx-auto px-6 py-12">Post not found</div>
  return (
    <>
      <SEO title={post.title} />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{__html: post.body}} />
      </div>
    </>
  );
}
