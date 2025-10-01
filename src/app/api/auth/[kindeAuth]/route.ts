// app/api/auth/[...kinde]/route.ts (or wherever you call handleAuth)
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const runtime = "nodejs";           // 👈 ensure Node runtime
export const dynamic = "force-dynamic";    // avoid caching

export const GET = handleAuth();
export const POST = handleAuth();
