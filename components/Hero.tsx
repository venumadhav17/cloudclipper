"use client";

import { useState } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [data, setVideoData] = useState("");
  const [error, setErrorMessage] = useState("");
  const [videoInfo, setVideoInfo] = useState<any>(null);
  const router = useRouter();
  const placeholders = [
    "Enter Youtube Video Url",
    "Enter Instagram Video Url",
    "Enter Facebook Video Url",
    "Enter Twitter Video Url",
    "Enter Snapchat Video Url"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage("");
    setVideoData(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  async function fetchVideoData(url: string) {
    try {
      const response = await fetch("/api/backend", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: { "Content-Type": "application/json" }
      });
      const data = await response.json();
      console.log(data);
      setVideoInfo(data);
      return data;
    } catch (error) {
      console.error("Error fetching video data:", error);
      throw error;
    }
  }

  const handleSubmit = async () => {
    try {
      const parsed = new URL(data);
      const hostname = parsed.hostname.toLowerCase();
      if (hostname.includes("youtube.com") || hostname.includes("youtu.be")) {
        setErrorMessage("YouTube URLs are not supported by this downloader.");
        return;
      }
      setErrorMessage(""); // Clear any previous errors before fetch
      const videoData = await fetchVideoData(data);
      // Encode the video data as a URL parameter
      const encodedData = encodeURIComponent(JSON.stringify(videoData));
      console.log("Sending data:", videoData); // Debug log
      router.push(
        `/download?url=${encodeURIComponent(data)}&data=${encodedData}`
      );
    } catch {
      setErrorMessage("Please enter a valid URL.");
    }
  };

  return (
    <div className='flex justify-center mt-16'>
      <div className='flex justify-center items-center px-4 gap-4'>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        {error && <p className='text-red-500'>{error}</p>}

        <HoverBorderGradient
          containerClassName='rounded-full'
          as='button'
          onClick={handleSubmit}
          disabled={!data.trim()}
          className='text-white dark:text-white flex items-center space-x-2'
        >
          <DownloadLogo />
          <span>Download Now</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
};

export default Hero;

const DownloadLogo = () => {
  return (
    <svg
      width='48'
      height='46'
      viewBox='0 0 24 23'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 text-white'
    >
      <path d='M16 4C16.5523 4 17 4.44772 17 5V9.2L22.2133 5.55071C22.4395 5.39235 22.7513 5.44737 22.9096 5.6736C22.9684 5.75764 23 5.85774 23 5.96033V18.0397C23 18.3158 22.7761 18.5397 22.5 18.5397C22.3974 18.5397 22.2973 18.5081 22.2133 18.4493L17 14.8V19C17 19.5523 16.5523 20 16 20H2C1.44772 20 1 19.5523 1 19V5C1 4.44772 1.44772 4 2 4H16ZM15 6H3V18H15V6ZM10 8V12H13L9 16L5 12H8V8H10ZM21 8.84131L17 11.641V12.359L21 15.1587V8.84131Z'></path>
    </svg>
  );
};
