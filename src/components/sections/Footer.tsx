"use client";

import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-gold-400">
                Metafísica Oriental Brasil
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transformando vidas através das artes milenares orientais há
                mais de 25 anos. Feng Shui Tradicional e Astrologia Chinesa com
                resultados comprovados.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-400" />
                  <span className="text-gray-300">+55 (41) 99116-0348</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-400" />
                  <span className="text-gray-300">
                    metafisicaorientalbra@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-gold-400" />
                  <a
                    href="https://www.instagram.com/metafisicaorientalbrasil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    @metafisicaorientalbrasil
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold-400" />
                  <span className="text-gray-300">
                    Atendimento em todo o Brasil
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">
                Serviços
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Consultoria Feng Shui Residencial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Consultoria Feng Shui Empresarial
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Mapa Astrológico Chinês
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Curso de Feng Shui
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-gold-400 transition-colors"
                  >
                    Curso de Astrologia Chinesa
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold-400">
                Horário de Atendimento
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <div className="text-gray-300">
                    <div>Segunda à Sexta</div>
                    <div className="text-sm text-gray-400">9h às 18h</div>
                  </div>
                </div>
                <div className="text-gray-300">
                  <div>Sábado</div>
                  <div className="text-sm text-gray-400">9h às 14h</div>
                </div>
                <div className="text-gray-300">
                  <div>Domingo</div>
                  <div className="text-sm text-gray-400">Fechado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Metafísica Oriental Brasil. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gold-400 transition-colors text-sm"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
