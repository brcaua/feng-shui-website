"use client";

import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Elena Santos",
      role: "Empresária, São Paulo",
      image: "/testimonial-1.jpg",
      message:
        "Depois da consultoria de Feng Shui em minha empresa, os resultados foram impressionantes! As vendas aumentaram 40% em apenas 3 meses. O Luiz Carlos tem um conhecimento profundo e aplicou técnicas que transformaram completamente a energia do ambiente.",
      rating: 5,
    },
    {
      name: "Carlos Roberto Silva",
      role: "Contador, Curitiba",
      image: "/testimonial-2.jpg",
      message:
        "Fiz o curso de Astrologia Chinesa e descobri meu verdadeiro potencial. As orientações do meu mapa BaZi me ajudaram a tomar decisões importantes na carreira. Hoje sou um profissional mais confiante e próspero.",
      rating: 5,
    },
    {
      name: "Ana Claudia Ferreira",
      role: "Arquiteta, Rio de Janeiro",
      image: "/testimonial-3.jpg",
      message:
        "A consultoria residencial mudou minha vida! Meu relacionamento melhorou, minha saúde ficou mais equilibrada e consegui até uma promoção no trabalho. O Feng Shui realmente funciona quando aplicado corretamente.",
      rating: 5,
    },
    {
      name: "João Pedro Oliveira",
      role: "Advogado, Belo Horizonte",
      image: "/testimonial-4.jpg",
      message:
        "Estava passando por um momento difícil na vida pessoal e profissional. Através da consultoria e do meu mapa astrológico chinês, encontrei direcionamento e clareza. Hoje vivo com mais propósito e abundância.",
      rating: 5,
    },
    {
      name: "Luciana Moraes",
      role: "Psicóloga, Brasília",
      image: "/testimonial-5.jpg",
      message:
        "Como profissional da área da saúde, era cética quanto ao Feng Shui. Mas os resultados falam por si só! Meu consultório ficou mais harmonioso, os pacientes se sentem mais acolhidos e minha prática profissional floresceu.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformações reais de pessoas que confiaram em nosso trabalho.
            Mais de 300 vidas transformadas em 25 anos de dedicação.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* First testimonial - larger */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {testimonials[0].name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[0].name}
                </h4>
                <p className="text-gray-600">{testimonials[0].role}</p>
              </div>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
              <blockquote className="text-gray-700 text-lg leading-relaxed pl-6">
                {testimonials[0].message}
              </blockquote>
            </div>
          </div>

          {/* Second testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonials[1].name.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(testimonials[1].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <h4 className="font-bold text-gray-900">
                  {testimonials[1].name}
                </h4>
                <p className="text-sm text-gray-600">{testimonials[1].role}</p>
              </div>
            </div>

            <blockquote className="text-gray-700 text-sm leading-relaxed">
              "{testimonials[1].message}"
            </blockquote>
          </div>
        </div>

        {/* Bottom row testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.slice(2).map((testimonial, index) => (
            <div
              key={index + 2}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <blockquote className="text-gray-700 text-sm leading-relaxed">
                "{testimonial.message}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Seja o próximo a transformar sua vida
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já experimentaram os benefícios
              do Feng Shui e da Astrologia Chinesa. Sua transformação começa
              hoje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Quero Minha Consultoria
              </button>
              <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
