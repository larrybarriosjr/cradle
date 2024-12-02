import useSampleStore from "~/store/sample"

const SamplePage = () => {
	const [addSample] = useSampleStore((state) => [state.addSample])

	return <button onClick={() => addSample("a")}>Hi</button>
}

export default SamplePage
