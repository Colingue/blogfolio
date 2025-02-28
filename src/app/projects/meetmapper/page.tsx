import Image from "next/image";

export default function MeetmapperPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl w-4/5 md:w-4/5 py-10 lg:text-left relative">
        <div className="flex items-center mb-8">
          <i className="fa-solid fa-globe text-sky-600 text-2xl mr-4"></i>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Meetmapper</h1>
            <p className="font-semibold text-lg text-gray-500">
              Application web
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden mb-8">
          <a href="https://meetmapper.com/" target="_blank">
            <Image
              src="/assets/portfolio/images/meetmapper.png"
              alt="Meetmapper"
              width={1920}
              height={1080}
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:gap-32 mb-8">
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <p className="font-semibold text-2xl mb-2">Brief :</p>
            <p className="text-gray-700 mb-8">
              Meetmapper est une application web lancée en 2023. Elle permet de
              discuter avec des personnes du monde entier. L'application utilise
              la technologie OpenLayers pour afficher une carte du monde et
              permettre de voir les personnes inscrites sur Meetmapper.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Les fonctionnalités principales sont :
            </h3>

            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Authentification et gestion des utilisateurs</li>
              <li>Carte interactive</li>
              <li>Messagerie instantanée</li>
              <li>Personnalisation du profil</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <div className="mb-4">
              <p className="font-semibold text-2xl mb-2">Technologies :</p>
              <ul className="flex gap-2 flex-wrap">
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Typescript
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  React
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  NextJS
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Openlayers
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  NodeJS
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  PostgreSQL
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Socket.io
                </li>
              </ul>
            </div>
            <div>
              <a href="https://meetmapper.com" target="_blank">
                <p className="text-sky-600 font-semibold underline">
                  Voir le site
                </p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="font-semibold text-2xl mb-2">Screenshots :</h2>

          <div className="flex flex-col gap-10">
            <div>
              <img
                src="/assets/portfolio/images/meetmapper1.png"
                alt="Meetmapper"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <img
                src="/assets/portfolio/images/meetmapper2.png"
                alt="Meetmapper"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <img
                src="/assets/portfolio/images/meetmapper3.png"
                alt="Meetmapper"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <img
                src="/assets/portfolio/images/meetmapper4.png"
                alt="Meetmapper"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-center items-center flex-wrap">
              <img
                src="/assets/portfolio/images/meetmapper5.png"
                alt="Meetmapper"
                className="w-full h-full object-contain"
              />
              <img
                src="/assets/portfolio/images/meetmapperlogo.png"
                alt="Meetmapper"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
