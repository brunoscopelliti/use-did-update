import { useEffect, useRef } from "react";

/**
 * React hook to handle componentDidUpdate lifecycle event.
 * @name useDidUpdate
 * @param {import("./index").Handler} onDidUpdate
 * @param {import("./index").Handler} [onDidUpdateCleanup]
 * @param {any[]} [params]
 */
const useDidUpdate =
  (onDidUpdate, onDidUpdateCleanup, params) => {
    if (Array.isArray(onDidUpdateCleanup)) {
      params = onDidUpdateCleanup;
      onDidUpdateCleanup = undefined;
    }

    const ref = useRef(false);

    useEffect(
      () => {
        if (ref.current) {
          onDidUpdate();

          if (typeof onDidUpdateCleanup == "function") {
            return () => {
              onDidUpdateCleanup();
            };
          }
        }

        ref.current = true;
      },
      params // eslint-disable-line react-hooks/exhaustive-deps
    );
  };

export default useDidUpdate;
