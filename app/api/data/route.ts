export async function GET() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/some-endpoint`);
  const data = await res.json();
  return Response.json(data);
}