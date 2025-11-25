<script>
	import logo from '../../lib/assets/logo.png';
	let username = '';
	let password = '';
	let message = '';
	let isError = false;

	function handleLogin() {
		if (!username || !password) {
			message = 'Please enter both username and password';
			isError = true;
			return;
		}

		message = 'Login successful!';
		isError = false;

		username = '';
		password = '';
	}
</script>

<section
	class="min-h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 p-2"
>
	<div class="w-full max-w-5xl shadow-lg rounded-lg bg-white dark:bg-neutral-800 overflow-hidden">
		<div class="flex flex-col lg:flex-row">
			<!-- LEFT FORM -->
			<div class="w-full lg:w-1/2 p-10">
				<div class="text-center mb-10">
					<img class="mx-auto w-20" src={logo} alt="logo" />
					<h4 class="mt-4 text-xl font-semibold">Welcome Back</h4>
				</div>

				<form on:submit|preventDefault={handleLogin} class="space-y-5">
					<p class="text-gray-600 dark:text-gray-300">Please login to your account</p>

					<!-- Username -->
					<div>
						<label class="block text-gray-600 dark:text-gray-300 mb-1" for="username"
							>Username</label
						>
						<input
							type="text"
							bind:value={username}
							class="w-full rounded-md border border-gray-300 dark:border-gray-600
                            bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500
                            dark:text-white"
							placeholder="Enter username"
						/>
					</div>

					<!-- Password -->
					<div>
						<label class="block text-gray-600 dark:text-gray-300 mb-1" for="password"
							>Password</label
						>
						<input
							type="password"
							bind:value={password}
							class="w-full rounded-md border border-gray-300 dark:border-gray-600
                            bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500
                            dark:text-white"
							placeholder="Enter password"
						/>
					</div>

					<!-- LOGIN BUTTON -->
					<button
						type="submit"
						class="w-full py-2.5 rounded text-white font-semibold shadow
                        transition bg-linear-to-r from-orange-500 via-pink-600 to-purple-600
                        hover:opacity-90"
					>
						Log In
					</button>

					<p class="text-sm text-center text-blue-600 cursor-pointer hover:underline">
						Forgot password?
					</p>

					<!-- Message -->
					{#if message}
						<p class="text-center font-semibold {isError ? 'text-red-600' : 'text-green-600'}">
							{message}
						</p>
					{/if}

					<!-- Register -->
					<div class="flex items-center justify-between pt-4">
						<p class="text-sm">Don't have an account?</p>
						<button
							type="button"
							class="px-6 py-2 border-2 border-red-500 text-red-500 rounded-md
                            hover:bg-red-100 dark:hover:bg-red-900 transition"
						>
							<a href="/register">Register</a>
						</button>
					</div>
				</form>
			</div>

			<!-- RIGHT PANEL -->
			<div
				class="w-full lg:w-1/2 flex items-center justify-center p-10 text-white
                bg-linear-to-r from-orange-500 via-pink-600 to-purple-600"
			>
				<div>
					<h4 class="text-xl font-semibold mb-4">Company Name</h4>
					<p class="text-sm leading-relaxed">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi ducimus error
						tenetur atque omnis eaque, minus ab illum. Aperiam officiis vero itaque facere nulla
						illo voluptas, quas nisi facilis!
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
