'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Copy,
  Gauge,
  KeyRound,
  Layers3,
  Menu,
  Moon,
  MoreHorizontal,
  PanelLeft,
  Play,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Sun,
  Zap,
} from 'lucide-react'

const models = [
  { name: 'Orca Nova 70B', provider: 'Orca', context: '128K', input: '$0.90', output: '$3.60', tags: ['Reasoning', 'Tools'], status: 'Popular', color: 'coral' },
  { name: 'Llama 4 Maverick', provider: 'Meta', context: '1M', input: '$0.18', output: '$0.59', tags: ['Vision', 'Tools'], status: 'Fast', color: 'green' },
  { name: 'DeepSeek V3', provider: 'DeepSeek', context: '128K', input: '$0.14', output: '$0.28', tags: ['Reasoning', 'JSON'], status: 'Popular', color: 'lavender' },
  { name: 'Qwen 3 32B', provider: 'Qwen', context: '32K', input: '$0.20', output: '$0.60', tags: ['Reasoning', 'Tools'], status: 'New', color: 'sand' },
  { name: 'GPT-4.1 Mini', provider: 'OpenAI', context: '1M', input: '$0.40', output: '$1.60', tags: ['Vision', 'JSON'], status: 'Fast', color: 'blue' },
  { name: 'Claude 3.7 Sonnet', provider: 'Anthropic', context: '200K', input: '$3.00', output: '$15.00', tags: ['Reasoning', 'Tools'], status: 'Premium', color: 'rose' },
]

const navItems = [
  { label: 'Overview', icon: Gauge },
  { label: 'Models', icon: Layers3 },
  { label: 'Playground', icon: Play },
  { label: 'API keys', icon: KeyRound },
  { label: 'Usage', icon: BarChart3 },
  { label: 'Activity', icon: Activity },
]

function Logo() {
  return <div className="flex items-center gap-2 text-[19px] font-semibold tracking-[-0.04em]"><span className="logo-mark" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>token<span className="text-[#e45a38]">portal</span></div>
}

