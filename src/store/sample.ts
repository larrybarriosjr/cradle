import createStore from "~/lib/zustand/utils"

type SampleState = {
	sample: string[]
	addSample: (sample: string) => void
}

export const useSampleStore = createStore<SampleState>((set, get) => ({
	sample: [],
	addSample: (sample: string) => {
		set((state) => {
			state.sample.push(sample)
		})
		console.log(get().sample)
	},
}))
