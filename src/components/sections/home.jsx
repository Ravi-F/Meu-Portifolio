import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
      <div className="text-center z-10 p-4">
        <h1 className="text-5xl md:text-7x1 font-bold mb-6 bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent leading-right">
          Olá, eu sou o Ravi
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Sou um desenvolvedor web apaixonado por tecnologia e inovação. Estou
          sempre procurando por novas maneiras de melhorar minhas habilidades e
          aprender com as pessoas ao meu redor.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projetos"
            className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
          >
            Meus Projetos
          </a>

          <a
            href="#contatos"
            className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10"
          >
            Entre em contato
          </a>
          
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
