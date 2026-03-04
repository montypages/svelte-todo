import { db } from "$lib/server/db";
import { schema } from "$lib/server/db/schema";

export const load = async () => {
    // Fetch todos from the database
    const allTodos = await db.select().from(todos);
    
    // Return them to the frontend
    return {
        todos: allTodos
    };
};