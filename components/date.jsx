import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="font-bold text-zinc-400">
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}
