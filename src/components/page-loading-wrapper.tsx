'use client';

import React from 'react';

import { useLoading } from '@/utils/hooks/use-loading';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoadingWrapper({
  children,
}: React.PropsWithChildren) {
  const { loading } = useLoading();
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key='loading'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='loading-spinner'
          >
            <div className='spinner'></div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
