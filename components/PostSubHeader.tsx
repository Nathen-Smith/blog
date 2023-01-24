/* eslint-disable react/require-default-props */
import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
  estimatedTime?: number;
}
export default function PostTimeData({ dateString, estimatedTime }: DateProps) {
  const date = parseISO(dateString);
  return (
    <span className="font-semibold text-zinc-600 dark:text-zinc-300">
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
      {estimatedTime && <span>{` — ${estimatedTime} min read`}</span>}
    </span>
  );
}
