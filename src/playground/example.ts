import { logger } from '../utils';

// This is an example playground file
async function playgroundExample(): Promise<void> {
  logger.info('Starting playground example');
  
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
  logger.info('Result:', { sum });
}

// Self-executing function to allow top-level await
(async () => {
  try {
    await playgroundExample();
  } catch (error) {
    logger.error('Playground example failed', { error });
  }
})();