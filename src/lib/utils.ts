export async function getRandomNorris(): Promise<{id: string; value: string}> {
  const result = await fetch("https://api.chucknorris.io/jokes/random");
  const { id, value } = await result.json();
  return { id, value };
}