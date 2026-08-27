import figure from "@/assets/comic me.png";
import portrait from "@/assets/profile.png";
import studio1 from "@/assets/videography.png";
import studio2 from "@/assets/editing.png";
import studio3 from "@/assets/camera.png";
import gopinath from "@/assets/gopinath.mp4";
import madan from "@/assets/madan.mp4";
import shipmentFinal from "@/assets/shipmentfinal.mp4";
import tinywave from "@/assets/tiny wave.mp4";
import gym from "@/assets/gym.mp4";
import ad from "@/assets/ad.mp4";
// Project media are served from the public folder. Place videos at:
// public/videos/work-1.mp4 ... public/videos/work-6.mp4
export const images = { figure, portrait };

export const profile = {
  name: "Kuyilraj",
  role: "Video Editor",
  year: "2026",
  bio: [
    "> Creating videos has always felt natural to me. It’s how I turn ideas, moments, and stories into something people can see and feel.",
    "",
    "> I’m drawn to visuals that catch your attention, tell a story, or make you stop for a second. That’s probably why I enjoy everything from cinematic edits and reels to music, transitions, and storytelling.",
    "",
    "> Right now, I’m exploring video editing while working with people and brands to bring their ideas to life through visuals.",
  ],
  email: "kuyilraj1@gmail.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const education = [
  {
    title: "Bsc cs with Data analytics",
    detail: "Bharathiyar University | 2023 - 2026",
  },
];

export const experience = [
  { period: "2024 - PRESENT", title: "Mobile Video Editor", company: "Freelance" },
  {
    period: "2025 - 2026",
    title: "System Video Editor",
    company: "Digital Marketing Team, Freelance",
  },
];

export const skills = [
  { code: "Pr", label: "Premiere Pro" },
  { code: "Cc", label: "CapCut" },
  { code: "Ae", label: "After Effects" },
];

export const studio = [
  { src: studio1, caption: "political shoot" },
  { src: studio2, caption: "video editing-bts" },
  { src: studio3, caption: "model shoot" },
];

export const projects = [
  { src: gopinath, title: "Gopinath Sir", category: "Spot Edit" },
  { src: madan, title: "Madangowri", category: "Editor Hiring Edit" },
  { src: shipmentFinal, title: "Airlink Logistics", category: "international shipment edit" },
  { src: tinywave, title: "Tiny Wave", category: "Kids product edit" },
  { src: gym, title: "C3 FITNESS", category: "Exercise edit" },
  { src: ad, title: "Rishi trends", category: "Promotional edit" },
];
