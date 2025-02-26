import {
  DefaultValues,
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import {
  OptimisticActionFunction,
  OptimisticAfterActions,
  useOptimisticAction,
} from './use-optimistic-action';

export function useOptimisticForm<T extends FieldValues>(
  initialData: T | undefined,
  action: OptimisticActionFunction<T>,
  afterActions: OptimisticAfterActions<T> = {}
): {
  form: {
    register: UseFormRegister<T>;
    handleSubmit: UseFormHandleSubmit<T, undefined>;
    reset: () => void;
  };
  formData: T | undefined;
  submit: (newData: T) => void;
  isPending: boolean;
} {
  const [formData, updateFormData, isPending] = useOptimisticAction(
    initialData,
    action,
    afterActions
  );
  const defaultValues = formData as DefaultValues<T>;
  const { register, handleSubmit, reset } = useForm<T>({
    defaultValues,
  });

  const submit = (newFormData: T) => {
    updateFormData(newFormData);
  };

  const onReset = () => {
    reset(formData);
  };

  return {
    form: {
      register,
      handleSubmit,
      reset: onReset,
    },
    submit,
    isPending,
    formData,
  };
}
