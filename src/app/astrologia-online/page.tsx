import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import {
  Star,
  Clock,
  Users,
  Monitor,
  CheckCircle,
  Award,
  DollarSign,
  Calendar,
} from "lucide-react";

export default function AstrologiaOnline() {
  const learningTopics = [
    "Fases da vida",
    "Ming Guá – O trigrama do destino",
    "Yue Shu Ming Li - Numerologia chinesa",
    "Ming Shu Ba Zi - Animais do zodíaco chinês",
    "Zi Ping Bazi – Quatro pilares do destino e da sorte",
    "Estudos de caso com mapas reais",
  ];

  const benefits = [
    "Aprender a montar e interpretar mapas astrológicos para atuar profissionalmente",
    "Clareza sobre momentos de mudança, carreira, saúde e relacionamentos",
    "Aulas online ao vivo e gravadas, com flexibilidade",
    "Suporte e materiais exclusivos",
    "Certificado de reconhecimento internacional",
    "Mentoria exclusiva por 2 meses",
  ];

  const targetAudience = [
    "Consultores de Feng Shui e profissionais de terapias integrativas",
    "Pessoas em busca de autoconhecimento e direção",
    "Interessados em astrologia e cultura chinesa, mesmo sem experiência prévia",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Curso de Astrologia Chinesa
                    <span className="text-gold-400 block">Online</span>
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Mergulhe nos fundamentos da astrologia chinesa tradicional e
                    aprenda a interpretar os
                    <strong className="text-gold-400">
                      {" "}
                      Quatro Pilares do Destino (BaZi)
                    </strong>{" "}
                    com precisão e profundidade.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">3 meses + 2 meses mentoria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Máximo 10 alunos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Aulas ao vivo + gravadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Certificado internacional</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-gold-400 mb-4">
                    Investimento
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <span>
                        <strong className="text-white">R$ 3.000</strong> à vista
                        via PIX
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gold-400" />
                      <span>
                        <strong className="text-white">R$ 3.500</strong> em até
                        12x pelo Infinite Pay
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Tenho%20interesse%20no%20Curso%20de%20Astrologia%20Chinesa%20Online.%20Gostaria%20de%20solicitar%20o%20link%20de%20pagamento%20e%20saber%20mais%20detalhes."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-3 no-underline"
                  >
                    Solicitar Link de Pagamento
                  </a>
                </div>
              </div>

              {/* Professor Image */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="relative w-full max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-400/30 to-primary-800/30 rounded-3xl blur-xl transform rotate-3"></div>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20">
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                        <Image
                          src="/prof.jpg"
                          alt="Professor Luiz Carlos Akira"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Gain */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                O que você ganha ao fazer o curso
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforme seu conhecimento em astrologia chinesa e desenvolva
                habilidades profissionais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Para quem é este curso
              </h2>
              <p className="text-xl text-gray-600">
                Ideal para diferentes perfis de pessoas interessadas no
                autoconhecimento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                O que você vai aprender
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Currículo completo baseado nas técnicas tradicionais chinesas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <Star className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {topic}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Técnica tradicional chinesa aplicada com estudos
                        práticos
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Duração do curso
                </h3>
                <p className="text-gray-700">
                  O curso tem 3 meses de aulas teóricas e mais 2 meses de
                  mentoria ao vivo. * Verificar datas de abertura de turma e
                  aulas com o professor pelo WhatsApp
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Quantas vagas tem cada turma?
                </h3>
                <p className="text-gray-700">
                  As turmas são limitadas a apenas 10 alunos, para garantir
                  atenção personalizada.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Como faço para garantir minha vaga?
                </h3>
                <p className="text-gray-700">
                  Entre em contato direto com o professor Akira para esclarecer
                  todas as dúvidas, confirmar disponibilidade de vagas e
                  realizar o pagamento via Pix ou cartão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Solicite o Link de Pagamento
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Entre em contato pelo WhatsApp para solicitar o link de pagamento
              e esclarecer todas as suas dúvidas.
            </p>
            <a
              href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Gostaria%20de%20solicitar%20o%20link%20de%20pagamento%20para%20o%20Curso%20de%20Astrologia%20Chinesa%20Online."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 inline-flex items-center gap-3"
            >
              Entrar em Contato Agora
            </a>
          </div>
        </section>

        <Footer />
      </div>
      <WhatsAppButton />
    </main>
  );
}
