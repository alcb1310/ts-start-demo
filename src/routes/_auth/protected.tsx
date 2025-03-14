import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/protected")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>Authentiated page contents should only display if its logged in</div>
	);
}
