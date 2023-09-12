export function calculatePointCoordinates(index: number, totalPoints: number) {
  const angleIncrement = (2 * Math.PI) / totalPoints;
  const angle = index * angleIncrement;
  const x = 16.5 * Math.cos(angle);
  const y = 16.5 * Math.sin(angle); //radius = 16.5;
  return { x, y };
}
