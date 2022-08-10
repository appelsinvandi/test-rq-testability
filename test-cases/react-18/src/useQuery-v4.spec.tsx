import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { renderHook, WrapperComponent } from '@testing-library/react-hooks'
import { PropsWithChildren } from 'react'

test('useQuery', async () => {
  const queryClient = new QueryClient()
  const wrapper: WrapperComponent<PropsWithChildren<unknown>> = ({
    children,
  }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )

  const { result, waitFor } = renderHook(
    () => useQuery(['hello'], () => 'Hello'),
    { wrapper }
  )

  await waitFor(() => result.current.isSuccess)

  expect(result.current.data).toEqual('Hello')
})
