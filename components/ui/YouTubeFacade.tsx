"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Click-to-load YouTube embed: renders only the thumbnail until the user
 * presses play, so the video never blocks first paint. 16:9 responsive.
 */
export function YouTubeFacade({ url, title }: { url: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const id = getVideoId(url);

  if (!id) return null;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-card border border-line bg-surface">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- remote YouTube thumbnail, plain img avoids remotePatterns config */}
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 backdrop-blur transition-transform group-hover:scale-105">
            <Play className="ml-1 h-6 w-6 fill-accent text-accent" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}

function getVideoId(url: string) {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  return m ? m[1] : null;
}
