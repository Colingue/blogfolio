import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-5 py-10">
      <section>
        <div className="sm:flex text-center sm:text-left items-center justify-center sm:justify-between flex flex-col-reverse sm:flex-row sm:gap-10 z-10 relative">
          <div>
            <div>
              <p className="text-xl">Hi, I'm Colin Noiret 👋</p>
              <h2 className="text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-[#680cbb] to-[#00aeff] inline-block text-transparent bg-clip-text">
                I'm a Fullstack Developer
              </h2>
            </div>
            <p className="text-2xl text-gray-400 font-light mb-10">
              Construire le web de demain, aujourd'hui.
            </p>

            <a href="mailto:colin.noiret@gmail.com">
              <button className="py-2 px-4 bg-black text-white rounded-lg">
                Contact
              </button>
            </a>
          </div>

          <img
            src="assets/portfolio/images/colin.jpeg"
            alt="Colin Noiret"
            className="w-52 h-52 rounded-full mb-10 sm:mb-0"
          />
        </div>
      </section>

      <div className="logos w-4/5 max-w-7xl mx-auto">
        <div className="logos-slide">
          <div>
            <img src="assets/portfolio/images/react.png" alt="React" />
          </div>
          <div>
            <img src="assets/portfolio/images/nextjs.png" alt="React" />
          </div>
          <div>
            <img src="assets/portfolio/images/typescript.png" alt="React" />
          </div>
          <div>
            <img src="assets/portfolio/images/springboot.png" alt="React" />
          </div>
          <div>
            <img src="assets/portfolio/images/figma.webp" alt="React" />
          </div>
          <div>
            <img src="assets/portfolio/images/git.png" alt="React" />
          </div>
          <div>
            <img src="assets/portfolio/images/github.svg" alt="React" />
          </div>
          <div>
            <img src="assets/portfolio/images/javascript.png" alt="React" />
          </div>
        </div>
      </div>

      <section className="container mx-auto py-10 lg:text-left relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          <span className="text-blue-600 pr-2">01.</span>My Projects
        </h2>
        <div className="flex flex-wrap gap-8">
          <div className="w-full md:w-[calc(50%-1rem)] border p-4 rounded-lg cursor-pointer">
            <Link href="projects/meetmapper">
              <img
                src="./assets/portfolio/images/meetmapper.png"
                alt="Meet Mapper"
                className="w-full h-48 object-cover rounded-lg mb-4 bg-white"
              />
              <p className="font-semibold text-2xl">🌍 Meetmapper</p>
              <p className="text-gray-400 mb-4 text-sm">
                App web de correspondance basé sur une carte interactive.
              </p>
              <ul className="flex gap-2">
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Typescript
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  React
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  NextJS
                </li>
              </ul>
            </Link>
          </div>
          <div className="w-full md:w-[calc(50%-1rem)] border p-4 rounded-lg cursor-pointer relative">
            <a href="projects/budget2travel">
              <Image
                src="/assets/portfolio/images/budget2travel.png"
                alt="Cowork"
                className="w-full h-48 object-cover rounded-lg mb-4 bg-white"
                width={500}
                height={300}
              />
              <p className="font-semibold text-2xl">✈️ Budget2travel</p>
              <p className="text-gray-400 mb-4 text-sm">
                Site web d'estimation de coût de voyage.
              </p>
              <ul className="flex gap-2">
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Typescript
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Nuxt
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Vue
                </li>
              </ul>
            </a>
          </div>
          <div className="w-full md:w-[calc(50%-1rem)] border p-4 rounded-lg cursor-pointer relative">
            <Link href="projects/groupesave">
              <img
                src="./assets/portfolio/images/SAVE.png"
                alt="Cowork"
                className="w-full h-48 object-cover rounded-lg mb-4 bg-white"
              />
              <p className="font-semibold text-2xl">
                🔥 Groupe SAVE: Solutions Web
              </p>
              <p className="text-gray-400 mb-4 text-sm">
                Apps web et mobile pour la gestion des maintenances incendie.
              </p>
              <ul className="flex gap-2">
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Typescript
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  React
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  NextJS
                </li>
              </ul>
            </Link>
          </div>

          <div className="w-full md:w-[calc(50%-1rem)] border p-4 rounded-lg cursor-pointer">
            <a href="projects/cowork.html">
              <img
                src="./assets/portfolio/images/cowork.png"
                alt="Cowork"
                className="w-full h-48 object-cover rounded-lg mb-4 bg-white"
              />
              <p className="font-semibold text-2xl">💻 Cowork</p>
              <p className="text-gray-400 mb-4 text-sm">
                App web de réservation d'espace de coworking.
              </p>
              <ul className="flex gap-2">
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  NextJS
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  React
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Typescript
                </li>
              </ul>
            </a>
          </div>
        </div>
      </section>

      <div className="border mx-auto"></div>

      <section className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          <span className="text-blue-600 pr-2">02.</span> Expériences
          Professionnelles
        </h2>
        <div className="">
          <div className="bg-white p-4">
            <h3 className="text-xl font-semibold">Développeur Fullstack</h3>
            <a
              className="text-blue-600 mt-2"
              href="https://www.linkedin.com/company/groupesave"
            >
              @Groupe SAVE
            </a>
            <p className="text-gray-600 mt-2">Oct 2022 - Sept 2024</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li className="mb-2">
                Développement d'une solution intranet web, et d'une application
                mobile. Prise en charge de l'extranet client.
              </li>
              <li className="mb-2">
                Mise en oeuvre de la solution cloud avec Microsoft Azure. Mise
                en place de pipeline CI/CD.
              </li>
              <li className="mb-2">
                Stack: NextJS, React, Typescript, React Native, GraphQL, Azure
              </li>
            </ul>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-xl font-semibold">
              Co-fondateur, étudiant entrepreneur
            </h3>
            <a className="text-blue-600 mt-2" href="https://meetmapper.com/">
              @Meetmapper
            </a>
            <p className="text-gray-600 mt-2">Mai 2023 - Juil 2024</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li className="mb-2">
                Création de l’application avec Next.js et TypeScript,
                intégration d’une carte interactive, gestion des utilisateurs et
                messagerie instantanée.
              </li>
              <li className="mb-2">
                Coordination de l’équipe, suivi des tâches et définition du
                produit après analyse du marché.
              </li>
              <li>
                Stack: Next.js, TypeScript, OpenLayers, Socket.IO, Docker.
              </li>
            </ul>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-xl font-semibold">Développeur Fullstack</h3>
            <a className="text-blue-600 mt-2" href="https://www.webforme.fr">
              @Webforme
            </a>
            <p className="text-gray-600 mt-2">Aout 2021 - Aout 2022</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li className="mb-2">
                Développement de sites ecommerce et sites vitrines.
              </li>
              <li className="mb-2">
                Création de modules Prestashop sur mesure.
              </li>
              <li>Stack: HTML, CSS, JavaScript, PHP, Prestashop, MySQL</li>
            </ul>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-xl font-semibold">Développeur web</h3>
            <p className="text-blue-600 mt-2">@UCA Université Clermont</p>
            <p className="text-gray-600 mt-2">Avril 2021 - Juin 2021</p>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li className="mb-2">
                Développemnt d'un site dédié à la reservation de matériel
              </li>
              <li className="mb-2">Création de prototypes de site web.</li>
              <li>Stack: HTML, CSS, JavaScript, MySQL</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="border mx-auto"></div>

      <section className="container mx-auto py-10 text-center mb-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          <span className="text-blue-600 pr-2">03.</span>Contactez-moi
        </h2>
        <p className="text-gray-600 mb-12">
          N'hésitez pas à me contacter pour toute demande ou collaboration.
        </p>
        <a
          href="mailto:colin.noiret@gmail.com"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg"
        >
          Contactez-moi
        </a>
      </section>
    </div>
  );
}
