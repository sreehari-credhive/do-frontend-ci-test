export const classnames = (
  def = "",
  condition: Record<string, boolean> = {}
): string => {
  const res = [def];

  for (const key in condition) {
    if (condition[key]) {
      res.push(key);
    }
  }

  return res.join(" ");
};
