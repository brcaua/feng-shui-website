import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import {
  Star,
  Monitor,
  Users,
  Award,
  DollarSign,
  Calendar,
  CheckCircle,
  Home,
  Building,
} from "lucide-react";

export default function FengShuiOnline() {
  const learningTopics = [
    {
      title: "Fundamentos",
      description:
        "Yin/Yang, cinco elementos, Céu anterior e posterior e I ching",
    },
    {
      title: "Xing Shi Pai",
      description: "Escola da Forma - análise do ambiente e paisagem",
    },
    {
      title: "Ba Zhai Pai",
      description: "Cinco palácios - direções favoráveis e harmonização",
    },
  ];

  const benefits = [
    "Interpretar plantas baixas com precisão",
    "Identificar direções favoráveis para cada pessoa",
    "Criar ambientes que promovem saúde, prosperidade e equilíbrio",
    "Aplicar técnicas em espaços residenciais e comerciais",
    "Aulas online ao vivo e gravadas com flexibilidade",
    "Mentoria exclusiva com Professor Akira",
    "Material didático completo",
    "Certificado de reconhecimento internacional",
  ];

  const targetAudience = [
    {
      title: "Arquitetos",
      description: "Profissionais que desejam incorporar Feng Shui em projetos",
    },
    {
      title: "Terapeutas",
      description: "Amplie seu conhecimento com técnicas de harmonização",
    },
    {
      title: "Consultores",
      description: "Desenvolva uma nova área de atuação profissional",
    },
    {
      title: "Amantes da Cultura Chinesa",
      description: "Aprofunde-se nas tradições orientais autênticas",
    },
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
                    Curso de Feng Shui
                    <span className="text-gold-400 block">
                      Tradicional Online
                    </span>
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Estude as escolas clássicas do Feng Shui em um curso
                    completo que une
                    <strong className="text-gold-400">
                      {" "}
                      teoria e prática
                    </strong>{" "}
                    para harmonização de espaços residenciais e comerciais.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Aulas ao vivo + gravadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Certificado internacional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Residencial & Comercial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Escolas clássicas</span>
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
                        <strong className="text-white">R$ 2.000</strong> à vista
                        via PIX
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gold-400" />
                      <span>
                        <strong className="text-white">R$ 2.500</strong> em até
                        12x pelo Infinite Pay
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Tenho%20interesse%20no%20Curso%20de%20Feng%20Shui%20Tradicional%20Online.%20Gostaria%20de%20solicitar%20o%20link%20de%20pagamento%20e%20mais%20informações."
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

        {/* What You'll Learn */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                O que você vai aprender
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Curso completo nas escolas clássicas do Feng Shui tradicional
                chinês
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {learningTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Star className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                O que você vai conseguir fazer
              </h2>
              <p className="text-xl text-gray-600">
                Habilidades práticas para aplicar o Feng Shui tradicional
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ideal para
              </h2>
              <p className="text-xl text-gray-600">
                Profissionais e interessados em harmonização de ambientes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {targetAudience.map((audience, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {index === 0 && (
                      <Building className="w-10 h-10 text-primary-600" />
                    )}
                    {index === 1 && (
                      <Star className="w-10 h-10 text-primary-600" />
                    )}
                    {index === 2 && (
                      <Users className="w-10 h-10 text-primary-600" />
                    )}
                    {index === 3 && (
                      <Home className="w-10 h-10 text-primary-600" />
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600">{audience.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Highlight */}
        <section className="py-20 bg-gradient-to-r from-primary-50 to-gold-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Feng Shui Tradicional Autêntico
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Inscreva-se e domine o Feng Shui como ele foi concebido:
              <strong className="text-primary-600">
                {" "}
                sem simplificações, com profundidade e tradição.
              </strong>
            </p>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 italic">
                "Com aulas online ao vivo e gravadas, mentoria exclusiva,
                certificado de reconhecimento internacional e material didático
                completo, você aprenderá a interpretar plantas baixas,
                identificar direções favoráveis e criar ambientes que promovem
                saúde, prosperidade e equilíbrio."
              </p>
              <p className="text-primary-600 font-semibold mt-4">
                - Professor Luiz Carlos Akira
              </p>
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
              Entre em contato pelo WhatsApp para esclarecer dúvidas e solicitar
              o link de pagamento.
            </p>
            <a
              href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Gostaria%20de%20solicitar%20o%20link%20de%20pagamento%20para%20o%20Curso%20de%20Feng%20Shui%20Tradicional%20Online."
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
