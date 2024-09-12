export default function Servicos() {
  const services = [
    {
      name: 'Tatuagens Personalizadas',
      content:
        'Oferecemos a criação de tatuagens personalizadas, onde cada design é desenvolvido em colaboração direta com o cliente. A partir de uma ideia inicial, trabalhamos juntos para criar uma obra de arte única que reflete sua personalidade e sentimentos.',
    },
    {
      name: 'Cover-Up',
      content:
        'Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte. Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajudá-lo a reformulá-la com um design criativo e original.',
    },
    {
      name: 'Restauração',
      content:
        'Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que ela volte a ter a aparência de quando foi feita pela primeira vez.',
    },
    {
      name: 'Henna',
      content:
        'Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que duram de algumas semanas a alguns meses.',
    },
  ];

  return (
    <main className="px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-3xl font-black text-yellow-300 mt 12 py-10">Serviços</h1>
      <section className="flex md:flex-row flex-col gap-12 mt-16">
        {services.map((service) => (
          <article key={service.name}>
            <h2 className="font-black text-white text-lg mb-4">
              {service.name}
            </h2>
            <p className="font-extralight text-zinc-400 text-sm">
              {service.content}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
