import {
  SectionHeader,
  SectionHeaderDescription,
  SectionHeaderTitle,
} from "@/components/ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const SkillsQuality = () => {
  return (
    <div className="container flex flex-col gap-10 justify-center items-center mx-auto mt-8 mb-12 md:mb-4">
      <SectionHeader badge="Strengths">
        <SectionHeaderTitle>
          Discover my <span className="text-primary">strengths</span>
        </SectionHeaderTitle>
        <SectionHeaderDescription>
          Seamlessly connecting frontend creativity and backend efficiency
        </SectionHeaderDescription>
      </SectionHeader>

      <div className="flex justify-center w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex justify-center items-center p-6 aspect-square">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default SkillsQuality;
