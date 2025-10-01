// app/whoami/page.tsx
export const dynamic = "force-dynamic";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function WhoAmI() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <pre className="p-4 text-sm">
      {JSON.stringify(user ?? { user: null }, null, 2)}
    </pre>
  );
}
