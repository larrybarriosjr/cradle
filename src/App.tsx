import { TanstackQueryProvider } from "~/lib/tanstack-query"
import SamplePage from "~/pages/SamplePage"

function App() {
	return (
		<TanstackQueryProvider>
			<SamplePage />
		</TanstackQueryProvider>
	)
}

export default App
