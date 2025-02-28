import Image from "next/image";
import Link from "next/link";

export default function GroupesavePage() {
  return (
    <>
      <section className="mx-auto max-w-7xl w-4/5 md:w-4/5 py-10 lg:text-left relative">
        <div className="flex items-center mb-8">
          <i className="fa-solid fa-fire text-sky-600 text-2xl mr-4"></i>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Groupe SAVE : Solutions web
            </h1>
            <p className="font-semibold text-lg text-gray-500">
              Application Web / Mobile
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden mb-8">
          <Link
            href="https://www.linkedin.com/company/groupesave"
            target="_blank"
          >
            <Image
              src="/assets/portfolio/images/SAVE.png"
              alt="SAVE"
              width={1920}
              height={1080}
            />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:gap-32 mb-8">
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <p className="font-semibold text-2xl mb-2">Brief :</p>
            <p className="text-lg text-gray-800 mb-6">
              L'objectif des solutions web et mobile développées par le Groupe
              SAVE est de digitaliser les processus métiers dans le secteur de
              la sécurité incendie. Les solutions développées facilitent à
              présent le travail des techniciens sur le terrain, en leur
              permettant de gérer leurs interventions, de remplir des rapports
              d'interventions, de gérer leur planning, etc.
            </p>

            <p className="text-lg text-gray-800 mb-6">
              Plusieurs solutions ont été développées :
            </p>

            <ul className="list-disc list-inside ml-10 text-gray-700 space-y-3">
              <li>
                <b>Sprinkly</b> : Une application mobile pour les techniciens
              </li>
              <li>
                <b>Intranet</b> : Une application web pour les administrateurs
              </li>
              <li>
                <b>Extranet</b> : Une application web pour les clients
              </li>
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
                  .Net
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  C#
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Strapi
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  React Native
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Azure
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  JIRA
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Chakra UI
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Github Actions
                </li>
              </ul>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/groupesave"
                target="_blank"
              >
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
              <Image
                src="/assets/porfolio/images/save-1.png"
                alt="Groupe Save"
                className="w-full h-full object-contain"
                width={1920}
                height={1080}
              />
            </div>
            <div>
              <Image
                src="/assets/portfolio/images/save-2.PNG"
                alt="Meetmapper"
                className="w-full h-full object-contain"
                width={1920}
                height={1080}
              />
            </div>
            <div>
              <Image
                src="/assets/portfolio/images/save-3.PNG"
                alt="Meetmapper"
                className="w-full h-full object-contain"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
