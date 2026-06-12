type Props = {
  subject: string;
  status: string;
  priority: string;
};

export default function TicketCard({ subject, status, priority }: Props) {
  return (
    <div>
      <h3>{subject}</h3>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
    </div>
  );
}
