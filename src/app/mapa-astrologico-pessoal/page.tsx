import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import WhatsAppContactButton from "@/components/ui/WhatsAppContactButton";
import {
  Star,
  CheckCircle,
  Clock,
  Award,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Mapa Astrológico Pessoal | Metafísica Oriental Brasil",
  description:
    "Descubra seu potencial através da Astrologia Chinesa com análise completa do seu mapa astrológico pessoal. Numerologia chinesa, Quatro Pilares do Destino (BaZi) e orientações personalizadas.",
  keywords:
    "mapa astrológico chinês, astrologia chinesa, BaZi, quatro pilares do destino, numerologia chinesa, autoconhecimento, análise pessoal",
  openGraph: {
    title: "Mapa Astrológico Pessoal | Metafísica Oriental Brasil",
    description:
      "Descubra seu potencial através da Astrologia Chinesa com análise completa do seu mapa astrológico pessoal.",
    url: "https://metafisicaorientalbrasil.com.br/mapa-astrologico-pessoal",
    siteName: "Metafísica Oriental Brasil",
    images: [
      {
        url: "/images/mapa-chines.jpg",
        width: 1200,
        height: 630,
        alt: "Mapa Astrológico Chinês Pessoal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapa Astrológico Pessoal | Metafísica Oriental Brasil",
    description:
      "Descubra seu potencial através da Astrologia Chinesa com análise completa do seu mapa astrológico pessoal.",
    images: ["/images/mapa-chines.jpg"],
  },
};

export default function MapaAstrologicoPessoal() {
  const whatsappMessage =
    "Olá! Tenho interesse no Mapa Astrológico Pessoal. Gostaria de saber mais detalhes sobre o serviço.";

  const benefits = [
    "Análise completa do seu mapa BaZi (Quatro Pilares)",
    "Numerologia chinesa personalizada",
    "Identificação de períodos favoráveis e desfavoráveis",
    "Orientações para carreira e relacionamentos",
    "Previsões para os próximos 12 meses",
    "Consultoria presencial ou online de 2 horas",
    "Relatório detalhado em PDF",
    "Suporte pós-consultoria por 30 dias",
  ];

  const includes = [
    "Análise dos Quatro Pilares do Destino (BaZi)",
    "Mapa dos Cinco Elementos pessoais",
    "Ciclos de Sorte e períodos importantes",
    "Numerologia chinesa aplicada",
    "Análise de compatibilidade pessoal",
    "Orientações para tomada de decisões",
    "Identificação de talentos naturais",
    "Previsões astrológicas personalizadas",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/images/mapa-chines.jpg')",
            }}
          ></div>
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Star className="w-4 h-4" />
                  Mapa Astrológico Pessoal
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Descubra Seu <span className="text-gradient">Potencial</span>{" "}
                  Através da Astrologia Chinesa
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Análise completa do seu mapa astrológico pessoal com os Quatro
                  Pilares do Destino, numerologia chinesa e orientações
                  personalizadas para sua vida pessoal e profissional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <WhatsAppContactButton message={whatsappMessage}>
                    <Phone className="w-5 h-5" />
                    Solicitar Mapa Astrológico
                  </WhatsAppContactButton>
                </div>
                <div className="flex items-center gap-8 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Análise Completa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span>2 Horas de Consultoria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span>Relatório em PDF</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Investimento
                    </h3>
                    <div className="text-4xl font-bold text-gold-600 mb-2">
                      R$ 697
                    </div>
                    <p className="text-gray-700">
                      Consultoria completa + Relatório
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Análise BaZi completa
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Numerologia chinesa
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Previsões para 12 meses
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Suporte por 30 dias
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que Inclui */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que Inclui o seu{" "}
                <span className="text-gradient">Mapa Astrológico</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma análise completa e detalhada do seu potencial através dos
                métodos tradicionais da Astrologia Chinesa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Análise Completa
                </h3>
                <div className="space-y-4">
                  {includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefícios
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Como Funciona a{" "}
                <span className="text-gradient">Consultoria</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Processo simples e eficaz para você receber sua análise
                astrológica personalizada
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Agendamento
                </h3>
                <p className="text-gray-600">
                  Entre em contato e agende sua consultoria
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Dados Pessoais
                </h3>
                <p className="text-gray-600">
                  Forneça data, hora e local de nascimento
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Análise
                </h3>
                <p className="text-gray-600">
                  Realização da análise astrológica completa
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Consultoria
                </h3>
                <p className="text-gray-600">
                  Sessão de 2 horas + relatório em PDF
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Descobrir seu{" "}
              <span className="text-gradient">Potencial?</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Mais de 3.000 pessoas já transformaram suas vidas com nossa
              análise astrológica. Seja você o próximo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppContactButton message={whatsappMessage}>
                <Phone className="w-5 h-5" />
                Solicitar Mapa Astrológico
              </WhatsAppContactButton>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <span>+55 (41) 99116-0348</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>metafisicaorientalbra@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-pink-400" />
                    <span>@metafisicaorientalbrasil</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Professor Luiz Carlos
                </h3>
                <p className="text-gray-300">
                  Mais de 25 anos de experiência em Feng Shui e Astrologia
                  Chinesa, com formação nas técnicas tradicionais orientais.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Atendimento</h3>
                <p className="text-gray-300 mb-2">
                  Consultorias presenciais e online para todo o Brasil
                </p>
                <p className="text-gray-300">
                  Horários: Segunda a sexta, 9h às 18h
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                &copy; 2024 Metafísica Oriental Brasil. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
      <WhatsAppButton />
    </main>
  );
}
