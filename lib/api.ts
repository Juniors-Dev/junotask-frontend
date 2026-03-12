import { ENTRYPOINT } from "../config/entrypoint";

const API_BASE = `${ENTRYPOINT}/api`;

export function del<T>(path: string) {
  return fetchApi<T>(path, {
    method: "DELETE",
  });
}

export function put<T>(path: string, body?: object) {
  return fetchApi<T>(path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify(body),
  });
}

export function get<T>(path: string) {
  return fetchApi<T>(path, {
    method: "GET",
  });
}

export function post<T>(path: string, body?: object) {
  return fetchApi<T>(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/ld+json",
    },
    body: JSON.stringify(body),
  });
}

export function patch<T>(path: string, body?: object) {
  return fetchApi<T>(path, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/merge-patch+json",
    },
    body: JSON.stringify(body),
  });
}

async function fetchApi<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, options);
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
