const API_BASE_URL =
  process.env.API_BASE_URL ?? "http://localhost:8000";

type GetOptions = {
  searchParams?: Record<string, string | number>;
  revalidate?: number;
  cache?: RequestCache;
};

function buildUrl(path: string, searchParams?: Record<string, string | number>): string {
  const base = API_BASE_URL.replace(/\/$/, "");
  const pathNormalized = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(pathNormalized, base);

  if (searchParams && Object.keys(searchParams).length > 0) {
    for (const [key, value] of Object.entries(searchParams)) {
      url.searchParams.set(key, String(value));
    }
  }
  return url.toString();
}

async function get<T>(path: string, options?: GetOptions): Promise<T> {
  const url = buildUrl(path, options?.searchParams);

  const fetchOptions: RequestInit = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    ...(options?.cache !== undefined && { cache: options.cache }),
    ...(options?.revalidate !== undefined && {
      next: { revalidate: options.revalidate },
    }),
  };

  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export const http = {
  get,
};
