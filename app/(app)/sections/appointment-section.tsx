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
        <span className="text-sm font-bold text-emphasis">
          Booking an Appointment
        </span>
        <h2 className="text-4xl font-bold text-background">
          Free Consultation
        </h2>
        <form className="flex flex-col gap-y-3 text-background">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <input
            type="phone"
            placeholder="Your Phone Number"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 bg-transparent border rounded-sm border-background placeholder:text-background focus:outline-none"
          />
          <button
            type="submit"
            className="p-3 rounded-sm bg-emphasis text-background"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
