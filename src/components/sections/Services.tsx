"use client";

import Image from "next/image";

export default function Services() {
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  const consultancies = [
    {
      title: "Mapa Astrológico Chinês",
      description:
        "Descubra seu potencial nas áreas de saúde, finanças e relacionamentos com ferramentas como numerologia chinesa e os quatro pilares do destino.",
      image: "/images/mapa-chines.jpg",
      buttons: [
        {
          text: "Pessoal",
          href: "/mapa-astrologico-pessoal",
          color: "bg-red-600 hover:bg-red-700",
        },
        {
          text: "Empresarial",
          href: "/mapa-astrologico-empresarial",
          color: "bg-red-600 hover:bg-red-700",
        },
      ],
    },
    {
      title: "Consultoria de Feng-Shui",
      description:
        "Melhore sua casa, sua energia e seus resultados. Reorganize seu espaço para favorecer prosperidade, saúde, relacionamentos e equilíbrio interior.",
      image: "/images/feng-sui+consult.png",
      buttons: [
        {
          text: "Residencial",
          href: "/feng-shui-residencial",
          color: "bg-red-600 hover:bg-red-700",
        },
        {
          text: "Empresarial",
          href: "/feng-shui-empresarial",
          color: "bg-red-600 hover:bg-red-700",
        },
      ],
    },
  ];

  const courses = [
    {
      title: "Curso de Feng Shui Tradicional",
      description:
        "Aprenda técnicas clássicas de Feng Shui para harmonizar ambientes e se preparar para atuar profissionalmente na área.",
      image: "/images/feng-shui.jpg",
      buttons: [
        {
          text: "Presencial",
          href: "/feng-shui-presencial",
          color: "bg-red-600 hover:bg-red-700",
        },
        {
          text: "Online",
          href: "/feng-shui-online",
          color: "bg-red-600 hover:bg-red-700",
        },
      ],
    },
    {
      title: "Curso de Astrologia Chinesa",
      description:
        "Aprenda astrologia chinesa e interprete mapas para se conhecer melhor, tomar decisões certas e atuar profissionalmente com leitura de mapas.",
      image: "/images/astrologia+chinesa.webp",
      buttons: [
        {
          text: "Presencial",
          href: "/astrologia-presencial",
          color: "bg-red-600 hover:bg-red-700",
        },
        {
          text: "Online",
          href: "/astrologia-online",
          color: "bg-red-600 hover:bg-red-700",
        },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme sua vida com nossas consultorias especializadas e cursos
            profissionalizantes. Mais de 25 anos de experiência em técnicas
            milenares orientais.
          </p>
        </div>

        {/* Consultorias */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Consultorias
            </h3>
            <p className="text-lg text-gray-600">
              Consultoria personalizada para resolver seus desafios específicos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {consultancies.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex gap-3">
                    {service.buttons.map((button, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigate(button.href)}
                        className={`flex-1 ${button.color} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer`}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cursos */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Cursos</h3>
            <p className="text-lg text-gray-600">
              Torne-se um profissional certificado em Feng Shui e Astrologia
              Chinesa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-gray-100"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">
                    {course.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex gap-3">
                    {course.buttons.map((button, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigate(button.href)}
                        className={`flex-1 ${button.color} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer`}
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
