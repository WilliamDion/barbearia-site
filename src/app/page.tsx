import { supabase } from '../lib/supabase'

export default async function Home() {
  const { data: services, error } = await supabase
    .from('services')
    .select('*')

  if (error) {
    return <p className="p-10">Erro ao carregar serviços</p>
  }

  return (
    <main>
      {/* HERO */}
      <section className="relative h-[90vh] flex items-center justify-center bg-[url('/barber.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Barbearia Prime
          </h1>
          <p className="mt-6 text-zinc-300">
            Estilo, precisão e atitude.
          </p>
        </div>
      </section>

      {/* SERVIÇOS DO BANCO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Nossos Serviços
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services?.map(service => (
            <div
              key={service.id}
              className="rounded-2xl bg-zinc-900 overflow-hidden shadow-xl hover:scale-[1.03] transition"
            >
              <img
                src={service.image_url}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {service.name}
                </h3>
                <p className="text-zinc-400 mt-1">
                  {service.price} • {service.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
