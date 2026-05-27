import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { updateTag } from "next/cache"

export function getUserGlobalTag() {
	return getGlobalTag("users")
}

export function getUserIdTag(id: string) {
	return getIdTag("users", id)
}

export function revalidateUserCache(id: string) {
	updateTag(getUserGlobalTag())
	updateTag(getUserIdTag(id))
}
