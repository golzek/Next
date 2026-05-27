import { getGlobalTag, getIdTag } from "@/lib/dataCache"
import { updateTag } from "next/cache"

export function getCourseGlobalTag() {
	return getGlobalTag("courses")
}

export function getCourseIdTag(id: string) {
	return getIdTag("courses", id)
}

export function revalidateCourseCache(id: string) {
	updateTag(getCourseGlobalTag())
	updateTag(getCourseIdTag(id))
}
