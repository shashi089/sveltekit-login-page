<script lang="ts">
	import { enhance } from '$app/forms';
	import logo from '../../lib/assets/logo.png';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section class="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 p-4 relative overflow-hidden">
	<!-- Background Elements -->
	<div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
		<div class="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
		<div class="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
	</div>

	<div class="w-full max-w-md relative z-10">
		<div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden backdrop-blur-xl">
			<div class="p-8 sm:p-10">
				<!-- Header -->
				<div class="text-center mb-8">
					<a href="/" class="inline-block transition-transform hover:scale-105">
						<img class="mx-auto w-16 h-16 object-contain" src={logo} alt="logo" />
					</a>
					<h2 class="mt-6 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
						Reset Password
					</h2>
					<p class="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
						Enter your email to receive a reset link
					</p>
				</div>

				{#if form?.success}
					<div class="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-6">
						<div class="flex items-center gap-3">
							<div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center text-green-600 dark:text-green-300">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
								</svg>
							</div>
							<p class="text-sm font-medium text-green-800 dark:text-green-200">
								{form.message}
							</p>
						</div>
					</div>
				{:else}
					<form method="POST" use:enhance class="space-y-6">
						<!-- Email -->
						<div>
							<label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5" for="email">
								Email Address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								value={form?.data?.email ?? ''}
								class="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-600 
								bg-neutral-50 dark:bg-neutral-900/50 text-neutral-900 dark:text-white
								focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all
								placeholder-neutral-400 dark:placeholder-neutral-500"
								placeholder="john@example.com"
							/>
							{#if form?.errors?.email}
								<p class="text-red-500 text-xs mt-1.5 font-medium">{form.errors.email}</p>
							{/if}
						</div>

						<!-- Error Message -->
						{#if form?.errors?.general}
							<div class="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
								<p class="text-center text-sm font-medium text-red-600 dark:text-red-400">
									{form.errors.general}
								</p>
							</div>
						{/if}

						<!-- Submit Button -->
						<button
							type="submit"
							class="w-full py-3.5 rounded-xl text-white font-bold text-sm uppercase tracking-wide shadow-lg shadow-purple-500/25
							transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-purple-500/40
							bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-90 active:scale-[0.98]"
						>
							Send Reset Link
						</button>
					</form>
				{/if}

				<!-- Footer -->
				<div class="mt-8 text-center">
					<p class="text-sm text-neutral-600 dark:text-neutral-400">
						Remember your password?
						<a href="/login" class="font-semibold text-purple-600 hover:text-purple-500 transition-colors ml-1">
							Sign in
						</a>
					</p>
				</div>
			</div>
		</div>
		
		<!-- Simple Footer Link -->
		<div class="mt-6 text-center">
			<a href="/" class="text-xs text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
				&larr; Back to Home
			</a>
		</div>
	</div>
</section>
