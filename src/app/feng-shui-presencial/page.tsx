import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import WhatsAppContactButton from "@/components/ui/WhatsAppContactButton";
import {
  Users,
  CheckCircle,
  Clock,
  Calendar,
  MapPin,
  Shield,
  Award,
  Phone,
  Mail,
  Instagram,
  Star,
  Book,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Curso de Feng Shui Presencial | Metafísica Oriental Brasil",
  description:
    "Aprenda Feng Shui Tradicional presencialmente com Professor Luiz Carlos. Curso completo com certificação internacional em 6 cidades do Brasil. Torne-se um especialista em Feng Shui.",
  keywords:
    "curso feng shui presencial, feng shui tradicional, curso feng shui Brasil, certificação feng shui, professor feng shui, escola feng shui",
  openGraph: {
    title: "Curso de Feng Shui Presencial | Metafísica Oriental Brasil",
    description:
      "Aprenda Feng Shui Tradicional presencialmente com Professor Luiz Carlos. Curso completo com certificação internacional.",
    url: "https://metafisicaorientalbrasil.com.br/feng-shui-presencial",
    siteName: "Metafísica Oriental Brasil",
    images: [
      {
        url: "/images/feng-shui-course.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de Feng Shui Presencial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Feng Shui Presencial | Metafísica Oriental Brasil",
    description:
      "Aprenda Feng Shui Tradicional presencialmente com Professor Luiz Carlos. Curso completo com certificação internacional.",
    images: ["/images/feng-shui-course.jpg"],
  },
};

export default function FengShuiPresencial() {
  const whatsappMessage =
    "Olá! Tenho interesse no Curso de Feng Shui Presencial. Gostaria de saber mais sobre as turmas disponíveis.";

  const cities = [
    { name: "Porto Alegre", state: "RS", next: "Março 2025" },
    { name: "Florianópolis", state: "SC", next: "Abril 2025" },
    { name: "Curitiba", state: "PR", next: "Maio 2025" },
    { name: "São Paulo", state: "SP", next: "Junho 2025" },
    { name: "Belo Horizonte", state: "MG", next: "Julho 2025" },
    { name: "Brasília", state: "DF", next: "Agosto 2025" },
  ];

  const modules = [
    {
      title: "Módulo 1: Fundamentos do Feng Shui",
      duration: "2 dias",
      content: [
        "História e filosofia do Feng Shui",
        "Conceitos básicos de Chi (energia)",
        "Yin e Yang aplicados aos ambientes",
        "Os Cinco Elementos e suas interações",
      ],
    },
    {
      title: "Módulo 2: Escola Xing Shi Pai (Formas)",
      duration: "3 dias",
      content: [
        "Análise das formas do terreno",
        "Dragões e Tigres na paisagem",
        "Localização ideal da residência",
        "Influência das montanhas e água",
      ],
    },
    {
      title: "Módulo 3: Escola Ba Zhai (Oito Mansões)",
      duration: "3 dias",
      content: [
        "Cálculo do número Kua pessoal",
        "Direções favoráveis e desfavoráveis",
        "Posicionamento de camas e mesas",
        "Harmonização dos ambientes",
      ],
    },
    {
      title: "Módulo 4: Feng Shui Comercial",
      duration: "2 dias",
      content: [
        "Feng Shui para escritórios",
        "Lojas e estabelecimentos comerciais",
        "Análise de fluxo de clientes",
        "Maximização da prosperidade",
      ],
    },
    {
      title: "Módulo 5: Prática Profissional",
      duration: "2 dias",
      content: [
        "Como realizar consultorias",
        "Elaboração de relatórios",
        "Ética profissional",
        "Certificação e exame final",
      ],
    },
  ];

  const benefits = [
    "Aprendizado direto com especialista renomado",
    "Turmas reduzidas (máximo 15 alunos)",
    "Certificação internacional reconhecida",
    "Material didático exclusivo incluso",
    "Suporte pós-curso por 6 meses",
    "Networking com outros profissionais",
    "Prática supervisionada em casos reais",
    "Acesso a grupo exclusivo de ex-alunos",
  ];

  const includes = [
    "12 dias de aulas presenciais",
    "Apostila completa com mais de 200 páginas",
    "Bússola Feng Shui profissional",
    "Kit de cristais e elementos",
    "Certificado internacional",
    "6 meses de suporte online",
    "Acesso a material complementar",
    "Possibilidade de revalidação",
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
              backgroundImage: "url('/images/astrologia+chinesa.webp')",
            }}
          ></div>
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Users className="w-4 h-4" />
                  Curso Presencial
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Torne-se um{" "}
                  <span className="text-gradient">Especialista</span> em Feng
                  Shui
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  Aprenda as técnicas clássicas do Feng Shui Tradicional com o
                  Professor Luiz Carlos. Curso presencial completo com
                  certificação internacional em 6 cidades do Brasil.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <WhatsAppContactButton message={whatsappMessage}>
                    <Phone className="w-5 h-5" />
                    Inscrever-se Agora
                  </WhatsAppContactButton>
                </div>
                <div className="flex items-center gap-8 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>Turmas Pequenas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span>12 Dias Intensivos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-green-400" />
                    <span>Certificação Internacional</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Investimento
                    </h3>
                    <div className="text-4xl font-bold text-gold-600 mb-2">
                      R$ 3.200
                    </div>
                    <p className="text-gray-700">Ou 12x R$ 297 sem juros</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        12 dias de curso
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Material completo
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        Certificação internacional
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        6 meses de suporte
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cidades Disponíveis */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Cidades <span className="text-gradient">Disponíveis</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Escolha a cidade mais próxima para participar do curso
                presencial
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {city.name}
                      </h3>
                      <p className="text-gray-600">{city.state}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Próxima turma:</p>
                    <p className="text-lg font-bold text-green-600">
                      {city.next}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <WhatsAppContactButton
                message={whatsappMessage}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mx-auto"
              >
                <Phone className="w-5 h-5" />
                Consultar Disponibilidade
              </WhatsAppContactButton>
            </div>
          </div>
        </section>

        {/* Módulos do Curso */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Módulos do <span className="text-gradient">Curso</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conteúdo completo e estruturado para sua formação profissional
              </p>
            </div>

            <div className="space-y-8">
              {modules.map((module, index) => (
                <div
                  key={module.title}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {module.title}
                        </h3>
                        <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-medium">
                          {module.duration}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {module.content.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O que Está Incluído */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                O que Está <span className="text-gradient">Incluído</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tudo que você precisa para se tornar um especialista em Feng
                Shui
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Material Incluído
                </h3>
                <div className="space-y-4">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
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
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-gold-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professor */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Seu <span className="text-gradient">Professor</span>
                </h2>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Luiz Carlos Akira
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Especialista em Feng Shui Tradicional com mais de 25 anos de
                    experiência, Professor Luiz Carlos é formado nas principais
                    escolas orientais de Feng Shui.
                  </p>
                  <p>
                    Com mais de 3.000 consultorias realizadas e centenas de
                    alunos formados, ele traz uma abordagem prática e
                    tradicional para o ensino do Feng Shui.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-gold-500" />
                      <span>Certificação Internacional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gold-500" />
                      <span>500+ Alunos Formados</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-gold-500" />
                      <span>3.000+ Consultorias</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Book className="w-5 h-5 text-gold-500" />
                      <span>25+ Anos de Experiência</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">LA</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Luiz Carlos Akira
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Professor de Feng Shui Tradicional
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Formação em Feng Shui Tradicional</p>
                    <p>• Especialista em Escola Xing Shi Pai</p>
                    <p>• Certificado em Ba Zhai Feng Shui</p>
                    <p>• Membro da Associação Internacional de Feng Shui</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Comece sua <span className="text-gradient">Jornada</span> no Feng
              Shui
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Vagas limitadas! Apenas 15 alunos por turma para garantir
              qualidade máxima no aprendizado.
            </p>
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-2xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    500+
                  </div>
                  <p className="text-gray-700">Alunos Formados</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    15
                  </div>
                  <p className="text-gray-700">Alunos por Turma</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-600 mb-2">
                    100%
                  </div>
                  <p className="text-gray-700">Aproveitamento</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppContactButton message={whatsappMessage}>
                <Phone className="w-5 h-5" />
                Inscrever-se Agora
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
                <h3 className="text-xl font-bold mb-4">Cidades Disponíveis</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <p>• Porto Alegre</p>
                  <p>• Florianópolis</p>
                  <p>• Curitiba</p>
                  <p>• São Paulo</p>
                  <p>• Belo Horizonte</p>
                  <p>• Brasília</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Certificação</h3>
                <p className="text-gray-300">
                  Certificado reconhecido internacionalmente válido para atuação
                  profissional em Feng Shui Tradicional.
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
