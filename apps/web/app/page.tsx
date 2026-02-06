'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
	{ label: 'CTR Lift', value: '+38%' },
	{ label: 'Thumbnail Variants', value: '12x faster' },
	{ label: 'Creator Personas', value: '1,200+' },
];

const steps = [
	{
		title: 'Strategy Agent',
		detail: 'Finds the click-driving hook and layout for the niche.',
	},
	{
		title: 'Consistency Agent',
		detail: 'Locks in creator persona across scenes and poses.',
	},
	{
		title: 'Visual Agent',
		detail: 'Generates high-fidelity backgrounds and props in seconds.',
	},
];

export default function HomePage() {
	return (
		<div className='min-h-screen bg-ink text-haze'>
			<div className='relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-ember/20 via-ink to-ink' />
				<div className='absolute inset-0 bg-grid opacity-60' />

				<main className='relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 lg:py-24'>
					<section className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className='flex flex-col gap-6'>
							<div className='inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70'>
								<Sparkles className='h-4 w-4 text-accent' />
								Multi-Agent Thumbnail Studio
							</div>
							<h1 className='text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl'>
								Build AI thumbnails that feel human, cinematic, and impossible
								to ignore.
							</h1>
							<p className='text-base text-white/70 sm:text-lg'>
								Strategy, consistency, and visual generation fused into a single
								pipeline. Upload a title and five photos. Get three
								scroll-stopping concepts, instantly composited.
							</p>
							<div className='flex flex-wrap gap-4'>
								<Button size='lg'>Generate Concepts</Button>
								<Button variant='outline' size='lg'>
									Watch Demo <ArrowUpRight className='h-4 w-4' />
								</Button>
							</div>
							<div className='flex flex-wrap gap-8 text-sm text-white/60'>
								{stats.map((stat) => (
									<div key={stat.label}>
										<p className='text-xl font-semibold text-white'>
											{stat.value}
										</p>
										<p>{stat.label}</p>
									</div>
								))}
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							className='relative'>
							<div className='absolute -left-8 -top-8 h-24 w-24 rounded-full bg-ember/30 blur-2xl' />
							<div className='absolute -bottom-8 -right-4 h-24 w-24 rounded-full bg-accent/40 blur-2xl' />
							<div className='rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-glow'>
								<div className='flex flex-col gap-4'>
									<div className='rounded-2xl bg-white/5 p-4'>
										<p className='text-xs uppercase tracking-[0.3em] text-white/50'>
											Live Preview
										</p>
										<h3 className='mt-3 text-lg font-semibold text-white'>
											“He Broke the Algorithm… Here’s How”
										</h3>
										<p className='mt-2 text-sm text-white/60'>
											Background: neon city, storm clouds, spotlight on creator.
										</p>
									</div>
									<div className='grid grid-cols-2 gap-4 text-xs text-white/70'>
										<div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
											Hook Words
											<p className='mt-2 text-base text-white'>BROKE · HOW</p>
										</div>
										<div className='rounded-2xl border border-white/10 bg-white/5 p-4'>
											Vibe
											<p className='mt-2 text-base text-white'>Urgent</p>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</section>

					<section className='grid gap-6 lg:grid-cols-3'>
						{steps.map((step, index) => (
							<motion.div
								key={step.title}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-80px' }}
								transition={{ duration: 0.6, delay: index * 0.1 }}>
								<Card>
									<CardHeader>
										<CardTitle>{step.title}</CardTitle>
									</CardHeader>
									<CardContent>{step.detail}</CardContent>
								</Card>
							</motion.div>
						))}
					</section>

					<section className='grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
						<div>
							<h2 className='text-3xl font-semibold text-white'>
								Gemini-powered image generation with creative guardrails.
							</h2>
							<p className='mt-3 text-white/70'>
								Orchestrate the pipeline with a TypeScript API, stream progress
								in real-time, and keep the creator persona consistent across
								dozens of variants.
							</p>
						</div>
						<div className='flex flex-col gap-3 text-sm text-white/70'>
							<div className='rounded-2xl border border-white/10 bg-ink/60 p-4'>
								Smooth streaming animations with Framer Motion.
							</div>
							<div className='rounded-2xl border border-white/10 bg-ink/60 p-4'>
								Shadcn UI components built with Tailwind.
							</div>
							<div className='rounded-2xl border border-white/10 bg-ink/60 p-4'>
								Bun + Turborepo for fast builds and caching.
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
