import { useSampleStore } from "~/store/sample"

function App() {
	const [addSample] = useSampleStore((state) => [state.addSample])

	return <button onClick={() => addSample("a")}>Hi</button>
}

export default App
