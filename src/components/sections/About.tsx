"use client";

import { Award, BookOpen, Users, Clock, CheckCircle, Star } from "lucide-react";

export default function About() {
  const certifications = [
    {
      category: "Feng Shui Tradicional",
      items: [
        "Xing Xi Pai (Formas)",
        "Ba Zhai Pai (Oito Mansões)",
        "Xuan Kong Fei Xing (Estrelas Voadoras)",
        "Feng Shui Comercial",
        "Xuan Kong Da Guá (Grande Hexagramas)",
        "Water Methods (Dragão de Água)",
        "I Ching Matemático",
        "Luo Pan (Bússola Chinesa)",
      ],
    },
    {
      category: "Astrologia Chinesa",
      items: [
        "Zi Ping Bazi (Quatro Pilares do Destino)",
        "Yue Shu Ming Li (Numerologia Chinesa)",
        "Ming Shu Ba Zi (Animais do Zodíaco Chinês)",
        "Fases da Vida",
        "Ming Guá (O Trigrama do Destino)",
        "9 Constelações",
      ],
    },
    {
      category: "Estudos Complementares",
      items: ["Geobiologia Druida", "I Ching", "Sinologia"],
    },
  ];

  const stats = [
    {
      icon: Clock,
      number: "25+",
      label: "Anos de Experiência",
    },
    {
      icon: Users,
      number: "500+",
      label: "Clientes Atendidos",
    },
    {
      icon: BookOpen,
      number: "12+",
      label: "Cursos Ministrados",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conheça o <span className="text-gradient">Professor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 25 anos dedicados ao estudo e prática das artes milenares
            orientais. Conheça a trajetória de um dos maiores especialistas em
            Feng Shui e Astrologia Chinesa do Brasil.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Photo and basic info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-gold-400/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-16 h-16 text-gold-400" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Luiz Carlos Akira</h3>
                  <p className="text-xl text-gray-200">
                    Mestre em Feng Shui e Astrologia Chinesa
                  </p>
                  <div className="flex justify-center gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-400/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:max-w-2xl md:mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Description and philosophy */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Uma jornada de conhecimento e transformação
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Luiz Carlos Akira é reconhecido como um dos maiores
                  especialistas em
                  <strong className="text-primary-600">
                    {" "}
                    Feng Shui Tradicional e Astrologia Chinesa
                  </strong>{" "}
                  do Brasil. Sua jornada começou em 1999, quando descobriu o
                  poder transformador das artes milenares orientais.
                </p>
                <p>
                  Formado em diversas escolas tradicionais, o Professor Akira
                  combina conhecimento técnico profundo com uma abordagem
                  prática e humanizada, sempre focando nos resultados reais que
                  seus clientes podem alcançar.
                </p>
                <p>
                  Ao longo de mais de duas décadas, desenvolveu uma metodologia
                  única que já transformou a vida de milhares de pessoas, desde
                  empresários que buscam prosperidade até famílias que desejam
                  harmonia e equilíbrio em seus lares.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-2xl p-6 border border-primary-100">
              <h4 className="text-lg font-semibold text-primary-700 mb-3">
                🎯 Missão e Filosofia
              </h4>
              <p className="text-gray-700">
                &quot;Acredito que todos merecem viver em harmonia com as
                energias que os cercam. Minha missão é compartilhar esse
                conhecimento milenar de forma acessível e prática, ajudando
                pessoas a transformarem seus espaços e suas vidas.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Certifications and Training */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Formação e Certificações
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certificações completas nas principais escolas e tradições
              orientais, garantindo conhecimento autêntico e técnicas
              comprovadas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {cert.category}
                  </h4>
                </div>

                <div className="space-y-3">
                  {cert.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Transforme sua vida com quem realmente entende
            </h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Agende sua consultoria personalizada e descubra como as técnicas
              milenares podem trazer prosperidade, saúde e equilíbrio para sua
              vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Agendar Consultoria
              </button>
              <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                Conhecer os Cursos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
