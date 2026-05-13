import { type ComponentProps } from "react";

function Table ({ className, ...props }: ComponentProps<'table'>) {
  return (
    <table
      className={`w-full ${className}`}
      {...props}
    />
  );
}

function TableHead (props: ComponentProps<'thead'>) {
  return <thead {...props}/>;
}

function TableBody (props: ComponentProps<'tbody'>) {
  return <tbody {...props}/>;
}

function TableRow (props: ComponentProps<'tr'>) {
  return <tr {...props}/>;
}

function TableHeader ({ className, ...props }: ComponentProps<'th'>) {
  return (
    <th
      className={`font-semibold text-center text-xs uppercase ${className}`}
      {...props}
    />
  );
}

function TableData ({ className, ...props }: ComponentProps<'td'>) {
  return <td className={className} {...props}/>
}

export {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableData,
};
