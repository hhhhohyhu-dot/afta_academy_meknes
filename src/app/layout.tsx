import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'أكاديمية AFTA - التكوين في الطيران والمجال البحري',
  description: 'أكاديمية AFTA مؤسسة معتمدة توفر تكوينات مهنية عالمية في مجال الطيران والبحر بالمغرب. انضم إلينا اليوم لتحقيق مسار مهني متميز.',
  keywords: 'أكاديمية الطيران, تكوين مهني, AFTA, الطيران, الملاحة البحرية, المغرب',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}