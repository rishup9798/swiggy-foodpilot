let lastCapturedError: unknown;

const originalError = console.error;

console.error = (...args: unknown[]) => {
  if (args.length > 0) {
    lastCapturedError = args[0];
  }

  originalError(...args);
};

export function consumeLastCapturedError(): unknown {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}