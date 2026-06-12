exports.getDashboardMetrics = async (req, res) => {
  res.json({
    totalTickets: 0,
    openTickets: 0,
    resolvedTickets: 0,
    slaCompliance: 0
  });
};

exports.getAgentPerformance = async (req, res) => {
  res.json({ agents: [] });
};

exports.getSatisfactionMetrics = async (req, res) => {
  res.json({ averageRating: 0, responses: [] });
};
