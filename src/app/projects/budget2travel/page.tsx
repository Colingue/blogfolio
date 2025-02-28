import Image from "next/image";

export default function Budget2travelPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl w-4/5 md:w-4/5 py-10 lg:text-left relative">
        <div className="flex items-center mb-8">
          <i className="fa-solid fa-globe text-sky-600 text-2xl mr-4"></i>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Budget2travel</h1>
            <p className="font-semibold text-lg text-gray-500">
              Application web
            </p>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden mb-8">
          <a href="https://budget2travel.com/" target="_blank">
            <Image
              src="/assets/portfolio/images/budget2travel.png"
              alt="Budget2travel"
              width={1920}
              height={1080}
            />
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:gap-32 mb-8">
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <p className="font-semibold text-2xl mb-2">Brief :</p>
            <p className="text-gray-700 mb-8">
              Budget2travel est un site permettant d'estimer les coûts de
              voyage. Avec +150 destinations, Budget2travel permet de connaître
              le coût de la vie dans le monde entier. Les utilisateurs peuvent
              également partager leurs estimations avec leurs amis.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="mb-4">
              <p className="font-semibold text-2xl mb-2">Technologies :</p>
              <ul className="flex gap-2 flex-wrap">
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Typescript
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Vue
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  Nuxt
                </li>
                <li className="bg-sky-100 py-1 px-2 rounded-md text-sky-800">
                  TailwindCSS
                </li>
              </ul>
            </div>
            <div>
              <a href="https://budget2travel.com" target="_blank">
                <p className="text-sky-600 font-semibold underline">
                  Voir le site
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-10">
          <h2 className="font-semibold text-2xl mb-2">Screenshots :</h2>

          <div className="flex flex-col gap-10">
            <div>
              <img
                src="/assets/portfolio/images/meetmapper1.png"
                alt="Budget2travel"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <img
                src="/assets/portfolio/images/meetmapper2.png"
                alt="Budget2travel"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <img
                src="/assets/portfolio/images/meetmapper3.png"
                alt="Budget2travel"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <img
                src="/assets/portfolio/images/meetmapper4.png"
                alt="Budget2travel"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-center items-center flex-wrap">
              <img
                src="/assets/portfolio/images/meetmapper5.png"
                alt="Budget2travel"
                className="w-full h-full object-contain"
              />
              <img
                src="/assets/portfolio/images/meetmapperlogo.png"
                alt="Budget2travel"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
