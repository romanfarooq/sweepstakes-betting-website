function calculateBetPercentages(match) {
  const { total_yes_bets, total_no_bets } = match;

  const total_bets = total_yes_bets + total_no_bets;

  const yes_percentage = total_bets > 0 ? (total_yes_bets / total_bets) * 100 : 0;
  const no_percentage = total_bets > 0 ? (total_no_bets / total_bets) * 100 : 0;

  return {
    total_bets,
    yes_percentage: yes_percentage.toFixed(1),
    no_percentage: no_percentage.toFixed(1)   
  };
}

export { calculateBetPercentages };