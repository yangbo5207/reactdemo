import { unstable_withSuspenseConfig, useState, useCallback } from 'react'

// based on https://github.com/facebook/relay/commit/1befdc085bceef5c78f8eb8c2117459ce4b9d7c7#diff-c8dcd2c1e7d048e3b69a8538434cbca4

export function useSuspenseTransition(config) {
  const [isPending, setPending] = useState(false);
  const startTransition = useCallback(
    (callback) => {
      setPending(true);
      Scheduler.unstable_next(() => {
        unstable_withSuspenseConfig(() => {
          setPending(false);
          callback();
        }, config);
      });
    },
    [config, setPending],
  );
  return [startTransition, isPending];
}
