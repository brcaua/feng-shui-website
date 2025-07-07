"use client";

import { Star, Users, Award, TrendingUp, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gold-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gold-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center pt-4">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <span className="text-gold-100">25+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gold-400" />
                <span className="text-gold-100">+300 clientes atendidos</span>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Sua casa está bloqueando
                <span className="text-gold-400 block">sua prosperidade?</span>
              </h1>
              <p className="text-1.5xl text-gray-200 leading-relaxed">
                <strong className="text-white">
                  Enquanto você luta financeiramente, sua casa pode estar
                  sabotando seus esforços.
                </strong>{" "}
                Desbloqueie o poder do
                <strong className="text-gold-400">
                  {" "}
                  Feng Shui Tradicional + Astrologia Chinesa
                </strong>{" "}
                e descubra o segredo oriental milenar para prosperidade e
                felicidade.
                <span className="text-gold-300">
                  {" "}
                  Método exclusivo com Mestre Akira, com mais de +25 anos de
                  experiência e mais de +300 clientes atendidos.
                </span>
              </p>
            </div>

            {/* Value proposition */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-gold-400 mb-3">
                Por que escolher nossa consultoria?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-sm">
                    Formação completa em técnicas tradicionais
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-sm">Resultados comprovados</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-sm">Atendimento personalizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-sm">Suporte completo</span>
                </div>
              </div>
            </div>

            {/* Mobile Professor Image - Before CTA */}
            <div className="lg:hidden flex justify-center">
              <div className="relative">
                <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-gold-400/60 shadow-xl">
                  <Image
                    src="/prof.jpg"
                    alt="Professor Luiz Carlos Akira"
                    fill
                    className="object-cover object-center"
                    sizes="176px"
                    priority
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gold-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Mestre Akira
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pb-6">
              <a
                href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Tenho%20interesse%20na%20consultoria%20de%20Feng%20Shui%20e%20Astrologia%20Chinesa.%20Gostaria%20de%20saber%20mais%20sobre%20como%20posso%20desbloquear%20a%20prosperidade%20na%20minha%20casa%20e%20vida."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-3 no-underline"
              >
                <MessageCircle className="w-5 h-5" />
                Quero Minha Consultoria
              </a>
              <button className="bg-transparent border-2 border-white text-white cursor-pointer hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                Conhecer os Cursos
              </button>
            </div>
          </div>

          {/* Right Content - Professor Photo */}
          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative">
              {/* Photo container with elegant frame */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-primary-800/30 rounded-3xl blur-xl transform rotate-3"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src="/prof.jpg"
                      alt="Professor Luiz Carlos Akira - Mestre em Feng Shui e Astrologia Chinesa"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>

              {/* Professor info overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/30 min-w-[280px]">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    Luiz Carlos Akira
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    Mestre em Feng Shui e Astrologia Chinesa
                  </p>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    25+ anos transformando vidas
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gold-400/30 rounded-full blur-xl animate-bounce-gentle"></div>
              <div
                className="absolute -bottom-12 -left-6 w-16 h-16 bg-primary-400/30 rounded-full blur-xl animate-bounce-gentle"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
