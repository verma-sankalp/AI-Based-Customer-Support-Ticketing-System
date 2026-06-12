const routeTicket = (ticket) => {
  const text = `${ticket.subject} ${ticket.description}`.toLowerCase();

  if (text.includes("payment") || text.includes("billing")) return { category: "billing", department: "finance" };
  if (text.includes("login") || text.includes("password") || text.includes("account")) return { category: "account", department: "support" };
  if (text.includes("bug") || text.includes("error") || text.includes("crash")) return { category: "technical", department: "engineering" };

  return { category: "general", department: "support" };
};

module.exports = { routeTicket };
