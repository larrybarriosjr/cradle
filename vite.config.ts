import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
	envPrefix: "CRADLE_",
	plugins: [react()],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src"),
		},
	},
})
