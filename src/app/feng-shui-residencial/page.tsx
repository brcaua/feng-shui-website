import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import WhatsAppContactButton from "@/components/ui/WhatsAppContactButton";
import {
  Home,
  CheckCircle,
  Clock,
  Award,
  Phone,
  Mail,
  Instagram,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Feng Shui Residencial | Metafísica Oriental Brasil",
  description:
    "Transforme sua casa em um ambiente de prosperidade e harmonia com consultoria de Feng Shui Residencial. Análise completa do ambiente, correções energéticas e relatório detalhado.",
  keywords:
    "feng shui residencial, consultoria feng shui, harmonização residencial, energia da casa, feng shui tradicional, prosperidade, harmonia familiar",
  openGraph: {
    title: "Feng Shui Residencial | Metafísica Oriental Brasil",
    description:
      "Transforme sua casa em um ambiente de prosperidade e harmonia com consultoria de Feng Shui Residencial.",
    url: "https://metafisicaorientalbrasil.com.br/feng-shui-residencial",
    siteName: "Metafísica Oriental Brasil",
    images: [
      {
        url: "/images/feng-shui-casa.webp",
        width: 1200,
        height: 630,
        alt: "Feng Shui Residencial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feng Shui Residencial | Metafísica Oriental Brasil",
    description:
      "Transforme sua casa em um ambiente de prosperidade e harmonia com consultoria de Feng Shui Residencial.",
    images: ["/images/feng-shui-casa.webp"],
  },
};

export default function FengShuiResidencial() {
  const whatsappMessage =
    "Olá! Tenho interesse na Consultoria de Feng Shui Residencial. Gostaria de saber mais detalhes sobre o serviço.";

  const benefits = [
    "Análise completa do ambiente residencial",
    "Mapa energético personalizado da sua casa",
    "Correções e ajustes específicos para cada cômodo",
    "Orientações para móveis e decoração",
    "Relatório detalhado com todas as recomendações",
    "Acompanhamento por 90 dias pós-consultoria",
    "Análise do terreno e direções favoráveis",
    "Harmonização das energias familiares",
  ];

  const includes = [
    "Análise das 8 direções da residência",
    "Mapeamento energético completo",
    "Avaliação do Ba Gua (Oito Trigramas)",
    "Identificação de setores favoráveis e desfavoráveis",
    "Correções com uso de elementos (água, metal, madeira, fogo, terra)",
    "Orientações para posicionamento de móveis",
    "Recomendações de cores para cada ambiente",
    "Análise da entrada principal e fluxo de Chi",
  ];

  const problems = [
    "Dificuldades financeiras constantes",
    "Problemas de saúde frequentes na família",
    "Conflitos e discussões em casa",
    "Insônia e falta de energia",
    "Estagnação profissional",
    "Dificuldades nos relacionamentos",
    "Falta de harmonia no lar",
    "Sensação de azar persistente",
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
              backgroundImage: "url('/images/feng-shui-casa.webp')",
            }}
          ></div>
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Home className="w-4 h-4" />
                  Feng Shui Residencial
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transforme sua Casa em um{" "}
                  <span className="text-gradient">
                    Santuário de Prosperidade
                  </span>
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Consultoria completa de Feng Shui Residencial para harmonizar
                  as energias do seu lar, promovendo prosperidade, saúde e
                  harmonia familiar através de técnicas milenares orientais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <WhatsAppContactButton message={whatsappMessage}>
                    <Phone className="w-5 h-5" />
                    Solicitar Consultoria
                  </WhatsAppContactButton>
                </div>
                <div className="flex items-center gap-8 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Análise Completa</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span>Visita Presencial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span>Relatório Detalhado</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Home className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Investimento
                    </h3>
                    <div className="text-4xl font-bold text-gold-600 mb-2">
                      R$ 3.500,00
                    </div>
                    <p className="text-gray-700">
                      Consultoria completa + Relatório
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Visita presencial
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Análise completa
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Relatório detalhado
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

        {/* Problemas que Resolvemos */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sua Casa Está <span className="text-gradient">Bloqueando</span>{" "}
                sua Prosperidade?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Muitos problemas em nossas vidas podem estar relacionados às
                energias desequilibradas do nosso lar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-lg">!</span>
                  </div>
                  <p className="text-gray-700 font-medium">{problem}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-gray-600 mb-8">
                <strong>
                  Se você se identifica com alguns desses problemas, o Feng Shui
                  pode ser a solução!
                </strong>
              </p>
              <WhatsAppContactButton
                message={whatsappMessage}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mx-auto"
              >
                <Phone className="w-5 h-5" />
                Quero Transformar Minha Casa
              </WhatsAppContactButton>
            </div>
          </div>
        </section>

        {/* O que Inclui */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que Inclui a{" "}
                <span className="text-gradient">Consultoria Residencial</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uma análise completa e detalhada do seu ambiente residencial
                seguindo as técnicas tradicionais do Feng Shui
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
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

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefícios
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Como Funciona a{" "}
                <span className="text-gradient">Consultoria</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Processo completo e personalizado para transformar as energias
                do seu lar
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
                  Entre em contato e agende a visita presencial
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Análise Local
                </h3>
                <p className="text-gray-600">
                  Visita presencial para análise completa do ambiente
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Mapeamento
                </h3>
                <p className="text-gray-600">
                  Criação do mapa energético personalizado
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
                  Relatório detalhado e suporte por 90 dias
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Resultados <span className="text-gradient">Comprovados</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja o que nossos clientes falam sobre a transformação em suas
                casas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">MF</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Maria Fernanda</h4>
                    <p className="text-gray-600">Empresária - São Paulo</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;Após a consultoria de Feng Shui, minha casa se
                  transformou em um verdadeiro santuário. Os conflitos
                  familiares diminuíram drasticamente e meu negócio começou a
                  prosperar de forma incrível!&quot;
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">RS</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Roberto Silva</h4>
                    <p className="text-gray-600">Advogado - Rio de Janeiro</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &quot;Incrível como pequenos ajustes na disposição dos móveis
                  e elementos podem fazer tanta diferença. Minha família está
                  mais unida e nossa situação financeira melhorou
                  significativamente!&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para <span className="text-gradient">Transformar</span> sua
              Casa?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Mais de 2.000 residências já foram harmonizadas com nosso método.
              Sua casa pode ser a próxima!
            </p>
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-2xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    2000+
                  </div>
                  <p className="text-gray-700">Residências Harmonizadas</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    25+
                  </div>
                  <p className="text-gray-700">Anos de Experiência</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700">Satisfação Garantida</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppContactButton message={whatsappMessage}>
                <Phone className="w-5 h-5" />
                Agendar Consultoria Residencial
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
                <h3 className="text-xl font-bold mb-4">Área de Atendimento</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-400" />
                    <span>Região Sul (PR, SC, RS)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-400" />
                    <span>Região Sudeste (SP, RJ, MG, ES)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-400" />
                    <span>Demais regiões: Consulte disponibilidade</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Professor Luiz Carlos
                </h3>
                <p className="text-gray-300">
                  Especialista em Feng Shui Tradicional com mais de 25 anos de
                  experiência. Formação nas principais escolas orientais de Feng
                  Shui.
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
