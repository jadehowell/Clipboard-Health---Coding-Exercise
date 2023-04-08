const { deterministicPartitionKey } = require('./index');

describe('deterministicPartitionKey', () => {
  it('should return a partition key from event', () => {
    const event = {
      name: 'John',
      age: 30,
    };
    const partitionKey = deterministicPartitionKey(event);
    expect(typeof partitionKey).toBe('string');
    expect(partitionKey).toHaveLength(128);
  });

  it('should return partition key from event partitionKey', () => {
    const event = {
      partitionKey: '123',
    };
    const partitionKey = deterministicPartitionKey(event);
    expect(typeof partitionKey).toBe('string');
    expect(partitionKey).toBe('123');
  });

  it('should return a hash if partition key length > 256', () => {
    const data = {
      long: 'a'.repeat(300),
    };
    const partitionKey = deterministicPartitionKey(data);
    expect(typeof partitionKey).toBe('string');
    expect(partitionKey).toHaveLength(128);
  });

  it('should return a hash if event is empty', () => {
    const partitionKey = deterministicPartitionKey();
    expect(typeof partitionKey).toBe('string');
    expect(partitionKey).toHaveLength(128);
  });
});
