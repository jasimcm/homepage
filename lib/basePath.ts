export const BASE_PATH = "/homepage";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
