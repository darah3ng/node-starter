import { config } from './config';
import { logger } from './utils';

function main(): void {
  try {
    logger.info('Application starting...', { config });
    // Your application code here
  } catch (error) {
    logger.error('Application failed to start', { error });
    process.exit(1);
  }
}

main();
