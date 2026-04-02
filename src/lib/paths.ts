export function withBase(path: string) {
  const normalized = path === "/" ? "" : path.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
