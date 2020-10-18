import useItems, { URL } from "./useItemsFetch";
import { renderHook, act } from "@testing-library/react-hooks";
import { initialItems } from "./testData";

/*
  As fetch is not available in node env -> we should mock it.
*/

function setFetchMockResolveTo(returnValue) {
  return jest
    .spyOn(window, "fetch")
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve(returnValue) })
    );
}

function setFetchMockRejectTo(returnValue) {
  return jest
    .spyOn(window, "fetch")
    .mockImplementation(() =>
      Promise.reject(returnValue)
    );
}


describe("custom hook with fetch call", () => {
  test("test success response", async () => {
    const mockFetch = setFetchMockResolveTo(initialItems);

    const { result, waitForNextUpdate } = renderHook(() => useItems());

    // fetch call did not finish yet
    expect(result.current.setItems).toBeDefined();
    expect(result.current.pending).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.items).toEqual([]);

    // wait react next cycle
    await waitForNextUpdate();

    // setItem triggered, hook returns with proper value
    expect(result.current.items).toEqual(initialItems);
    expect(result.current.pending).toBe(false);
    expect(result.current.error).toBeNull();

    expect(mockFetch).toHaveBeenCalledWith(URL);
  });

  test("test error response", async () => {
    const errorObj = { status: 400, error: 'Internal error'};
    const mockFetch = setFetchMockRejectTo(errorObj);

    const { result, waitForNextUpdate } = renderHook(() => useItems());

    await waitForNextUpdate();

    expect(mockFetch).toHaveBeenCalledWith(URL);
    expect(result.current.error).toEqual(errorObj);
    expect(result.current.pending).toBe(false);
    expect(result.current.items).toEqual([]);

  });
});
