export function error(...args: Parameters<typeof console.error>) {
  console.error("@widgetbot/message-renderer:", ...args);
}
