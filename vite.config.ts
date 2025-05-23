import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: false,
		outDir: 'build'
	},
	plugins: [react(), tsconfigPaths()],
	base: 'https://bhasling.github.io/hydroframe_demo/',
});
