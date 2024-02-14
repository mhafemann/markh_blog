import type { Effect } from './effect';
import { getRandomSign } from '$lib';

export class Particle {
	x: number;
	y: number;
	radius: number = 5; // Math.floor(Math.random() * 6 + 2)
	vx: number = Math.random() * 1 - 0.5; // velocity x
	vy: number = Math.random() * 1 - 0.5; // velocity y
	pushX: number = 0;
	pushY: number = 0;
	friction: number = 0.8;

	constructor(public effect: Effect) {
		this.effect = effect;
		this.x = Math.floor(this.radius + Math.random() * (this.effect.width - this.radius * 2));
		this.y = Math.floor(this.radius + Math.random() * (this.effect.height - this.radius * 2));
	}

	draw(context: CanvasRenderingContext2D) {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.fill();
	}

	update() {
		if (this.effect.mouse.pressed === true) {
			const dx = this.x - this.effect.mouse.x;
			const dy = this.y - this.effect.mouse.y;
			const distance = Math.hypot(dx, dy);

			const force = this.effect.mouse.radius / distance;

			// https://youtu.be/gxagf0WKfBo?feature=shared&t=673
			if (distance < this.effect.mouse.radius) {
				const angle = Math.atan2(dy, dx);
				this.pushX += Math.cos(angle) * force;
				this.pushY += Math.sin(angle) * force;
			}
		}

		this.x += (this.pushX *= this.friction) + this.vx;
		this.y += (this.pushY *= this.friction) + this.vy;

		if (this.x < this.radius) {
			this.x = this.radius;
			this.vx *= -1;
		} else if (this.x > this.effect.width - this.radius) {
			this.x = this.effect.width - this.radius;
			this.vx *= -1;
		}
		if (this.y < this.radius) {
			this.y = this.radius;
			this.vy *= -1;
		} else if (this.y > this.effect.height - this.radius) {
			this.y = this.effect.height - this.radius;
			this.vy *= -1;
		}
	}
	reset() {
		this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
		this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
	}
}
