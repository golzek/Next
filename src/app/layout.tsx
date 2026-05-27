import type { Metadata } from "next"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: "Course Platform",
	description: "Course Platform",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Suspense>
			<ClerkProvider>
				<html lang="en">
					<body className="antialiased">
						{children}
						<Toaster />
					</body>
				</html>
			</ClerkProvider>
		</Suspense>
	)
}
