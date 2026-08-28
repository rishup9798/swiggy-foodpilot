export function reportLovableError(
  error: unknown,
  context?: Record<string, unknown>,
): void {
  console.error("FoodPilot error:", error, context);
}