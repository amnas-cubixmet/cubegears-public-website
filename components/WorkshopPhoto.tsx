import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Licensed editorial workshop photography from Pexels.
 * Keep real photography separate from the product UI: these images are
 * illustrative and must never imply customer endorsement or a live workshop.
 */
const photography = {
  garage: {
    src: "https://images.pexels.com/photos/15489247/pexels-photo-15489247.jpeg?auto=compress&cs=tinysrgb&w=1800",
    alt: "Cars inside a professional automotive maintenance workshop",
  },
  service: {
    src: "https://images.pexels.com/photos/8985456/pexels-photo-8985456.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Technician inspecting a car engine in an automotive service bay",
  },
  team: {
    src: "https://images.pexels.com/photos/15489247/pexels-photo-15489247.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Automotive technicians working together inside a garage",
  },
  engine: {
    src: "https://images.pexels.com/photos/8986040/pexels-photo-8986040.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Mechanic repairing vehicle engine components in a workshop",
  },
  inspection: {
    src: "https://images.pexels.com/photos/8985917/pexels-photo-8985917.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mechanic inspecting and servicing an open car engine",
  },
  workshop: {
    src: "https://images.pexels.com/photos/33814735/pexels-photo-33814735.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Car technician carrying out maintenance inside an auto workshop",
  },
  bike: {
    src: "https://images.pexels.com/photos/11890964/pexels-photo-11890964.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Motorcycle mechanic servicing a bike engine inside a workshop",
  },
  bikeTeam: {
    src: "https://images.pexels.com/photos/8550666/pexels-photo-8550666.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Two mechanics repairing a motorcycle inside a garage",
  },
  bikeService: {
    src: "https://images.pexels.com/photos/3822784/pexels-photo-3822784.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Technician repairing a motorbike at a motorcycle service centre",
  },
} as const;

export type WorkshopPhotoKey = keyof typeof photography;

type WorkshopPhotoProps = {
  photo: WorkshopPhotoKey;
  className?: string;
  priority?: boolean;
  shade?: boolean;
  caption?: string;
  children?: ReactNode;
  sizes?: string;
};

export function WorkshopPhoto({
  photo,
  className = "",
  priority = false,
  shade = true,
  caption,
  children,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: WorkshopPhotoProps) {
  const asset = photography[photo];
  return (
    <figure className={"photo-frame " + className}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        unoptimized
        priority={priority}
        sizes={sizes}
        className="photo-image"
      />
      {shade ? <div className="photo-shade" aria-hidden="true" /> : null}
      {children ? <div className="photo-content">{children}</div> : null}
      {caption ? <figcaption className="photo-caption">{caption}</figcaption> : null}
    </figure>
  );
}
