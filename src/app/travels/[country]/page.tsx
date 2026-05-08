export default async function TravelCountryPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  return <h1>Travel: {country}</h1>
}
