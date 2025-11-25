<script>
	import logo from '../../lib/assets/logo.png';

	let fullname = '';
	let email = '';
	let password = '';
	let confirmPassword = '';
	let message = '';
	let isError = false;

	function handleRegister() {
		// Basic validation
		if (!fullname || !email || !password || !confirmPassword) {
			message = 'Please fill all the fields!';
			isError = true;
			return;
		}

		if (password !== confirmPassword) {
			message = 'Passwords do not match!';
			isError = true;
			return;
		}

		// Success
		message = 'Registration successful!';
		isError = false;

		// Clear fields
		fullname = '';
		email = '';
		password = '';
		confirmPassword = '';
	}
</script>

<section
	class="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 p-2"
>
	<div class="w-full max-w-5xl shadow-lg rounded-lg bg-white dark:bg-neutral-800 overflow-hidden">
		<div class="flex flex-col lg:flex-row">
			<!-- LEFT FORM -->
			<div class="w-full lg:w-1/2 p-6">
				<div class="text-center mb-10">
					<img class="mx-auto w-20" src={logo} alt="logo" />
					<h4 class="mt-4 text-xl font-semibold">Create Your Account</h4>
				</div>

				<form on:submit|preventDefault={handleRegister} class="space-y-5">
					<p class="text-gray-600 dark:text-gray-300">Fill the details to register</p>

					<!-- Full Name -->
					<div>
						<label class="block text-gray-600 dark:text-gray-300 mb-1">Full Name</label>
						<input
							type="text"
							bind:value={fullname}
							class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent
                            px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
							placeholder="Enter your full name"
						/>
					</div>

					<!-- Email -->
					<div>
						<label class="block text-gray-600 dark:text-gray-300 mb-1">Email</label>
						<input
							type="email"
							bind:value={email}
							class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent
                            px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
							placeholder="Enter email address"
						/>
					</div>

					<!-- Password -->
					<div>
						<label class="block text-gray-600 dark:text-gray-300 mb-1">Password</label>
						<input
							type="password"
							bind:value={password}
							class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent
                            px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
							placeholder="Enter password"
						/>
					</div>

					<!-- Confirm Password -->
					<div>
						<label class="block text-gray-600 dark:text-gray-300 mb-1">Confirm Password</label>
						<input
							type="password"
							bind:value={confirmPassword}
							class="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-transparent
                            px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
							placeholder="Confirm password"
						/>
					</div>

					<!-- Register button -->
					<button
						type="submit"
						class="w-full py-2.5 rounded text-white font-semibold shadow transition
                        bg-linear-to-r from-orange-500 via-pink-600 to-purple-600 hover:opacity-90"
					>
						Register
					</button>

					<!-- Message -->
					{#if message}
						<p class="text-center font-semibold {isError ? 'text-red-500' : 'text-green-500'}">
							{message}
						</p>
					{/if}

					<!-- Login Redirect -->
					<div class="text-center pt-4">
						<p class="text-sm">
							Already have an account?
							<a href="/login" class="text-blue-600 hover:underline">Login</a>
						</p>
					</div>
				</form>
			</div>

			<!-- RIGHT PANEL -->
			<div
				class="w-full lg:w-1/2 flex items-center justify-center p-10 text-white
                bg-linear-to-r from-orange-500 via-pink-600 to-purple-600"
			>
				<div>
					<h4 class="text-xl font-semibold mb-4">Join Our Community</h4>
					<p class="text-sm leading-relaxed">
						Create your account and experience the best services. We ensure secure access, modern
						design patterns, and smooth user interaction using SvelteKit + Tailwind CSS.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
