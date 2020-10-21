import useItems from "./useItemsTimeout";
import { renderHook, act } from "@testing-library/react-hooks";
import { initialItems } from '../mocks/testData';

describe("custom hook with setTimeout", () => {
  test("init", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useItems());

    // sessionTimer did not run yet
    expect(result.current.setItems).toBeDefined();
    expect(result.current.items).toEqual([]);

    // wait for sessionTimer to expire and trigger react cycle
    await waitForNextUpdate();

    // setItem triggered, hook returns with proper value
    expect(result.current.items).toEqual(initialItems);
  });
});
