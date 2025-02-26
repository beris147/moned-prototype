import { useState, startTransition } from 'react';

export type OptimisticActionFunction<T> = (
  newData: T
) => Promise<T | undefined>;

export function useOptimisticAction<T>(
  initialData: T | undefined,
  action: OptimisticActionFunction<T>
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
        }
      } catch (error) {
        // Revert the optimistic update on error
        setOptimisticData(data);
        console.error('Update failed:', error);
      } finally {
        setIsPending(false);
      }
    });
  };

  return [optimisticData, update, isPending];
}
