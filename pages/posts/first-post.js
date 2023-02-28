import Link from 'next/link';
import Script from 'next/script';
import Head from 'next/head';
import Layout from '@/components/layout';

export default function FirstPost() {
  return(
  <>
  <Head> <title>   first post  </title>  </Head> <h1>First Post </h1>
  <h2>  <Link href="/"> Back to home </Link> </h2> </>);
}