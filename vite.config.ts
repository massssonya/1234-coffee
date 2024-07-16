import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: "./",
	resolve: {
		alias: {
			"@": "/src",
			"@components": "/src/components",
			"@hooks": "/src/hooks",
			"@store": "/src/store",
			"@types": "/src/types",
			"@constants": "/src/constants",
			"@assets": "/src/assets"
		}
	}
});