function MiniChart({ tone = 'orange' }: { tone?: 'orange' | 'green' }) {
  return <svg className="h-10 w-full" viewBox="0 0 180 42" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34 L18 29 L30 32 L45 17 L60 28 L77 23 L91 30 L111 12 L128 29 L146 25 L160 31 L180 19" fill="none" stroke={tone === 'green' ? '#2e9c68' : '#e45a38'} strokeWidth="2" /><path d="M0 34 L18 29 L30 32 L45 17 L60 28 L77 23 L91 30 L111 12 L128 29 L146 25 L160 31 L180 19 V42 H0Z" fill={tone === 'green' ? '#dff2e7' : '#fae4dc'} /></svg>
}

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [query, setQuery] = useState('')
  const [isDark, setIsDark] = useState(false)
  const filteredModels = useMemo(() => models.filter((model) => model.name.toLowerCase().includes(query.toLowerCase()) || model.provider.toLowerCase().includes(query.toLowerCase())), [query])

  return <div className={isDark ? 'dark min-h-screen bg-[#10221e]' : 'min-h-screen bg-[#f7f4ed]'}>
    <div className="top-banner">tokenportal Cloud <span>—</span> powered by intelligent routing <u>Learn more</u></div>
    <header className="sticky top-0 z-20 border-b border-[#e4e0d7] bg-[#fbfaf6]/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
        <div className="flex items-center gap-9"><Logo /><nav className="hidden items-center gap-6 text-[13px] text-[#7c837f] md:flex">{['Models', 'Pricing', 'Performance', 'Docs'].map((item) => <button key={item} className="transition hover:text-[#13211d]">{item}</button>)}</nav></div>
        <div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-lg border border-[#e3dfd6] bg-white px-3 py-2 text-[12px] font-medium text-[#37443e] sm:flex"><Zap className="size-3.5 text-[#e45a38]" /> 0.00 kWh</div><button onClick={() => setIsDark(!isDark)} className="grid size-9 place-items-center rounded-lg border border-[#e3dfd6] bg-white text-[#64706a]" aria-label="Toggle theme">{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}</button><span className="hidden text-[12px] text-[#7c837f] lg:block">docs.tokenportal.dev</span><button className="hidden items-center gap-2 rounded-lg border border-[#dcd8ce] bg-white px-3 py-2 text-[12px] font-semibold sm:flex"><span className="grid size-5 place-items-center rounded-md bg-[#e45a38] text-[10px] text-white">A</span> Akmal <ChevronDown className="size-3" /></button><button className="grid size-9 place-items-center rounded-lg border border-[#e3dfd6] bg-white md:hidden" aria-label="Open menu"><Menu className="size-4" /></button></div>
      </div>
    </header>
    <div className="mx-auto flex max-w-[1320px] gap-7 px-5 py-7 lg:px-8">
      <aside className="hidden w-[220px] shrink-0 md:block"><div className="sticky top-28"><div className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9aa19c]">Workspace</div><div className="flex flex-col gap-1">{navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => setActive(label)} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] font-medium transition ${active === label ? 'bg-[#e7eee9] text-[#173a2e]' : 'text-[#717b75] hover:bg-[#eeece5]'}`}><Icon className="size-4" />{label}{label === 'API keys' && <span className="ml-auto rounded-full bg-[#e45a38] px-1.5 py-0.5 text-[10px] text-white">3</span>}</button>)}</div><div className="my-6 h-px bg-[#e4e0d7]" /><div className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#9aa19c]">Manage</div><button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] text-[#717b75] hover:bg-[#eeece5]"><Settings2 className="size-4" />Settings</button><button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[13px] text-[#717b75] hover:bg-[#eeece5]"><CircleHelp className="size-4" />Help center</button></div></aside>
      <main className="min-w-0 flex-1"><div className="mb-7 flex items-end justify-between gap-4"><div><p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e45a38]">{active === 'Overview' ? 'Workspace overview' : active}</p><h1 className="text-[30px] font-semibold tracking-[-0.04em] text-[#13211d]">Good morning, Akmal.</h1><p className="mt-1 text-[13px] text-[#89928d]">Your AI routing activity at a glance.</p></div><button className="hidden items-center gap-2 rounded-lg bg-[#e45a38] px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#c94c2d] sm:flex"><Plus className="size-4" /> Create API key</button></div>
        <section className="mb-6 rounded-xl border border-[#e6d3cb] bg-[#fff7f3] p-4"><div className="flex items-start gap-3"><div className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f9d9ce] text-[#e45a38]"><ShieldCheck className="size-4" /></div><div className="flex-1"><p className="text-[13px] font-semibold text-[#7d3727]">Your workspace is ready to route.</p><p className="mt-1 text-[12px] text-[#956e65]">Add your first API key to start sending requests through the best model for every task.</p></div><button className="hidden text-[12px] font-semibold text-[#d05234] sm:block">Get started <ArrowUpRight className="ml-1 inline size-3" /></button></div></section>
        <section className="mb-6 rounded-xl border border-[#dedbd2] bg-white p-5 shadow-[0_2px_8px_rgba(23,38,30,0.03)]"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-[16px] font-semibold text-[#13211d]">Credit balance</h2><p className="mt-1 text-[12px] text-[#9aa19c]">Your shared balance across all routes</p></div><button className="text-[12px] font-semibold text-[#d05234]">Manage credits <ArrowUpRight className="ml-1 inline size-3" /></button></div><div className="grid gap-4 rounded-lg bg-[#f4f1e9] p-4 sm:grid-cols-[1.5fr_1fr_1fr]"><div><span className="text-[11px] text-[#799280]">Available balance</span><strong className="mt-1 block text-[28px] font-semibold tracking-[-0.05em] text-[#1d7650]">$24.80</strong></div><div><span className="text-[11px] text-[#799280]">This month</span><strong className="mt-1 block text-[18px] font-semibold text-[#173a2e]">$8.42</strong></div><div><span className="text-[11px] text-[#799280]">Auto top-up</span><strong className="mt-1 block text-[18px] font-semibold text-[#173a2e]">Off</strong></div></div></section>
        <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{[['REQUESTS', '12,482', '+18.4%', 'orange'], ['TOKENS', '2.84B', '+24.1%', 'green'], ['SPEND', '$8.42', '+12.8%', 'orange'], ['AVG. LATENCY', '438ms', '-8.2%', 'green']].map(([label, value, change, tone]) => <div key={label} className="rounded-xl border border-[#e1ded6] bg-white p-4"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold tracking-[0.12em] text-[#9aa19c]">{label}</span><span className={`text-[11px] font-medium ${tone === 'green' ? 'text-[#299463]' : 'text-[#d05234]'}`}>{change}</span></div><strong className="mt-2 block text-[25px] font-semibold tracking-[-0.04em] text-[#13211d]">{value}</strong><div className="mt-2"><MiniChart tone={tone === 'green' ? 'green' : 'orange'} /></div></div>)}</section>
        <section className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e45a38]">Model catalog</p><h2 className="text-[23px] font-semibold tracking-[-0.04em] text-[#13211d]">Route to the right model</h2><p className="mt-1 text-[13px] text-[#89928d]">Compare capabilities, context windows, and live pricing.</p></div><div className="flex gap-2"><label className="flex min-w-0 items-center gap-2 rounded-lg border border-[#dedbd2] bg-white px-3 py-2 text-[#9aa19c] sm:w-64"><Search className="size-4" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search models..." className="min-w-0 bg-transparent text-[12px] text-[#13211d] outline-none placeholder:text-[#a8ada8]" /></label><button className="hidden rounded-lg border border-[#dedbd2] bg-white px-3 text-[12px] text-[#5f6963] sm:block">Popular <ChevronDown className="ml-1 inline size-3" /></button></div></section>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">{filteredModels.map((model) => <article key={model.name} className="group rounded-xl border border-[#dedbd2] bg-white p-4 shadow-[0_2px_8px_rgba(23,38,30,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(23,38,30,0.08)]"><div className="flex items-start justify-between"><div><h3 className="text-[14px] font-semibold text-[#13211d]">{model.name}</h3><p className="mt-0.5 text-[11px] text-[#9aa19c]">{model.provider}</p></div><button className="text-[#a3aaa5]" aria-label={`More options for ${model.name}`}><MoreHorizontal className="size-4" /></button></div><div className="mt-4 grid grid-cols-3 gap-2"><div className="rounded-lg bg-[#f3f0e8] p-2"><span className="block text-[9px] uppercase tracking-wide text-[#9aa19c]">Context</span><strong className="mt-1 block text-[14px] text-[#26352e]">{model.context}</strong></div><div className="rounded-lg bg-[#f3f0e8] p-2"><span className="block text-[9px] uppercase tracking-wide text-[#9aa19c]">Input / M</span><strong className="mt-1 block text-[14px] text-[#26352e]">{model.input}</strong></div><div className={`rounded-lg p-2 ${model.color === 'green' ? 'bg-[#e3f2e8]' : 'bg-[#fbe7df]'}`}><span className="block text-[9px] uppercase tracking-wide text-[#9aa19c]">Output / M</span><strong className="mt-1 block text-[14px] text-[#26352e]">{model.output}</strong></div></div><div className="mt-3 flex flex-wrap gap-1.5">{model.tags.map((tag) => <span key={tag} className="rounded bg-[#f4eee9] px-1.5 py-0.5 text-[9px] text-[#a25d4b]">{tag}</span>)}<span className="rounded bg-[#edf0ec] px-1.5 py-0.5 text-[9px] text-[#75827a]">{model.status}</span></div><div className="mt-4 flex items-center justify-between border-t border-[#efede8] pt-3"><span className="text-[10px] text-[#9aa19c]">{model.name.toLowerCase().replaceAll(' ', '-')}</span><button className="rounded-md bg-[#e45a38] px-3 py-1.5 text-[11px] font-semibold text-white transition hover:bg-[#c94c2d]">Try in playground</button></div></article>)}</div>
        {filteredModels.length === 0 && <div className="rounded-xl border border-dashed border-[#d9d5ca] bg-white p-10 text-center text-sm text-[#89928d]">No models match your search.</div>}
        <section className="mt-8 rounded-xl border border-[#dedbd2] bg-[#122822] p-6 text-white sm:p-8"><div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center"><div><div className="mb-2 flex items-center gap-2 text-[#f0a48e]"><Sparkles className="size-4" /> <span className="text-[11px] font-semibold uppercase tracking-[0.15em]">Built for builders</span></div><h2 className="text-[22px] font-semibold tracking-[-0.04em]">One API. Every model.</h2><p className="mt-2 max-w-lg text-[13px] leading-6 text-[#b5c1ba]">Tokenportal automatically routes requests to the best available model while keeping your code, billing, and observability in one place.</p></div><button className="shrink-0 rounded-lg bg-[#e45a38] px-4 py-2.5 text-[12px] font-semibold text-white">Read the docs <ArrowUpRight className="ml-1 inline size-3" /></button></div></section>
      </main>
    </div>
    <footer className="mt-10 border-t border-[#172f27] bg-[#0b211c] text-[#afbeb6]"><div className="mx-auto max-w-[1320px] px-5 py-10 lg:px-8"><div className="grid gap-8 sm:grid-cols-[1.6fr_1fr_1fr_1fr]" ><div><Logo /><p className="mt-3 max-w-[240px] text-[12px] leading-5 text-[#7f978c]">The intelligent gateway for modern AI applications.</p></div>{[['Product', 'Models', 'Playground', 'Pricing'], ['Resources', 'Documentation', 'API reference', 'Status'], ['Company', 'About', 'Contact', 'Security']].map(([heading, ...links]) => <div key={heading}><h3 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white">{heading}</h3><div className="flex flex-col gap-2 text-[12px]">{links.map((link) => <a href="#" key={link} className="hover:text-white">{link}</a>)}</div></div>)}</div><div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#24443a] pt-5 text-[11px] text-[#718a7f] sm:flex-row"><span>© 2026 Tokenportal Inc. All rights reserved.</span><span>tokenportal.dev <ArrowUpRight className="ml-1 inline size-3" /></span></div></div></footer>
  </div>
}
