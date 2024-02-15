<script lang="ts">
	import { onMount } from 'svelte';
	import { Effect } from '$lib';

	let canvas: HTMLCanvasElement,
		ctx: CanvasRenderingContext2D,
		gradient: CanvasGradient,
		effect: Effect;

	onMount(async () => {
		canvas = document.getElementById('canvas1') as HTMLCanvasElement;

		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
		gradient.addColorStop(0, 'lime');
		gradient.addColorStop(0.5, 'magenta');
		gradient.addColorStop(1, 'blue');
		ctx.fillStyle = gradient;
		ctx.fillStyle = gradient;
		ctx.strokeStyle = '#4c4d4c';
		effect = new Effect(canvas, ctx);

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			effect.handleParticles(ctx);
			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<div class="z-40" id="container">
	<canvas class="z-40" id="canvas1"></canvas>
</div>
