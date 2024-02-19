type ScoreCircleProps = {
  score: number;
}

const ScoreCircle = ({ score }: ScoreCircleProps) => {
  const calculateOffset = (score: number): string => {
    return `${(439.6 - (score / 100) * 439.6).toFixed(2)}px`;
  };

  return (
    <svg width="160" height="160" viewBox="0 0 160 160" className="rotate-90 flex mx-auto">
      <circle r="70" cx="80" cy="80" fill="transparent" stroke="#e0e0e0" strokeWidth="12px"></circle>
      <circle
        r="70"
        cx="80"
        cy="80"
        fill="transparent"
        stroke="#E11D48"
        strokeLinecap="round"
        strokeWidth="12px"
        strokeDasharray="439.6px"
        strokeDashoffset={calculateOffset(score)}
      ></circle>
    </svg>
  );
};

export default ScoreCircle;
