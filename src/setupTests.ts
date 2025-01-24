import '@testing-library/jest-dom';
import './test/viteMock';

// Mock TextEncoder/TextDecoder
class MockTextEncoder {
  encode(input?: string): Uint8Array {
    return new Uint8Array(Buffer.from(input || ''));
  }
}

class MockTextDecoder {
  decode(input?: Uint8Array): string {
    return input ? Buffer.from(input).toString() : '';
  }
}

Object.defineProperty(window, 'TextEncoder', {
  value: MockTextEncoder
});

Object.defineProperty(window, 'TextDecoder', {
  value: MockTextDecoder
});
