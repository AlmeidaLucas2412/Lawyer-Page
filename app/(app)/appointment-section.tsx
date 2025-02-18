export const AppointmentSection = () => {
  return (
    <section
      className="relative flex flex-col px-4 py-8"
      style={{
        backgroundImage: "url('/appointment.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 bg-emphasis/70">{""}</div>
      <div className="z-20 flex flex-col gap-y-4">
        <span className="text-sm font-bold text-background/70">
          Booking an Appointment
        </span>
        <h2 className="text-4xl font-bold text-background">
          Free Consultation
        </h2>
        <form className="flex flex-col gap-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 bg-transparent border rounded-sm border-background"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 bg-transparent border rounded-sm border-background"
          />
          <input
            type="phone"
            placeholder="Your Phone Number"
            className="px-4 py-2 bg-transparent border rounded-sm border-background"
          />
          <textarea
            placeholder="Your Message"
            className="px-4 py-2 bg-transparent border rounded-sm border-background"
          />
          <button
            type="submit"
            className="p-3 rounded-sm bg-foreground text-background"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
