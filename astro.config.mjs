// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Nutshell Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iaminfinityiq/nutshell' }, { icon: 'discord', label: 'Discord', href: 'https://discord.gg/ZnxDGkJ33a'}, { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61573947252149'}],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
