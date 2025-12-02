<script lang="ts">
	import logo from '$lib/assets/logo.png';
</script>

<div class="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white font-sans selection:bg-purple-500 selection:text-white">
	<!-- Navbar -->
	<nav class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
		<div class="flex items-center gap-2">
			<img src={logo} alt="Logo" class="w-8 h-8" />
			<span class="text-xl font-bold tracking-tight">Brand</span>
		</div>
		<div class="flex items-center gap-4">
			<a href="/login" class="px-5 py-2 rounded-full font-medium text-sm transition-all duration-300
				bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700
				hover:border-purple-500 hover:text-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
				Login
			</a>
			<a href="/register" class="px-5 py-2 rounded-full font-medium text-sm text-white transition-all duration-300
				bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30">
				Get Started
			</a>
		</div>
	</nav>

	<!-- Hero Section -->
	<main class="flex flex-col items-center justify-center text-center px-4 mt-20 lg:mt-32">
		<div class="relative">
			<div class="absolute -inset-1 rounded-full blur opacity-30 bg-linear-to-r from-purple-600 via-pink-600 to-orange-600 animate-pulse"></div>
			<span class="relative px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
				Web page is now live
			</span>
		</div>
		
		<h1 class="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl bg-clip-text text-transparent bg-linear-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-neutral-400">
			Build faster with <br class="hidden md:block" />
			<span class="bg-clip-text text-transparent bg-linear-to-r from-purple-500 via-pink-500 to-orange-500">
				Modern Authentication
			</span>
		</h1>

		<p class="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
			Experience the next generation of secure, fast, and beautiful authentication flows. 
			Built with SvelteKit and Tailwind CSS for ultimate performance.
		</p>

		<div class="mt-10 flex flex-col sm:flex-row items-center gap-4">
			<a href="/register" class="px-8 py-3.5 rounded-full font-semibold text-white text-lg transition-all duration-300 transform hover:-translate-y-1
				bg-linear-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50">
				Start Building Free
			</a>

		</div>

		<!-- Feature Grid -->
		<div class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-20">
			{#each [
				{ title: 'Secure by Default', desc: 'Industry standard encryption and security practices out of the box.' },
				{ title: 'Lightning Fast', desc: 'Optimized for speed with edge-ready performance and minimal latency.' },
				{ title: 'Beautiful UI', desc: 'Stunning, responsive components that look great on any device.' }
			] as feature}
				<div class="p-6 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-purple-500/50 transition-colors duration-300">
					<h3 class="text-xl font-bold mb-2">{feature.title}</h3>
					<p class="text-neutral-600 dark:text-neutral-400">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</main>
</div>


