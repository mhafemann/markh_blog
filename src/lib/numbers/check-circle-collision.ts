export const checkCircleCollision = (
	p1x: number,
	p1y: number,
	r1: number,
	p2x: number,
	p2y: number,
	r2: number
): boolean => (r1 + r2) ** 2 > (p1x - p2x) ** 2 + (p1y - p2y) ** 2;
