"use client";

import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  Building2,
  CheckCircle,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  Instagram,
  Star,
  TrendingUp,
  Target,
  BarChart,
} from "lucide-react";

export default function MapaAstrologicoEmpresarial() {
  const whatsappNumber = "+554199116048";
  const whatsappMessage =
    "Olá! Tenho interesse no Mapa Astrológico Empresarial. Gostaria de saber mais sobre como pode ajudar meu negócio.";

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const benefits = [
    "Análise astrológica completa da empresa",
    "Identificação de períodos favoráveis para investimentos",
    "Orientações para contratações e demissões",
    "Melhores momentos para lançamentos de produtos",
    "Análise de compatibilidade entre sócios",
    "Previsões empresariais para os próximos 12 meses",
    "Estratégias baseadas nos ciclos astrológicos",
    "Consultoria estratégica personalizada",
  ];

  const includes = [
    "Análise BaZi da data de abertura da empresa",
    "Mapa dos Cinco Elementos corporativos",
    "Ciclos de Sorte empresariais",
    "Análise de compatibilidade entre líderes",
    "Períodos favoráveis para expansão",
    "Orientações para tomada de decisões estratégicas",
    "Identificação de oportunidades de mercado",
    "Previsões astrológicas para crescimento",
  ];

  const businessChallenges = [
    "Dificuldades financeiras recorrentes",
    "Problemas com funcionários e equipe",
    "Concorrência muito acirrada",
    "Decisões estratégicas equivocadas",
    "Parcerias que não dão certo",
    "Falta de crescimento ou estagnação",
    "Conflitos entre sócios",
    "Timing errado para investimentos",
  ];

  const results = [
    {
      icon: TrendingUp,
      title: "Crescimento Sustentável",
      description: "Identifique os melhores momentos para expandir seu negócio",
    },
    {
      icon: Target,
      title: "Decisões Estratégicas",
      description: "Tome decisões importantes nos períodos mais favoráveis",
    },
    {
      icon: Users,
      title: "Equipe Harmoniosa",
      description: "Contrate as pessoas certas nos momentos certos",
    },
    {
      icon: BarChart,
      title: "Maior Rentabilidade",
      description: "Maximize seus lucros seguindo os ciclos astrológicos",
    },
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
                  <Building2 className="w-4 h-4" />
                  Mapa Astrológico Empresarial
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Potencialize o <span className="text-gradient">Sucesso</span>{" "}
                  do seu Negócio
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Descubra os melhores momentos para decisões estratégicas,
                  contratações e investimentos. Use a sabedoria milenar da
                  Astrologia Chinesa para impulsionar seu negócio ao próximo
                  nível.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    Solicitar Análise Empresarial
                  </button>
                </div>
                <div className="flex items-center gap-8 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Análise Estratégica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span>Consultoria Personalizada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span>Relatório Completo</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building2 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Investimento
                    </h3>
                    <div className="text-4xl font-bold text-gold-600 mb-2">
                      R$ 1.497
                    </div>
                    <p className="text-gray-700">
                      Análise completa + Consultoria estratégica
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Análise BaZi empresarial
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
                        Estratégias personalizadas
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Suporte por 90 dias
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desafios Empresariais */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Seu Negócio Está Enfrentando{" "}
                <span className="text-gradient">Desafios</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Muitos problemas empresariais podem ser antecipados e
                solucionados com análise astrológica estratégica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-lg">!</span>
                  </div>
                  <p className="text-gray-700 font-medium">{challenge}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-gray-600 mb-8">
                <strong>
                  A Astrologia Chinesa pode ajudar você a superar esses desafios
                  e impulsionar seu negócio!
                </strong>
              </p>
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mx-auto"
              >
                <Phone className="w-5 h-5" />
                Quero Impulsionar Meu Negócio
              </button>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Resultados que Você Pode{" "}
                <span className="text-gradient">Esperar</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja como a análise astrológica pode transformar seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((result, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <result.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {result.title}
                  </h3>
                  <p className="text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que Inclui */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que Inclui a{" "}
                <span className="text-gradient">Análise Empresarial</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma análise estratégica completa para impulsionar seu negócio ao
                próximo nível
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Análise Estratégica
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
                Processo estratégico e personalizado para maximizar o potencial
                do seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Diagnóstico
                </h3>
                <p className="text-gray-600">
                  Análise completa do histórico e situação atual da empresa
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mapeamento
                </h3>
                <p className="text-gray-600">
                  Criação do mapa astrológico empresarial personalizado
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Estratégias
                </h3>
                <p className="text-gray-600">
                  Desenvolvimento de estratégias baseadas nos ciclos
                  astrológicos
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Implementação
                </h3>
                <p className="text-gray-600">
                  Relatório detalhado e suporte contínuo por 90 dias
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Empresas que{" "}
                <span className="text-gradient">Transformaram</span> seus
                Resultados
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja como a análise astrológica empresarial impactou negócios
                reais
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">CF</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Carlos Ferreira</h4>
                    <p className="text-gray-600">CEO Construtora - Curitiba</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;A análise astrológica nos ajudou a identificar o momento
                  perfeito para expandir nossos negócios. Seguindo as
                  orientações, conseguimos um crescimento de 300% em 18
                  meses!&quot;
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AM</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ana Maria</h4>
                    <p className="text-gray-600">
                      Diretora E-commerce - São Paulo
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;As previsões astrológicas nos permitiram antecipar
                  tendências de mercado. Conseguimos nos posicionar antes da
                  concorrência e multiplicamos nossa receita!&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para <span className="text-gradient">Revolucionar</span>{" "}
              seu Negócio?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Mais de 500 empresas já transformaram seus resultados com nossa
              metodologia. Seu negócio pode ser o próximo!
            </p>
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-2xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    500+
                  </div>
                  <p className="text-gray-700">Empresas Atendidas</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    25+
                  </div>
                  <p className="text-gray-700">Anos de Experiência</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    85%
                  </div>
                  <p className="text-gray-700">Crescimento Médio</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Solicitar Análise Empresarial
              </button>
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
                <h3 className="text-xl font-bold mb-4">Especialidades</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Análise Estratégica Empresarial</p>
                  <p>• Consultoria para Tomada de Decisões</p>
                  <p>• Previsões de Mercado</p>
                  <p>• Análise de Compatibilidade Societária</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Professor Luiz Carlos
                </h3>
                <p className="text-gray-300">
                  Especialista em Astrologia Chinesa Empresarial com mais de 25
                  anos de experiência ajudando empresas a maximizarem seu
                  potencial.
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
