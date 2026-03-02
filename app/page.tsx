"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Syringe, Instagram, Facebook, MessageCircle,MapPin, Menu, X, 
  ShieldPlus, ShieldCheck, Medal, ChevronRight, ChevronLeft, Star, Camera 
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Referencias para los carruseles
  const carruselFacialRef = useRef<HTMLDivElement>(null);
  const carruselBioRef = useRef<HTMLDivElement>(null);
  const carruselCorpRef = useRef<HTMLDivElement>(null);

  // --- NUEVA DATA PARA ANTES Y DESPUÉS ---
  const galeriasResultados = [
    {
      tratamiento: "Armonización Facial",
      paciente: "Valentina R.",
      antes: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=400&auto=format&fit=crop",
      despues: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=400&auto=format&fit=crop",
      testimonio: "Buscaba naturalidad y el cambio fue sutil pero impactante. Me veo descansada."
    },
    {
      tratamiento: "Rinomodelación",
      paciente: "Lucía M.",
      antes: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400",
      despues: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400",
      testimonio: "Increíble cómo cambió mi perfil sin pasar por quirófano. ¡Feliz!"
    },
    {
      tratamiento: "HIFU 7D",
      paciente: "Martín G.",
      antes: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
      despues: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400",
      testimonio: "La firmeza que recuperó mi piel en solo dos meses es espectacular."
    }
  ];

  // (Mantenemos el resto de los arrays como tratamientosFaciales, bioestimuladores, etc. intactos...)
  
  const tratamientosFaciales = [
    {
      titulo: "Tercio Superior",
      subtitulo: "Botox",
      desc: "Suaviza arrugas de expresión en frente, entrecejo y patas de gallo para una mirada descansada.",
      img: "/inyecbtx.jpg"
    },
    {
      titulo: "Tercio Medio",
      subtitulo: "Ácido Hialurónico",
      desc: "Reposición de volumen en pómulos, tratamiento de ojeras y rinomodelación sin cirugía.",
      img: "/facialesrino.jpeg"
    },
    {
      titulo: "Tercio Inferior",
      subtitulo: "Armonización",
      desc: "Perfilado de labios, surcos nasogenianos y definición del contorno mandibular y mentón.",
      img: "/facialesmenton.jpeg"
    },
    {
      titulo: "Bioestimulación",
      subtitulo: "Plasma Rico en Plaquetas",
      desc: "Tratamiento autólogo que utiliza tus propios factores de crecimiento para regenerar y dar luminosidad a la piel.",
      img: "/facialesprp.jpeg"
    },
    {
      titulo: "Efecto Lifting",
      subtitulo: "Hilos Tensores",
      desc: "Redefinición del óvalo facial y tratamiento de la flacidez mediante hilos de polidioxanona (PDO) de última generación.",
      img: "/facialeshilos.jpeg"
    }
  ];

  const bioestimuladores = [
    {
      titulo: "Colágeno Puro",
      subtitulo: "Sculptra",
      desc: "Ácido poli-L-láctico que estimula la producción de colágeno de forma profunda, devolviendo la estructura y firmeza al rostro.",
      img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
    },
    {
      titulo: "Efecto Lifting",
      subtitulo: "Radiesse",
      desc: "Hidroxiapatita de calcio que mejora la flacidez y define contornos de forma inmediata y duradera.",
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600"
    },
    {
      titulo: "Doble Acción",
      subtitulo: "HarmonyCa",
      desc: "Híbrido innovador que combina Ácido Hialurónico para volumen inmediato y Hidroxiapatita para estimular colágeno a largo plazo.",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
    },
    {
      titulo: "Calidad de Piel",
      subtitulo: "Skinvive",
      desc: "El primer inyectable de microgotas de ácido hialurónico diseñado para suavizar y mejorar la hidratación interna de la piel.",
      img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const tratamientosCorporales = [
    {
      titulo: "Volumen y Contorno",
      subtitulo: "Relleno Corporal Elhya",
      desc: "Ácido hialurónico de alta densidad diseñado específicamente para proyectar glúteos y corregir irregularidades corporales.",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
    },
    {
      titulo: "Firmeza Corporal",
      subtitulo: "Hilos Tensores",
      desc: "Combate la flacidez en brazos, abdomen y muslos mediante la colocación de hilos PDO que tensan el tejido.",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600"
    },
    {
      titulo: "Equilibrio Vital",
      subtitulo: "Chip Hormonal",
      desc: "Pellets de testosterona bioidéntica para mejorar la energía, la libido y la composición corporal de forma natural.",
      img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"
    },
    {
      titulo: "Celulitis y Adiposidad",
      subtitulo: "FOFA",
      desc: "Fórmula de aplicación médica para el tratamiento de la grasa localizada y la mejora de la textura de la piel.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
    },
    {
      titulo: "Regeneración Tisular",
      subtitulo: "Plasma Rico en Plaquetas",
      desc: "Bioestimulación corporal que mejora la calidad de la piel, trata estrías y acelera la recuperación de los tejidos.",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  useEffect(() => {
    const autoScroll = (ref: React.RefObject<HTMLDivElement | null>) => {
      if (ref.current) {
        const { scrollLeft, scrollWidth, clientWidth } = ref.current;
        const maxScroll = scrollWidth - clientWidth;
        if (scrollLeft >= maxScroll - 10) {
          ref.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          ref.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
      }
    };
    const interval = setInterval(() => {
      autoScroll(carruselFacialRef);
      autoScroll(carruselBioRef);
      autoScroll(carruselCorpRef);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const cardWidth = 400;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2C2C2C] font-light">
      
      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a 
        href="https://wa.me/5491100000000?text=Hola! Vengo desde la web y me gustaría realizar una consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
        aria-label="WhatsApp"
      >
        <MessageCircle size={30} fill="currentColor" />
      </a>

      {/* NAVBAR */}
      <nav className="bg-white py-5 px-6 border-b border-[#D4C5A1] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Syringe className="text-[#C5A059]" size={32} strokeWidth={1} />
          </div>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-normal uppercase tracking-[0.3em] text-[#C5A059]">
            <a href="#quienes-somos" className="hover:text-[#2C3E2D] transition duration-500">Quiénes Somos</a>
            <a href="#tratamientos" className="hover:text-[#2C3E2D] transition duration-500">Nuestros Tratamientos</a>
            <a href="#contacto" className="hover:text-[#2C3E2D] transition duration-500">Contacto</a>
          </div>
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5 text-[#C5A059]">
              <a href="#" className="hover:text-[#2C3E2D] transition duration-500"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-[#2C3E2D] transition duration-500"><Facebook size={20} strokeWidth={1.5} /></a>
            </div>
            <button className="md:hidden text-[#C5A059]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

      {/* SECCIÓN: HERO / QUIÉNES SOMOS */}
<section id="quienes-somos" className="py-16 md:py-24 px-6 md:px-12 bg-[#F2F2F2]">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    <div className="flex-1 text-left order-1">
      <h3 className="text-[#C5A059] text-4xl md:text-6xl font-serif mb-8 leading-[1.1] uppercase font-light tracking-tight">
        Dr. Beauty Ramos <br/> 
        <span className="italic uppercase">Medicina Estética</span> <br/> 
        y Bienestar Premium
      </h3>
      <p className="text-[#4A4A4A] text-lg md:text-xl font-light leading-relaxed mb-10 tracking-wide">
        Tecnología avanzada, resultados reales.
      </p>
      <button className="border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white px-12 py-4 text-[10px] font-normal uppercase tracking-[0.3em] transition-all duration-700 shadow-sm">
        Hacé tu consulta
      </button>
    </div>

    <div className="flex-1 order-2 w-full">
      {/* Contenedor corregido: Quitamos el aspect ratio fijo para que no corte la cabeza */}
      <div className="relative bg-white p-3 md:p-6 shadow-2xl border border-[#D4C5A1]/30 transition-all duration-1000">
        <img 
          src="/Drfelix.jpg" 
          alt="Dr. Félix" 
          className="w-full h-auto object-contain grayscale-[5%] hover:grayscale-0 transition-all duration-700" 
        />
        {/* Un pequeño detalle decorativo en la esquina para reforzar el estilo Premium */}
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#D4C5A1]/40 shadow-sm"></div>
      </div>
    </div>
  </div>
</section>

      {/* SECCIÓN: ENFOQUE MÉDICO */}
      <section className="py-16 md:pt-24 md:pb-16 px-6 md:px-12 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mb-20">
          <div className="flex-1 text-left order-1 md:order-2">
            <h3 className="text-[#C5A059] text-3xl md:text-5xl font-serif mb-8 leading-[1.2] uppercase font-light tracking-tight">
              Cuidamos tu belleza <br/> con un enfoque <br/> médico profesional
            </h3>
            <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed tracking-wide">
              <p>En <span className="italic">Dr. Beauty Ramos</span>, transformamos la estética en salud.</p>
              <p>Con más de 25 años de trayectoria liderados por el prestigioso Dr. Daniel Félix, contamos con un equipo de alto nivel médico y productos premium con certificaciones FDA y ANMAT.</p>
              <p>Somos la red de medicina estética más extensa del país con más de 18 clínicas y miles de pacientes que confían en nosotros.</p>
            </div>
          </div>
          <div className="flex-1 order-2 md:order-1 w-full">
            <div className="relative aspect-[4/5] md:aspect-square bg-white p-4 shadow-xl border border-[#D4C5A1]/30">
            <img src="/medicopaciente.jpg" alt="Consulta Dr. Beauty" className="w-full h-full object-cover grayscale-[10%]" />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-[#D4C5A1] pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldPlus size={28} strokeWidth={1} />, label: "Excelencia Médica" },
              { icon: <ShieldCheck size={28} strokeWidth={1} />, label: "Seguridad y Calidad" },
              { icon: <Medal size={28} strokeWidth={1} />, label: "Liderazgo en Estética" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full border border-[#C5A059] flex items-center justify-center mb-4 transition-all group-hover:bg-[#C5A059] group-hover:text-white text-[#C5A059]">
                  {item.icon}
                </div>
                <span className="text-[11px] font-normal uppercase tracking-[0.3em] text-[#2C3E2D]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="py-20 bg-[#F2F2F2] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mb-8"></div>
          <h2 className="text-[#C5A059] text-2xl md:text-4xl font-serif italic font-light leading-relaxed tracking-wide">
            "En Dr. Beauty Ramos realzamos tu belleza natural, priorizando tu salud, armonía y seguridad en cada tratamiento."
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-8"></div>
        </div>
      </section>

      {/* SECCIÓN 1: FACIALES */}
      <section id="tratamientos" className="py-24 bg-[#FDFBF7] px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Tratamientos Faciales</h2>
          </div>
          <div className="hidden lg:block">
            <button onClick={() => scroll(carruselFacialRef, 'left')} className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
              <ChevronLeft size={28} />
            </button>
            <button onClick={() => scroll(carruselFacialRef, 'right')} className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
              <ChevronRight size={28} />
            </button>
          </div>
          <div ref={carruselFacialRef} className="flex overflow-x-auto gap-6 md:gap-10 no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth">
            {tratamientosFaciales.map((t, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-white border border-[#D4C5A1]/30 shadow-sm snap-center group flex flex-col">
                <div className="h-[300px] md:h-[400px] overflow-hidden">
                  <img src={t.img} alt={t.subtitulo} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] mb-3 block font-medium">{t.titulo}</span>
                  <h3 className="text-xl md:text-3xl font-serif mb-5 text-[#2C3E2D]">{t.subtitulo}</h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed mb-10 font-light flex-grow">{t.desc}</p>
                  <a href={`https://wa.me/5491100000000?text=Consulta sobre ${t.subtitulo}`} target="_blank" className="inline-block w-full text-center border border-[#C5A059] py-5 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-700 font-medium">Consultar ahora</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: BIOESTIMULADORES */}
      <section id="bioestimuladores" className="py-24 bg-white px-4 md:px-12 relative overflow-hidden border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Regeneración Celular</h4>
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Bioestimuladores</h2>
          </div>
          <div className="hidden lg:block">
            <button onClick={() => scroll(carruselBioRef, 'left')} className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
              <ChevronLeft size={28} />
            </button>
            <button onClick={() => scroll(carruselBioRef, 'right')} className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
              <ChevronRight size={28} />
            </button>
          </div>
          <div ref={carruselBioRef} className="flex overflow-x-auto gap-6 md:gap-10 no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth">
            {bioestimuladores.map((t, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-[#FDFBF7] border border-[#D4C5A1]/30 shadow-sm snap-center group flex flex-col">
                <div className="h-[300px] md:h-[400px] overflow-hidden">
                  <img src={t.img} alt={t.subtitulo} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] mb-3 block font-medium">{t.titulo}</span>
                  <h3 className="text-xl md:text-3xl font-serif mb-5 text-[#2C3E2D]">{t.subtitulo}</h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed mb-10 font-light flex-grow">{t.desc}</p>
                  <a href={`https://wa.me/5491100000000?text=Consulta sobre ${t.subtitulo}`} target="_blank" className="inline-block w-full text-center border border-[#C5A059] py-5 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-700 font-medium">Consultar por {t.subtitulo}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: CORPORALES */}
      <section id="corporales" className="py-24 bg-[#FDFBF7] px-4 md:px-12 relative overflow-hidden border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Modelado y Bienestar</h4>
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Tratamientos Corporales</h2>
          </div>
          <div className="hidden lg:block">
            <button onClick={() => scroll(carruselCorpRef, 'left')} className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
              <ChevronLeft size={28} />
            </button>
            <button onClick={() => scroll(carruselCorpRef, 'right')} className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
              <ChevronRight size={28} />
            </button>
          </div>
          <div ref={carruselCorpRef} className="flex overflow-x-auto gap-6 md:gap-10 no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth">
            {tratamientosCorporales.map((t, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-white border border-[#D4C5A1]/30 shadow-sm snap-center group flex flex-col">
                <div className="h-[300px] md:h-[400px] overflow-hidden">
                  <img src={t.img} alt={t.subtitulo} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-[#C5A059] text-[9px] uppercase tracking-[0.2em] mb-3 block font-medium">{t.titulo}</span>
                  <h3 className="text-xl md:text-3xl font-serif mb-5 text-[#2C3E2D]">{t.subtitulo}</h3>
                  <p className="text-[#666] text-sm md:text-base leading-relaxed mb-10 font-light flex-grow">{t.desc}</p>
                  <a href={`https://wa.me/5491100000000?text=Consulta sobre ${t.subtitulo}`} target="_blank" className="inline-block w-full text-center border border-[#C5A059] py-5 text-[10px] uppercase tracking-[0.3em] text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-700 font-medium">Solicitar información</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN: APARATOLOGÍA */}
      <section id="aparatologia" className="py-24 bg-white px-6 md:px-12 border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Alta Tecnología Médica</h4>
            <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D]">Aparatología Premium</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group bg-[#FDFBF7] p-4 border border-[#D4C5A1]/30 hover:shadow-xl transition-all duration-500">
              <div className="aspect-video overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                  alt="Nordlys" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#C5A059] text-2xl font-serif mb-4 uppercase tracking-wider">Nordlys</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
                  Plataforma multi-tecnología líder que combina Láser e IPL para el tratamiento de manchas, rosácea, lesiones vasculares y rejuvenecimiento cutáneo profundo.
                </p>
                <a href="https://wa.me/5491100000000?text=Quiero info sobre Nordlys" target="_blank" className="text-[10px] uppercase tracking-[0.2em] border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">Más información</a>
              </div>
            </div>
            <div className="group bg-[#FDFBF7] p-4 border border-[#D4C5A1]/30 hover:shadow-xl transition-all duration-500">
              <div className="aspect-video overflow-hidden mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" 
                  alt="HIFU" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="px-4 pb-4 text-center">
                <h3 className="text-[#C5A059] text-2xl font-serif mb-4 uppercase tracking-wider">HIFU 7D</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-6 font-light">
                  Ultrasonido focalizado de alta intensidad. Genera un efecto lifting sin cirugía, tratando la flacidez facial y corporal mediante la estimulación de colágeno.
                </p>
                <a href="https://wa.me/5491100000000?text=Quiero info sobre HIFU" target="_blank" className="text-[10px] uppercase tracking-[0.2em] border-b border-[#C5A059] pb-1 hover:text-[#C5A059] transition-colors">Más información</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CIRUGÍA PLÁSTICA */}
      <section id="cirugia" className="py-24 bg-[#F2F2F2] px-6 md:px-12 border-t border-[#D4C5A1]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 w-full order-2 md:order-1">
            <div className="relative aspect-[4/5] bg-white p-4 shadow-2xl border border-[#D4C5A1]/30">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" 
                alt="Cirugía Plástica" 
                className="w-full h-full object-cover grayscale-[20%]"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#C5A059] text-white p-8 hidden md:block shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.4em] mb-2">Trayectoria</p>
                <p className="text-3xl font-serif">+25 Años</p>
              </div>
            </div>
          </div>
          <div className="flex-1 text-left order-1 md:order-2">
            <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Excelencia Quirúrgica</h4>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 text-[#2C3E2D] uppercase leading-tight">Cirugía <br /> <span className="italic">Plástica</span></h2>
            <div className="space-y-6 text-[#4A4A4A] text-base md:text-lg font-light leading-relaxed mb-10">
              <p>En <span className="font-normal text-[#2C3E2D]">Dr. Beauty</span> ponemos a tu alcance lo último en cirugías plásticas, respaldados por un equipo médico altamente especializado.</p>
              <p>Nuestro compromiso es brindarte seguridad, confianza y los resultados que deseás. Todas las intervenciones son realizadas por el <strong>Dr. Daniel Félix (M.N. 85381)</strong> junto a su equipo, con más de 25 años de trayectoria en el área.</p>
            </div>
            <div className="space-y-4 mb-10">
              {[
                { name: "Modelación corporal y reducción de grasa", msg: "Hola! Me gustaría consultar por Modelación corporal y reducción de grasa." },
                { name: "Cirugía de mamas", msg: "Hola! Me gustaría recibir información sobre Cirugía de mamas." },
                { name: "Cirugía de glúteos", msg: "Hola! Solicito información sobre Cirugía de glúteos." },
                { name: "Rejuvenecimiento y transformación facial", msg: "Hola! Me interesa el Rejuvenecimiento y transformación facial." },
                { name: "Rejuvenecimiento vaginal", msg: "Hola! Deseo consultar por Rejuvenecimiento vaginal." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#D4C5A1]/30 py-4 group">
                  <span className="text-[#2C2C2C] text-sm md:text-base font-light mb-2 md:mb-0 group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
                  <a 
                    href={`https://wa.me/5491100000000?text=${encodeURIComponent(item.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-medium flex items-center gap-2 hover:text-[#2C3E2D] transition-colors"
                  >
                    Solicitar turno <ChevronRight size={12} />
                  </a>
                </div>
              ))}
            </div>
            <button className="w-full md:w-auto border border-[#2C3E2D] text-[#2C3E2D] hover:bg-[#2C3E2D] hover:text-white px-12 py-5 text-[10px] font-normal uppercase tracking-[0.3em] transition-all duration-500">
              Solicitar turno general
            </button>
          </div>
        </div>
      </section>
{/* --- SECCIÓN: GALERÍA ANTES Y DESPUÉS (CARRUSEL) --- */}
<section className="py-24 bg-[#FDFBF7] px-4 md:px-12 relative overflow-hidden border-t border-[#D4C5A1]/20">
  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-16">
      <h4 className="text-[#C5A059] text-[10px] uppercase tracking-[0.4em] mb-4 font-normal">Galería de Casos</h4>
      <h2 className="text-3xl md:text-5xl font-serif uppercase font-light text-[#2C3E2D] mb-6">
        Historias reales,<br/> resultados confiables
      </h2>
      <div className="w-12 h-[1px] bg-[#C5A059] mx-auto"></div>
    </div>

    {/* Botones de Navegación (Solo visibles en Desktop) */}
    <div className="hidden lg:block">
      <button
        onClick={() => scroll(carruselBioRef, 'left')}
        className="absolute left-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={() => scroll(carruselBioRef, 'right')}
        className="absolute right-[-40px] top-[55%] -translate-y-1/2 z-40 bg-white/90 border border-[#D4C5A1] p-5 rounded-full text-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl"
      >
        <ChevronRight size={28} />
      </button>
    </div>

    {/* Contenedor Carrusel */}
    <div
      ref={carruselBioRef}
      className="flex overflow-x-auto gap-6 md:gap-8 no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth"
    >
      {[
        { tratamiento: "Rinomodelación", archivo: "/aydrino.jpeg" },
        { tratamiento: "Relleno de Labios", archivo: "/aydlabios.jpeg" },
        { tratamiento: "Tratamiento de Ojeras", archivo: "/aydojeras.jpeg" }
      ].map((item, idx) => (
        <div
          key={idx}
          className="min-w-[85vw] md:min-w-[450px] bg-white border border-[#D4C5A1]/20 p-3 shadow-sm snap-center group"
        >
          {/* Visualización de Imagen Completa (Pieza de Dr. Beauty) */}
          <div className="relative overflow-hidden aspect-[4/3] bg-[#F2F2F2]">
            <img 
              src={item.archivo} 
              alt={item.tratamiento} 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Info Centrada */}
          <div className="py-6 px-2 text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-medium">
              {item.tratamiento}
            </span>
          </div>
        </div>
      ))}
    </div>
    
    {/* Footer del Carrusel */}
    <div className="mt-12 text-center">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[#666] mb-8">Ver más casos clínicos reales en nuestras redes</p>
      <div className="flex justify-center items-center">
        <a 
          href="https://instagram.com/drbeautyramos" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-[#C5A059] hover:text-[#2C2C2C] transition-all group"
        >
          <div className="p-3 border border-[#C5A059] rounded-full group-hover:bg-[#C5A059] group-hover:text-white transition-all">
            <Instagram size={24} strokeWidth={1} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-medium">@drbeautyramos</span>
        </a>
      </div>
    </div>
  </div>
</section>

     {/* FOOTER PREMIUM REESTRUCTURADO */}
     <footer id="contacto" className="bg-white py-20 px-6 md:px-12 border-t border-[#D4C5A1]/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
          {/* LADO IZQUIERDO: LOGO / IDENTIDAD */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Syringe className="text-[#C5A059]" size={40} strokeWidth={1} />
            <div className="text-center md:text-left">
              <h3 className="text-[#C5A059] text-xl font-serif uppercase tracking-tighter leading-tight">
                Dr. Beauty <br /> 
                <span className="text-[#2C2C2C] font-light">Ramos Mejía</span>
              </h3>
              <p className="text-[#999] text-[10px] uppercase tracking-[0.3em] mt-4">Medicina Estética & Bienestar</p>
            </div>
          </div>

          {/* CENTRO: ATENCIÓN Y CONTACTO */}
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
                href="https://wa.me/5491155044320" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-[#2C2C2C] hover:text-[#C5A059] transition-colors duration-500 group"
              >
                <MessageCircle size={16} className="text-[#C5A059] group-hover:scale-110 transition-transform" />
                <span className="text-base font-light tracking-wider">54 9 11 5504-4320</span>
              </a>
              <a href="mailto:drbeautyramos@gmail.com" className="block text-[#666] text-sm font-light hover:text-[#C5A059] transition-colors">
                drbeautyramos@gmail.com
              </a>
            </div>
          </div>

          {/* LADO DERECHO: PAGOS Y UBICACIÓN */}
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

        {/* BARRA INFERIOR DE COPYRIGHT */}
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#F2F2F2] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#999] text-[9px] uppercase tracking-[0.3em]">
            © 2026 Dr. Beauty Ramos Mejía. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-[#999] text-[9px] uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Términos</a>
          </div>
        </div>
      </footer>

    </main>
  );
}