import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Licensed editorial workshop photography from Pexels.
 * Keep real photography separate from the product UI: these images are
 * illustrative and must never imply customer endorsement or a live workshop.
 */
const photography = {
  garage: {
    src: "https://images.pexels.com/photos/33814734/pexels-photo-33814734.jpeg?auto=compress&cs=tinysrgb&w=1800",
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
    src: "https://images.pexels.com/photos/8985461/pexels-photo-8985461.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Mechanic repairing vehicle engine components in a workshop",
  },
  inspection: {
    src: "https://images.pexels.com/photos/4315570/pexels-photo-4315570.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Mechanic inspecting and servicing an open car engine",
  },
  workshop: {
    src: "https://images.pexels.com/photos/33814735/pexels-photo-33814735.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Car technician carrying out maintenance inside an auto workshop",
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
