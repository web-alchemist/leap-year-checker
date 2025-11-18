<script>
	import { leapYear } from '$lib/leapYear';

	let year = '';
	let result = null;
	let isLeap = false;
	let error = null;

	function checkLeapYear() {
		const y = parseInt(year);

		if (isNaN(y) || year === '') {
			result = null;
			error = null;
			return;
		}

		try {
			isLeap = leapYear(y);
			result = y;
			error = null;
		} catch (e) {
			result = null;
			error = e.message;
		}
	}

	function handleInput() {
		checkLeapYear();
	}
</script>

<div class="container">
	<h1 class="title">LWTech Leap Year Calculator!</h1>
	<p class="subtitle">Take a leap of faith!</p>

	<div class="input-box">
		<input
			type="number"
			bind:value={year}
			on:input={handleInput}
			placeholder="Enter a year..."
			class="year-input"
			min="1582"
		/>
	</div>

	{#if error}
		<div class="result error">
			<div class="emoji">⚠️</div>
			<h2>Oops!</h2>
			<p>{error}</p>
			<p class="info">We only check Gregorian calendar years (1582 onwards)!</p>
		</div>
	{:else if result !== null}
		<div class="result {isLeap ? 'is-leap' : 'not-leap'}">
			{#if isLeap}
				<div class="emoji">🎉</div>
				<h2>{result} is a LEAP YEAR!</h2>
				<p>Get ready for that extra day in February!</p>
			{:else}
				<div class="emoji">🛑</div>
				<h2>{result} is not a leap year</h2>
				<p>Just a regular 365-day year!</p>
			{/if}
		</div>
	{/if}

	<div class="fun-fact">
		<strong>💡 Fun fact:</strong> Leap years happen every 4 years... except when they don't! Years divisible
		by 100 aren't leap years, unless they're also divisible by 400.
	</div>
</div>

<style>
	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 2rem;
		text-align: center;
	}

	.title {
		font-size: 3rem;
		color: white;
		margin-bottom: 0.5rem;
		text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
		animation: bounce 1s ease-in-out infinite alternate;
	}

	@keyframes bounce {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(-10px);
		}
	}

	.subtitle {
		color: rgba(255, 255, 255, 0.9);
		font-size: 1.2rem;
		margin-bottom: 2rem;
	}

	.input-box {
		margin: 2rem 0;
	}

	.year-input {
		width: 100%;
		max-width: 300px;
		padding: 1rem;
		font-size: 1.5rem;
		border: 4px solid white;
		border-radius: 50px;
		text-align: center;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
		transition: transform 0.2s;
	}

	.year-input:focus {
		outline: none;
		transform: scale(1.05);
		border-color: #ffb81c;
	}

	.result {
		margin: 2rem auto;
		padding: 2rem;
		border-radius: 20px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
		animation: slideIn 0.5s ease-out;
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.is-leap {
		background-color: #ffb81c;
		color: white;
	}

	.not-leap {
		background-color: #ffffff;
		color: red;
	}

	.error {
		background: linear-gradient(135deg, #fc6767 0%, #ec008c 100%);
		color: white;
	}

	.emoji {
		font-size: 4rem;
		margin-bottom: 1rem;
		animation: spin 0.5s ease-out;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg) scale(0);
		}
		to {
			transform: rotate(360deg) scale(1);
		}
	}

	.result h2 {
		margin: 0.5rem 0;
		font-size: 2rem;
	}

	.result p {
		margin: 0.5rem 0;
		font-size: 1.2rem;
		opacity: 0.9;
	}

	.info {
		font-size: 1rem;
		margin-top: 1rem;
		opacity: 0.95;
	}

	.fun-fact {
		margin-top: 3rem;
		padding: 1.5rem;
		background: #007ba9;
		border-radius: 15px;
		color: white;
		font-size: 0.95rem;
		line-height: 1.6;
		backdrop-filter: blur(10px);
	}

	.fun-fact strong {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
	}
</style>
