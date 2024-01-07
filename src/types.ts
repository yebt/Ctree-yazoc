export interface Link {
	title: string;
	description: string;
	link: string;
	type: "link" | "mail" | "tel",
	action: string;
}