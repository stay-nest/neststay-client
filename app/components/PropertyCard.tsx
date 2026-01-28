import { Location } from "../types/location";
import SquarePropertyCard from "./SquarePropertyCard";
import TallPropertyCard from "./TallPropertyCard";

type PropertyCardProps = {
  location: Location;
  variant: "tall" | "square";
  featured: boolean;
};

export default function PropertyCard({
  location,
  variant,
  featured,
}: PropertyCardProps) {
  if (variant === "square") {
    return <SquarePropertyCard location={location} featured={featured} />;
  }

  return <TallPropertyCard location={location} featured={featured} />;
}
