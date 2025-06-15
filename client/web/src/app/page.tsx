import Link from 'next/link'
export default function Home() {
  return (
    <>
      Main page
      <Link href={'/order'} > order </Link>
    </>
  );
}
