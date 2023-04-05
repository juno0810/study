const distance = (a, b) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
console.log(distance([1, 2], [2, 3]));

function solution(m, n, startX, startY, balls) {
  return balls.map((ball) => {
    const [bX, bY] = ball;
    const mirroredBalls = [
      [-1 * bX, bY],
      [bX, -1 * bY],
      [bX + 2 * (m - bX), bY],
      [bX, bY + 2 * (n - bY)],
    ].filter(
      (b) =>
        !(b[1] === startY && b[0] < startX && bX < startX) &&
        !(b[1] === startY && b[0] > startX && bX > startX) &&
        !(b[0] === startX && b[1] < startY && bY < startY) &&
        !(b[0] === startX && b[1] > startY && bY > startY)
    );
    return Math.min(
      ...mirroredBalls.map((mBall) => distance([startX, startY], mBall))
    );
  });
}
