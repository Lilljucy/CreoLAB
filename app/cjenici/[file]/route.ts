import { CSV_FILENAME, csvResponse } from "@/lib/priceCsv";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ file: CSV_FILENAME }];
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  if (file !== CSV_FILENAME) return new Response("Not found", { status: 404 });
  return csvResponse();
}
