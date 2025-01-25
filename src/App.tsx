import CardImage from "./components/ui/card-image";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <CardImage
        images={[
          "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
          "https://images.unsplash.com/photo-1508020963102-c6c723be5764",
          "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
          "https://images.unsplash.com/photo-1462524500090-89443873e2b4",
          "https://images.unsplash.com/photo-1511497584788-876760111969",
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
        ]}
      />
    </div>
  );
}
