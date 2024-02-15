import { Particle } from './particle';
import { debounce } from '$lib';

export class Effect {
	width: number;
	height: number;
	particles: Particle[] = [];
	numberOfParticles: number = 0;
	paused: boolean = false;
	maxParticleDistance: number = 0;
	mouse: { x: number; y: number; pressed: boolean; radius: number } = {
		x: 0,
		y: 0,
		pressed: false,
		radius: 150
	};

	constructor(
		public canvas: HTMLCanvasElement,
		public context: CanvasRenderingContext2D
	) {
		this.canvas = canvas;
		this.context = context;
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.numberOfParticles = Math.floor((this.width * this.height) / 4000);
		this.maxParticleDistance = 125;
		this.createParticles();

		window.addEventListener('keydown', (e) => {
			if (e.code === 'Space') {
				this.paused = !this.paused;
			}
		});

		window.addEventListener(
			'resize',
			debounce((e: any) => {
				// @ts-ignore
				this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
			}, 100)
		);

		window.addEventListener('touchstart', (e) => {
			this.mouse.pressed = true;
			this.mouse.x = e.touches[0].clientX;
			this.mouse.y = e.touches[0].clientY;
		});

		window.addEventListener('touchmove', (e) => {
			this.mouse.x = e.touches[0].clientX;
			this.mouse.y = e.touches[0].clientY;
		});

		window.addEventListener('touchend', (e) => {
			this.mouse.pressed = false;
		});

		window.addEventListener('mousedown', (e) => {
			this.mouse.pressed = true;
			this.mouse.x = e.x;
			this.mouse.y = e.y;
		});

		window.addEventListener('mouseup', (e) => {
			this.mouse.pressed = false;
		});
	}

	createParticles() {
		for (let i = 0; i < this.numberOfParticles; i++) {
			this.particles.push(new Particle(this));
		}
	}

	handleParticles(context: CanvasRenderingContext2D) {
		this.connectParticles(context);

		this.particles.forEach((particle) => {
			particle.draw(context);
			if (this.paused) {
				return;
			}
			particle.update();
		});
	}

	connectParticles(context: CanvasRenderingContext2D) {
		let opacity;

		context.save();
		for (let a = 0; a < this.particles.length; a++) {
			for (let b = a; b < this.particles.length; b++) {
				const distance = Math.sqrt(
					(this.particles[a].x - this.particles[b].x) ** 2 +
						(this.particles[a].y - this.particles[b].y) ** 2
				);

				if (distance < this.maxParticleDistance) {
					opacity = 1 - distance / this.maxParticleDistance;
					context.globalAlpha = opacity;
					context.lineWidth = 1;
					context.beginPath();
					context.moveTo(this.particles[a].x, this.particles[a].y);
					context.lineTo(this.particles[b].x, this.particles[b].y);
					context.stroke();
				}
			}
		}
		context.restore();
	}

	resize(width: number, height: number) {
		this.canvas.width = width;
		this.canvas.height = height;
		this.width = width;
		this.height = height;
		this.context.fillStyle = 'white';
		const gradient = this.context.createLinearGradient(0, 0, width, height);
		gradient.addColorStop(0, 'white');
		gradient.addColorStop(0.5, 'magenta');
		gradient.addColorStop(1, 'blue');
		this.context.fillStyle = gradient;
		this.context.strokeStyle = 'white';

		this.particles.forEach((particle) => {
			particle.reset();
		});
	}
}
