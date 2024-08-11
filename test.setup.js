import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

//mock intersection observer
global.IntersectionObserver = vi.fn().mockReturnValue({
  observe: () => null,
  disconnect: () => null
})