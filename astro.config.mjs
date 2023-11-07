import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'An Exeter CSC Guide',
			social: {
				github: 'https://github.com/charizardavi',
			},

			sidebar: [
				{
					label: 'The Basics',
					items: [
						{ label: 'Starting Out', link: '/unit_1/starting_out/' },
						{ label: 'Hello World', link: '/unit_1/hello_world/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Second thing', link: '/reference/starting_out/' },
					],
				},
			],
		}),
	],
});
