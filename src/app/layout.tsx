import type { Metadata } from 'next';
import '@/lib/tailwind.css';

export const metadata: Metadata = {
  title: 'React Todos',
  description: 'A React Todos built with Next.js & Tailwind CSS',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  );
}
