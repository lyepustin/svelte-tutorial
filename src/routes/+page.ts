import { redirect } from "@sveltejs/kit";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const { auth } = await parent();
  if (auth.currentUser) throw redirect(307, "/dashboard");
  throw redirect(307, "/login");
};
