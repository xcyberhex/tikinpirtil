import { Tokenportal } from '@/components/tokenportal'

const pages: Record<string, string> = {
  overview: 'Overview',
  models: 'Models',
  pricing: 'Pricing',
  playground: 'Playground',
  apikeys: 'API keys',
  usage: 'Usage',
}

export default async function PortalRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  return <Tokenportal page={pages[slug.join('/').toLowerCase()] ?? 'Overview'} />
}
