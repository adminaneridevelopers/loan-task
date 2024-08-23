import { useToast as usePrimeToast } from 'primevue/usetoast';

export function useToast() {
  const toast = usePrimeToast();

  const success = (message?: string, life?: number) => {
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: message || 'Success',
      life:  life !== undefined ? life : 3000,
    });
  };

  const error = (message?: string, life?: number) => {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: message || 'Something went wrong',
      life:  life !== undefined ? life : 15000,
    });
  };

  return {
    success,
    error,
    add: toast.add,
  };
}
