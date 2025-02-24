export const AppointmentSection = () => {
  return (
    <section
      className="relative flex flex-col px-4 py-8 xl:py-24"
      style={{
        backgroundImage: "url('/appointment.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      id="appointment"
    >
      <div className="absolute inset-0 z-10 bg-foreground/80 xl:w-1/2 xl:left-1/2">
        {""}
      </div>
      <div className="z-20 flex flex-col gap-y-4 xl:self-end xl:w-1/2 xl:px-4">
        <span className="text-sm font-bold text-emphasis uppercase">
          Agende uma consulta
        </span>
        <h2 className="text-4xl font-bold text-background">
          Consulta Gratuita
        </h2>
        <form className="flex flex-col gap-y-3 text-background">
          <input
            type="text"
            placeholder="Nome"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <input
            type="phone"
            placeholder="Telefone"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <textarea
            placeholder="Breve Descrição"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <button
            type="submit"
            className="p-3 rounded-sm bg-emphasis text-background"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
