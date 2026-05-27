import arcjet, { detectBot, shield, slidingWindow } from "@arcjet/next"
import { env } from "@/data/env/server"
import { NextRequest, NextResponse } from "next/server"

const aj = arcjet({
    key: env.ARCJET_KEY,
    rules: [
        shield({ mode: "LIVE" }),
        detectBot({
            mode: "LIVE",
            allow: ["CATEGORY:SEARCH_ENGINE", "CATEGORY:MONITOR", "CATEGORY:PREVIEW"],
        }),
        slidingWindow({
            mode: "LIVE",
            interval: "1m",
            max: 100,
        }),
    ],
})

export async function withArcjet(req: NextRequest): Promise<NextResponse | null> {
    const decision = await aj.protect(
        env.TEST_IP_ADDRESS
            ? { ...req, ip: env.TEST_IP_ADDRESS, headers: req.headers }
            : req
    )

    if (decision.isDenied()) {
        return new NextResponse(null, { status: 403 })
    }

    return null
}