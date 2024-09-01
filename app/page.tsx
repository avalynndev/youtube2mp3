"use client"
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [iframeUrl, setIframeUrl] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (youtubeUrl.trim() === "") return; 

    const veviozIframeUrl = `https://api.vevioz.com/apis/widgetv2?url=${youtubeUrl}`;
    setIframeUrl(veviozIframeUrl);
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="mt-8 text-5xl font-semibold md:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <ModeToggle />
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter YouTube URL"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              className="w-80 h-10"
            />
            <Button type="submit" className="ml-2">
              Convert
            </Button>
          </form>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <span>GitHub</span>
            <MoveRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        {iframeUrl && youtubeUrl && (
          <div className="mt-8">
            <iframe
              allowTransparency={true}
              scrolling="no"
              src={iframeUrl}
              width="1100"
              height="1000"
              style={{ width: "1100px", height: "800px", backgroundColor: "transparent" }}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </main>
  );
}
