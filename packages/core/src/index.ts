import { internalFunction } from "@chfoidl/internal";

export function publicFunction() {
  const a = 5;
  const b = 10;

  const result = internalFunction(a, b);

  console.log(result);
}
