const calculateSla = (priority) => {
  const rules = {
    low: { responseHours: 24, resolutionHours: 72 },
    medium: { responseHours: 8, resolutionHours: 24 },
    high: { responseHours: 2, resolutionHours: 8 },
    urgent: { responseHours: 0.5, resolutionHours: 2 }
  };
  return rules[priority] || rules.medium;
};

module.exports = { calculateSla };
