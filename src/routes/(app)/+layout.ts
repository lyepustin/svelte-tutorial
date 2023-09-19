import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load = (async ({ parent }) => {
  const data = await parent();

  console.log(data.auth.currentUser);
  if (!data.auth.currentUser) throw redirect(307, "/login");
  
  return data;
}) satisfies LayoutLoad;