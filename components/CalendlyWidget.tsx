'use client';
import { useEffect } from "react";
import { InlineWidget } from "react-calendly";

interface CalendlyProps {
  tratamiento: string;
}

export default function CalendlyWidget({ tratamiento }: CalendlyProps) {
  const calendlyUrl = `https://calendly.com/sinergiapspcoaching/30min?a1=${encodeURIComponent(tratamiento)}`;

  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      // Verificamos si es el evento de confirmación de turno
      if (e.data.event && e.data.event.indexOf('calendly.event_scheduled') === 0) {
        
        // Esperamos 4 segundos (4000 milisegundos) antes de redirigir
        setTimeout(() => {
          window.location.href = "/";
        }, 4000); 
        
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, []);

  return (
    <div className="w-full h-[700px] overflow-hidden">
      <InlineWidget 
        url={calendlyUrl}
        styles={{ height: '100%', width: '100%' }}
        pageSettings={{
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: 'c5a059',
          textColor: '2c2c2c'
        }}
      />
    </div>
  );
}