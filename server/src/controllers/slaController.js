exports.getSlaStatus = async (req, res) => {
  res.json({ onTrack: 0, nearBreach: 0, breached: 0 });
};

exports.getSlaBreaches = async (req, res) => {
  res.json({ breaches: [] });
};
