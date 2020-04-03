import awx2 from '@mmstudio/awx000002';

export default function get<T>(mm: awx2, key: string, default_value?: T) {
	const local = mm.data.local as { [key: string]: unknown; };
	return (local[key] as T) || default_value;
}
