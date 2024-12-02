import useSampleQuery from "~/hooks/useSampleQuery"
import useSampleStore from "~/store/sample"

const SamplePage = () => {
	const { data, isLoading } = useSampleQuery()
	const [addSample] = useSampleStore((state) => [state.addSample])

	console.log(isLoading ? "loading..." : data)

	return <button onClick={() => addSample("a")}>Hi</button>
}

export default SamplePage
