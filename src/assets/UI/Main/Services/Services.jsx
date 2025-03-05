import React from 'react';
import Carousel, {
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderNextButton,
  SliderPrevButton,
} from '../../../component/corousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MaintenanceCard from '../../../component/ServiceCard'; // Import ServiceCard
import './Services.css';
// ✅ Importing images correctly (if using `src/images/`)
import alignment from '../../../images/alignment.jpg';
import brakes from '../../../images/brakes.jpg';
import engine from '../../../images/engineservice.jpg';
import maintenance from '../../../images/maintenance.jpg';
import oil from '../../../images/powdercoating.jpg';
import wheels from '../../../images/wheels.jpg';

function Index() {
  const OPTIONS = { loop: true };

  return (
  
    <div className="bg-background p-4 relative">
      <h1 className='service-title text-white text-5xl font-extrabold text-center fade-in'>WE OFFER A WIDE RANGE OF CAR SERVICES</h1>
      <Carousel options={OPTIONS} isScale={true} className='mt-10'>
        <SliderContainer>
          <Slider className="sm:w-[55%] w-[90%]">
            <MaintenanceCard src={alignment} title="Alignment" description="Ensure your vehicle drives straight and smooth." />
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <MaintenanceCard src={brakes} title="Brakes" description="Reliable brake services to keep you safe." />
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <MaintenanceCard src={engine} title="Engine Service" description="Professional maintenance for engine longevity." />
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <MaintenanceCard src={maintenance} title="Maintenance" description="Routine check-ups to prevent major issues." />
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <MaintenanceCard src={oil} title="Oil Change" description="Keep your engine running smoothly with fresh oil." />
          </Slider>
          <Slider className="sm:w-[55%] w-[90%]">
            <MaintenanceCard src={wheels} title="Wheels" description="High-quality wheel services for a better ride." />
          </Slider>
        </SliderContainer>

        {/* Navigation Arrows */}
        <SliderPrevButton className="absolute top-1/2 -translate-y-1/2 p-2 border-2 rounded-full left-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
          <ChevronLeft className="w-8 h-8" />
        </SliderPrevButton>
        <SliderNextButton className="absolute top-1/2 -translate-y-1/2 p-2 border-2 rounded-full right-4 bg-white/25 dark:bg-black/25 dark:border-white backdrop-blur-sm text-primary disabled:opacity-20">
          <ChevronRight className="w-8 h-8" />
        </SliderNextButton>

        {/* Dots for navigation */}
        <div className="flex justify-center py-4">
          <SliderDotButton />
        </div>
      </Carousel>
    </div>
  );
}

export default Index;