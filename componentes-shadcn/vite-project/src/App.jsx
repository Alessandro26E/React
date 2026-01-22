import "./App.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function App() {
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">

      <Carousel className="bg-transparent h-[300px] w-[500px] rounded-md ">

        <CarouselContent >

          <CarouselItem > 
            <img className="h-[300px] w-[500px] rounded-md" src="https://gru.ifsp.edu.br/images/phocagallery/galeria2/image03_grd.png"/>
          </CarouselItem>

          <CarouselItem> 
            <img className="h-[300px] w-[500px] rounded-md" src="https://static-cse.canva.com/blob/759754/IMAGE1.jpg"/>
          </CarouselItem>

          <CarouselItem> 
            <img className="h-[300px] w-[500px] rounded-md" src="https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"/>
          </CarouselItem>

        </CarouselContent>

        <CarouselPrevious className="cursor-pointer" />

        <CarouselNext className="cursor-pointer" />

      </Carousel>

    </div>
  );
}

export default App;
