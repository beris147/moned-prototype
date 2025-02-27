import { useState, startTransition } from 'react';

export type OptimisticActionFunction<T> = (
  newData: T
) => Promise<T | undefined>;

export type OptimisticAfterActions<T> = {
  onSuccess?: (data: T) => void;
  onError?: (error: unknown) => void;
  onFinally?: () => void;
};

export function useOptimisticAction<T>(
  initialData: T | undefined,
  action: OptimisticActionFunction<T>,
  { onSuccess, onError, onFinally }: OptimisticAfterActions<T> = {}
): [T | undefined, (newData: T) => void, boolean] {
  const [data, setData] = useState<T | undefined>(initialData);
  const [optimisticData, setOptimisticData] = useState<T | undefined>(data);
  const [isPending, setIsPending] = useState(false);

  const update = (newData: T) => {
    // Optimistically update the UI
    setOptimisticData(newData);
    setIsPending(true);

    startTransition(async () => {
      try {
        const updatedData = await action(newData);
        // Update the actual data on success
        if (updatedData) {
          setData(updatedData);
          setOptimisticData(updatedData);
          onSuccess?.(updatedData);
        }
      } catch (error) {
        // Revert the optimistic update on error
        setOptimisticData(data);
        onError?.(error);
        console.error('Update failed:', error);
      } finally {
        setIsPending(false);
        onFinally?.();
      }
    });
  };

  return [optimisticData, update, isPending];
}
