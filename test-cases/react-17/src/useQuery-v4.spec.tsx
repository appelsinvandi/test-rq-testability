import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { renderHook, WrapperComponent } from "@testing-library/react-hooks";

test("useQuery", async () => {
  const queryClient = new QueryClient();
  const wrapper: WrapperComponent<unknown> = ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const { result, waitFor } = renderHook(
    () => useQuery(["hello"], () => "Hello"),
    { wrapper }
  );

  await waitFor(() => result.current.isSuccess);

  expect(result.current.data).toEqual("Hello");
});
