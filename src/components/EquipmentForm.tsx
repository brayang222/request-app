"use client";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEquipmentForm } from "@/hooks/useEquipmentForm";

const EquipmentForm = () => {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    submitAndRedirect,
    router,
  } = useEquipmentForm();

  return (
    <section className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in bg-card shadow-elegant rounded-2xl p-8 space-y-6 border border-border/50 backdrop-blur-sm">
        <Button className="cursor-pointer" onClick={() => router.push("/")}>
          <ArrowLeft />
        </Button>
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold bg-black bg-clip-text text-transparent">
            Solicitud de Equipo
          </h2>
          <p className="text-muted-foreground">
            Complete el formulario para solicitar su equipo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2 animate-slide-up">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-foreground"
            >
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 hover:shadow-soft"
              placeholder="Ingrese su nombre completo"
              required
            />
          </div>

          <div className="space-y-2 animate-slide-up">
            <label
              htmlFor="position"
              className="block text-sm font-semibold text-foreground"
            >
              Cargo *
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 hover:shadow-soft"
              placeholder="Ingrese su cargo o posición"
              required
            />
          </div>

          <div className="space-y-2 animate-slide-up">
            <label
              htmlFor="equipment"
              className="block text-sm font-semibold text-foreground"
            >
              Equipo Solicitado *
            </label>
            <div className="relative">
              <select
                id="equipment"
                name="equipment"
                value={formData.equipment}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 hover:shadow-soft appearance-none cursor-pointer"
                required
              >
                <option value="" disabled>
                  Seleccione un equipo
                </option>
                {["⌨️ Teclado", "🖥️ Monitor", "💻 Portátil", "🖱️ Ratón"].map(
                  (option) => {
                    const value = option.replace(/^[^\w]+ /, "");
                    return (
                      <option key={value} value={value}>
                        {option}
                      </option>
                    );
                  }
                )}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-auto">
                <ChevronDown />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="justification"
              className="block text-sm font-semibold text-foreground"
            >
              Justificación *
            </label>
            <textarea
              id="justification"
              name="justification"
              value={formData.justification}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-all duration-200 hover:shadow-soft"
              placeholder="Explique detalladamente por qué necesita este equipo y cómo lo utilizará en sus funciones laborales..."
              required
              minLength={10}
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="cursor-pointer bg-black w-full bg-gradient-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold shadow-elegant hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              📩 Enviar
            </button>
            <button
              type="submit"
              className="cursor-pointer bg-black w-full bg-gradient-primary text-primary-foreground py-3 px-6 rounded-xl font-semibold shadow-elegant hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              onClick={submitAndRedirect}
            >
              📩 Enviar y volver
            </button>
          </div>
        </form>

        <div className="text-center text-xs text-muted-foreground">
          <p>Todos los campos son obligatorios</p>
        </div>
      </div>
    </section>
  );
};

export default EquipmentForm;
