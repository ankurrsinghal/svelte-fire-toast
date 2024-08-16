import { get, writable } from 'svelte/store';
import type { Toast, ToastPosition, ToastType } from './types.js';

export const store = toastsStore();

const toastTimeouts = new Map<Toast['id'], ReturnType<typeof setTimeout>>();

export const TOAST_EXPIRE_DISMISS_DELAY = 1000;

function addToRemoveQueue(toastId: string) {
	if (toastTimeouts.has(toastId)) {
		return;
	}

	const timeout = setTimeout(() => {
		toastTimeouts.delete(toastId);
		store.removeToast(toastId);
	}, TOAST_EXPIRE_DISMISS_DELAY);

	toastTimeouts.set(toastId, timeout);
}

function clearFromRemoveQueue(toastId: string) {
	const timeout = toastTimeouts.get(toastId);
	if (timeout) {
		clearTimeout(timeout);
	}
}

function toastsStore() {
	const toastsWritable = writable<Toast[]>([]);

	function addToast(toast: Toast) {
		toastsWritable.update((toasts) => [toast, ...toasts]);
	}

	function updateToast(toast: Partial<Toast>) {
		if (toast.id) {
			clearFromRemoveQueue(toast.id);
		}

		toastsWritable.update((toasts) =>
			toasts.map((t) => (t.id === toast.id ? { ...t, ...toast } : t))
		);
	}

	function upsertToast(toast: Toast) {
		get(toastsWritable).find((t) => t.id === toast.id) ? updateToast(toast) : addToast(toast);
	}

	function dismissToast(toastId?: string) {
		const toasts = get(toastsWritable);
		// ! Side effects ! - This could be execrated into a dismissToast() action, but I'll keep it here for simplicity
		if (toastId) {
			addToRemoveQueue(toastId);
		} else {
			toasts.forEach((toast) => {
				addToRemoveQueue(toast.id);
			});
		}

		toastsWritable.update((toasts) =>
			toasts.map((t) =>
				t.id === toastId || toastId === undefined
					? {
							...t,
							visible: false
						}
					: t
			)
		);
	}

	function removeToast(toastId?: string) {
		if (toastId === undefined) {
			toastsWritable.set([]);
		}

		toastsWritable.update((toasts) => toasts.filter((t) => t.id !== toastId));
	}

	return {
		toasts: { subscribe: toastsWritable.subscribe },
		addToast,
		upsertToast,
		updateToast,
		dismissToast,
		removeToast
	};
}

export function updateHeight(toastId: string, height: number) {
	store.updateToast({ id: toastId, height });
}

export function calculateOffset(
	toast: Toast,
	opts?: {
		reverseOrder?: boolean;
		gutter?: number;
		defaultPosition?: ToastPosition;
	}
) {
	const toasts = get(store.toasts);
	const { reverseOrder = false, gutter = 8, defaultPosition } = opts || {};

	const relevantToasts = toasts.filter(
		(t) => (t.position || defaultPosition) === (toast.position || defaultPosition) && t.height
	);
	const toastIndex = relevantToasts.findIndex((t) => t.id === toast.id);
	const toastsBefore = relevantToasts.filter((toast, i) => i < toastIndex && toast.visible).length;
	console.log('relevantToastsrelevantToasts', relevantToasts);
	const offset = relevantToasts
		.filter((t) => t.visible)
		.slice(...(reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]))
		.reduce((acc, t) => acc + (t.height || 0) + gutter, 0);

	return offset;
}
