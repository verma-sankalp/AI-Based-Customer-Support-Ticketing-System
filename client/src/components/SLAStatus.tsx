export default function SLAStatus({
  due,
  breached
}: {
  due: string;
  breached: boolean;
}) {
  return (
    <div>
      <p>SLA Due: {due}</p>
      <p>{breached ? "Breached" : "On Track"}</p>
    </div>
  );
}
