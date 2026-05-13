export default function RemainingPoints ({ value }: { value: number }) {
  const isNegative = value < 0;
  return (
    <span className={`font-semibold ${isNegative ? 'text-red-600' : ''}`}>
      {isNegative ? "−" : null}
      ${Math.abs(value)}
    </span>
  );
}
