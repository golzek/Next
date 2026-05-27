import { getGlobalTag, getIdTag, getUserTag } from "@/lib/dataCache"
import { updateTag } from "next/cache"

export function getUserCourseAccessGlobalTag() {
	return getGlobalTag("userCourseAccess")
}

export function getUserCourseAccessIdTag({
	courseId,
	userId,
}: {
	courseId: string
	userId: string
}) {
	return getIdTag("userCourseAccess", `course:${courseId}-user:${userId}`)
}

export function getUserCourseAccessUserTag(userId: string) {
	return getUserTag("userCourseAccess", userId)
}

export function revalidateUserCourseAccessCache({
	courseId,
	userId,
}: {
	courseId: string
	userId: string
}) {
	updateTag(getUserCourseAccessGlobalTag(), "max")
	updateTag(getUserCourseAccessIdTag({ courseId, userId }), "max")
	updateTag(getUserCourseAccessUserTag(userId), "max")
}
