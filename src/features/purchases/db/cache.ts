import { getGlobalTag, getIdTag, getUserTag } from "@/lib/dataCache"
import { updateTag } from "next/cache"

export function getPurchaseGlobalTag() {
	return getGlobalTag("purchases")
}

export function getPurchaseIdTag(id: string) {
	return getIdTag("purchases", id)
}

export function getPurchaseUserTag(userId: string) {
	return getUserTag("purchases", userId)
}

export function revalidatePurchaseCache({
	id,
	userId,
}: {
	id: string
	userId: string
}) {
	updateTag(getPurchaseGlobalTag(), "max")
	updateTag(getPurchaseIdTag(id), "max")
	updateTag(getPurchaseUserTag(userId), "max")
}
