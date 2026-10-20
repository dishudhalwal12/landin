import type { FC, ReactNode } from 'react'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/generals/reveal'
import { CountUp } from '@/components/generals/count-up'
import { SectionBadge } from '@/components/landing/section-badge'
import { dashboardCopy } from '@/constants/copy'

const RANGES = {
    today: {
        label: 'Today',
        sales: 8420,
        orders: 46,
        average: 183,
        repeat: 38,
        delta: '+12%',
        chart: 'Sales by hour',
        bars: [420, 680, 540, 910, 1240, 760, 1130, 980],
        labels: ['10a', '12p', '2p', '4p', '6p', '7p', '8p', '9p'],
        top: [
            { name: 'Maggi', count: 18, width: '100%' },
            { name: 'Milk 500 ml', count: 15, width: '83%' },
            { name: 'Bread', count: 9, width: '50%' }
        ]
    },
    week: {
        label: 'This week',
        sales: 52300,
        orders: 312,
        average: 168,
        repeat: 42,
        delta: '+8%',
        chart: 'Sales by day',
        bars: [5200, 6100, 5800, 7400, 8200, 9100, 10500],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        top: [
            { name: 'Milk 500 ml', count: 112, width: '100%' },
            { name: 'Maggi', count: 94, width: '84%' },
            { name: 'Bread', count: 61, width: '54%' }
        ]
    },
    month: {
        label: 'This month',
        sales: 214800,
        orders: 1284,
        average: 167,
        repeat: 45,
        delta: '+19%',
        chart: 'Sales by week',
        bars: [22000, 25000, 19000, 28000, 31000, 26000, 34000, 29800],
        labels: ['1', '5', '9', '13', '17', '21', '25', '29'],
        top: [
            { name: 'Milk 500 ml', count: 438, width: '100%' },
            { name: 'Maggi', count: 372, width: '85%' },
            { name: 'Rice 5 kg', count: 204, width: '47%' }
        ]
    }
}

type RangeKey = keyof typeof RANGES

const RANGE_KEYS = Object.keys(RANGES) as RangeKey[]

