import { useRouter } from 'next/router';
import { userAgent } from 'next/server';
import UAParser from 'ua-parser-js';


export function height() {
  const router = useRouter();
  const parser = new UAParser(userAgent);
  // si es chrome mobile y brave mobile que devuelvan pb-60 si no nada
  const screenHeight = parser.getEngine().name === 'Blink' && parser.getDevice().type === 'mobile' ? 'pb-60' : '';

  return screenHeight;
}

