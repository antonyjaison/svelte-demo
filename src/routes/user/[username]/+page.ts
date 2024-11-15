import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.username) {
		return {
			title: 'Hello ' + params.username,
			content: 'This is a sample page for ' + params.username
		};
	}

	error(404, 'Not found');
};