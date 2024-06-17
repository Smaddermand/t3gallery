import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/5392108c-01b1-4735-aaba-160edbfec605-1h.png",
  "https://utfs.io/f/d88d2f3f-34dd-492b-8ae3-43bb1cd895f0-1e.png",
  "https://utfs.io/f/2494ccb7-55c4-48db-b191-e30c5fdfc72b-1f.png",
  "https://utfs.io/f/497d3907-a7d1-4339-8200-29ecd51bbdfa-1g.png",
  "https://utfs.io/f/5392108c-01b1-4735-aaba-160edbfec605-1h.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
