import '@/app/ui/global.css';
// #2-1-2. 폰트 불러오기
import { inter } from './ui/fonts';
export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      {/* #2-1-2. body 태그에 inter 폰트 적용 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
