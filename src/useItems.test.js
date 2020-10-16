import useItems from './useItems';
import {renderHook, act} from '@testing-library/react-hooks';

jest.useFakeTimers('modern')
/*
test('init', () => {
  const { result } = renderHook(() => useItems());

  expect(result.current.setItems).toBeDefined();
  expect(result.current.items).toEqual([]);
});
*/
test('async finished', async()=>{
    const { result, waitForNextUpdate } = renderHook(() => useItems());

    
    jest.runAllTimers();    
    await waitForNextUpdate()

    expect(result.current.items).toEqual([
            {
             "id": "1",
             "text": "strawberry",
           },
            {
             "id": "2",
             "text": "pear",
           },
            {
             "id": "3",
             "text": "apple",
           },
            {
             "id": "4",
             "text": "grape",
           },
         ]);
});


