import Swal, { SweetAlertOptions } from "sweetalert2";

export const createAlertError = (err: Error, title: string) => {
  const errorMessage =
    err instanceof Error ? err.message : "An unexpected error occurred.";
  Swal.fire({
    title,
    text: errorMessage,
    icon: "error",
    timer: 2000,
  });
};

export const createAlert = (options: SweetAlertOptions) => Swal.fire(options);
