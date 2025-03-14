import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<SignedIn>
				<p>Client Logged in</p>
				<Outlet />
			</SignedIn>
			<SignedOut>
				<p>Please log in</p>
			</SignedOut>
		</>
	);
}
