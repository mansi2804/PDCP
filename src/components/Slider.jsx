import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "/src/components/ui/carousel";

export function Slider() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <CarouselItem>
          <img
            src="https://images.unsplash.com/photo-1556035511-3168381ea4d4?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Carousel Image 1"
            className="w-full h-full object-cover max-h-[78vh] rounded-md"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images.unsplash.com/photo-1709090083073-d130ac28cc19?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Carousel Image 2"
            className="w-full h-full object-cover max-h-[78vh] rounded-md"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Carousel Image 3"
            className="w-full h-full object-cover max-h-[78vh] rounded-md"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Carousel Image 4"
            className="w-full h-full object-cover max-h-[78vh] rounded-md"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground transition-colors hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 text-foreground transition-colors hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="h-2 w-2 rounded-full bg-background/50 transition-colors hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        <div className="h-2 w-2 rounded-full bg-background/50 transition-colors hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        <div className="h-2 w-2 rounded-full bg-background/50 transition-colors hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
        <div className="h-2 w-2 rounded-full bg-background/50 transition-colors hover:bg-background/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
      </div>
    </Carousel>
  );
}
