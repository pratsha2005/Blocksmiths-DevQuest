import { useTranslation } from "react-i18next";
import '../services/i18n'
export default function Features() {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-50 py-12 sm:py-32 max-h-[100rem]">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <p className="mx-auto mt-2 max-w-7xl text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl font-open-sans ">
          {t('card.title')}
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 grid-cols-3 grid-rows-2">



          {/* Integration and Accessibility */}
          <div className="relative max-lg:row-start-1 group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out font-oswald">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem] group-hover:bg-gray-200"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <h1 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{t('card.subtitle1')}</h1>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <p>{t('card.desc1')}</p>
                  </p>
              </div>

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://www.softwebsolutions.com/wp-content/uploads/2022/07/ADA-accesbility.webp"
                  alt="trust and transparency image"
                />
              </div>
            </div>
           
          </div>

          <div className="relative max-lg:row-start-1 group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out font-oswald">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] group-hover:bg-gray-200"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h1 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{t('card.subtitle2')}</h1>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <p>{t('card.desc2')}</p>
                  </p>
                  
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://media.istockphoto.com/id/1179929770/vector/business-handshake-vector-illustration-flat-style-online-communication-two-business-man.jpg?s=612x612&w=0&k=20&c=7c4QYIwG2QoG-oWtXajke9_U1RcW0fNCzfvrVLPAXS4="
                  alt="trust and transparency image"
                />
              </div>
            </div>
          
          </div>





          {/* Trust and Transparency */}
          <div className="relative max-lg:row-start-1 group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out font-oswald">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] group-hover:bg-gray-200"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h1 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{t('card.subtitle3')}
                </h1>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  <p>{t('card.desc3')}</p>
                
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://www.ayazduru.com.tr/blog/image.axd?picture=/images/ethereum-smart-contract.jpg"
                  alt="Smart Contracts for Automation"
                />
              </div>
            </div>
          
          </div>

        

           

          {/* Ease of Use */}
          <div className="relative max-lg:row-start-2 group hover:scale-105 hover:shadow-xl transition-all duration-100 ease-in-out font-oswald">
         <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem] group-hover:bg-gray-200"></div>
         <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
         <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
          <h1 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{t('card.subtitle4')}</h1>
           <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
           <p>{t('card.desc4')}</p>
        
      </p>
    </div>
    
    
    <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEIq20OZWl0lgW7Vmr2U4ssXj7uJkR73oxRHNph1WGuA-surhUgRT5ISKh1deh43JoGk&usqp=CAU"
                  alt="trust and transparency image"
                />
       </div>

  </div>
         </div>
           {/* security */}
         <div className="relative max-lg:row-start-2 lg:col-start-2 lg:row-start-2 group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out mb-5 font-oswald">
            <div className="absolute inset-px rounded-lg bg-white group-hover:bg-gray-200"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h1 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{t('card.subtitle5')}</h1>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                {t('card.desc5')}
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2  mb-6 mx-6">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>

             
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>


         {/* global reeach */}
          <div className="relative max-lg:row-start-2 lg:col-start-3 lg:row-start-2 group hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out mb-5 font-oswald">
            <div className="absolute inset-px rounded-lg bg-white group-hover:bg-gray-200"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <h1 className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">{t('card.subtitle6')}
                </h1>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                {t('card.desc6')}
          
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://media.istockphoto.com/id/1311205335/vector/business-travel.jpg?s=612x612&w=0&k=20&c=_1sgBnxD7hspLgiJh4jUMvaTcEae2GJ2UDzR1f7g-Jw="
                  alt="trust and transparency image"
                />
              </div>
            </div>

             
        
          </div>

        </div>
      </div>
    </div>
  );
}
