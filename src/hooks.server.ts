import {adminAuth, adminDB} from "$lib/server/admin"
import type { Handle } from "@sveltejs/kit"

export const handle = (async ({ event, resolve }) => {
    const sessionCookie = event.cookies.get("__session")

    try {
        const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!)
        event.locals.userId = decodedClaims.uid
        console.log("found user id", decodedClaims.uid)
    } catch (e) {
        event.locals.userId = null
        return resolve(event)
    }

    return resolve(event)
}) satisfies Handle