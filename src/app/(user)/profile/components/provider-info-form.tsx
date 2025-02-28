'use client';
import React from 'react';

import { ProviderUpdateInput } from '@/lib/gql/graphql';
import { updateProviderData } from '../actions';
import { useOptimisticForm } from '@/utils/hooks/use-optimistic-form';
import useToggle from '@/utils/hooks/use-toggle';
import LabelInput from '@/components/ui/label-input';
import { Button } from '@/components/ui/button';
import Form from '@/components/ui/form';

type Props = {
  provider: ProviderUpdateInput;
};

export default function ProviderInfoForm({ provider }: Props) {
  const [disabled, toggleDisabled] = useToggle(true);
  const {
    form: { register, handleSubmit, reset },
    submit,
  } = useOptimisticForm(provider, updateProviderData);

  const onSubmit = (newData: ProviderUpdateInput) => {
    submit(newData);
    toggleDisabled();
  };

  const onReset = () => {
    reset();
    toggleDisabled();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} title={''} description={''}>
      <LabelInput
        label={'Cedula'}
        register={register}
        name={'cedula'}
        disabled={disabled}
      />
      <LabelInput
        label={'Profesional Degree'}
        register={register}
        name={'degree'}
        disabled={disabled}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        {disabled ? (
          <Button onClick={toggleDisabled} type='button'>
            Edit
          </Button>
        ) : (
          <>
            <Button onClick={onReset} type='reset' variant='outline'>
              Cancel
            </Button>
            <Button type='submit'>Save</Button>
          </>
        )}{' '}
      </div>
    </Form>
  );
}
