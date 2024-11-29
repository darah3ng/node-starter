import { config } from '../src/config';

describe('Config', () => {
  it('should have default values', () => {
    expect(config.nodeEnv).toBeDefined();
    expect(config.port).toBeDefined();
    expect(config.logLevel).toBeDefined();
  });
});
