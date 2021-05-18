import { renderHook } from "@testing-library/react-hooks";

import useDidUpdate from "./";

describe("useDidUpdate", () => {
  it("executes the handler after each render, except the first one", () => {
    const spy = jest.fn();

    const { rerender } = renderHook(() => useDidUpdate(spy));

    expect(spy).not.toHaveBeenCalled();

    rerender({ value: 1 });

    expect(spy).toHaveBeenCalledTimes(1);

    rerender({ value: 1 });

    expect(spy).toHaveBeenCalledTimes(2);

    rerender({ value: 2 });

    expect(spy).toHaveBeenCalledTimes(3);
  });

  it("executes the handler after each props changes, except the first one", () => {
    const spy = jest.fn();

    const { rerender } = renderHook((props) => useDidUpdate(spy, [props?.value]));

    expect(spy).not.toHaveBeenCalled();

    rerender({ value: 1 });

    expect(spy).toHaveBeenCalledTimes(1);

    rerender({ value: 1 });

    expect(spy).toHaveBeenCalledTimes(1);

    rerender({ value: 2 });

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it("runs the cleanup", () => {
    const onUpdate = jest.fn();
    const onUpdateCleanup = jest.fn();

    const { rerender } = renderHook(() => useDidUpdate(onUpdate, onUpdateCleanup));

    expect(onUpdate).not.toHaveBeenCalled();
    expect(onUpdateCleanup).not.toHaveBeenCalled();

    rerender({ value: 1 });

    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdateCleanup).not.toHaveBeenCalled();

    rerender({ value: 2 });

    expect(onUpdate).toHaveBeenCalledTimes(2);
    expect(onUpdateCleanup).toHaveBeenCalledTimes(1);

    rerender({ value: 2 });

    expect(onUpdate).toHaveBeenCalledTimes(3);
    expect(onUpdateCleanup).toHaveBeenCalledTimes(2);
  });

  it("runs the cleanup / 2", () => {
    const onUpdate = jest.fn();
    const onUpdateCleanup = jest.fn();

    const { rerender } = renderHook((props) => useDidUpdate(onUpdate, onUpdateCleanup, [props?.value]));

    expect(onUpdate).not.toHaveBeenCalled();
    expect(onUpdateCleanup).not.toHaveBeenCalled();

    rerender({ value: 1 });

    expect(onUpdate).toHaveBeenCalledTimes(1);
    expect(onUpdateCleanup).not.toHaveBeenCalled();

    rerender({ value: 2 });

    expect(onUpdate).toHaveBeenCalledTimes(2);
    expect(onUpdateCleanup).toHaveBeenCalledTimes(1);
  });
});
