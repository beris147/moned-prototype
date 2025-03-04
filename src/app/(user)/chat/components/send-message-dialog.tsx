'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Provider } from '@/lib/gql/graphql';
import { Check, ChevronsUpDown, SquarePen } from 'lucide-react';
import React, { useEffect } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/ui/utils';
import { fetchFollowedProviders } from '@/app/providers/actions';
import { startChat } from '../actions';

type Props = {
  currentUserId: string;
};

export default function SendMessageDialog({ currentUserId }: Props) {
  const [open, setOpen] = React.useState(false);
  const [selectedProvider, setSelectedProvider] =
    React.useState<Provider | null>(null);
  const [followedProviders, setFollowedProviders] = React.useState<Provider[]>(
    []
  );
  useEffect(() => {
    if (!currentUserId) {
      return;
    }
    fetchFollowedProviders(currentUserId).then((response) => {
      setFollowedProviders(response.data.providers);
    });
  }, [currentUserId]);

  const handleStartChat = async () => {
    if (!selectedProvider) {
      return;
    }
    await startChat(currentUserId, selectedProvider.id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost'>
          <SquarePen size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Send message</DialogTitle>
          <DialogDescription>
            Send a message to any of the providers you follow
          </DialogDescription>
        </DialogHeader>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='w-full justify-between'
            >
              {selectedProvider
                ? followedProviders.find(
                    (provider) => provider.id === selectedProvider.id
                  )?.user?.full_name
                : 'Select provider...'}
              <ChevronsUpDown className='opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-full p-0'>
            <Command>
              <CommandInput placeholder='Search provider...' className='h-9' />
              <CommandList>
                <CommandEmpty>No provider found.</CommandEmpty>
                <CommandGroup>
                  {followedProviders.map((provider) => (
                    <CommandItem
                      key={provider.id}
                      value={provider.id}
                      onSelect={(currentValue) => {
                        setSelectedProvider(
                          followedProviders.find(
                            (provider) => provider.id === currentValue
                          ) ?? null
                        );
                        setOpen(false);
                      }}
                    >
                      {provider.user?.full_name}
                      <Check
                        className={cn(
                          'ml-auto',
                          selectedProvider?.id === provider.id
                            ? 'opacity-100'
                            : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <DialogFooter>
          <Button type='button' variant={'outline'} onClick={handleStartChat}>
            Start Chat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
