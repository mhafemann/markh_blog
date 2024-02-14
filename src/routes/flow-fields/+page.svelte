<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, gradient: CanvasGradient;

	onMount(async () => {
		canvas = document.getElementById('canvas2') as HTMLCanvasElement;

		ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		//

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			//
			requestAnimationFrame(animate);
		}

		animate();
	});
</script>

<canvas id="canvas2"></canvas>
