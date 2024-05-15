import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function withAsync(fn: () => Promise<any>) {
  try {
    if (typeof fn !== "function") {
      throw new Error("The arg. must be a function.");
    }
    const { data } = await fn();
    const isError = data.error;
    if (isError) {
      throw new Error(data.message);
    }
    return {
      response: data,
      error: null,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message = err.response?.data.message || "Error.";
      return {
        error: message,
        response: null,
      };
    }
    return {
      error: err,
      response: null,
    };
  }
}

export function createOptionValueKey(arr: [], key: string, value: string) {
  return arr.map((item) => ({ label: item[key], value: item[value] }));
}

export function renderBase64AsSrc(base64: string, mimetype: string) {
  return `data:${mimetype};base64,${base64}`;
}
