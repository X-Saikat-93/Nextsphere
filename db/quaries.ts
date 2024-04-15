import { cache } from "react";
import db from "./drizzle";
import { revalidatePath } from "next/cache";

export const getCourses= cache(async () => {
    const data = await db.query.courses.findMany();
        revalidatePath("/courses")
    return data;
})