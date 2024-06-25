export const buildEndpoint = (endpoint: string, params: Record<string, string | number> = {}) => {
  const baseUrl = import.meta.env.VITE_BASE_API_URL;
  const namespace = import.meta.env.VITE_API_NAMESPACE;
  const version = import.meta.env.VITE_API_VERSION;

  let url = `${baseUrl}/${namespace}/${version}/${endpoint}`;

  const queryParams = new URLSearchParams(params as Record<string, string>);
  if (queryParams.toString()) {
    url += `?${queryParams.toString()}`;
  }

  return url;
};
