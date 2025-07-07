import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import {
  Building,
  TrendingUp,
  Users,
  Target,
  CheckCircle,
  DollarSign,
  Award,
  Briefcase,
} from "lucide-react";

export default function FengShuiEmpresarial() {
  const benefits = [
    {
      title: "Aumento de Performance",
      description: "Colaboradores mais alinhados e produtivos",
      icon: TrendingUp,
    },
    {
      title: "Expansão de Lucros",
      description:
        "Fluxo de energia que favorece prosperidade e novas oportunidades",
      icon: DollarSign,
    },
    {
      title: "Melhora nas Relações",
      description:
        "Parcerias e negociações com mais fluidez e apoio estratégico",
      icon: Users,
    },
    {
      title: "Fortalecimento da Cultura",
      description: "Ambientes que sustentam crescimento sólido e duradouro",
      icon: Target,
    },
  ];

  const triplePotential = [
    {
      title: "Localização Estratégica",
      description: "Análise da posição geográfica e entorno da empresa",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Energia do Imóvel",
      description: "BaGuá empresarial aplicado ao espaço físico",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Potencial dos Líderes",
      description: "BaGuá pessoal dos colaboradores-chave e equipes",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const features = [
    "Análise energética completa do espaço físico",
    "Leitura dos colaboradores-chave através do BaGuá pessoal",
    "Aplicação de técnicas tradicionais chinesas",
    "Alinhamento do ambiente às metas da empresa",
    "Estratégias usadas nas maiores corporações da Ásia",
    "Consultoria personalizada para seu negócio",
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
                    Consultoria de Feng Shui
                    <span className="text-gold-400 block">Empresarial</span>
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Alinhe a energia da sua empresa para
                    <strong className="text-gold-400">
                      {" "}
                      maximizar resultados
                    </strong>{" "}
                    e aumentar o crescimento usando estratégias milenares
                    orientais.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">
                      Análise empresarial completa
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Feng Shui tradicional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Análise de colaboradores</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Aumento de performance</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-gold-400 mb-4">
                    Investimento
                  </h3>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-green-400" />
                    <span>
                      <strong className="text-white">
                        A partir de R$ 4.500,00
                      </strong>
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">
                    Valor varia conforme o tamanho e complexidade da empresa
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Tenho%20interesse%20na%20Consultoria%20de%20Feng%20Shui%20Empresarial.%20Gostaria%20de%20solicitar%20uma%20análise%20personalizada%20para%20minha%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-3 no-underline"
                  >
                    Solicitar Análise Personalizada
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
                          src="/images/feng-shui+trabalho.jpg.webp"
                          alt="Feng Shui Empresarial"
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

        {/* Triple Potential */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Tríplice Potencial
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Diferente do Feng Shui ocidental, que limita sua atuação ao
                imóvel, nossa abordagem tradicional considera o{" "}
                <strong>tríplice potencial</strong> para maximizar os resultados
                da sua empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {triplePotential.map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}
                  >
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
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
                Benefícios Concretos
              </h2>
              <p className="text-xl text-gray-600">
                Resultados comprovados com a aplicação do Feng Shui tradicional
                em empresas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Nossa Metodologia
              </h2>
              <p className="text-xl text-gray-600">
                Técnicas tradicionais chinesas como aplicadas nas maiores
                corporações da Ásia
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Abordagem Integrada
                </h3>
                <p className="text-gray-700 mb-6">
                  Combinamos a análise energética do espaço físico (BaGuá
                  empresarial) e a leitura dos colaboradores-chave (BaGuá
                  pessoal) para alinhar o ambiente às metas da sua empresa.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <p className="text-primary-600 font-semibold italic">
                    &quot;Assim como é feito nas maiores corporações da
                    Ásia&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Transforme Sua Empresa
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Descubra como ativar o verdadeiro potencial da sua empresa com
                estratégias milenares que unem tradição oriental e resultados
                corporativos modernos.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <p className="text-lg italic mb-4">
                  &quot;A Consultoria de Feng Shui Tradicional Comercial aplica
                  estratégias milenares para criar ambientes empresariais que
                  impulsionam lucro, produtividade e estabilidade.&quot;
                </p>
                <p className="text-gold-400 font-semibold">
                  - Professor Luiz Carlos Akira
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Solicite uma Análise Personalizada
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato para descobrir como o Feng Shui tradicional pode
              transformar os resultados da sua empresa.
            </p>
            <a
              href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Gostaria%20de%20solicitar%20uma%20análise%20personalizada%20de%20Feng%20Shui%20Empresarial%20para%20minha%20empresa.%20Poderia%20me%20enviar%20mais%20informações?"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 inline-flex items-center gap-3"
            >
              <Briefcase className="w-5 h-5" />
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
