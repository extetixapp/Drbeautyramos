'use client';
import { useState } from "react";
import { Instagram, Facebook, Menu, X, MessageCircle, MapPin, Clock, Calendar, CheckCircle, Award, CreditCard } from "lucide-react";
import CalendlyWidget from "../../components/CalendlyWidget";

// ✅ Definimos la constante aquí arriba
const WHATSAPP_NUMBER = "5491155044320"; 

export default function BotoxPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C]">
      
      {/* BOTÓN WHATSAPP FLOTANTE (Ahora sí, dentro del contenedor main) */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola! Vengo desde la web de Extetix y me gustaría realizar una consulta.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </a>
      {/* NAVBAR - ✅ LOGO AGRANDADO */}
      <nav className="bg-white py-5 px-6 border-b border-[#D4C5A1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
         {/* ✅ LOGO CON IMAGEN - REDONDO Y PREMIUM */}
<div className="flex flex-col items-start">
  <img 
    src="/logo.jpeg" 
    alt="Extetix" 
    className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover aspect-square border border-[#C5A059]/30 shadow-md"
  />
</div>
          
          <div className="hidden md:flex items-center gap-10 text-[10px] font-normal uppercase tracking-[0.3em] text-[#C5A059]">
            <a href="#quienes-somos" className="hover:text-[#2C3E2D] transition duration-500">Quiénes Somos</a>
            <a href="#tratamientos" className="hover:text-[#2C3E2D] transition duration-500">Nuestros Tratamientos</a>
            <a href="#contacto" className="hover:text-[#2C3E2D] transition duration-500">Contacto</a>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5 text-[#C5A059]">
              <a href="https://www.instagram.com/extetix.original?igsh=MXUzdTMxbzZyMW1raA==" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C3E2D] transition duration-500" aria-label="Instagram"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="https://www.facebook.com/share/14jGqr89t5t/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2C3E2D] transition duration-500" aria-label="Facebook"><Facebook size={20} strokeWidth={1.5} /></a>
            </div>
            <button 
              className="md:hidden text-[#C5A059]" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#D4C5A1] py-6 flex flex-col items-center gap-5 text-[10px] font-normal uppercase tracking-[0.3em] text-[#C5A059]">
            <a href="#quienes-somos" onClick={() => setIsMenuOpen(false)}>Quiénes Somos</a>
            <a href="#tratamientos" onClick={() => setIsMenuOpen(false)}>Nuestros Tratamientos</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-[#C5A059] mb-6">Tu mejor versión, con total naturalidad.</h1>
          <p className="text-lg text-[#555] mb-8 leading-relaxed">
            Redescubrí la frescura de tu mirada. Un tratamiento diseñado para suavizar las huellas del tiempo, preservando la esencia y expresividad de tu rostro.
          </p>
          
          <div className="space-y-4 text-sm uppercase tracking-widest text-[#2C2C2C]">
            <p className="flex items-center gap-3"><CheckCircle size={18} className="text-[#C5A059]"/> Evaluación médica sin cargo</p>
            <p className="flex items-center gap-3"><Clock size={18} className="text-[#C5A059]"/> Sesión de 30 minutos</p>
            <p className="flex items-center gap-3"><Calendar size={18} className="text-[#C5A059]"/> Resultados visibles por 6 a 9 meses</p>
            <p className="flex items-center gap-3"><CreditCard size={18} className="text-[#C5A059]"/> Financiación en cuotas</p>
          </div>
        </div>
        <img src="/inyecbtx.jpg" alt="Tratamiento Facial" className="rounded-2xl shadow-xl w-full" />
      </section>

      {/* DECLARACIÓN DE CONFIANZA */}
      <section className="bg-[#2C3E2D] py-16 px-6 text-white text-center">
        <Award size={40} className="mx-auto mb-6 text-[#C5A059]" />
        <p className="max-w-3xl mx-auto font-serif text-xl italic">
          Contamos con un staff estable de cirujanos plásticos para que te acompañen en cada decisión, brindándote la seguridad y excelencia que tu salud merece.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center px-6">
        {!showCalendar ? (
          <button 
            onClick={() => setShowCalendar(true)}
            className="border border-[#C5A059] text-[#C5A059] px-12 py-5 uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all duration-500"
          >
            Quiero reservar mi evaluación
          </button>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[#C5A059] mb-10">Elegí el momento para tu transformación</h2>
            <CalendlyWidget tratamiento="Botox - Tercio Superior" />
          </div>
        )}
      </section>

       {/* FOOTER - ✅ LOGO AGRANDADO */}
       <footer id="contacto" className="bg-white py-20 px-6 md:px-12 border-t border-[#D4C5A1]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
        {/* ✅ COLUMNA 1: Logo imagen - REDONDO, REFINADO Y MINIMALISTA */}
<div className="flex flex-col items-center md:items-start space-y-4">
  <img 
    src="/logo.jpeg" 
    alt="Extetix" 
    className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover aspect-square border border-[#C5A059]/20 shadow-sm"
  />
</div>

          <div className="flex flex-col items-center text-center space-y-8">
            <div>
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Horarios de Atención</h4>
              <p className="text-[#4A4A4A] text-sm font-light leading-relaxed">
                Lunes a Sábados <br />
                <span className="font-normal text-[#2C2C2C]">10:00 a 18:00</span>
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Turnos y Consultas</h4>
              <p className="text-[#999] text-[9px] uppercase tracking-widest mb-2">(Atención telefónica 24hs)</p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola! Vengo de la web y quiero hacer una consulta.')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#2C2C2C] hover:text-[#C5A059] transition-colors duration-500 group"
              >
                <MessageCircle size={16} className="text-[#C5A059] group-hover:scale-110 transition-transform" />
                <span className="text-base font-light tracking-wider">54 9 11 5504-4320</span>
              </a>
              <a href="mailto:extetix.oficial@gmail.com" className="block text-[#666] text-sm font-light hover:text-[#C5A059] transition-colors">
              extetix.oficial@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-8">
            <div>
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Formas de Pago</h4>
              <p className="text-[#4A4A4A] text-sm font-light leading-relaxed max-w-[200px]">
                Efectivo, transferencias, <br /> tarjetas de crédito o débito.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-medium">Dirección</h4>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Av.+De+Mayo+618,+Ramos+Mejia,+Buenos+Aires" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex flex-col items-center md:items-end"
              >
                <div className="flex items-center gap-2 text-[#2C2C2C] group-hover:text-[#C5A059] transition-colors mb-1">
                  <span className="text-sm font-light tracking-wide italic">Av. De Mayo 618, Ramos Mejía</span>
                  <MapPin size={16} className="text-[#C5A059]" />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-[#999] border-b border-[#D4C5A1]/40 pb-0.5 group-hover:text-[#C5A059] group-hover:border-[#C5A059] transition-all">
                  Ver en Google Maps
                </span>
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#F2F2F2] flex justify-center items-center">
         <p className="text-[#999] text-[9px] uppercase tracking-[0.3em] text-center">
            © 2026 Extetix.Medicina Estetica Intgral. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </main>
  );
}
