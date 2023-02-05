/* eslint-disable react/require-default-props */
import { parseISO, format } from 'date-fns';

interface DateProps {
  dateString: string;
  inline?: boolean;
}
export default function Date({ dateString, inline = false }: DateProps) {
  const date = parseISO(dateString);
  return (
    <div
      className={`${
        inline ? 'inline' : 'block'
      } font-['SF_Compact_Text','SF_Pro_Text',-apple-system,BlinkMacSystemFont,'Inter','Segoe_UI',Roboto,Helvetica,Arial,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol'] text-sm font-medium uppercase text-zinc-600 dark:text-zinc-400`}
    >
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    </div>
  );
}
