import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
}
export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return (
    <time
      dateTime={dateString}
      className="font-semibold text-zinc-600 dark:text-zinc-300"
    >
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}
