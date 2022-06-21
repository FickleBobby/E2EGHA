import { defineConfig } from "cypress";

export default defineConfig({

	projectId: "f67wwz",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "http://localhost:4200/",

	},
});
