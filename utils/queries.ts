const baseUrl = "http://localhost:4001";

export async function getHero() {
  const res = fetch(`${baseUrl}/hero`);

  return (await res).json();
}
