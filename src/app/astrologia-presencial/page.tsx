import Navbar from "@/components/layout/Navbar";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import { Star, Clock, Users, MapPin, CheckCircle, Award } from "lucide-react";

export default function AstrologiaPresencial() {
  const cities = [
    "Porto Alegre",
    "Florianópolis",
    "Curitiba",
    "São Paulo",
    "Belo Horizonte",
    "Brasília",
  ];

  const learningTopics = [
    "Fases da vida",
    "Ming Guá – O trigrama do destino",
    "Yue Shu Ming Li - Numerologia chinesa",
    "Ming Shu Bazi - Animais do zodíaco chinês",
    "Zi Ping Bazi – Quatro pilares do destino",
    "9 Constelações",
  ];

  const benefits = [
    "Interação direta com o professor",
    "Material didático completo",
    "Suporte online exclusivo por 30 dias",
    "Turmas limitadas a 10 alunos",
    "Certificado de reconhecimento internacional",
    "Networking com outros estudantes",
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
                    <span className="text-gold-400 block">Presencial</span>
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed">
                    Domine a leitura do BaZi e descubra como os ciclos
                    energéticos moldam sua vida.
                    <strong className="text-gold-400">
                      {" "}
                      Formação sólida e prática
                    </strong>{" "}
                    em técnicas tradicionais.
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
                    <Award className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">Certificado internacional</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span className="text-sm">6 cidades brasileiras</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Tenho%20interesse%20no%20Curso%20de%20Astrologia%20Chinesa%20Presencial.%20Gostaria%20de%20saber%20mais%20sobre%20datas,%20locais%20e%20valores."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center justify-center gap-3 no-underline"
                  >
                    Garantir Minha Vaga
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
                Curso completo em Astrologia Chinesa tradicional com técnicas
                milenares
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningTopics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {topic}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Técnica tradicional chinesa para compreensão profunda do
                        destino
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Cidades Disponíveis
              </h2>
              <p className="text-xl text-gray-600">
                Curso presencial em breve nas principais cidades do Brasil
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {city}
                  </h3>
                  <p className="text-gray-600 mb-4">Em breve</p>
                  <a
                    href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Gostaria%20de%20saber%20sobre%20o%20curso%20presencial%20em%20[CIDADE]."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Consultar Disponibilidade
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Vantagens do Curso Presencial
              </h2>
              <p className="text-xl text-gray-600">
                Experiência completa com atenção personalizada
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit}
                  </h3>
                  <p className="text-gray-600">
                    Aproveite ao máximo a experiência presencial com o Professor
                    Akira
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Garanta Sua Vaga Agora
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Vagas limitadas a apenas 10 alunos por turma. Entre em contato
              para confirmar disponibilidade e realizar sua inscrição.
            </p>
            <a
              href="https://wa.me/5541991160348?text=Olá,%20Professor%20Luiz%20Carlos%20Akira!%20Quero%20garantir%20minha%20vaga%20no%20Curso%20de%20Astrologia%20Chinesa%20Presencial.%20Poderia%20me%20enviar%20mais%20informações?"
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
