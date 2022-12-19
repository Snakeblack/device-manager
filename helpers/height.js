import { useRouter } from 'next/router';
import { userAgent } from 'next/server';
import UAParser from 'ua-parser-js';


export function height() {
  const router = useRouter();
  const parser = new UAParser(userAgent);
  const screenHeight = parser.getDevice().model === 'Android' ? 'pb-45' : '';

  return screenHeight;
}

