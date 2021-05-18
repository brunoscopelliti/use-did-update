export type Handler = () => void;

export function useDidUpdate(
  onDidUpdate : Handler,
) : void;

export function useDidUpdate(
  onDidUpdate : Handler,
  onDidUpdateCleanup : Handler,
  params ?: any[]
) : void;

export function useDidUpdate(
  onDidUpdate : Handler,
  params : any[]
) : void;

export default useDidUpdate;
