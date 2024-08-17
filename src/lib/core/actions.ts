import { toast } from './toast.js';
import type { ToastOptions } from './types.js';

export function fireAction<T extends HTMLElement>(
	node: T,
	message: string,
	toastOptions?: ToastOptions
) {
	let stop: () => void;

	function destroy() {}

	function update(message: string, toastOptions?: ToastOptions) {
		function handleClick() {
			toast(message, toastOptions);
		}

		node.addEventListener('click', handleClick);

		stop = () => {
			node.removeEventListener('click', handleClick);
		};
	}

	update(message, toastOptions);

	return {
		update,
		destroy
	};
}
