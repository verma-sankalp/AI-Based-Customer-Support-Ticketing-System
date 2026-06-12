type Ticket = {
  _id: string;
  subject: string;
  status: string;
  priority: string;
};

export default function TicketTable({ tickets }: { tickets: Ticket[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket._id}>
            <td>{ticket.subject}</td>
            <td>{ticket.status}</td>
            <td>{ticket.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
