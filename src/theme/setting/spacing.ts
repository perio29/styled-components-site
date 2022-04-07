const SPACE_UNIT = 8;
export const spacing = (...args: number[]) => {
  const unit = (v: number) => v * SPACE_UNIT;
  switch (args.length) {
    case 1:
      return `${unit(args[0])}px`;
    case 2:
      return [0, 1].map((n) => `${args[n] * SPACE_UNIT}px`).join(" ");
    case 3:
      return [0, 1, 2].map((n) => `${args[n] * SPACE_UNIT}px`).join(" ");
    case 4:
      return [0, 1, 2, 3].map((n) => `${args[n] * SPACE_UNIT}px`).join(" ");
    default:
      return "auto auto";
  }
};
