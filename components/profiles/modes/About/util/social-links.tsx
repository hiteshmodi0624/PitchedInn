"use client"
import React, { FC } from "react";
import { IconContext } from "react-icons";
import {
    FaLinkedin,
    FaTwitter,
    FaInstagram,
    FaFacebook,
    FaYoutube,
    FaPinterest,
    FaMedium,
    FaGithub,
    FaBehance,
    FaDribbble,
    FaSnapchat,
    FaTiktok,
    FaTelegram,
} from "react-icons/fa";
import AboutCard from "./about-card";

const iconMap = {
    linkedIn: FaLinkedin,
    twitter: FaTwitter,
    instagram: FaInstagram,
    facebook: FaFacebook,
    youtube: FaYoutube,
    pinterest: FaPinterest,
    medium: FaMedium,
    github: FaGithub,
    behance: FaBehance,
    dribbble: FaDribbble,
    snapchat: FaSnapchat,
    tiktok: FaTiktok,
    telegram: FaTelegram,
};
type SocialPlatform = keyof typeof iconMap;

const SocialLinks: FC<{ socialLinks: BusinessContactInfo["socialLinks"] }> = ({
    socialLinks,
}) => (
    <AboutCard>
        <div className="flex flex-wrap items-center gap-2 justify-around">
            <IconContext.Provider value={{ size: "1.5em" }}>
                {socialLinks &&
                    Object.entries(socialLinks).map(([platform, url]) => {
                        const Icon = iconMap[platform as SocialPlatform];

                        if (!url || !Icon) return null;
                        return (
                            <a
                                key={platform}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white"
                            >
                                <Icon />
                            </a>
                        );
                    })}
            </IconContext.Provider>
        </div>
    </AboutCard>
);

export default SocialLinks;