export const DashboardMock: FC = (): ReactNode => {
    const [rangeKey, setRangeKey] = useState<RangeKey>('today')
    const [activeBar, setActiveBar] = useState<number | null>(null)

    const range = RANGES[rangeKey]
    const max = Math.max(...range.bars)

    return (
        <section
            id='dashboard'
            aria-labelledby='dashboard-title'
            className='relative isolate overflow-hidden py-24 sm:py-32'
        >
            <div className='mx-auto w-full max-w-[1199px] px-5 sm:px-8'>
                <Reveal className='grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16'>
                    <div>
                        <SectionBadge>{dashboardCopy.eyebrow}</SectionBadge>

                        <h2
                            id='dashboard-title'
                            className='mt-6 max-w-[19ch] font-heading text-[clamp(2.3rem,4.5vw,4.2rem)] leading-[1.02] font-normal tracking-[-0.04em] text-balance text-ink'
                        >
                            {dashboardCopy.title}
                        </h2>
                    </div>

                    <p className='max-w-[46ch] text-[16.5px] leading-relaxed text-ink/55 sm:text-[17.5px] lg:justify-self-end'>
                        {dashboardCopy.body}
                    </p>
                </Reveal>

                <Reveal delay={120} className='mt-12'>
                    <div className='overflow-hidden rounded-lg border border-night/30 bg-night p-2.5 shadow-[0_50px_120px_-70px_rgba(16,33,41,0.9)]'>
                        <div className='flex items-center justify-between px-1.5 pb-2.5'>
                            <div className='flex items-center gap-1.5'>
                                <span aria-hidden className='size-2 rounded-full bg-lime' />
                                <span aria-hidden className='size-2 rounded-full bg-cyan' />
                                <span aria-hidden className='size-2 rounded-full bg-clay/60' />
                                <span className='ml-1.5 font-mono text-[10px] tracking-[0.14em] text-paper/40 uppercase'>
                                    owner dashboard
                                </span>
                            </div>

                            <span className='font-mono text-[10px] tracking-[0.14em] text-lime uppercase'>
                                synced
                            </span>
                        </div>

                    <div className='overflow-hidden rounded-md border border-paper/12 bg-[#0c1b22]'>
                        <div className='flex flex-wrap items-center justify-between gap-3 border-b border-paper/10 bg-paper/[0.03] px-4 py-3 sm:px-6'>
                            <div className='flex items-center gap-2'>
                                <span className='font-mono text-[11px] text-paper/40'>dukaan.ai/dashboard</span>
                            </div>

                            <div role='group' aria-label='Reporting period' className='flex rounded-full border border-paper/10 bg-paper/5 p-1'>
                                {RANGE_KEYS.map((key) => (
                                    <button
                                        key={key}
                                        type='button'
                                        aria-pressed={rangeKey === key}
                                        onClick={() => {
                                            setRangeKey(key)
                                            setActiveBar(null)
                                        }}
                                        className={cn(
                                            'h-8 cursor-pointer rounded-full px-3 text-[12px] font-medium transition-colors focus-visible:ring-2 focus-visible:ring-moss focus-visible:outline-none',
                                            rangeKey === key ? 'bg-paper text-night' : 'text-paper/45 hover:text-paper'
                                        )}
                                    >
                                        {RANGES[key].label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='p-4 sm:p-6'>
                            <dl className='grid grid-cols-2 gap-2.5 lg:grid-cols-4'>
                                {[
                                    { label: 'Sales', value: `₹${range.sales.toLocaleString('en-IN')}`, note: range.delta, up: true },

                                    { label: 'Orders', value: String(range.orders), note: '+6', up: true },
                                    { label: 'Average order', value: `₹${range.average}`, note: '-2%', up: false },
                                    { label: 'Repeat customers', value: `${range.repeat}%`, note: '+4 pts', up: true }
                                ].map((stat) => (
                                    <div key={stat.label} className='rounded-md border border-paper/10 bg-paper/[0.04] px-4 py-3.5'>
                                        <dt className='text-[11.5px] text-paper/40'>{stat.label}</dt>

                                        <dd className='mt-1 flex items-end justify-between gap-2'>
                                            <span className='font-heading text-[clamp(1.4rem,2.6vw,1.9rem)] leading-none font-normal tracking-[-0.035em] text-paper'>
                                                <CountUp value={stat.value} duration={900} />
                                            </span>

                                            <span className={cn('flex items-center gap-0.5 pb-0.5 text-[10.5px] font-medium', stat.up ? 'text-emerald-300/80' : 'text-red-300/80')}>
                                                {stat.up ? <ArrowUpRight className='size-3' /> : <ArrowDownRight className='size-3' />}
                                                {stat.note}
                                            </span>
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            <div className='mt-3 grid gap-3 lg:grid-cols-[1.55fr_1fr]'>
                                <div className='rounded-md border border-paper/10 bg-paper/[0.03] p-4 sm:p-5'>
                                    <div className='flex items-baseline justify-between gap-3'>
                                        <p className='text-[13px] font-medium text-paper/75'>{range.chart}</p>
                                        <p className='font-mono text-[11px] text-paper/35'>
                                            {activeBar === null
                                                ? 'Tap a bar'
                                                : `${range.labels[activeBar]} · ₹${range.bars[activeBar].toLocaleString('en-IN')}`}
                                        </p>
                                    </div>

                                    <div className='mt-5 flex h-[164px] items-end gap-1.5 sm:gap-2'>
                                        {range.bars.map((value, index) => (
                                            <button
                                                key={`${rangeKey}-${range.labels[index]}`}
                                                type='button'
                                                onMouseEnter={() => setActiveBar(index)}
                                                onMouseLeave={() => setActiveBar(null)}
                                                onFocus={() => setActiveBar(index)}
                                                onBlur={() => setActiveBar(null)}
                                                aria-label={`${range.labels[index]}: ₹${value.toLocaleString('en-IN')}`}
                                                className='group relative flex h-full flex-1 cursor-pointer items-end justify-center rounded-md focus-visible:ring-2 focus-visible:ring-moss focus-visible:outline-none'
                                            >
                                                <span
                                                    className={cn(
                                                        'w-full max-w-9 rounded-t-[5px] transition-[background-color,opacity] duration-200',
                                                        activeBar === index ? 'bg-lime' : 'bg-lime/65 group-hover:bg-lime/85'
                                                    )}
                                                    style={{ height: `${Math.max(8, Math.round((value / max) * 100))}%` }}
                                                />
                                            </button>
                                        ))}
                                    </div>

                                    <div className='mt-2 flex gap-1.5 sm:gap-2'>
                                        {range.labels.map((label) => (
                                            <span key={label} className='flex-1 text-center text-[9.5px] text-paper/30'>
                                                {label}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className='rounded-md border border-paper/10 bg-paper/[0.03] p-4 sm:p-5'>
                                    <p className='text-[13px] font-medium text-paper/75'>Top items</p>

                                    <ul className='mt-4 space-y-3.5'>
                                        {range.top.map((item) => (
                                            <li key={item.name}>
                                                <div className='flex items-center justify-between text-[12px]'>
                                                    <span className='text-paper/65'>{item.name}</span>
                                                    <span className='text-paper/45 tabular-nums'>{item.count} sold</span>
                                                </div>
                                                <span className='mt-1.5 block h-1 overflow-hidden rounded-full bg-paper/10'>
                                                    <span className='block h-full rounded-full bg-lime/70 transition-[width] duration-500' style={{ width: item.width }} />
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className='mt-5 border-t border-paper/10 pt-4'>
                                        <p className='flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] text-moss/70 uppercase'>
                                            <Sparkles className='size-3' />
                                            Low stock
                                        </p>
                                        <p className='mt-1.5 text-[12px] text-paper/50'>Maggi · 8 left</p>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-3 flex items-start gap-3 rounded-md border border-moss/20 bg-moss/[0.07] px-4 py-3.5'>
                                <span className='mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-moss/15 text-moss'>
                                    <Sparkles aria-hidden className='size-3.5' />
                                </span>

                                <div>
                                    <p className='text-[10px] font-semibold tracking-[0.14em] text-moss/70 uppercase'>AI insight</p>
                                    <p className='mt-1 text-[13px] leading-relaxed text-paper/65'>{dashboardCopy.insight}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
